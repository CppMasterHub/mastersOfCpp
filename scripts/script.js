

const motivationalLines = [
    "Coding is the journey to turn your imagination into reality.",
    "Every line of code is a step towards innovation.",
    "Programmers build the future, one line at a time.",
    "Coding: Where creativity meets logic.",
    "Debugging is like detective work, solving mysteries.",
    "Coding is the key to unlock your potential.",
    "The best error message is the one that never shows up.",
    "Code like you're writing a story, create a masterpiece.",
    "In the world of coding, possibilities are endless.",
    "Coding is the language of possibility."
];

function getRandomMotivationalLine() {
    const randomIndex = Math.floor(Math.random() * motivationalLines.length);
    return motivationalLines[randomIndex];
}

function updateMotivationalLine() {
    const motivationalLineElement = document.querySelector('.motivational-line');
    const randomAnimation = Math.floor(Math.random() * 5) + 1;
    motivationalLineElement.style.animationName = `anim-${randomAnimation}`;
    motivationalLineElement.textContent = getRandomMotivationalLine();
}

// Update the motivational line every 5 seconds
setInterval(updateMotivationalLine, 5000);
function initializeCopyAndSaveButtons() {
    const copyButtons = document.querySelectorAll('.copy-button');
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const codeBlock = button.parentNode.querySelector('.code-block code');
            const textArea = document.createElement('textarea');
            textArea.value = codeBlock.textContent;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);

            button.textContent = 'Copied!';
            button.disabled = true;

            setTimeout(() => {
                button.textContent = 'Copy';
                button.disabled = false;
            }, 2000);
        });
    });
}

function initializeQuickSaveButton() {
    const quickSaveButtons = document.querySelectorAll(".quick-save-button");

    quickSaveButtons.forEach(quickSaveButton => {
        quickSaveButton.addEventListener("click", function () {
            const codeBlock = quickSaveButton.closest(".code-block-container");
            const codeContent = codeBlock.querySelector("code").textContent;
            const suggestedFileName = "my-program.cpp"; // Default filename
            const userFileName = prompt("Enter a filename for your C++ program:", suggestedFileName);

            if (userFileName !== null) {
                const blob = new Blob([codeContent], { type: "text/plain;charset=utf-8" });
                const filename = userFileName.endsWith(".cpp") ? userFileName : userFileName + ".cpp";

                // Create an anchor element to trigger the download
                const anchor = document.createElement("a");
                anchor.href = URL.createObjectURL(blob);
                anchor.download = filename;
                anchor.style.display = "none";
                document.body.appendChild(anchor);

                // Trigger the download
                anchor.click();

                // Clean up
                document.body.removeChild(anchor);

                quickSaveButton.textContent = "Saved!";
            }
        });
    });
}



function openCompiler(url) {
    const confirmation = confirm("This service is using an external site compiler. Do you want to continue?");
    if (confirmation) {
        window.open(url, "_blank");
    }
}

function initializeCompilerButtons() {
    const compileButtons = document.querySelectorAll(".compile-button");

    compileButtons.forEach(button => {
        const compilerURL = button.getAttribute("data-compiler-url");

        button.addEventListener("click", function () {
            openCompiler(compilerURL);
        });
    });
}



function initializeButtons() {
    initializeCopyAndSaveButtons();
    initializeQuickSaveButton();
    initializeCompilerButtons();
}

document.addEventListener('DOMContentLoaded', function () {
    updateMotivationalLine();
    initializeButtons();
});

function loadContent(page) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("mainContent").innerHTML = this.responseText;
            updateMotivationalLine();
            initializeButtons();
        }
    };
    xhttp.open("GET", "pages/" + page + ".html", true);
    xhttp.send();
}


function displayPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}function checkScreenWidth() {
    var isMobileView = !window.matchMedia("(min-width: 768px)").matches;
    var isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobileDevice && isMobileView) {
        openErrorPage();
    }
}

function openErrorPage() {
    alert("Please open this page in mobile view.");
    window.location.href = "error.html";
}
