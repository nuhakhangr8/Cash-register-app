//disguising html land variables
//input
//cash given shows null --because i forgot hash symbol
var billAmount=document.querySelector("#bill-amount");
var cashGiven=document.querySelector("#cash-given")
var checkButtton=document.querySelector("#check")
var message=document.querySelector("#message")
var noOfNotes=document.querySelectorAll(".no-of-notes")
var nextButton=document.querySelector('#next')
var nextField=document.querySelector('#next-field')
const availableNotes=[2000,500,100,20,10,5,1];
nextField.style.display="none";


nextButton.addEventListener("click",function nextinput(){
     if(billAmount.value.length===0){
     nextField.style.display="none";
     }else{
         nextField.style.display="block";
     }
  })


checkButtton.addEventListener("click",function validateCashAndBill(){
    message.style.display="none";
    if(billAmount.value>0){
        if(cashGiven.value>=billAmount.value){
            const amountToBeReturned=cashGiven.value-billAmount.value;
            calculateChange(amountToBeReturned)

        }
        else{
            showMessage("Do you want to wash plates?")
        }
    }
    else{
        
        showMessage("Amount should be greater than 0")
        
    }
})

function calculateChange(amountToBeReturned){
    for(let i=0;i<availableNotes.length;i++){
        const numberOfNotes=Math.trunc(amountToBeReturned/availableNotes[i])//516/500=1
        var amountToBeReturned=amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText=numberOfNotes;

    }
}
function showMessage(msg) {
    message.style.display = "block"
    message.innerText = msg;
}

//my errors were
//I did not put noOFNotes and amountToBeReturned in calculateChange inside loop
//did not wire css properly
//no proper table numbers
//I will try to work around that next button when i am armed with enough logic