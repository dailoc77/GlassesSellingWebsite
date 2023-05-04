
let dataGlasses = [
    { id: "G1", src: "./img/a1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/a2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/a3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/a4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/a5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/a6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/a7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/a8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/a9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

import { Glasses } from "./glasses.js";
import { GlassesList } from "./glassesList.js";

let glassesList = new GlassesList();


const getELE = (id) => {
    return document.getElementById(id);
}


const showGlassesList = () => {
    let divGlassesList = getELE("vglassesList");


    dataGlasses.map((item, index) => {
        let gl = new Glasses(item.id, item.src, item.virtualImg, item.brand, item.name, item.color, item.price, item.description);
        glassesList.addGlasses(gl);
    });

    divGlassesList.innerHTML = glassesList.renderGlasses();
}

showGlassesList();

const tryOnGlasses = (e) => {
    let gID = e.target.getAttribute("data-id");
    let gObject = {};
    for (let value of glassesList.glist) {
        if (value.id == gID) {
            gObject = value;
        }
    }
    showInfo(gObject);
}

window.tryOnGlasses = tryOnGlasses;

const showInfo = (gObject) => {
    let divAvatar = getELE("avatar");
    let divInfo = getELE("glassesInfo");

    divAvatar.innerHTML = `
        <img id="glasses" src="${gObject.virtualImg}">
    `;

    let status = "";
    if (gObject.status) {
        status = "Stocking";
    } else {
        status = "Sold Out";
    }

    divInfo.innerHTML = `
        <h5>${gObject.name} - ${gObject.brand} (${gObject.color})</h5>
        <p class="card-text"> 
            <span class="btn btn-danger btn-sm mr-2">$${gObject.price}</span>
            <span class="text-success">${status}</span>
        </p>
        <p class="card-text"> 
            ${gObject.desc}
        </p>
    `;
    divInfo.style.display = "block";
}
const removeGlasses = (isDisplay) => {
    let glasses = getELE("glasses");
    if (glasses == null) {
        return;
    }
        if (isDisplay) {
            glasses.style.opacity = 0.9;
        } else {
            glasses.style.opacity = 0;
        }
}

window.removeGlasses = removeGlasses;