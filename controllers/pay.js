const express = require('express');
const crypto = require("crypto");
const {initEventPay, initProductPay} = require('../helper/paystack')
const User = require("../models/user");
const secret = "sk_test_833a73fab5a13cf8f7a2b7e8d3b2f65e6abfb84a";
//const https = require('https')

exports.payForTicket = async (req,res)=>{
try{
    const user = await User.findById(req.params.userId)

    
     const response = await initEventPay(user.email,5000);


    //  return response.data.data.authorization_url;
    res.status(200).send({
        checkout_link: response.data.data.authorization_url
    })
} catch (error){
    console.log(error)
    res.status(500).json({
        success:false,
        msg:error
    })
}

   
}

// exports.verifyPayments = async (req,res) =>{
//     try{

//  const user = await User.findById(req.params.userId)

//   // res.json({
//   //   success: true,
//   //   data: user
//   // })
  
// } catch (error){
//     console.log(error)
// }
// }


exports.payToAddProduct = async (req,res)=>{
  try{
      const user = await User.findById(req.params.userId)
  
      
       const response = await initProductPay(user.email,5000);
  
  
      //  return response.data.data.authorization_url;
      res.status(200).send({
          checkout_link: response.data.data.authorization_url
      })
  } catch (error){
      console.log(error)
      res.status(500).json({
          success:false,
          msg:error
      })
  }
  
     
  }