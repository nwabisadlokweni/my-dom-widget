function BillWithSettings() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 30;
    var theDangerLevel = 50;

    var totalCost = 0;


    function getCallCost() {
        return theCallCost;
    }

    function getSmsCost() {
        return theSmsCost;
    }

    function getTotalCost() {
        totalCost = theCallCost + theSmsCost;
        return totalCost;
    }

    function settingBill(billType) {
        if (billType === "call") {
            theCallCost += 2.75
        } else if (billType === "sms") {
            theSmsCost += 0.75
        }
    }  

    function styleTotalColor() {
        if (getTotalCost() >= theDangerLevel) {
            return "danger"
        } else if (getTotalCost() >= theWarningLevel) {
            return "warning"
        }
        return "";
    }


    return {
        getCallCost,
        settingBill,
        getSmsCost,
        getTotalCost,
        styleTotalColor
    }
}