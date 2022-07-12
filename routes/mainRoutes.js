import express from "express";

import {
  greeting,
  getOffers,
  getProduct,
  getReviews,
  search,
} from "../controllers/mainController.js";

const router = express.Router();

router.get("/", greeting);
router.get("/products/:productId", getProduct);
router.get("/products/:productId/reviews", getReviews);
router.get("/products/:productId/offers", getOffers);
router.get("/search/:searchQuery", search);

export default router;
