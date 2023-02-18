const html = document.querySelector('html');
var highlightsToggle = document.getElementById("highlightsToggle");
var skillsToggle = document.getElementById("skillsToggle");
var modal = document.getElementById("modal");

// Skills Icon
var html5 = document.getElementById("html5");
var css3 = document.getElementById("css3");
var php = document.getElementById("php");
var java = document.getElementById("java");
var javascript = document.getElementById("javascript");
var python = document.getElementById("python");

var highlights = $('#highlights');
var skills = $('#skills');

// Dark Mode Things
var modeBtn = document.getElementById("modeBtn");

const userTheme = window.matchMedia;
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

if(userTheme && systemTheme) {
    html.classList.add('dark')
}

modeBtn.addEventListener("click", () => {
    if(html.classList.contains("dark")) {
        html.classList.remove("dark");
    }
    else {
        html.classList.add("dark");
    }
});

highlights.click(function () {
    $(this).toggleClass('bg-[#cbcbcb]');
    $(this).toggleClass('dark:bg-[#2b2b2b]')
    highlightsToggle.style.display = "block";
    skillsToggle.style.display = "none";
    skills.removeClass('dark:bg-[#2b2b2b]');
    skills.removeClass('bg-[#cbcbcb]');
    highlights.disabled = true;
    skills.disabled = false;
});

skills.click(function () {
    $(this).toggleClass('bg-[#cbcbcb]');
    $(this).toggleClass('dark:bg-[#2b2b2b]')
    highlightsToggle.style.display = "none";
    skillsToggle.style.display = "block";
    highlights.removeClass('dark:bg-[#2b2b2b]');
    highlights.removeClass('bg-[#cbcbcb]');
    skills.disabled = true;
    highlights.disabled = false;
});

function toggleModal() {
    console.log("Modalnya kebuka ni gan");
    modal.style.display = "block";
}

function closeModal() {
    console.log("Modalnya ketutup bang beliau");
    modal.style.display = "none";
}