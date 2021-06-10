var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName("panel");

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         for (let j = 0; j < acc.length; j++) {
//             let panel = acc[j].nextElementSibling;
//             panel.classList.remove("display");

//             acc[j].classList.remove("active"); // this removes the darkened highlight

//             acc[j].style.fontWeight = "400";
//         }

//         this.classList.toggle("active");
//         this.style.fontWeight = "700";
//         let panel = this.nextElementSibling;

//         if (!panel.classList.contains("display")) {
//             panel.classList.add("display");
//         } else if (panel.classList.contains("display")) {
//             panel.classList.remove("display");
//         }
//         // if (panel.style.display === "block") {
//         //     panel.style.display = "none";
//         // } else {
//         //     panel.style.display = "block";
//         // }

//         // if (!this.style.fontWeight == "700") {
//         //     this.style.fontWeight = "700";
//         //     console.log("okok");
//         // } else {
//         //     this.style.fontWeight = "400";
//         // }
//     });
// }

for (let i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        var setClasses = !this.classList.contains("display");
        setClass(acc, "display", "remove");
        setClass(panel, "display", "remove");
        setClass(acc, "rotate", "remove");

        if (setClasses) {
            this.classList.toggle("display");
            this.nextElementSibling.classList.toggle("display");
            this.classList.toggle("rotate");
        }
        // if (!this.classList.contains("rotate")) {
        //     this.classList.add("rotate");
        // } else if (this.classList.contains("rotate")) {
        //     this.classList.remove("rotate");
        // }
    };
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}
