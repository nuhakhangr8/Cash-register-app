//disguising html land variables
//input
//cash given shows null --because i forgot hash symbol
var billAmount=document.querySelector("#bill-amt")
var cashGiven=document.querySelector("#cash-gvn")
var checkButtton=document.querySelector("#check")
var message=document.querySelector("#message")
var noOfNotes=document.querySelectorAll(".no-of-notes")
var availibleNotes=[2000,500,100,20,10,5,1]

checkButtton.addEventListener("click",function cashHandler(){
    message.style.display="none";
    if(billAmount.value>0){
        if(cashGiven.value>=billAmount.value){
            var amountToBeReturned=cashGiven.value-billAmount.value;
            calculateChange(amountToBeReturned)

        }
        else{
            showMessage("This is our chef,here's your sponge and these are the plates")
        }
    }
    else{
        showMessage("Amount should be greater than 0")
        
    }
})

function calculateChange(amountToBeReturned){
    for(var i=0;i<availibleNotes.length;i++){
        var noOfNotesCurrent=Math.trunc(amountToBeReturned/availibleNotes[i])//516/500=1
    }
   var amountToBeReturned=amountToBeReturned % availibleNotes[i];
   noOfNotes.innerText=noOfNotesCurrent;
   
}
function showMessage(msg) {
    message.style.display = "block"
    message.innerText = msg;
}

