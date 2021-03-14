const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// create a GET route
app.get('/datetime_now', (req, res) => {
    var dt = new Date().toLocaleString();
    res.send({ datetime: dt });
});

// create a GET route
app.get('/shopping_list', (req, res) => {
    var shoppingList = {
        vendors: [
            "Amazon",
            "Noon",
            "Namshi"
        ],
        products: {
            "Amazon": {
                "Product 1": {
                    "description": "Product 1 Sold on Amazon",
                    "price": "65",
                    "quantity": "5"
                },
                "Product 2": {
                    "description": "Product 2 Sold on Amazon",
                    "price": "65",
                    "quantity": "5"
                },
                "Product 3": {
                    "description": "Product 3 Sold on Amazon",
                    "price": "65",
                    "quantity": "5"
                }
            },
            "Noon": {
                "Product 1": {
                    "description": "Product 1 Sold on Noon",
                    "price": "65",
                    "quantity": "5"
                },
                "Product 2": {
                    "description": "Product 2 Sold on Noon",
                    "price": "65",
                    "quantity": "5"
                },
                "Product 3": {
                    "description": "Product 3 Sold on Noon",
                    "price": "65",
                    "quantity": "5"
                }
            },
            "Namshi": {
                "Product 1": {
                    "description": "Product 1 Sold on Namshi",
                    "price": "65",
                    "quantity": "5"
                },
                "Product 2": {
                    "description": "Product 2 Sold on Namshi",
                    "price": "65",
                    "quantity": "5"
                },
                "Product 3": {
                    "description": "Product 3 Sold on Namshi",
                    "price": "65",
                    "quantity": "5"
                }
            }
        }
    }
    res.send({ shoppingData: shoppingList });
});