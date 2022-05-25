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
  let count=10; //default olarak verilen objecte id:9 olduğu için 10dan başlattım.
  //--------------------------------------------------------------------------------------------
const buttonsDOM = document.querySelector(".btn-Category");
const containerDOM = document.querySelector(".section-center");
const addMenuBtn = document.querySelector("#addMenu");
const createMenuDOM = document.querySelector("#createMenu");
const createMenuBtn = document.querySelector("#create-btn");
const addMenuBox = document.querySelector(".addMenuBox");
//-----------
const titleValue = document.querySelector("#titleValue");
const titleInput = document.querySelector("#titleInput");
const descriptionValue = document.querySelector("#descriptionValue");
const descriptionInput = document.querySelector("#descriptionInput");
const priceValue = document.querySelector("#priceValue");
const priceInput = document.querySelector("#priceInput");
const categoryInput = document.querySelector("#categoryInput");
const imgInput = document.querySelector("#imgInput");

//-----------


class UI{

    // Button Create with JS
    createButtonTag(categoryName){
        let createButtons = document.createElement("button");
        createButtons.classList.add("buttonClass");
        createButtons.innerHTML = `${categoryName}`
        buttonsDOM.appendChild(createButtons);
        createButtons.addEventListener("mouseover", function(){
            this.style.backgroundColor = "#191919";
            this.style.border = "0.01em solid rgba(205, 0, 0, 0.605)";
            this.style.color="#ddd"
          })
          createButtons.addEventListener("mouseout", function(){
            this.style.backgroundColor = "rgba(205, 0, 0, 0.605)";
            this.style.color="#ddd";
            this.style.border ="0.01em solid #191919"
          })
        }

    // Filtered Menu 
    filteredMenu(menu,category){
        return menu.reduce( (acc,categoryName) => {
            let keys = categoryName[category];
            if(!acc[keys]){
                acc[keys] = [];
            }
            acc[keys].push(categoryName);
            return acc

        },{})
        
    }

    // Display Buttons
    displayButton(buttonsName){
        buttonsName.forEach(element => {
        this.createButtonTag(element)
        });
    }

    // Display Menu

    menuHTML(menu){
        let temptHTML = "";

        menu.forEach(element => {
        temptHTML +=
        `
        <div class="col-md-5 mealBox">
            <div class="imgBox">
                <img class="photo" src=${element.img}
                alt="">
            </div>
            <div class="contentBox">
                <div class="mealHeader">
                <h4 class="mealTitle">${element.title}</h4>
                </div>
                <div class="mealText">
                <p>
                    ${element.desc}
                </p>
                </div>
                <div class="price">
                <h3>${element.price} $</h3>
                </div>
                </div>
        </div>
        `   
        containerDOM.innerHTML = temptHTML;
        });

    }

    displayMenu(buttons,storageMenu){
        let buttonsName = [...document.querySelectorAll(".buttonClass")];

        buttonsName.forEach( button => {
            button.addEventListener("click" , (event) => {
                createMenuDOM.style.display = "none"; // For Create Menu 
                if(buttons.find( item => item === event.target.innerHTML)){
                    this.menuHTML(storageMenu[event.target.innerHTML])
                }
            })
        })


    }

}

class addMenuClass{

    addMenuOninput(){
        addMenuBtn.addEventListener("click", () =>{
            containerDOM.innerHTML = ""
            createMenuDOM.style.display = "flex";
            
            titleInput.oninput = () => {
                titleValue.innerHTML = titleInput.value;
              }
              descriptionInput.oninput = () => {
                descriptionValue.innerHTML = descriptionInput.value;
              }
              priceInput.oninput = () => {
                priceValue.innerHTML = priceInput.value + " $";
              } 
        })
    }

    addMenuFunc(){

        let addMenuValue = {
            id : count,
            title : titleInput.value,
            category : categoryInput.value,
            price : priceInput.value,
            img : imgInput.value,
            desc : descriptionInput.value ,
          }
        
        if(addMenuValue.category){
          menu.push(addMenuValue);
        }
        else{
          console.log("Catalog Name ?? ")
        }
    }

    createMenuFunc(){
        createMenuBtn.addEventListener("click", () => {
            buttonsDOM.innerHTML="";
            const ui = new UI();
            this.addMenuFunc();
            let newMenuFiltered = ui.filteredMenu(menu,"category");
            newMenuFiltered.All = menu;
            storage.setMenuStorage(newMenuFiltered,"AddedMenu");
            this.storageCreatedMenu();
            count++ ; 
            titleInput.value = "";
            categoryInput.value = "";
            priceInput.value = "";
            imgInput.value = "";
            descriptionInput.value = "" ;
        })
    }


    storageCreatedMenu(){
      const ui = new UI();
      let storageMenu = JSON.parse(localStorage.getItem("AddedMenu"));
      let buttonsName = Object.keys(storageMenu);
      ui.displayButton(buttonsName);
      ui.displayMenu(buttonsName,storageMenu);
    }

  }


class storage{
    static setMenuStorage(menu,name){
        localStorage.setItem( `${name}`, JSON.stringify(menu))
    }

}


const getStorage = () => {
  const ui = new UI();
  let newMenuFiltered = ui.filteredMenu(menu,"category");
  newMenuFiltered.All = menu
  storage.setMenuStorage(newMenuFiltered,"FilteredMenu");
  let storageMenu = JSON.parse(localStorage.getItem("FilteredMenu"));
  let buttonsName = Object.keys(storageMenu);
  ui.displayButton(buttonsName);
  ui.displayMenu(buttonsName,storageMenu);
}

if(JSON.parse(localStorage.getItem("AddedMenu"))){
  const ui = new UI();
  const addMenu = new addMenuClass();
  addMenu.addMenuOninput();
  addMenu.createMenuFunc();
  addMenu.storageCreatedMenu();
  let storageMenu = JSON.parse(localStorage.getItem("AddedMenu"))
  ui.menuHTML(storageMenu["All"])
}
else{
  const ui = new UI();
  const addMenu = new addMenuClass();
  addMenu.addMenuOninput();
  addMenu.createMenuFunc();
  getStorage();
  let storageMenu = JSON.parse(localStorage.getItem("FilteredMenu"))
  ui.menuHTML(storageMenu["All"])
}















