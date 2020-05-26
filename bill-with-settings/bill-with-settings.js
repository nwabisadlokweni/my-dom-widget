var buttonSettings = document.querySelector(".updateSettings");
var buttonAddElement = document.querySelector(".buttonAdd");

var billItemType = document.querySelector(".billItemTypeWithSettings");
var callTotalElement = document.querySelector(".callTotalSettings");
var smsTotalElement = document.querySelector(".smsTotalSettings");
var total = document.querySelector(".totalSettings");

var callCost = document.querySelector(".callCostSetting");
var smsCost = document.querySelector(".smsCostSetting");
var warningLevel = document.querySelector(".warningLevelSetting");
var criticalLevel = document.querySelector(".criticalLevelSetting");

var callsTotalOne = 0;
var smsTotalOne = 0;
var billTotal = 0;

var callCostOne = 0;
var smsCostOne = 0;
var warning = 0;
var critical = 0;

function buttonAddElementClicked(){
var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
 if (billTotal< critical) {
  if (checkedRadioBtn){ 
var billItemEnter = checkedRadioBtn.value;  
 
if (billItemEnter === "call"){
callsTotalOne += callCostOne;
}
else if (billItemEnter === "sms"){
smsTotalOne += smsCostOne;
}
 }

callTotalElement.innerHTML = callsTotalOne.toFixed (2);
smsTotalElement.innerHTML = smsTotalOne.toFixed (2);
  billTotal = callsTotalOne + smsTotalOne;
total.innerHTML = billTotal.toFixed (2);
   
   color()
}
}

function buttonSettingsClicked(){
  callCostOne = Number(callCost.value);
smsCostOne = Number(smsCost.value);
critical = Number(criticalLevel.value);
warning = Number(warningLevel.value);
  color()
}
  
  function color(){
total.classList.remove("danger");
total.classList.remove("warning");
    if (billTotal >= critical){
   // adding the danger class will make the text red
   total.classList.remove("warning");
   total.classList.add("danger");
    }
    else if (billTotal >= warning && billTotal < critical){
        total.classList.remove("danger");
        total.classList.add("warning");
    }
} 
buttonAddElement.addEventListener("click", buttonAddElementClicked);
buttonSettings.addEventListener("click", buttonSettingsClicked);