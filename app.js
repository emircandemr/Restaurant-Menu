const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },

]; 

const createMenu = document.querySelector("#createMenu");


//---------------------- Button Create--------------------------------

let buttonDOM = document.querySelector(".btn-Category");

const setButton = (element) =>{
  let createButton = document.createElement("button");
  createButton.classList.add("buttonClass")
  createButton.innerHTML= `${element}`
  buttonDOM.appendChild(createButton)
  createButton.addEventListener("mouseover", function(){
    this.style.backgroundColor = "#191919";
    this.style.border = "0.01em solid rgba(205, 0, 0, 0.605)";
    this.style.color="#ddd"
  })
  createButton.addEventListener("mouseout", function(){
    this.style.backgroundColor = "rgba(205, 0, 0, 0.605)";
    this.style.color="#ddd";
    this.style.border ="0.01em solid #191919"
  })
}

const groupBy = (menu,category) =>{

  return menu.reduce((acc,categoryName) => {    
    let key = categoryName[category]
    if (!acc[key]){
      acc[key] =[]
    }

    acc[key].push(categoryName)
    return acc 
  },{})
}


let categoriesList = groupBy(menu, "category");
console.log(categoriesList)
categoriesList.All= menu

let keys = Object.keys(categoriesList)
keys.forEach(element => {

  setButton(`${element}`)
});


//------------------------------------------------------------------
let containerDOM = document.querySelector(".section-center")


const categoryFunc = (menu,categoriesList) => {
  const buttonListener = document.querySelectorAll(".buttonClass");
  buttonListener.forEach(element =>{
    element.addEventListener("click", function(){
      containerDOM.innerHTML = "";
      createMenu.style.display="none"
      let keys = Object.keys(categoriesList);
      keys.forEach(item =>{
        if(element.innerHTML == item){
          let selectedMenu = (menu.filter(e => e.category.includes(`${item}`)))
          for (let index = 0; index < selectedMenu.length; index++) {
            setMealCard(selectedMenu[index].title,selectedMenu[index].price,selectedMenu[index].img,selectedMenu[index].desc)
             }
        }
      })
      if(element.innerHTML == "All"){
        for (let index = 0; index < menu.length; index++) {
          setMealCard(menu[index].title,menu[index].price,menu[index].img,menu[index].desc)
          }
      }
    })
  })
}


categoryFunc(menu,categoriesList)


const setMealCard = (title,price,img,desc) => {
  let temptHTML = ""
  temptHTML =
  `<div class="col-md-5 mealBox">
  <div class="imgBox">
    <img class="photo" src=${img}
     alt="">
  </div>
  <div class="contentBox">
    <div class="mealHeader">
      <h4 class="mealTitle">${title}</h4>
    </div>
    <div class="mealText">
      <p>
        ${desc}
      </p>
     </div>
      <div class="price">
      <h3>${price} ₺</h3>
     </div>
    </div>
  </div>`
  containerDOM.innerHTML += temptHTML;
}

menu.forEach(element => {
  setMealCard(element.title,element.price,element.img,element.desc)
});

//--------------Create Menu------------------------

const titleValue = document.querySelector("#titleValue");
const titleInput = document.querySelector("#titleInput");
const descriptionValue = document.querySelector("#descriptionValue");
const descriptionInput = document.querySelector("#descriptionInput");
const priceValue = document.querySelector("#priceValue");
const priceInput = document.querySelector("#priceInput");
const categoryInput = document.querySelector("#categoryInput");
const imgInput = document.querySelector("#imgInput");
const createMenuBtn = document.querySelector("#create-btn");
const addMenu = document.querySelector("#addMenu");
const addMenuBox = document.querySelector(".addMenuBox");


addMenu.addEventListener("click", () => {
    containerDOM.innerHTML = "";
    createMenu.style.display="flex"
})


titleInput.oninput = () => {
  titleValue.innerHTML = titleInput.value;
}
descriptionInput.oninput = () => {
  descriptionValue.innerHTML = descriptionInput.value;
}
priceInput.oninput = () => {
  priceValue.innerHTML = priceInput.value + " ₺";
}

let count=10; //default olarak verilen objecte id:9 olduğu için 10dan başlattım.
// let addMenuObj = [];

const addMenuFunc = () => {
  console.log(imgInput.value)

  let addMenuValue = {
    id : count,
    title : titleInput.value,
    category : categoryInput.value,
    price : priceInput.value,
    img : imgInput.value,
    desc : descriptionInput.value ,
  }
  menu.push(addMenuValue);
}

createMenuBtn.addEventListener("click", () => {
  addMenuFunc();
  // menu.push(addMenuObj);
  count++;
  console.log(menu)

  buttonDOM.innerHTML = ""

  let categoriesList = groupBy(menu, "category");
  categoriesList.All= menu

  let keys = Object.keys(categoriesList)
  
  keys.forEach(element => {

    setButton(`${element}`)
  });
  
  categoryFunc(menu,categoriesList)



  // keys.forEach(element => {
  //   if(buttonListener.find(item => item.innerHTML !== element )){
  //     console.log(buttonListener.find(item => item.innerHTML))
  //   }
  // });
  // setButton(`${categoryInput.value}`)
 
})




// let addMenu = document.querySelector("#addMenu");
// addMenu.addEventListener("click",function(){
//   let temptHTML = ""
//   temptHTML =
//   `
//   <div class="col-md-5 mealBox">
//     <div class="imgBox">
//       <img class="photo" src=# alt="img"
//       alt="">
//     </div>
//     <div class="contentBox">
//       <div class="mealHeader">
//         <h4 class="mealTitle">Title</h4>
//       </div>
//       <div class="mealText">
//         <p>
//           Description
//         </p>
//       </div>
//       <div class="price">
//         <h3>Price ₺</h3>
//       </div>
//     </div>
//   </div>
//   `
//   containerDOM.innerHTML += temptHTML;
// })

