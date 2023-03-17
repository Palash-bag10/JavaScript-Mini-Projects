// Aspect Ratio Formula:-

// Aspect Ratio = Width / Height
// Width = Height * Aspect Ratio
// Height = Width / Aspect Ratio


const ratioW = document.querySelector("#ratioWidth");
const ratioH = document.querySelector("#ratioHeight");
const w = document.querySelector("#width");
const h = document.querySelector("#height");

let calculateWidth = () => {
    let aspectRatio = ratioW.value / ratioH.value;
    w.value = parseFloat((h.value * aspectRatio).toFixed(2));
}

let calculateHeight = () => {
    let aspectRatio = ratioW.value / ratioH.value;
    h.value = parseFloat((w.value / aspectRatio).toFixed(2));
}

ratioW.addEventListener("input", calculateHeight);
ratioH.addEventListener("input", calculateWidth);
w.addEventListener("input", calculateHeight);
h.addEventListener("input", calculateWidth);
