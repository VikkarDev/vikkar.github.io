const STORAGE_KEY = "recipe-book";

const recipeForm = document.getElementById("recipe-form");
const recipeList = document.getElementById("recipe-list");
const printBtn = document.getElementById("print-btn");
const clearBtn = document.getElementById("clear-btn");
const shareBtn = document.getElementById("share-btn");
const shareStatusEl = document.getElementById("share-status");

const sharedRecipes = loadSharedRecipesFromUrl();
let recipes = sharedRecipes ?? loadRecipes();

renderRecipes();

if (sharedRecipes) {
  persistRecipes();
}

recipeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(recipeForm);
  const title = formData.get("title").trim();
  const category = formData.get("category").trim();
  const instructions = formData.get("instructions").trim();
  const ingredients = formData
    .get("ingredients")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (!title) {
    return;
  }

  const newRecipe = {
    id: crypto.randomUUID(),
    title,
    category,
    ingredients,
    instructions,
    createdAt: new Date().toISOString(),
  };

  recipes.unshift(newRecipe);
  persistRecipes();
  renderRecipes();
  recipeForm.reset();
  recipeForm.elements.title.focus();
});

clearBtn.addEventListener("click", () => {
  if (!recipes.length) {
    return;
  }

  if (confirm("Remove all saved recipes?")) {
    recipes = [];
    persistRecipes();
    renderRecipes();
  }
});

printBtn.addEventListener("click", () => {
  window.print();
});

shareBtn?.addEventListener("click", async () => {
  if (!recipes.length) {
    showShareStatus("Add a recipe before sharing");
    return;
  }

  const shareUrl = buildShareUrl();

  try {
    if (!navigator.clipboard) {
      throw new Error("Clipboard API unavailable");
    }

    await navigator.clipboard.writeText(shareUrl);
    showShareStatus("Link copied");
  } catch (err) {
    const fallback = window.prompt("Copy this share link", shareUrl);
    if (fallback !== null) {
      showShareStatus("Link ready");
    }
  }
});

let shareStatusTimer;

function showShareStatus(message) {
  if (!shareStatusEl) {
    return;
  }

  shareStatusEl.textContent = message;
  clearTimeout(shareStatusTimer);
  shareStatusTimer = setTimeout(() => {
    shareStatusEl.textContent = "";
  }, 3200);
}

function renderRecipes() {
  recipeList.innerHTML = "";

  if (!recipes.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No recipes yet - jot one down using the form above.";
    recipeList.appendChild(empty);
    return;
  }

  recipes.forEach((recipe) => {
    const card = document.createElement("article");
    card.className = "recipe-card";

    const meta = document.createElement("div");
    meta.className = "recipe-meta";
    meta.textContent = recipe.category
      ? `${recipe.category} - ${formatDate(recipe.createdAt)}`
      : formatDate(recipe.createdAt);

    const title = document.createElement("h3");
    title.textContent = recipe.title;

    let ingredientList;
    if (recipe.ingredients.length) {
      ingredientList = document.createElement("ul");
      recipe.ingredients.forEach((ingredient) => {
        const item = document.createElement("li");
        item.textContent = ingredient;
        ingredientList.appendChild(item);
      });
    } else {
      ingredientList = document.createElement("p");
      ingredientList.textContent = "No ingredients listed.";
      ingredientList.style.fontStyle = "italic";
      ingredientList.style.marginBottom = "0.5rem";
    }

    const instructions = document.createElement("p");
    instructions.textContent = recipe.instructions || "No directions provided.";

    const addedNote = document.createElement("small");
    addedNote.textContent = "Touch up or print when ready.";

    card.append(title, meta, ingredientList, instructions, addedNote);
    recipeList.appendChild(card);
  });
}

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function persistRecipes() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
}

function loadRecipes() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (err) {
    console.error("Recipe storage is unavailable", err);
    return [];
  }
}

function loadSharedRecipesFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const encoded = params.get("share");
  if (!encoded) {
    return null;
  }

  try {
    const base64 = decodeURIComponent(encoded);
    const decoded = decodeURIComponent(atob(base64));
    const parsed = JSON.parse(decoded);

    if (!Array.isArray(parsed)) {
      return null;
    }

    if (window.history?.replaceState) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    return parsed;
  } catch (err) {
    console.error("Unable to load shared recipes", err);
    return null;
  }
}

function buildShareUrl() {
  const baseUrl = window.location.href.split("?")[0];
  const payload = encodeURIComponent(JSON.stringify(recipes));
  const encoded = encodeURIComponent(btoa(payload));
  return `${baseUrl}?share=${encoded}`;
}
