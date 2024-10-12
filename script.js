// Accordion Event
const firstContents = document.querySelectorAll(".accordion .content");
firstContents[0].style.display = "block";

const titles = document.querySelectorAll(".accordion .title");
titles.forEach((title) => {
  title.addEventListener("click", () => {
    document.querySelectorAll(".content").forEach((item) => {
      item.style.display = "none";
    });
    titles.forEach((otherTitle) => {
      if (otherTitle !== title) otherTitle.classList.remove("active");
    });
    let content = title.nextElementSibling;
    if (title.classList.contains("active")) {
      title.classList.remove("active");
      content.style.display = "none";
    } else {
      title.classList.add("active");
      content.style.display = "block";
    }
  });
});

// Gnb Event
const naviItems = document.querySelectorAll(".gnb > ul > li");
const menuBg = document.querySelector(".menu_bg");

naviItems.forEach((naviItem) => {
  naviItem.addEventListener("mouseover", () => {
    const submenus = document.querySelectorAll(".submenu");
    submenus.forEach((submenu) => {
      submenu.style.opacity = "1";
      submenu.style.maxHeight = "260px";
      menuBg.style.opacity = "1";
      menuBg.style.maxHeight = "260px";
    });
  });

  naviItem.addEventListener("mouseout", () => {
    const submenus = document.querySelectorAll(".submenu");
    submenus.forEach((submenu) => {
      submenu.style.opacity = "0";
      submenu.style.maxHeight = "0px";
      menuBg.style.opacity = "0";
      menuBg.style.maxHeight = "0px";
    });
  });
});

// madal-search event
const searchBtn = document.querySelector(".fa-magnifying-glass");
searchBtn.addEventListener("click", () => {
  document.querySelector(".modal-search").classList.add("active");
});
document.querySelectorAll(".close, section").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".modal-search").classList.remove("active");
  });
});

const searchBar = document.querySelector(".search input[type='search']");
searchBar.addEventListener("focus", function () {
  this.parentElement.nextElementSibling.style.opacity = "1";
});
searchBar.addEventListener("blur", function () {
  this.parentElement.nextElementSibling.style.opacity = "0";
});

const searchForm = document.querySelector("#searchForm");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const keyword = encodeURIComponent(e.target[0].value);
  window.location.href = `searchResult.html?q=${keyword}`;
});

// slide event
import { API_KEY } from "./env.js";

const tmdbCommand = "https://api.themoviedb.org/3";

const fetchMovies = async () => {
  const URL = `${tmdbCommand}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(URL);
  const { results } = await response.json();
  return results;
};

const getMovies = async () => {
  const [movies] = await Promise.all([fetchMovies()]);

  console.log(movies);

  const mainSlider = document.querySelector(".mainSlider");
  movies.forEach((movie) => {
    const figure = document.createElement("figure");
    figure.innerHTML = `<img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" alt="${movie.title}" />`;
    mainSlider.appendChild(figure);
  });
};

getMovies();
