// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")

const pgDB = require("./dbseed.js");

let productArr = [];

// Initialize express and define a port
const app = express()
const PORT = 3001

const TIME_TO_SEND = 4000;

//the timer at a certain ID has expired. Prints the ID of which product expires to the console
//now includes some functionality to call another file to insert to DB. (not working)
async function timeUp(product) {
  console.log("THE TIME ENDED!!! Send data now for:"+ product.product_id);


  console.log(product.product_status);
  console.log(product.category_type);
  console.log(product.product_configurable_fields.name);
  console.log(product.product_configurable_fields.brand);
  console.log(product.pricing.price_type);
  console.log(product.pricing.price_sell);

  // let itemForDB = {
  //   "id": product.product_id, 
  //   "status": product.product_status,
  //   "name": product.product_configurable_fields.name,
  //   "brand": product.product_configurable_fields.brand,
  //   "price_type": product.pricing.price_type,
  //   "price": product.pricing.price_sell
  
  // };

  //formatting data for insertion to DB. Currently DB insertion not working 
  let itemForDB = [
    product.product_id, 
    product.product_status,
    product.product_configurable_fields.name,
    product.product_configurable_fields.brand,
    product.pricing.price_type,
    product.pricing.price_sell
  ];

  //send the formatted object off to this function to upsert the db
  await pgDB.connectToDB(itemForDB);
}

//this function returns the ID from a timer being set. 
//because setTimeout MUST call another function, it calls the one above ^
function returnNewTimeID(product){
  return setTimeout(timeUp,TIME_TO_SEND, product);
}

// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json())


//don't need this while running tests
// app.post("/hook", (req, res) => {
//     console.log(req.body) // Call your action on the request here
//     res.status(200).end() // Responding is important
// })

  
app.post("/product" , (req, res) => {
    let incomingProductID = req.body.product_id;

    //console.log(incomingProductID);

    //console.log(req.body) //

    let matchFound = false;

    if (productArr.length === 0){
      console.log("Array empty. Adding item to arr");

      let timeID = returnNewTimeID(req.body); 
      let obj = {"id": incomingProductID, "timeoutID": timeID};
      productArr.push(obj);
    }

    //check the array if there is match based on product id. If no match - add id to array
    else{
     matchFound = productArr.some((currItem, index) => {
        console.log(productArr.length + " is length ");
        console.log("incoming product is:" + incomingProductID);
        console.log("index is: " + index);
        console.log("currItem is:")
        console.log(currItem.id);

        if (incomingProductID === currItem.id){
          console.log("match found in the array");
          clearTimeout(currItem.timeID);
          console.log("timeout cleared. Starting new timer...")

          let timeID = returnNewTimeID(req.body);  

          currItem.timeID = timeID;

         // matchFound = true;

          return true;
        }

        return false;
        
      })

      if (!matchFound){
          console.log("item not found! adding to array")
          let timeID = returnNewTimeID(req.body); 
          let obj = {"id": incomingProductID, "timeoutID": timeID};
          productArr.push(obj);

      }
    }





    res.status(200).end() // Responding is important
});

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))