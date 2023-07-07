const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const MostRecentScore = localStorage.getItem("MostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;
finalScore.innerText = MostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: MostRecentScore,
    name: username.value,
  };

  highScores.push(score);
  highScores.sort((a, b) => {
    return b.score - a.score;
  });

  highScores.splice(MAX_HIGH_SCORES, highScores.length - MAX_HIGH_SCORES);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("../index.html");
};
