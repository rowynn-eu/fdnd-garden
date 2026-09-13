// I used Claude to generate the following code, because I don't know how Javascript works yet.

const root = document.documentElement;
const btn = document.getElementById("theme-toggle");

const saved = localStorage.getItem("theme");
if (saved) root.setAttribute("data-theme", saved);

btn.addEventListener("click", () => {
  const current =
    root.getAttribute("data-theme") ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});
