let elForm = document.querySelector(".form");
let elInput = document.querySelector(".input__form");
let elList = document.querySelector(".list");

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();
      let inputValue = elInput.value;
          let answer = [ ];
          answer.push(inputValue);

      let item = document.createElement("li"); 
         for (answers of answer) {            
             elList.appendChild(item);          
             item.textContent = answers;
      }

      elInput.value = "";
     
  
} )