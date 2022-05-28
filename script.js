let userInput = document.querySelector("#username");
let product = document.querySelector("#product");
let note = document.querySelector("#text");
let form = document.querySelector("form");
let userOrders = document.querySelector("#userOrders");
let showOrdersButton = document.querySelector("#showOrdersButton");
let divId = 0;
let orderHolder = document.querySelector(".orderHolder");

let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]

let userOrdersArray = [];

const setOptionValues = (arr) => {
    arr.forEach(item=>{
        product.innerHTML += 
        `
        <option value="${item.id}">${item.name}</option>
        `
    });
};



setOptionValues(dinos);

const deleteOrder = (e) => {

    let id = e.target.parentElement.id;
    userOrdersArray = userOrdersArray.filter(item => item.id != id);
    e.target.parentElement.remove();

};

const setOrder = (userData) => {

    let div = document.createElement("div");
    let userP = document.createElement("p");
    let noteP = document.createElement("p");
    let dinsoaurP = document.createElement("p");
    let priceP = document.createElement("p");
    let button = document.createElement("button");
    let img = document.createElement("img");


    userP.innerHTML = "Kupac:<span>" + userData.username + "</span>";
    noteP.innerHTML = "Napomena:<span>" + userData.note + "</span>";
    dinsoaurP.innerHTML = "Dinosaurus:<span>" + userData.dinosaurName + "</span>";
    priceP.innerHTML = "Cena:<span>" + userData.price + "</span>";
    img.src = userData.img;
    button.innerHTML = 'Obrisi';
    div.id = userData.id;

    div.classList.add("userOrder");
    button.classList.add("deleteOrder");
    div.append(userP,noteP,dinsoaurP,priceP,button,img);
    userOrders.append(div);
    
    button.addEventListener("click",deleteOrder)
}

const submitForm = (e) => {
    e.preventDefault();

    let userData = { 
        username:userInput.value.trim(),
        product:product.value.trim(),
        note:note.value.trim(),
        dinosaurName:'',
        price:'',
        img:'',
        id:''
    };

    let dinsoaur = dinos.filter(item=> item.id == product.value);
    userData.dinosaurName = dinsoaur[0].name;
    userData.price = dinsoaur[0].cena;
    userData.img = dinsoaur[0].img;

    if(userData.note == "" || userData.username == "" || userData.product == ""){
        alert("Please fill out all forms!");
        return;
    }

    userData.id = divId;
    divId++;

    userOrdersArray.push(userData);
    setOrder(userData);
    userInput.value = '';
    note.value = '';
}

form.addEventListener("submit",submitForm)
showOrdersButton.addEventListener("click",()=>{
    console.log(userOrdersArray);
})
