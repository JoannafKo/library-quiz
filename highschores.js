const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");  

  // highScores.forEach(scoreObj => {
  //   const listItem = document.createElement('li');
  //   listItem.innerText = `${scoreObj.name} - ${scoreObj.score}`;
  //   listItem.classList.add('high-score');
  //   highScoresList.appendChild(listItem);
  //  });