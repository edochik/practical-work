const burgerMenu = document.querySelector('.burger-menu');
const navActive = document.querySelector('.nav');
const bodyEl = document.body;

burgerMenu.addEventListener('click', function () {
	document.querySelector('.burger-menu__icon').classList.toggle('active');
	navActive.classList.toggle('nav--active');
	bodyEl.classList.toggle('noscroll');
});

console.log(navActive);
console.log(bodyEl);

document.querySelector(".form__auth-btn").onclick = function () {
  const userPassFirst = document.querySelector("#password1").value;
  const userPassSecond = document.querySelector("#password2").value;

  if (userPassFirst == "") {
    document.getElementById("password1").style = "border: 1px solid red";
    document.getElementById("password2").style = "border: 1px solid red";
  } else if (userPassFirst != userPassSecond) {
    document.getElementById("password1").style = "border: 1px solid red";
    document.getElementById("password2").style = "border: 1px solid red";
    return false;
  } else if (userPassFirst == userPassSecond) {
    document.getElementById("password1").style = "border: 1px solid green";
    document.getElementById("password2").style = "border: 1px solid green";
  }
  return true;
};

