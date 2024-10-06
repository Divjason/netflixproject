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
