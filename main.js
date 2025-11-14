function showNav() {
  const sideBar = document.querySelector(".nav-bar-hide");
  sideBar.style.display = 'flex';
  console.log("show hidden nav");
  const shownBar = document.querySelector(".nav-bar");
  shownBar.style.display = 'none';
  console.log("hide the shown Nav");
}


function hideNav() {
  const sideBar = document.querySelector(".nav-bar-hide");
  sideBar.style.display = 'none';
  console.log("hide the shown Nav");
  const shownBar = document.querySelector(".nav-bar");
  shownBar.style.display = 'flex';
  console.log("Nav is shown");
}