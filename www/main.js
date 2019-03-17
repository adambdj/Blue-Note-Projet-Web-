var count = 0

function openForm() {
 
 var element = document.getElementById("formulaire");
 if (count === 0) {
element.classList.add("formulaireopen");
count = 1;  
 }
 
  else {
element.classList.remove("formulaireopen");  
count = 0 ;
 }
}