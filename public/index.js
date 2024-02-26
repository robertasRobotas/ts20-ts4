"use strict";
// ENUM
var PAY_STATUS;
(function (PAY_STATUS) {
    PAY_STATUS["PAID"] = "PAID";
    PAY_STATUS["PENDING"] = "PENDING";
})(PAY_STATUS || (PAY_STATUS = {}));
const pay = { sum: 32, status: PAY_STATUS.PAID };
console.log(pay);
