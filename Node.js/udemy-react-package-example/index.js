console.log("hello nodejs package");

const randomcolor = require("randomcolor"); // 경로 미작성 시 node_modules 인식

let color1 = randomcolor();
let color2 = randomcolor();
let color3 = randomcolor();

console.log(color1, color2, color3);
