const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animatedBGs = document.querySelectorAll(".animated-bg");
const animatedBGTexts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 6000);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="">';
  title.innerHTML = "Lorem ipsum dolor sit amet";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, provident!";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/4.jpg" alt="author">';
  name.innerHTML = "John Doe";
    date.innerText = "Jan 08, 2022";
    
    animatedBGs.forEach(bg => bg.classList.remove('animated-bg'));
    animatedBGTexts.forEach(bg => bg.classList.remove('animated-bg-text'));
}
