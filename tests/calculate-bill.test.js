describe("The calculate bill factory function", function () {
    it("should be able to set call cost", function () {
        let calculate = totalPhoneBill("call");

        assert.equal(2.75, calculate);

    })

    it("should be able to set sms cost", function () {
        let calculate = totalPhoneBill("sms");

        assert.equal(0.75, calculate);

    })

    it("should be able to set sms and call cost", function () {
        let calculate = totalPhoneBill("call, sms");

        assert.equal(3.50, calculate);

    })

//     it("should be able to set warning level", function () {

//         let calculate = totalPhoneBill();

//      //   calculate.setWarningLevel(20);

//         assert.equal(20, calculate);

//     })


//     it("should be able to set danger level", function () {

//         let calculate = calc();

//         calculate.setDangerLevel(30);

//         assert.equal(30, calculate.getDangerLevel());

//     })



//     it("should be able to set warning and danger level", function () {

//         let calculate = calc();

//         calculate.setWarningLevel(20);
//         calculate.setDangerLevel(30);

//         assert.equal(20, calculate.getWarningLevel());
//         assert.equal(30, calculate.getDangerLevel());

//     })

// });


// describe("use values", function () {
//     it("should be able to make calls", function () {
//         let calculate = calc();

//         calculate.setCallCost(2.75);
//         calculate.setSmsCost(0.75);
//         calculate.setWarningLevel(20);
//         calculate.setDangerLevel(30);

//         calculate.makeCall();
//         calculate.makeCall();
//         calculate.makeCall();

//         assert.equal(8.25, calculate.getTotalCost());
//         assert.equal(8.25, calculate.getTotalCallCost());
//         assert.equal(0.00, calculate.getTotalSmsCost());
//     })

//     it("should be able to send sms's", function () {
//         let calculate = calc();

//         calculate.setCallCost(2.75);
//         calculate.setSmsCost(0.75);
//         calculate.setWarningLevel(20);
//         calculate.setDangerLevel(30);

//         calculate.sendSms();
//         calculate.sendSms();
//         calculate.sendSms();

//         assert.equal(2.25, calculate.getTotalCost());
//         assert.equal(0.00, calculate.getTotalCallCost());
//         assert.equal(2.25, calculate.getTotalSmsCost());
//     })

//     it("should be able to send sms's and also make calls", function () {
//         let calculate = calc();

//         calculate.setCallCost(2.75);
//         calculate.setSmsCost(0.75);
//         calculate.setWarningLevel(20);
//         calculate.setDangerLevel(30);

//         calculate.makeCall();
//         calculate.makeCall();
//         calculate.makeCall();
//         calculate.makeCall();
//         calculate.sendSms();
//         calculate.sendSms();
//         calculate.sendSms();
//         calculate.sendSms();

//         assert.equal(14.00, calculate.getTotalCost());
//         assert.equal(11.00, calculate.getTotalCallCost());
//         assert.equal(3.00, calculate.getTotalSmsCost());
//     });
// });


// describe("warning & danger level", function () {

//     it("it should return a class name of 'warning' if warning level is reached", function () {
//         let calculate = calc();

//         calculate.setCallCost(2.75);
//         calculate.setSmsCost(0.75);
//         calculate.setWarningLevel(5);
//         calculate.setDangerLevel(10);

//         calculate.makeCall();
//         calculate.sendSms();
//         calculate.sendSms();
//         calculate.makeCall();
//         assert.equal("warning", calculate.totalClassName());

//     })

//     it("it should return a class name of 'danger' if danger level is reached", function () {
//         let calculate = calc();

//         calculate.setCallCost(2.75);
//         calculate.setSmsCost(0.75);
//         calculate.setWarningLevel(5);
//         calculate.setDangerLevel(10);

//         calculate.makeCall();
//         calculate.sendSms();
//         calculate.sendSms();
//         calculate.sendSms();
//         calculate.makeCall();
//         calculate.makeCall();
//         assert.equal("danger", calculate.totalClassName());
//     })

//     it("it should allow the total to increase after reaching the warning level", function () {
//         let calculate = calc();

//         calculate.setCallCost(2.75);
//         calculate.setSmsCost(0.75);
//         calculate.setWarningLevel(5);
//         calculate.setDangerLevel(20);

//         calculate.makeCall();
//         calculate.sendSms();
//         calculate.sendSms();
//         calculate.sendSms();
//         calculate.makeCall();
//         calculate.makeCall();
//         calculate.makeCall();

//         assert.equal(11.00, calculate.getTotalCallCost());
//         assert.equal(2.25, calculate.getTotalSmsCost());
//         assert.equal("warning", calculate.totalClassName());

//     });


//     it("it should stop the total cost from increasing when the danger level has been reached", function () {
//         let calculate = calc();

//         calculate.setCallCost(2.75);
//         calculate.setSmsCost(0.75);
//         calculate.setWarningLevel(5)
//         calculate.setDangerLevel(10);

//         calculate.makeCall();
//         calculate.sendSms();
//         calculate.sendSms();
//         calculate.sendSms();
//         calculate.makeCall();
//         calculate.makeCall();

//         assert.equal(8.25, calculate.getTotalCallCost());
//         assert.equal(2.25, calculate.getTotalSmsCost());
//         assert.equal("danger", calculate.totalClassName());

//     });
});