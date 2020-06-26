describe("The calculate bill factory function", function () {
    it("should be able to set call cost", function () {
        let calculate = calc();

        calculate.setCallCost(2.75);
        assert.equal(2.75, calculate.getCallCost());

        let calculate2 = calc();
        calculate2.setCallCost(1.85);
        assert.equal(1.85, calculate2.getCallCost());
    })

    it("should be able to set sms cost", function () {
        let calculate = calc();

        calculate.setSmsCost(0.75);
        assert.equal(0.75, calculate.getSmsCost());

        let calculate2 = calc();
        calculate2.setSmsCost(0.65);
        assert.equal(0.65, calculate2.getSmsCost());
    })

    it("should be able to set sms and call cost", function () {
        let calculate = calc();

        calculate.getCallCost(2.75);
        calculate.getSmsCost(0.85);

        calculate.setSmsCost(0.85);
        calculate.setCallCost(2.75);


        assert.equal(0.85, calculate.getSmsCost());
        assert.equal(2.75, calculate.getCallCost());

        let calculate2 = calc();

        calculate2.setCallCost(1.75);
        calculate2.setSmsCost(0.65);

        assert.equal(1.75, calculate2.getCallCost());
        assert.equal(0.65, calculate2.getSmsCost());

    })

    it("should be able to set warning level", function () {

        let calculate = calc();

        calculate.setWarningLevel(20);

        assert.equal(20, calculate.getWarningLevel());

    })


    it("should be able to set danger level", function () {

        let calculate = calc();

        calculate.setDangerLevel(30);

        assert.equal(30, calculate.getDangerLevel());

    })



    it("should be able to set warning and danger level", function () {

        let calculate = calc();

        calculate.setWarningLevel(20);
        calculate.setDangerLevel(30);

        assert.equal(20, calculate.getWarningLevel());
        assert.equal(30, calculate.getDangerLevel());

    })

});


describe("use values", function () {
    it("should be able to make calls", function () {
        let calculate = calc();

        calculate.setCallCost(2.75);
        calculate.setSmsCost(0.75);
        calculate.setWarningLevel(20);
        calculate.setDangerLevel(30);

        calculate.makeCall();
        calculate.makeCall();
        calculate.makeCall();

        assert.equal(8.25, calculate.getTotalCost());
        assert.equal(8.25, calculate.getTotalCallCost());
        assert.equal(0.00, calculate.getTotalSmsCost());
    })

    it("should be able to send sms's", function () {
        let calculate = calc();

        calculate.setCallCost(2.75);
        calculate.setSmsCost(0.75);
        calculate.setWarningLevel(20);
        calculate.setDangerLevel(30);

        calculate.sendSms();
        calculate.sendSms();
        calculate.sendSms();

        assert.equal(2.25, calculate.getTotalCost());
        assert.equal(0.00, calculate.getTotalCallCost());
        assert.equal(2.25, calculate.getTotalSmsCost());
    })

    it("should be able to send sms's and also make calls", function () {
        let calculate = calc();

        calculate.setCallCost(2.75);
        calculate.setSmsCost(0.75);
        calculate.setWarningLevel(20);
        calculate.setDangerLevel(30);

        calculate.makeCall();
        calculate.makeCall();
        calculate.makeCall();
        calculate.makeCall();
        calculate.sendSms();
        calculate.sendSms();
        calculate.sendSms();
        calculate.sendSms();

        assert.equal(14.00, calculate.getTotalCost());
        assert.equal(11.00, calculate.getTotalCallCost());
        assert.equal(3.00, calculate.getTotalSmsCost());
    });
});


describe("warning & danger level", function () {

    it("it should return a class name of 'warning' if warning level is reached", function () {
        let calculate = calc();

        calculate.setCallCost(2.75);
        calculate.setSmsCost(0.75);
        calculate.setWarningLevel(5);
        calculate.setDangerLevel(10);

        calculate.makeCall();
        calculate.sendSms();
        calculate.sendSms();
        calculate.makeCall();
        assert.equal("warning", calculate.totalClassName());

    })

    it("it should return a class name of 'danger' if danger level is reached", function () {
        let calculate = calc();

        calculate.setCallCost(2.75);
        calculate.setSmsCost(0.75);
        calculate.setWarningLevel(5);
        calculate.setDangerLevel(10);

        calculate.makeCall();
        calculate.sendSms();
        calculate.sendSms();
        calculate.sendSms();
        calculate.makeCall();
        calculate.makeCall();
        assert.equal("danger", calculate.totalClassName());
    })

    it("it should allow the total to increase after reaching the warning level", function () {
        let calculate = calc();

        calculate.setCallCost(2.75);
        calculate.setSmsCost(0.75);
        calculate.setWarningLevel(5);
        calculate.setDangerLevel(20);

        calculate.makeCall();
        calculate.sendSms();
        calculate.sendSms();
        calculate.sendSms();
        calculate.makeCall();
        calculate.makeCall();
        calculate.makeCall();

        assert.equal(11.00, calculate.getTotalCallCost());
        assert.equal(2.25, calculate.getTotalSmsCost());
        assert.equal("warning", calculate.totalClassName());

    });


    it("it should stop the total cost from increasing when the danger level has been reached", function () {
        let calculate = calc();

        calculate.setCallCost(2.75);
        calculate.setSmsCost(0.75);
        calculate.setWarningLevel(5)
        calculate.setDangerLevel(10);

        calculate.makeCall();
        calculate.sendSms();
        calculate.sendSms();
        calculate.sendSms();
        calculate.makeCall();
        calculate.makeCall();

        assert.equal(8.25, calculate.getTotalCallCost());
        assert.equal(2.25, calculate.getTotalSmsCost());
        assert.equal("danger", calculate.totalClassName());

    });
});