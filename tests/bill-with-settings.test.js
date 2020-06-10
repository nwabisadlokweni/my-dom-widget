describe("The bill with settings factory function", function () {
    it("should be able to set call cost", function () {
            let settingsBill = BillWithSettings();

            settingsBill.getCallCost(1.85);
            assert.equal(1.85, settingsBill.getCallCost());

            let settingsBill2 = BillWithSettings();

            settingsBill.getCallCost(2.75);
            assert.equal(2.75, settingsBill2.getCallCost());
        })



it("should be able to set sms cost", function () {
        let settingsBill = BillWithSettings();

        settingsBill.getCallCost(0.85);
        assert.equal(0.85, settingsBill.getSmsCost());

        let settingsBill2 = BillWithSettings();
        settingsBill.getSmslCost(0.75);
        assert.equal(0.75, settingsBill2.getSmsCost());
    })



    it("should be able to set sms and call cost", function () {
            let settingsBill = BillWithSettings();

            settingsBill.getCallCost(2.75);
            settingsBill.getSmsCost(0.85);

            assert.equal(2.75, settingsBill.getCallCost());
            assert.equal(0.85, settingsBill.getSmsCost());

            let settingsBill2 = BillWithSettings();

            settingsBill.getCalllCost(1.75);
            settingsBill.getSmslCost(0.65);

            assert.equal(0.65, settingsBill2.getSmsCost());
            assert.equal(1.75, settingsBill2.getCallCost());
        })



        it("should be able to set warning level", function () {

                let settingsBill = BillWithSettings();

                settingsBill.setWarningLevel(20);

                assert.equal(20, settingsBill.getWarningLevel());

            })


            it("should be able to set critical level", function () {

                    let settingsBill = BillWithSettings();

                    settingsBill.setCriticalLevel(30);

                    assert.equal(30, settingsBill.getCriticalLevel());

                })



                it("should be able to set warning and critical level", function () {

                        let settingsBill = BillWithSettings();

                        settingsBill.setWarningLevel(15);
                        settingsBill.setCriticalLevel(25);

                        assert.equal(15, settingsBill.getWarningLevel());
                        assert.equal(25, settingsBill.getCriticalLevel());

                    })

 });