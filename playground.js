
    const hambContainer = document.querySelector("#hamburger-container");
    const hambMenu = document.querySelector("#hamburger-menu");


function toggleHamb() {
    console.log("click");
    console.log(`hambMenu`, hambMenu);
    hambContainer.classList.toggle("off");
    // hambMenu.classList.toggle("off");
    hambContainer.classList.toggle("on");
    // hambMenu.classList.toggle("on");
}

// hambContainer.addEventListener("onclick", () => toggleHamb());

// const btnHambClose = hambMenu.querySelector("button.close");
// console.log(`btnHambClose`, btnHambClose);
// btnHambClose.addEventListener(onclick, (e) => {
    
//     console.log("click!");
// });
