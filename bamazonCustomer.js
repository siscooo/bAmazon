var mysql = require("mysql");

var prompt = require("prompt");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "bamazon"
});

connection.connect(function(err) {
    if(err) {
        console.log("Error connecting to Database");
    return;
    }
    console.log("Connection established");

    var schema = {
        properties: {
            ID: {
                message: "Enter the ID of the product you wish to purchase.",
                pattern: /^[0-9] [0-9]$|^[0-9][0-9]$/,
                required: true
            },
            howMany: {
                message: "Enter the quantity of the item you wish to purchase.",
                pattern: /^[0-9][0-9]$|^[0-9]$/,
                required: true
            }
        }
    };
    var schema2 = {
        properties: {
            AnotherPurchase: {
                message: "Would you like to purchase another item?",
                pattern: /(no|n|yes|y)/,
                required: true
            },
        }
    };
});

var beginApp = function(){
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        return (getbAmazonProducts(result));
    });
}

var stopApp = function() {
    return next(err);
}

var getbAmazonProducts = function(products) {
    console.log("Hello, Welcome to Bamazon! Here are the products that are currently available.");
    for (var i = 0; products.length; i++) {
        var productsResults = 
        "\r\n" + "ItemID: " + products[i].ItemID +
        "\r\n" + "Product: " + products[i].ProductName +
        "\r\n" + "Department: " + products[i].DepartmentName +
        "\r\n" + "Price: $" + products[i].Price + 
        "\r\n" + "Current Stock: " + products[i].StockQuantity;
        console.log(productsResults);
    }
    userSelectID();
}

var userSelectID = function() {
    prompt.start();
    console.log("Enter the ID of the product you would like to purchase.");

    prompt.get(schema, function (err, res){
        if (err) {
            console.log(err)
        }

    var userChoiceID = parseInt(result.ID);
    var userChoiceHowMany = parseInt(result.howMany);
    console.log("id=" + userChoiceID + " how many=" + userChoiceHowMany);

    var checkInventory = function () {
        connection.query("Select * FROM products WHERE ItemID =" + userChoiceID, function(err, res){
            if (err) throw err;
            console.log(res);

            var userWantsToBuy = userChoiceHowMany;
            var productInventory = result[0].StockQuantity;
            var productsPrice = result[0].Price;
            var isInStock = productInventory - userWantsToBuy;
            var totalCost = productsPrice * userWantsToBuy;

            if (userWantsToBuy > productInventory || productInventory === 0) {
                console.log(" Sorry, but that product is out of stock. Come back soon");
                userSelectID();
            }
            else {
                console.log("There are " + result[0].StockQuantity+ "of " +result[0].ProductName);
                console.log("You are purchasing " + userWantsToBuy + " " + result[0].ProductName + "at $" + result[0].Price + " per product.");
                console.log("Your total is $" + totalCost);
                connection.query("Update products SET StockQuantity = "+isInStock+" WHERE ItemID = "+userChoiceID, function(err, res) {
                    if (err) throw err;
                        connection.query("SELECT ItemID, ProductName, Price, StockQuantity FROM products WHERE ItemID = " + userChoiceID, function(err, res){
                            console.log(result);
                        });
                });
                prompt.get(schema2, function (err, res) {
                    if (err) {
                        console.log(err)
                    }
                    console.log(result);
                    var userAnswer = result.AnotherPurchase;
                    if (userAnswer === "n" || userAnswer === "no") {
                        stopApp();
                    }
                    else{
                        beginApp();
                    }
                });
            }
        });
        checkInventory();
    }
    })
beginApp();
}