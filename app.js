// selectors
var colorArr = ["#fe4365","#fc9d9a","#f9cdad","#c8c8a9","#83af9b"];
var items = [];
let colorCode    = document.querySelectorAll('.color-code'),
    btn          = document.querySelectorAll('.btn'),
    colorDiv     = document.querySelectorAll('.color'),
    generateBtn  = document.querySelector('.generateBtn'),
    copied       = document.querySelector('.copied'),
    copiedSpan   = document.querySelector('.copied > h5 > span');


 for(let x=0;x<5;x++){
    colorCode[x].value =  colorArr[x];
    colorDiv[x].style.background = colorArr[x];
 }

     ///////////////////////////////////////////
    /* reading json file to get color codes   */
    ////////////////////////////////////////////

 function getUsers(){
     fetch('data.json')
     .then((res) => res.json())
     .then((data)=>{
         data.forEach((color) => {
          
                 items.push(color);      
         });

     })
    }

    getUsers();

    //////////////////////////////////
    /*  generate new color palette  */
    //////////////////////////////////

  generateBtn.addEventListener('click',()=>{
    let randomNum = Math.floor(Math.random() * 100);
      for(let x=0;x<5;x++){
          colorCode[x].value =  items[randomNum][x];
          colorDiv[x].style.background = items[randomNum][x];
       }
       
  });

  
    //////////////////////////////////
    /*   Copy color Hex code        */
    //////////////////////////////////

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", (e) => {
        console.log(e.target.value);
          colorCode[i].focus();
          colorCode[i].select();
    try {
      document.execCommand('copy');
      copiedSpan.innerHTML = e.target.value;
    } catch (err) {
      console.log('unable to copy');
    }
    });
}


