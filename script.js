var acc = document.getElementsByClassName("accordion");
var i;

//this function closes any opened FAQ so only One FAQ is open at a time
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        for (let j = 0; j < acc.length; j++) {
            let panel = acc[j].nextElementSibling;
            panel.style.display = "none";

            acc[j].classList.remove("active"); // this removes the darkened highlight
        }
    });
}

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
