const jokeEle = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", fetchJoke);
fetchJoke();

async function fetchJoke() {
  const header = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", header);
  const data = await res.json();
  jokeEle.innerHTML = data.joke;
}

// function fetchJoke() {
//   const header = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", header)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEle.innerHTML = data.joke;
//     });
// }
