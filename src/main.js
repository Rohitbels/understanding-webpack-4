require("babel-runtime/regenerator");
require("./main.css");
require("./index.html");


var a = async (args) => {
    const { a , b } = args;
    await console.log("We are here" ,a ,b)
}

a({"a":1, "b":2});