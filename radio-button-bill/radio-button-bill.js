var radioBtn = document.querySelector(".radioBillAddBtn");
var billType = document.querySelector(".billItemTypeRadio");
var callT = document.querySelector(".callTotalTwo");
var smsT = document.querySelector(".smsTotalTwo");
var total = document.querySelector(".totalTwo");

var callsTotal = 0;
var smsTotal = 0;
var billTotal = 0;

function radioBtnClicked() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItem = checkedRadioBtn.value;

        if (billItem === "call") {
            billTotal += 2.75;
            callsTotal += 2.75;
        }
        else if (billItem === "sms") {
            billTotal += 0.75;
            smsTotal += 0.75;
        }
        totalBtnClicked()
    }
}
function totalBtnClicked() {
    callT.innerHTML = callsTotal.toFixed(2);
    smsT.innerHTML = smsTotal.toFixed(2);
    total.innerHTML = billTotal.toFixed(2);

    if (billTotal >= 50) {
        total.classList.add("danger");
    }
    else if (billTotal >= 30) {
        total.classList.add("warning");
    }

}
radioBtn.addEventListener("click", radioBtnClicked);