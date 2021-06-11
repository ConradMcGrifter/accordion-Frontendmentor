const ACC = document.getElementsByClassName("accordion");
const PANEL = document.getElementsByClassName("panel");

// I found the following code on stackoverflow but I added a little bit to it so it also rotates and resets the    // red arrows on the right side.
// This code makes it so the accordion can only open one section at a time. it will close everything except for    // the section that is clicked on
for (let i = 0; i < ACC.length; i++) {
    ACC[i].onclick = function () {
        var setClasses = !this.classList.contains("display");

        // these functions target the accordion button and content and removes the .display class--resetting       // everything back to default
        setClass(ACC, "display");
        // setClass(PANEL, "display");
        setClass(ACC, "rotate");

        for (let i = 0; i < ACC.length; i++) {
            PANEL[i].style.maxHeight = null;
        }

        // if the targeted element doesnt have the .display class on it, it gets toggled on. it also rotates the   //arrow of the selected FAQ
        if (setClasses) {
            this.classList.toggle("display");
            // this.nextElementSibling.classList.toggle("display");
            this.classList.toggle("rotate");

            this.nextElementSibling.style.maxHeight =
                this.nextElementSibling.scrollHeight + "px";
        }

        // if (this.nextElementSibling.style.maxHeight) {
        //     this.nextElementSibling.style.maxHeight = null;
        // } else {
        //     this.nextElementSibling.style.maxHeight =
        //         this.nextElementSibling.scrollHeight + "px";
        // }
    };
}

//this function loops through an array of elements and removes a class
// originally it had a 3rd argument that took in a method name --like this--> els[i].classList.[fnName](className);// but I only need to use remove() method so i hard coded it
function setClass(els, className) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList.remove(className);
    }
}
