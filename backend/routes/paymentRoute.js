const express = require("express");

const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const User = require("../models/userModel");


const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");


//Process Payment
router.route("/payment/process").post(isAuthenticatedUser, catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
}));


//Send Stripe Api Key
router.route("/stripeapikey").get(isAuthenticatedUser, catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
}));


module.exports = router;
