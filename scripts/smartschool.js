// adding css
const link = document.createElement("link")
link.setAttribute("rel", "stylesheet");
link.setAttribute("href","moz-extension://b95f4e1b-a336-458a-b666-a67ce0e232f8/css/ss.css");
document.head.appendChild(link);

// date
const date = new Date;
const datetext = document.createElement("a");
datetext.style.color = "#fff";
datetext.style.marginLeft = "10pt";
datetext.style.marginRight = "auto";
datetext.href = "https://jsfiddle.net/sudoShiba/e7obzh4c/3/embedded/result";
datetext.target = "_blank";
datetext.innerHTML = date.getDate().toString().padStart(2,"0") + "-" + (date.getMonth() +1 ).toString().padStart(2,"0") + "-" + date.getFullYear();


document.querySelector("nav.topnav").insertBefore(datetext, document.querySelector("a.topnav__btn--push-right"));

// no more scoodle
document.getElementById("homepage__block--scoodle").innerHTML = `<h2 class="smsc-title--1">My links</h2>
<ul>
    <li><a href="http://bonpatron.com/fr" target="_blank">BonPatron</a></li>
    <li><a href="http://desmos.com" target="_blank">Desmos</a></li>
    <li><a href="http://asafraction.com" target="_blank">As a fraction</a></li>
</ul>`;
