"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Name";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
//# sourceMappingURL=unknow-never.js.map