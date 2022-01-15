const API_URL = "https://api.github.com/users/";
const form = document.getElementById("form");
const main = document.getElementById("main");
const search = document.getElementById("search");

// async / await format
async function getUser(username) {
    try {
        const { data } = await axios(API_URL + username);
        createUserCard(data);
        getRepos(username);
    } catch (err) {
        if (err.response.status == 404) {
            createErrorCard("No profile with this username")
        }
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(API_URL + username + "/repos");
        addReposToCard(data);
    } catch (err) {
        if (err.response.status == 404) {
            createErrorCard("Problem fetching repos")
        }
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = search.value;
    getUser(user ? user : "gouthamshiv");
    search.value = "";
});

function createUserCard(user) {
    const cardHTML = `
        <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio ? user.bio : '-'}</p>
                
                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>

                <div id="repos"></div>
            </div>
        </div>
    `;

    main.innerHTML = cardHTML;
}

function createErrorCard(errorMessage) {
  const cardHTML = `
        <div class="card">
            <h1>${errorMessage}</h1>
        </div>
    `;
  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos');
    repos
        .slice(0, 10)
        .forEach(repo => {
        const repoEl = document.createElement('a');
        repoEl.classList.add('repo');
        repoEl.href = repo.html_url;
        repoEl.target = "_blank";
        repoEl.innerText = repo.name;
        reposEl.appendChild(repoEl);
    });
}

// .then format
// function getUser(username) {
//     axios(API_URL + username)
//         .then(res => console.log(res.data))
//         .catch(err => console.log(err));
// }