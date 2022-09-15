const hambContainer = document.querySelector("#hamburger-container");
const hambMenu = document.querySelector("#hamburger-menu");

const hambBtnAll = document.querySelectorAll(".hamb-btn");
hambBtnAll.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log("click");
        hambContainer.classList.toggle("off");
        hambContainer.classList.toggle("on");
    });
});

