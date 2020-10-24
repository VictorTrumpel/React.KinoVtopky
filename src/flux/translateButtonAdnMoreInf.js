export function translateButtonAndMoreInf(buttonMoreInf, idOfMoreInfBlock, displayValueOfMoreInfBlock) {
    const widthOfWindow = document.documentElement.clientWidth;
    const widthOfMoreInfBlock = document.getElementById(idOfMoreInfBlock).clientWidth;
    const widthOfButton = buttonMoreInf.clientWidth;
    const scrollWidth = 4;
    const wifthOfMainInfBlock = document.querySelector('.film-item__main-in-of-film').clientWidth;

    if (displayValueOfMoreInfBlock === "visible") {
        translateXButton(buttonMoreInf, 0);
        translateXMoreInfBlock(idOfMoreInfBlock, 0);
    }
    if (displayValueOfMoreInfBlock === "none") {
        if (widthOfWindow <= 1300) {
            translateXButton(buttonMoreInf,wifthOfMainInfBlock*-1);
            translateXMoreInfBlock(idOfMoreInfBlock,(wifthOfMainInfBlock)*-1);
        } else {
            translateXButton(buttonMoreInf, widthOfMoreInfBlock+scrollWidth);
            translateXMoreInfBlock(idOfMoreInfBlock, widthOfButton*-1);
        }

    }
}

function translateXButton(button,pixels) {
    button.style.transform = `translate(${pixels}px,0)`;
}

function translateXMoreInfBlock(idOfMoreInfBlock, pixels) {
    const moreInfBlock = document.getElementById(idOfMoreInfBlock);
    moreInfBlock.style.transform = `translate(${pixels}px,0)`;


}