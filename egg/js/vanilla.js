const boxTwo = document.querySelector('.box2');
console.log(boxTwo);
const layConOne = document.querySelector('.lay-con');
console.log(layConOne);

let makepic1 = ["normal1.png","normal2.png","normal3.png","normal4.png","normal5.png","normal6.png","normal7.png","normal8.png","normal9.png","normal10.png","normal11.png"];

console.log(makepic1);

let data = 0;

for (let i = 0; i < makepic1.length; i++) {

    const makeDivOne = document.createElement('div');
    makeDivOne.classList.add("lay");
    const img = document.createElement('img');

    layConOne.appendChild(makeDivOne);
    boxTwo.appendChild(layConOne);

    img.setAttribute('src', `../data/normal/normal-${i+1}.png`);
    makeDivOne.appendChild(img);
    makeDivOne.style.width = "20vw";
    makeDivOne.style.height = "30vh";

}
