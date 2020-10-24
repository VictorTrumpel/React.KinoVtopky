export function changeDisplayValueOfInfBlock(displayValue, idOfBlock) {
    if (displayValue === 'none') {
        makeInfBlockVisible(idOfBlock);
        return 'visible';
    }
    if (displayValue === 'visible') {
        deleteInfBlock(idOfBlock);
        return 'none';
    }
}

function makeInfBlockVisible(idOfBlock) {
    const infBlock = document.getElementById(idOfBlock);
    let op = 0;
    setTimeout(function func() {
        if (op > 1)
            return;
        infBlock.style.opacity = op;
        op += 0.1;
        setTimeout (func, 60);
    }, 60);
    infBlock.style.overflow = "auto"
}

function deleteInfBlock(idOfBlock) {
    let infBlock = document.getElementById(idOfBlock);
    let op = 1;
    setTimeout(function func() {
        if (op < 0)
            return;
        infBlock.style.opacity = op;
        op -= 0.1;
        setTimeout (func, 60);
    }, 60);
    infBlock.style.overflow = "hidden";
}