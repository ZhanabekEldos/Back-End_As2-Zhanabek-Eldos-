require("dotenv").config();

const express = require("express");
const path = require("path");
const fetch = require("node-fetch");

const app = express();

// frontend
app.use(express.static(path.join(__dirname, "public")));

// 🔹 TEST
app.get("/test", (req, res) => {
  res.json({ message: "Backend works" });
});

// 🔹 1. Random User API
app.get("/api/random-user", async (req, res) => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];

    res.json({
      firstName: user.name.first,
      lastName: user.name.last,
      gender: user.gender,
      picture: user.picture.large,
      age: user.dob.age,
      dob: user.dob.date,
      city: user.location.city,
      country: user.location.country,
      address: `${user.location.street.name} ${user.location.street.number}`
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch random user" });
  }
});

// 🔹 2. REST Countries API
app.get("/api/country/:name", async (req, res) => {
  try {
    const countryName = req.params.name;

    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const data = await response.json();
    const country = data[0];

    res.json({
      name: country.name.common,
      capital: country.capital ? country.capital[0] : "N/A",
      languages: country.languages
        ? Object.values(country.languages).join(", ")
        : "N/A",
      currency: country.currencies
        ? Object.keys(country.currencies)[0]
        : "N/A",
      flag: country.flags.png
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch country data" });
  }
});

// 🔹 3. Exchange Rate API
app.get("/api/exchange/:currency", async (req, res) => {
  try {
    const currency = req.params.currency;

    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_API_KEY}/latest/${currency}`
    );
    const data = await response.json();

    res.json({
      base: currency,
      usd: data.conversion_rates.USD,
      kzt: data.conversion_rates.KZT
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch exchange rates" });
  }
});

// 🔹 4. News API
app.get("/api/news/:country", async (req, res) => {
  try {
    const country = req.params.country;
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?q=${country}&language=en&pageSize=5&apiKey=${process.env.NEWS_API_KEY}`
    );
    const data = await response.json();
    res.json(data.articles);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

// 🚀 START SERVER
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
