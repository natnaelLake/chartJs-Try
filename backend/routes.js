const express = require("express");
const routes = express.Router();
const News = require('./model')
routes.get("/news-count-by-month", async (req, res) => {
  try {
    const newsWithMonth = await News.aggregate([
      {
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%m", 
              date: "$createdAt", 
            },
          },
          count: { $sum: 1 }, 
        },
      },
      {
        $sort: { _id: 1 },
      },
    ]);
    res.json(newsWithMonth);
  } catch (error) {
    console.error("Aggregation error:", error);
    res.status(500).json({ error: "Aggregation failed" });
  }
});

module.exports = routes;
