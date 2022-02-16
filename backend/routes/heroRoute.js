const express = require("express");
const Hero = require("../models/heroModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");


const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();


// Get All Product
router.route("/hero/find").get(catchAsyncErrors(async (req, res, next) => {

  const hero = await Hero.find();

  if (!hero) {
    return next(new ErrorHander("Hero not found", 404));
  }

  res.status(200).json({
    success: true,
    hero,
  });
}));



// Get All Product (Admin)

router.route("admin/hero/find").get(isAuthenticatedUser, authorizeRoles("admin"), catchAsyncErrors(async (req, res, next) => {

  const hero = await Hero.find();

  if (!hero) {
    return next(new ErrorHander("Hero not found", 404));
  }

  res.status(200).json({
    success: true,
    hero,
  });
}));

// Create Product -- Admin
router.route("/admin/hero/new").post(isAuthenticatedUser, authorizeRoles("admin"), catchAsyncErrors(async (req, res, next) => {
  let images = req.body.images;


  const result = await cloudinary.v2.uploader.upload(images, {
    folder: "hero",
  });


  const hero = await Hero.create({
    public_id: result.public_id,
    url: result.secure_url
  });

  res.status(201).json({
    success: true,
    hero,
  });
}));

router.route("/admin/hero/:id")

  // Update Product -- Admin
  .put(isAuthenticatedUser, authorizeRoles("admin"), catchAsyncErrors(async (req, res, next) => {
    let hero = await Hero.findById(req.params.id);

    if (!hero) {
      return next(new ErrorHander("Hero not found", 404));
    }

    // Images Start Here
    let images = req.body.images;


    let result = [];


    if (images !== undefined) {
      // Deleting Images From Cloudinary

      await cloudinary.v2.uploader.destroy(hero.public_id);


      result = await cloudinary.v2.uploader.upload(images, {
        folder: "hero",
      });


    }


    hero = await Hero.findByIdAndUpdate(req.params.id, {
      public_id: result.public_id,
      url: result.secure_url
    },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });

    res.status(200).json({
      success: true,
      hero,
    });
  }))


  // Delete Product
  .delete(isAuthenticatedUser, authorizeRoles("admin"), catchAsyncErrors(async (req, res, next) => {
    const hero = await Hero.findById(req.params.id);

    if (!hero) {
      return next(new ErrorHander("Hero not found", 404));
    }

    // Deleting Images From Cloudinary
    for (let i = 0; i < hero.images.length; i++) {
      await cloudinary.v2.uploader.destroy(hero.images[i].public_id);
    }

    await hero.remove();

    res.status(200).json({
      success: true,
      message: "Hero Delete Successfully",
    });
  }));


// Get Product Details

router.route("/hero/:id").get(catchAsyncErrors(async (req, res, next) => {
  const hero = await Hero.findById(req.params.id);

  if (!hero) {
    return next(new ErrorHander("Hero not found", 404));
  }

  res.status(200).json({
    success: true,
    hero,
  });
}));


module.exports = router;
