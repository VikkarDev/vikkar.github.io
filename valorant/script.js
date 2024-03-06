document.addEventListener('DOMContentLoaded', function () {
  // Apply dark theme if it was previously selected
  if (localStorage.getItem('darkTheme') === 'true') {
    const container = document.getElementById('container');
    container.classList.add('dark-theme');
  }

  // Load saved matches from local storage
  const savedMatches = JSON.parse(localStorage.getItem('matches')) || [];
  const matchList = document.getElementById('matchList');

  savedMatches.forEach(matchDetails => {
    const matchItem = document.createElement('div');
    matchItem.textContent = matchDetails;
    matchList.appendChild(matchItem);
  });

  // Calculate and display statistics
  updateStatistics();
});

function addMatch() {
  const hero = document.getElementById('hero').value;
  const map = document.getElementById('map').value;
  const kills = parseInt(document.getElementById('kills').value) || 0;
  const deaths = parseInt(document.getElementById('deaths').value) || 0;
  const result = document.getElementById('result').value;

  const matchDetails = `${hero} - ${map} - Kills: ${kills} - Deaths: ${deaths} - Result: ${result}`;

  const matchList = document.getElementById('matchList');
  const matchItem = document.createElement('div');
  matchItem.textContent = matchDetails;
  matchList.appendChild(matchItem);

  // Save match details to local storage
  const matches = JSON.parse(localStorage.getItem('matches')) || [];
  matches.push(matchDetails);
  localStorage.setItem('matches', JSON.stringify(matches));

  // Calculate and update statistics
  updateStatistics();

  // Clear form fields after adding a match
  document.getElementById('hero').value = '';
  document.getElementById('map').value = '';
  document.getElementById('kills').value = '';
  document.getElementById('deaths').value = '';
  document.getElementById('result').value = 'win';
}

function updateStatistics() {
  const savedMatches = JSON.parse(localStorage.getItem('matches')) || [];
  const totalMatches = savedMatches.length;
  
  let totalKills = 0;
  let totalDeaths = 0;

  savedMatches.forEach(matchDetails => {
    const matchInfo = matchDetails.split('-');
    const matchKills = parseInt(matchInfo[2].split(':')[1]) || 0;
    const matchDeaths = parseInt(matchInfo[3].split(':')[1]) || 0;

    totalKills += matchKills;
    totalDeaths += matchDeaths;
  });

  const kdRatio = calculateKD(totalKills, totalDeaths);

  // Display statistics
  document.getElementById('totalMatches').textContent = `Total Matches: ${totalMatches}`;
  document.getElementById('totalKills').textContent = `Total Kills: ${totalKills}`;
  document.getElementById('totalDeaths').textContent = `Total Deaths: ${totalDeaths}`;
  document.getElementById('kdRatio').textContent = `KD Ratio: ${kdRatio.toFixed(2)}`;
}

function calculateKD(kills, deaths) {
  if (deaths === 0) {
    return kills;
  } else {
    return kills / deaths;
  }
}

function toggleDarkTheme() {
  const container = document.getElementById('container');
  container.classList.toggle('dark-theme');

  // Save theme preference to local storage
  const isDarkTheme = container.classList.contains('dark-theme');
  localStorage.setItem('darkTheme', isDarkTheme);
}