const darkred = "#6f1f27";
document.querySelector(".topnav").style.backgroundColor = darkred;
document.querySelectorAll(".smsc-title--1").forEach(element => element.style.color = darkred);

const date = new Date;
const datetext = document.createElement("a");
datetext.style.color = "#fff";
datetext.style.marginLeft = "10pt";
datetext.style.marginRight = "auto";
datetext.href = "https://jsfiddle.net/sudoShiba/e7obzh4c/3/embedded/result";
datetext.target = "_blank";
datetext.innerHTML = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

document.querySelector("nav.topnav").insertBefore(datetext, document.querySelector("a.topnav__btn--push-right"));

setInterval(time, 500);