import request from "request-promise";

const generateUrl = (apiKey) => {
  `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;
};

//const API = "";
//const baseUrl = `http://api.scraperapi.com?api_key=${API}&autoparse=true`;

export const greeting = (req, res) => {
  res.send("Welcome to Amazon Scraper API!");
};

// get product details
export const getProduct = async (req, res) => {
  const { productId } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(
      `${generateUrl(api_key)}&url=https://www.amazon.com/dp/${productId}`
    );

    res.status(200).json(JSON.parse(response));
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

// get product reviews
export const getReviews = async (req, res) => {
  const { productId } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(
      `${generateUrl(
        api_key
      )}&url=https://www.amazon.com/product-reviews/${productId}`
    );

    res.status(200).json(JSON.parse(response));
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

// get product offers
export const getOffers = async (req, res) => {
  const { productId } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(
      `${generateUrl(
        api_key
      )}&url=https://www.amazon.com/gp/offer-listing/${productId}`
    );

    res.status(200).json(JSON.parse(response));
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

// get search results
export const search = async (req, res) => {
  const { searchQuery } = req.params;
  const { api_key } = req.query;

  try {
    const response = await request(
      `${generateUrl(api_key)}&url=https://www.amazon.com/s?k=${searchQuery}`
    );

    res.status(200).json(JSON.parse(response));
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
