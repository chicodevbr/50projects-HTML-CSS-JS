const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const names = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = `<img
    src="https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb86e2e09fceac9b363af536b93a1275"
    alt="laptop"
  />`;
  title.innerHTML = `Lorem ipsum dolor sit amet`;
  excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis`;
  profile_img.innerHTML = `<img
  src="https://randomuser.me/api/portraits/women/21.jpg"
  alt="profile"
/>`;
  names.innerHTML = `Jane Doe`;
  date.innerHTML = `Oct 08, 2020`;

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
