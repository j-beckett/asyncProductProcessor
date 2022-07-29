const axios = require('axios');

const sleep = require('util').promisify(setTimeout)
let i = 1;

let num = 1;

function myFunc() {
    const custArr = [
      {
        "resultCode": "SUCCESS",
        "resultReason": null,
        "resultDetail": null,
        "data": {
            "status": "ACTIVE",
            "verification_status": "VERIFIED",
            "verification_reasons": [],
            "customer_id": "151",
            "first_name": "Sample",
            "middle_name": "",
            "nickname": "",
            "last_name": "TEST",
            "birthday": "1992-04-07",
            "drivers_license": "C1234567",
            "drivers_license_expiration": "2022-04-07",
            "state_medical_id": "N/A",
            "permit_expiration": "N/A",
            "email": "sample@test.com",
            "phone": "6282032916",
            "notes": "loyal customer\nprefers flower - indica dominant hybrids",
            "physician_first_name": null,
            "physician_last_name": null,
            "physician_license": null,
            "physician_address": null,
            "physician_phone": null,
            "is_caregiver": false,
            "caregiver_license_number": "",
            "caregiver_name_1": "N/A",
            "caregiver_name_2": "N/A",
            "caregiver_details": [],
            "rewards_balance": 275,
            "rewards_type": "POINTS",
            "gender": "M",
            "signup_date": "2019-04-10T23:44:07.000-07:00",
            "last_visit_date": "2020-04-23 07:42:29.000",
            "last_update": "2020-05-09T09:41:43.000-07:00",
            "opt_out": null,
            "referral_source": "Other",
            "banned": false,
            "warning_1": false,
            "warning_2": false,
            "addresses": [
                {
                    "type": "address_of_record",
                    "street1": "1611 TELEGRAPH AVE",
                    "street2": "",
                    "city": "OAKLAND",
                    "state": "CA",
                    "zipcode": "94612",
                    "primary": true
                },
                {
                    "type": "alternative_address",
                    "street1": "7000 COLISEUM WAY",
                    "street2": "",
                    "city": "OAKLAND",
                    "state": "CA",
                    "zipcode": "94621",
                    "primary": false
                },
                {
                    "type": "secondary_address",
                    "street1": "9500 STERN AVE",
                    "street2": "",
                    "city": "OAKLAND",
                    "state": "CA",
                    "zipcode": "94605",
                    "primary": false
                }
            ],
            "merged_customer_ids": [],
            "merged_into_customer_id": null,
            "patient_type": "ADULT",
            "customer_groups": [
                "INDUSTRY"
            ]
        }
    },
    {
      "resultCode": "SUCCESS",
      "resultReason": null,
      "resultDetail": null,
      "data": {
          "status": "ACTIVE",
          "verification_status": "VERIFIED",
          "verification_reasons": [],
          "customer_id": "1531",
          "first_name": "Jen",
          "middle_name": "",
          "nickname": "",
          "last_name": "beckett",
          "birthday": "1994-01-01",
          "drivers_license": "J1234567",
          "drivers_license_expiration": "2022-12-12",
          "state_medical_id": "N/A",
          "permit_expiration": "N/A",
          "email": "sample@test.com",
          "phone": "6282032916",
          "notes": "loyal customer\nprefers flower - indica dominant hybrids",
          "physician_first_name": null,
          "physician_last_name": null,
          "physician_license": null,
          "physician_address": null,
          "physician_phone": null,
          "is_caregiver": false,
          "caregiver_license_number": "",
          "caregiver_name_1": "N/A",
          "caregiver_name_2": "N/A",
          "caregiver_details": [],
          "rewards_balance": 275,
          "rewards_type": "POINTS",
          "gender": "M",
          "signup_date": "2019-04-10T23:44:07.000-07:00",
          "last_visit_date": "2020-04-23 07:42:29.000",
          "last_update": "2020-05-09T09:41:43.000-07:00",
          "opt_out": null,
          "referral_source": "Other",
          "banned": false,
          "warning_1": false,
          "warning_2": false,
          "addresses": [
              {
                  "type": "address_of_record",
                  "street1": "1611 TELEGRAPH AVE",
                  "street2": "",
                  "city": "OAKLAND",
                  "state": "CA",
                  "zipcode": "94612",
                  "primary": true
              },
              {
                  "type": "alternative_address",
                  "street1": "7000 COLISEUM WAY",
                  "street2": "",
                  "city": "OAKLAND",
                  "state": "CA",
                  "zipcode": "94621",
                  "primary": false
              },
              {
                  "type": "secondary_address",
                  "street1": "9500 STERN AVE",
                  "street2": "",
                  "city": "OAKLAND",
                  "state": "CA",
                  "zipcode": "94605",
                  "primary": false
              }
          ],
          "merged_customer_ids": [],
          "merged_into_customer_id": null,
          "patient_type": "ADULT",
          "customer_groups": [
              "INDUSTRY"
          ]
      }
  }
    ]

    axios.post('http://localhost:3001/customer', custArr[num])
        .then(function (response) {
            console.log(response.status);
        })
        .catch(function (error) {
            console.log(error);
        });

        i++;
  };

//     setTimeout(() => {console.log("loop start. i is:" + i);
//     let topost;
//     if (i%10 === 0 ){
//         topost = { product_id: 'TEST', category_type: 'sushi', product_configurable_fields: {name: "rainbowRoll", brand: "Jens Best"}, pricing: {price_type: "fixed", price_sell: 420} } ;
//     }
//     else {
//         topost = prodArr[i%3];
//     }

//         axios.post('http://localhost:3001/product', topost)
//         .then(function (response) {
//             console.log(response.status);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });

//         i++;

//     }, 1500);
    
// };

(async () => {
    for (let i = 0; i< 100; i++){
        console.time("Slept for")
        await sleep(2000)
        console.timeEnd("Slept for")
        myFunc();
    }
}
)();
