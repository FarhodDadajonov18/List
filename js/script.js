let elForm = document.querySelector(".form");
let elInput = document.querySelector(".input__form");
let elList = document.querySelector(".list");

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();
      let inputValue = elInput.value;

      let item = document.createElement("li"); 

         for (answer of inputValue) {
            let answer = [ ];
            elList.appendChild(item);
            answer.push(inputValue);
           item.textContent = answer;
           return;
      }
     

   //    elForm.addEventListener("reset", function (evt) {
   //      evt.preventDefault();
    
   //      elList.textContent = "";
   //      item.textContent = "";
   //      inputValue = "";
   // })   
  
} )