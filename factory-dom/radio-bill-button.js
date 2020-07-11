// function radioBill() {

//     var theCallCost = 0;
//     var theSmsCost = 0;
//     var theWarningLevel = 30;
//     var theDangerLevel = 50;

//     var billTotal = 0;

//     function getCallCost() {
//         return getCallCost;

//     }

//     function getSmsCall() {
//         return getSmsCall;
//     }

//     function radioBtnClicked(billItem) {
//         //var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
//         // if (checkedRadioBtn) {
//         //     var billItem = checkedRadioBtn.value;

//         if (billItem === "call") {
//             billTotal += 2.75;
//             //callsTotal += 2.75;
//         }
//         else if (billItem === "sms") {
//             billTotal += 0.75;
//            // smsTotal += 0.75;
//         }
//         //  totalBtnClicked()
//     }

//     function getbillTotal() {
//         billTotal = theCallCost + theSmsCost;
//         return billTotal;
//     }

//     function totalBtnClicked() {
//         // callT.innerHTML = callsTotal.toFixed(2);
//         // smsT.innerHTML = smsTotal.toFixed(2);
//         // total.innerHTML = billTotal.toFixed(2);

//         if (billTotal >= 50) {
//             total.classList.add("danger");
//         }
//         else if (billTotal >= 30) {
//             total.classList.add("warning");
//         }
//         return "";
//     }

//     return {
//         getCallCost,
//         getSmsCall,
//         getbillTotal,
//         totalBtnClicked,
//         radioBtnClicked
//     }
// }





function RadioBill() {

    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 30;
    var theCriticalLevel = 50;

    var totalCost = 0;
    

    function getCallCost() {
        return theCallCost;
    }

   function radioBtns(billItemType){
       if(billItemType === "call"){
           theCallCost += 2.75
       } else if(billItemType === "sms"){
           theSmsCost += 0.75
       }
   }

    function getSmsCost() {
        return theSmsCost;
    }

    function getTotalCost() {

        totalCost = theCallCost + theSmsCost;

        return totalCost;
    }

    function styleTotalColor(){

        if(getTotalCost() >= theCriticalLevel){
            return "danger"
        } else if(getTotalCost() >= theWarningLevel){
            return "warning"
        }
        return "";
    }
    
    
    return {
        getCallCost,
        radioBtns,
        getSmsCost,
        getTotalCost,
        styleTotalColor
    }
}