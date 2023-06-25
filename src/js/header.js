const url = window.location.href;

const header_links = document.querySelectorAll(".nav-link");

const arrayLinks = Array.from(header_links);

const current_link = arrayLinks.find((link) => {
  const href = link.getAttribute("href").replace(".html", "").replace("./", "");

  console.log(href);

  return url.includes(href);
});
if (current_link) current_link.classList.add("active");

