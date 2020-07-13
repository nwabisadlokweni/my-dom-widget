function textBill(){
    var callsTotal = 0;
    var smsTotal = 0;

    function textBillTotal(billTypeEntered) {
        if (billTypeEntered === "call"){
            callsTotal += 2.75
        }
        else if (billTypeEntered === "sms"){
            smsTotal += 0.75;
        }
    }

    function getCallTotal() {
        return callsTotal;
    }

    function getSmsTotal() {
        return smsTotal;
    }
    function getTotal() {
        return smsTotal + callsTotal;
    }
      
    function styleTotalColor() {

        if (getTotal() >= 50) {
            return "danger"
        }
        else if (getTotal() >= 30) {
            return "warning"
        }
    }

        return {
        textBillTotal,
        getCallTotal,
        getSmsTotal,
        getTotal,
        styleTotalColor,
    }
}