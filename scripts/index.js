// Store the wallet amount to your local storage with key "amount"


let sum= JSON.parse(localStorage.getItem("amount")) || 0 
document.querySelector("#wallet").innerHTML= sum




function addMoney() {
  event.preventDefault();
  

  let paisa = document.querySelector("#amount").value;
     paisa  = Number(paisa)

    sum = sum + paisa;

    

       console.log(sum)

    localStorage.setItem("amount",JSON.stringify(sum))
      
}
