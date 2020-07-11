// var radioBtn = document.querySelector(".radioBillAddBtn");
// var billType = document.querySelector(".billItemTypeRadio");
// var callT = document.querySelector(".callTotalTwo");
// var smsT = document.querySelector(".smsTotalTwo");
// var total = document.querySelector(".totalTwo");

// // var callsTotal = 0;
// // var smsTotal = 0;
// // var billTotal = 0;

// var radioInstance = radioBill();

// function radioBtnClicked() {
//     var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

//     var billItem = checkedRadioBtn.value;

//     radioInstance.radioBtnClicked(billItem);


//     //callT.innerHTML = callsTotal.toFixed(2);
//     // smsT.innerHTML = smsTotal.toFixed(2);
//     // total.innerHTML = billTotal.toFixed(2);

//     // if (checkedRadioBtn) {
//     //     var billItem = checkedRadioBtn.value;

//     //     if (billItem === "call") {
//     //         billTotal += 2.75;
//     //         callsTotal += 2.75;
//     //     }
//     //     else if (billItem === "sms") {
//     //         billTotal += 0.75;
//     //         smsTotal += 0.75;
//     //     }
//     //     totalBtnClicked()
//     // }


// }
// function totalBtnClicked() {

//     // callT.innerHTML = callsTotal.toFixed(2);
//     // smsT.innerHTML = smsTotal.toFixed(2);
//     // total.innerHTML = billTotal.toFixed(2);

//     if (billTotal >= 50) {
//         total.classList.add("danger");
//     }
//     else if (billTotal >= 30) {
//         total.classList.add("warning");
//     }

// }
// radioBtn.addEventListener("click", radioBtnClicked);







var billItemTypeRadio = document.querySelector(".billItemTypeRadio");

var billRadioBtn = document.querySelector(".radioBillAddBtn");

var callTotal2 = document.querySelector(".callTotalTwo");

var smsTotal2 = document.querySelector(".smsTotalTwo");

var total2 = document.querySelector(".totalTwo");

var radioBillInstance = RadioBill();


function radioBill() {

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  
  
    var billItemType = checkedRadioBtn.value;
    
    radioBillInstance.radioBtns(billItemType);

    callTotal2.innerHTML = radioBillInstance.getCallCost().toFixed(2)

    smsTotal2.innerHTML = radioBillInstance.getSmsCost().toFixed(2)

    total2.innerHTML = radioBillInstance.getTotalCost().toFixed(2)
    styleTotalColor();
}

function styleTotalColor() {
 
    total2.classList.remove("danger")
    total2.classList.remove("warning")

    var currentStyle = radioBillInstance.styleTotalColor();
     
    total2.classList.add(currentStyle);
    // if (grandTotal >= 50) {
    //     total2.classList.add("danger")
    // } else if (grandTotal >= 30 && grandTotal <= 50) {
    //     total2.classList.add("warning")
    // }
}



billRadioBtn.addEventListener('click', radioBill);



