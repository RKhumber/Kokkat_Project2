function nextPage() {
    let currentPage = 0;
    let sectionButtons = document.querySelector(".nav > li")
    let page = document.querySelector("newPage");


    for (let i = 0; sectionButtons.length; i++) {
        sectionButtons[currentPage].classlist.remove("active");
        sectionButtons[currentPage].classlist.add("active");
        if (i === sectionButtons.length - 1) {
            if (page.className.split(" ").indexOf("disable") < 0) {
                page.classList.add("disable");
            }
        } else {
            if (page.className.split(" ").indexOf("disable") >= 0) {
                page.classList.remove("disable");
            }
        }
    };
    page.addEventListener("click", function () {
        if (currentPage < sectionButtons.length - 1) {
            sectionButtons[currentPage + 1].click();
        }
    });
}