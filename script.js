const body = document.getElementsByTagName("body")[0];
const nav = document.createElement("nav");
const ul = document.createElement("ul");

const home = document.createElement("li");
const homeLink = document.createElement("a");
homeLink.href = "index.html";
home.appendChild(homeLink);

const resume = document.createElement("li");
const resumeLink = document.createElement("a");
resumeLink.href = "resume.html";
resume.appendChild(resumeLink);

const portfolio = document.createElement("li");
const portfolioLink = document.createElement("a");
portfolioLink.href = "portfolio.html";
portfolio.appendChild(portfolioLink);

homeLink.textContent = "Home";
resumeLink.textContent = "Resume";
portfolioLink.textContent = "Portfolio";
ul.appendChild(home);
ul.appendChild(resume);
ul.appendChild(portfolio);
nav.appendChild(ul);
body.prepend(nav);

const footer = document.createElement("footer");
const footerUl = document.createElement("ul");
const linkedIn = document.createElement("li");
const linkedInLink = document.createElement("a");
linkedInLink.href = "https://www.linkedin.com/in/mushfiq-alam-67477b1ab/";
linkedInLink.textContent = "LinkedIn";
const handshake = document.createElement("li");
const handshakeLink = document.createElement("a");
handshakeLink.href = "https://rose-hulman.joinhandshake.com/profiles/bzqxqf";
handshakeLink.textContent = "Handshake";

handshake.appendChild(handshakeLink);
linkedIn.appendChild(linkedInLink);

footerUl.appendChild(linkedIn);
footerUl.appendChild(handshake);
footer.appendChild(footerUl);

body.appendChild(footer);