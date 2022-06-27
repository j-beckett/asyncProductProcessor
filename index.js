// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")

let productArr = [];

// Initialize express and define a port
const app = express()
const PORT = 3001

//the timer at a certain ID has expired. Prints the ID of which product expires to the console
function timeUp(productEnding) {
  console.log("THE TIME ENDED!!! Send data now for:"+ productEnding);
}

//this function returns the ID from a timer being set. 
//because setTimeout MUST call another function, it calls the one above ^
function returnNewTimeID(product){
  return setTimeout(timeUp,10000, product);
}

// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json())


//don't need this while running tests
// app.post("/hook", (req, res) => {
//     console.log(req.body) // Call your action on the request here
//     res.status(200).end() // Responding is important
// })

  
app.post("/product" , (req, res) => {
    let incomingProduct = req.body.product_id;

    //console.log(incomingProduct);

    //console.log(req.body) //

    let matchFound = false;

    if (productArr.length === 0){
      console.log("Array empty. Adding item to arr");

      let timeID = returnNewTimeID(incomingProduct); 
      let obj = {"id": incomingProduct, "timeoutID": timeID};
      productArr.push(obj);
    }

    //check the array if there is match based on product id. If no match - add id to array
    else{
     matchFound = productArr.some((currItem, index) => {
        console.log(productArr.length + " is length ");
        console.log("incoming product is:" + incomingProduct);
        console.log("index is: " + index);
        console.log("currItem is:")
        console.log(currItem.id);

        if (incomingProduct === currItem.id){
          console.log("match found in the array");
          clearTimeout(currItem.timeID);
          console.log("timeout cleared. Starting new timer...")

          let timeID = returnNewTimeID(incomingProduct);  

          currItem.timeID = timeID;

         // matchFound = true;

          return true;
        }

        return false;
        
      })

      if (!matchFound){
          console.log("item not found! adding to array")
          let timeID = returnNewTimeID(incomingProduct); 
          let obj = {"id": incomingProduct, "timeoutID": timeID};
          productArr.push(obj);

      }
    }





    res.status(200).end() // Responding is important
});

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))