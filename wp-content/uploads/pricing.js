const IsDiscountInPercent = false;
const BasePrice = {
    "default": {
        AdditionalRegisterMonthly: 49,
        AdditionalRegisterYearlyMonth: 39,
        MonthlyStartUp: 69,
        YearlyMonthStartUp: 59,
        MonthlyOneStore: 119,
        YearlyMonthOneStore: 99,
        CurrencyName: "USD",
        CurrencySymbol: "$",
        BasePriceStartupMonthly: 119,
        BasePriceStartupYearlyMonthly: 99,
        StartUpDiscountMonthly: 0,
        StartUpDiscountYearlyMonthly: 0,
        OneStoreDiscountMonthly: 0,
        OneStoreDiscountYearlyMonthly: 10
    },
    "au": {
        AdditionalRegisterMonthly: 49,
        AdditionalRegisterYearlyMonth: 39,
        MonthlyStartUp: 89,
        YearlyMonthStartUp: 79,
        MonthlyOneStore: 129,
        YearlyMonthOneStore: 109,
        CurrencyName: "AUD",
        CurrencySymbol: "$",
        BasePriceStartupMonthly: 129,
        BasePriceStartupYearlyMonthly: 109,
        StartUpDiscountMonthly: 0,
        StartUpDiscountYearlyMonthly: 0,
        OneStoreDiscountMonthly: 0,
        OneStoreDiscountYearlyMonthly: 10
    },
    "nz": {
        AdditionalRegisterMonthly: 69,
        AdditionalRegisterYearlyMonth: 59,
        MonthlyStartUp: 149,
        YearlyMonthStartUp: 129,
        MonthlyOneStore: 179,
        YearlyMonthOneStore: 159,
        CurrencyName: "NZD",
        CurrencySymbol: "$",
        BasePriceStartupMonthly: 110,
        BasePriceStartupYearlyMonthly: 90,
        StartUpDiscountMonthly: 0,
        StartUpDiscountYearlyMonthly: 0,
        OneStoreDiscountMonthly: 0,
        OneStoreDiscountYearlyMonthly: 0
    },
    "uk": {
        AdditionalRegisterMonthly: 39,
        AdditionalRegisterYearlyMonth: 29,
        MonthlyStartUp: 59,
        YearlyMonthStartUp: 49,
        MonthlyOneStore: 89,
        YearlyMonthOneStore: 69,
        CurrencyName: "GBP",
        CurrencySymbol: "£",
        BasePriceStartupMonthly: 89,
        BasePriceStartupYearlyMonthly: 69,
        StartUpDiscountMonthly: 0,
        StartUpDiscountYearlyMonthly: 0,
        OneStoreDiscountMonthly: 0,
        OneStoreDiscountYearlyMonthly: 10
    },
    "ca": {
        AdditionalRegisterMonthly: 49,
        AdditionalRegisterYearlyMonth: 39,
        MonthlyStartUp: 89,
        YearlyMonthStartUp: 79,
        MonthlyOneStore: 139,
        YearlyMonthOneStore: 119,
        CurrencyName: "CAD",
        CurrencySymbol: "$",
        BasePriceStartupMonthly: 139,
        BasePriceStartupYearlyMonthly: 119,
        StartUpDiscountMonthly: 0,
        StartUpDiscountYearlyMonthly: 0,
        OneStoreDiscountMonthly: 0,
        OneStoreDiscountYearlyMonthly: 20
    },
    "za": {
        AdditionalRegisterMonthly: 499,
        AdditionalRegisterYearlyMonth: 399,
        MonthlyStartUp: 949,
        YearlyMonthStartUp: 849,
        MonthlyOneStore: 1349,
        YearlyMonthOneStore: 1149,
        CurrencyName: "ZA",
        CurrencySymbol: "R",
        BasePriceStartupMonthly: 1349,
        BasePriceStartupYearlyMonthly: 1149,
        StartUpDiscountMonthly: 0,
        StartUpDiscountYearlyMonthly: 0,
        OneStoreDiscountMonthly: 0,
        OneStoreDiscountYearlyMonthly: 100
    },
    "sg": {
        AdditionalRegisterMonthly: 49,
        AdditionalRegisterYearlyMonth: 39,
        MonthlyStartUp: 89,
        YearlyMonthStartUp: 79,
        MonthlyOneStore: 129,
        YearlyMonthOneStore: 109,
        CurrencyName: "SGD",
        CurrencySymbol: "$",
        BasePriceStartupMonthly: 129,
        BasePriceStartupYearlyMonthly: 109,
        StartUpDiscountMonthly: 0,
        StartUpDiscountYearlyMonthly: 0,
        OneStoreDiscountMonthly: 0,
        OneStoreDiscountYearlyMonthly: 20
    },
    "in": {
        AdditionalRegisterMonthly: 2499,
        AdditionalRegisterYearlyMonth: 1999,
        MonthlyStartUp: 4999,
        YearlyMonthStartUp: 3999,
        MonthlyOneStore: 6999,
        YearlyMonthOneStore: 5999,
        CurrencyName: "INR",
        CurrencySymbol: "₹",
        BasePriceStartupMonthly: 6999,
        BasePriceStartupYearlyMonthly: 5999,
        StartUpDiscountMonthly: 0,
        StartUpDiscountYearlyMonthly: 0,
        OneStoreDiscountMonthly: 0,
        OneStoreDiscountYearlyMonthly: 500
    }
};

function RoundUp(input) {
    return Math.round((input + Number.EPSILON) * 100) / 100;
}

function onLoadGetCountry() {
    var path = window.location.href;
    var country = document.getElementById("PricingRegions");
    if (path.indexOf("/au") > -1) {
        country.value = "au";
    }
    else if (path.indexOf("/nz") > -1) {
        country.value = "nz";
    }
    else if (path.indexOf("/en-ca") > -1) {
        country.value = "ca";
    }
    else if (path.indexOf("/gb") > -1) {
        country.value = "uk";
    }
    else if (path.indexOf("/za") > -1) {
        country.value = "za";
    }
    else if (path.indexOf("/sg") > -1) {
        country.value = "sg";
    }
    else if (path.indexOf("/in") > -1) {
        country.value = "in";
    }
    else {
        country.value = "default";
    }
    updatePriceForAllPlan();
}

function updatePriceForAllPlan() {
    var region = document.getElementById('PricingRegions').value;
    var noOfLocations = parseInt(document.getElementById('PricingLocations').value);
    var noOfRegister = parseInt(document.getElementById('PricingRegisters').value);
    var startUpMonthly = BasePrice[region].MonthlyStartUp;
    var startUpYearlyMonthly = BasePrice[region].YearlyMonthStartUp;
    var oneStoreMonthly = BasePrice[region].MonthlyOneStore;
    var oneStoreYearlyMonthly = BasePrice[region].YearlyMonthOneStore;
    var registerMonthly = BasePrice[region].AdditionalRegisterMonthly;
    var basePriceStartupMonthly = BasePrice[region].BasePriceStartupMonthly;
    var basePriceStartupYearlyMonthly = BasePrice[region].BasePriceStartupYearlyMonthly;
    var registerYearlyMonthly = BasePrice[region].AdditionalRegisterYearlyMonth;
    var startUpCurrency = BasePrice[region].CurrencyName;
    var currencySymbol = BasePrice[region].CurrencySymbol;
    var oneStorePrice = undefined;
    var oneStorePriceDetail = undefined;
    var startUpPrice = undefined;
    var startUpPriceDetail = undefined;
    //const startupYearMonthlyAmt = document.getElementById('startupYearMonthlyAmt');
    //const onestoreYearMonthlyAmt = document.getElementById('onestoreYearMonthlyAmt');
    //const startupMonthlyAmt = document.getElementById('startupMonthlyAmt');
    //const onestoreMonthlyAmt = document.getElementById('onestoreMonthlyAmt');
    //startupYearMonthlyAmt.innerHTML= currencySymbol+startUpYearlyMonthly+"/month";
    //onestoreYearMonthlyAmt.innerHTML=currencySymbol+oneStoreYearlyMonthly+"/month";
    //startupMonthlyAmt.innerHTML=currencySymbol+startUpMonthly+"/month";
    //onestoreMonthlyAmt.innerHTML=currencySymbol+oneStoreMonthly+"/month";

    const startUptryBtn = document.getElementById('startUptryBtn');
    startUptryBtn.classList.remove("disabled-link");

    const startUpStartedBtn = document.getElementById('startUpStartedBtn');
    startUpStartedBtn.classList.remove("disabled-link");

    const essentialsStartedBtn = document.getElementById('EssentialMobile');
    essentialsStartedBtn.classList.remove("disabled-link");

    const currencyName = document.getElementById('currencyNameStartup');
    currencyName.innerHTML = startUpCurrency;

    const currencyNameMobile = document.getElementById('currencyNameStartupMobile');
    currencyNameMobile.innerHTML = startUpCurrency;

    const currencyNameOneStore = document.getElementById('currencyNameOneStore');
    currencyNameOneStore.innerHTML = startUpCurrency;

    const currencyNameOneStoreMobile = document.getElementById('currencyNameOneStoreMobile');
    currencyNameOneStoreMobile.innerHTML = startUpCurrency;

    var discountStartUpMonthly = IsDiscountInPercent ? (BasePrice[region].StartUpDiscountMonthly * noOfLocations * startUpMonthly) / 100 : BasePrice[region].StartUpDiscountMonthly * noOfLocations;
    var discountStartUpMonthlyBase = IsDiscountInPercent ? (BasePrice[region].StartUpDiscountMonthly * startUpMonthly) / 100 : BasePrice[region].StartUpDiscountMonthly;
    var discountStartUpYearlyMonthly = IsDiscountInPercent ? (BasePrice[region].StartUpDiscountYearlyMonthly * noOfLocations * startUpYearlyMonthly) / 100 : BasePrice[region].StartUpDiscountYearlyMonthly * noOfLocations;
    var discountStartUpYearlyMonthlyBase = IsDiscountInPercent ? (BasePrice[region].StartUpDiscountYearlyMonthly * startUpYearlyMonthly) / 100 : BasePrice[region].StartUpDiscountYearlyMonthly;
    var discountOneStoreMonthly = IsDiscountInPercent ? (BasePrice[region].OneStoreDiscountMonthly * noOfLocations * oneStoreMonthly) / 100 : BasePrice[region].OneStoreDiscountMonthly * noOfLocations;
    var discountOneStoreMonthlyBase = IsDiscountInPercent ? (BasePrice[region].OneStoreDiscountMonthly * oneStoreMonthly) / 100 : BasePrice[region].OneStoreDiscountMonthly;
    var discountOneStoreYearlyMonthly = IsDiscountInPercent ? (BasePrice[region].OneStoreDiscountYearlyMonthly * noOfLocations * oneStoreYearlyMonthly) / 100 : BasePrice[region].OneStoreDiscountYearlyMonthly * noOfLocations;
    var discountOneStoreYearlyMonthlyBase = IsDiscountInPercent ? (BasePrice[region].OneStoreDiscountYearlyMonthly * oneStoreYearlyMonthly) / 100 : BasePrice[region].OneStoreDiscountYearlyMonthly;


    if (noOfLocations <= 1 && discountStartUpYearlyMonthly > 0) {
        document.getElementById('startUpPriceWithoutDiscount').style.visibility = 'visible';
        document.getElementById('startUpPriceWithoutDiscount').innerHTML = currencySymbol + (startUpYearlyMonthly + ((noOfRegister - noOfLocations) * registerYearlyMonthly));

        document.getElementById('startUpPriceWithoutDiscountMobile').style.visibility = 'visible';
        document.getElementById('startUpPriceWithoutDiscountMobile').innerHTML = currencySymbol + (startUpYearlyMonthly + ((noOfRegister - noOfLocations) * registerYearlyMonthly));
    }
    else {
        document.getElementById('startUpPriceWithoutDiscount').style.visibility = 'hidden';
        document.getElementById('startUpPriceWithoutDiscountMobile').style.visibility = 'hidden';
    }

    if (discountOneStoreYearlyMonthly > 0) {
        document.getElementById('OneStoreWithoutDiscount').style.visibility = 'visible';
        document.getElementById('OneStoreWithoutDiscount').innerHTML = currencySymbol + (noOfLocations * oneStoreYearlyMonthly + ((noOfRegister - noOfLocations) * registerYearlyMonthly));

        document.getElementById('OneStoreWithoutDiscountMobile').style.visibility = 'visible';
        document.getElementById('OneStoreWithoutDiscountMobile').innerHTML = currencySymbol + (noOfLocations * oneStoreYearlyMonthly + ((noOfRegister - noOfLocations) * registerYearlyMonthly));
    }
    else {
        document.getElementById('OneStoreWithoutDiscount').style.visibility = 'hidden';
        document.getElementById('OneStoreWithoutDiscountMobile').style.visibility = 'hidden';
    }

    if (noOfLocations > 1 || noOfRegister > 1) {
        document.getElementById("gold").style.top = "155px";
        document.getElementById("baseCost").style.display = "table-row";
        document.getElementById("extraLocation").style.display = "table-row";
        document.getElementById("extraRegister").style.display = "table-row";


        document.getElementById('extraRegisterOneStore').innerHTML = currencySymbol + (noOfRegister - noOfLocations) * registerYearlyMonthly;
    }

    startUpYearlyMonthly -= discountStartUpYearlyMonthly;
    oneStoreYearlyMonthly -= discountOneStoreYearlyMonthly;

    startUpMonthly -= discountStartUpMonthly;
    oneStoreMonthly -= discountOneStoreMonthly;

    startUpYearlyMonthly = RoundUp(startUpYearlyMonthly);
    oneStoreYearlyMonthly = RoundUp(oneStoreYearlyMonthly);
    startUpMonthly = RoundUp(startUpMonthly);
    oneStoreMonthly = RoundUp(oneStoreMonthly);


    //if no of location or register is greater than 1 then show details
    if (noOfLocations > 1 || noOfRegister > 1) {
        var extraLocationOneStore = (noOfLocations - 1) * basePriceStartupYearlyMonthly;
        var extraLocationOneStoreMonthly = (noOfLocations - 1) * basePriceStartupMonthly;

        var extraRegisterStartUp = (noOfRegister - noOfLocations) * registerYearlyMonthly;

        var extraRegisterOneStore = (noOfRegister - noOfLocations) * registerYearlyMonthly;
        var extraRegisterOneStoreMonthly = (noOfRegister - noOfLocations) * registerMonthly;

        if (noOfLocations > 1) {
            document.getElementById('extraLocationStartUp').innerHTML = "-";
            document.getElementById('extraRegisterStartUp').innerHTML = "-";
            startUpPrice = "NA";
            startUpPriceDetail = "This plan is not suitable for you. </br>Supports max 1 location.";
            currencyName.innerHTML = "";
            const startUptryBtn = document.getElementById('startUptryBtn');
            const startUpStartedBtn = document.getElementById('startUpStartedBtn');
            const essentialsStartedBtn = document.getElementById('EssentialMobile');
            startUptryBtn.classList.add("disabled-link");
            startUpStartedBtn.classList.add("disabled-link");
            essentialsStartedBtn.classList.add("disabled-link");
        }
        else {
            document.getElementById('extraLocationStartUp').innerHTML = currencySymbol + 0;
            document.getElementById('extraRegisterStartUp').innerHTML = currencySymbol + extraRegisterStartUp;
            startUpPrice = currencySymbol + (startUpYearlyMonthly + 0 + extraRegisterOneStore);
            // per month billed annually or $454 billed monthly
            startUpPriceDetail = "per month billed annually </br>or  " + currencySymbol + (startUpMonthly + extraLocationOneStoreMonthly + extraRegisterOneStoreMonthly)
                + " billed monthly";
        }

        if (discountOneStoreYearlyMonthlyBase > 0) {
            if (noOfLocations > 1) {
                document.getElementById('extraLocationOneStore').innerHTML = currencySymbol + (noOfLocations - 1) * (basePriceStartupYearlyMonthly - discountOneStoreYearlyMonthlyBase);
                document.getElementById('extraLocationOneStoreWD').innerHTML = currencySymbol + (noOfLocations - 1) * basePriceStartupYearlyMonthly;
                document.getElementById('extraLocationOneStoreWD').style.visibility = 'visible';
            }
            else {
                document.getElementById('extraLocationOneStore').innerHTML = currencySymbol + (noOfLocations - 1) * basePriceStartupYearlyMonthly;
                document.getElementById('extraLocationOneStoreWD').style.visibility = 'hidden';
            }

        }
        else {
            document.getElementById('extraLocationOneStore').innerHTML = currencySymbol + (noOfLocations - 1) * basePriceStartupYearlyMonthly;
            document.getElementById('extraLocationOneStoreWD').style.visibility = 'hidden';
        }

        if (discountStartUpYearlyMonthlyBase > 0) {
            document.getElementById('baseCostStartUp').innerHTML = currencySymbol + ((startUpYearlyMonthly + discountStartUpYearlyMonthly) - discountStartUpYearlyMonthlyBase);
            document.getElementById('baseCostStartUpWD').innerHTML = currencySymbol + startUpYearlyMonthly;
            document.getElementById('baseCostStartUpWD').style.visibility = 'visible';
        }
        else {
            document.getElementById('baseCostStartUp').innerHTML = currencySymbol + startUpYearlyMonthly;
            document.getElementById('baseCostStartUpWD').style.visibility = 'hidden';
        }
        
        if (discountOneStoreYearlyMonthlyBase > 0) {
            document.getElementById('baseCostOneStore').innerHTML = currencySymbol + ((oneStoreYearlyMonthly + discountOneStoreYearlyMonthly) - discountOneStoreYearlyMonthlyBase);
            document.getElementById('baseCostOneStoreWD').innerHTML = currencySymbol + (oneStoreYearlyMonthly + discountOneStoreYearlyMonthly);
            document.getElementById('baseCostOneStoreWD').style.visibility = 'visible';
        }
        else {
            document.getElementById('baseCostOneStoreWD').style.visibility = 'hidden';
            document.getElementById('baseCostOneStore').innerHTML = currencySymbol + (oneStoreYearlyMonthly + discountOneStoreYearlyMonthly);
        }
        

        oneStorePrice = currencySymbol + (oneStoreYearlyMonthly + extraLocationOneStore + extraRegisterOneStore);
        oneStorePriceDetail = "per month billed annually </br>or " + currencySymbol + (oneStoreMonthly + extraLocationOneStoreMonthly + extraRegisterOneStoreMonthly)
            + " billed monthly";
    }
    else {

        document.getElementById("gold").style.top = "65px";
        document.getElementById("baseCost").style.display = "none";
        document.getElementById("extraLocation").style.display = "none";
        document.getElementById("extraRegister").style.display = "none";
        oneStorePrice = currencySymbol + oneStoreYearlyMonthly;
        oneStorePriceDetail = "per month billed annually </br>or " + currencySymbol + oneStoreMonthly + " billed monthly";
        startUpPrice = currencySymbol + startUpYearlyMonthly;
        startUpPriceDetail = "per month billed annually </br>or  " + currencySymbol + startUpMonthly + " billed monthly";
    }

    document.getElementById('oneStorePrice').innerHTML = oneStorePrice;
    document.getElementById('oneStorePriceMobile').innerHTML = oneStorePrice;
    document.getElementById('oneStorePriceDetail').innerHTML = oneStorePriceDetail;
    document.getElementById('oneStorePriceDetailMobile').innerHTML = oneStorePriceDetail;
    document.getElementById('startUpPrice').innerHTML = startUpPrice;
    document.getElementById('startUpPriceMobile').innerHTML = startUpPrice;
    document.getElementById('startUpPriceDetail').innerHTML = startUpPriceDetail;
    document.getElementById('startUpPriceDetailMobile').innerHTML = startUpPriceDetail;

}

function updateRegisterNo() {
    var noOfLocations = parseInt(document.getElementById('PricingLocations').value);
    var noOfRegister = parseInt(document.getElementById('PricingRegisters').value);
    if (isNaN(noOfLocations) || noOfLocations == 0) {
        noOfLocations = 1;
        document.getElementById('PricingLocations').value = 1;
    }
    if (noOfRegister < noOfLocations) {
        document.getElementById('PricingRegisters').value = noOfLocations;
    }
    updatePriceForAllPlan();
}

function updateLocationNo() {
    var noOfLocations = parseInt(document.getElementById('PricingLocations').value);
    var noOfRegister = parseInt(document.getElementById('PricingRegisters').value);
    if (isNaN(noOfRegister) || noOfRegister == 0) {
        noOfRegister = 1;
        document.getElementById('PricingRegisters').value = 1;
    }
    if (noOfRegister < noOfLocations) {
        document.getElementById('PricingLocations').value = noOfRegister;
    }
    updatePriceForAllPlan();
}





