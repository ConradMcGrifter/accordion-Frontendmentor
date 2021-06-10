const ACC = document.getElementsByClassName("accordion");
const PANEL = document.getElementsByClassName("panel");

// I found the following code on stackoverflow but I added a little bit to it so it also rotates and resets the    // red arrows on the right side.
// This code makes it so the accordion can only open one section at a time. it will close everything except for    // the section that is clicked on
for (let i = 0; i < ACC.length; i++) {
    ACC[i].onclick = function () {
        var setClasses = !this.classList.contains("display");

        // these functions target the accordion button and content and removes the .display class--resetting       // everything back to default
        setClass(ACC, "display", "remove");
        setClass(PANEL, "display", "remove");
        setClass(ACC, "rotate", "remove");

        // if the targeted element doesnt have the .display class on it, it gets toggled on. it also rotates the   //arrow of the selected FAQ
        if (setClasses) {
            this.classList.toggle("display");
            this.nextElementSibling.classList.toggle("display");
            this.classList.toggle("rotate");
        }
    };
}

//this function loops through an array of elements and can add or remove a class
function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}
