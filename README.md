This is mini projeect with Nodejs and mongoDB
Used this code to create the API request and response.
We have three API's

1. List All the products
    URL: http://localhost:3000/api/v1/products
    Method: GET
   
2. Get particular product with Id
   URL: http://localhost:3000/api/v1/product/67fde61c1a1e73c960e66e5c
   Method: GET
3. Order the booking, it will reduce the stock and store the datas in order table.
   URL: http://localhost:3000/api/v1/order
   Method: POST
   POSTJson:
   
   [
  {
  "product":{
  "_id": {
    "$oid": "67fde61c1a1e73c960e66e5c"
  },
  "name": "OPPO F21s Pro 5G",
  "price": 245.67,
  "description": "OPPO F21s Pro 5G is a powerful device with a RAM extension feature, that offers brilliant operational speed to users.",
  "ratings": 4.5,
  "images": [
    {
      "image": "/images/products/1.jpg"
    },
    {
      "image": "/images/products/2.jpg"
    }
  ],
  "category": "Mobile Phones",
  "seller": "Amazon",
  "stock": 5,
  "numOfReviews": 15,
  "reviews": []
},
  "qty":1  
  }]

4. Products json path: https://github.com/pelavarasan/mini-ecommerce-nodejs-mongodb/tree/main/backend/data/products.json
