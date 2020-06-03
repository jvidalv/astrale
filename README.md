# Astrale
<p align="center">
  <img src="https://i.imgur.com/1JDnz7u.png">
</p>

## 🌍 About the app
Astrale is an astrology mobile application programmed with **React Native** (JavaScript) using **Expo** platform and **React Paper** for styling.

It comes with **texts in both English and Spanish**.

As it is right now is only published in Android, as Apple is not accepting more Astrology apps, but it is programmed and tested for both platforms.

- Android: url_to_android

You can check it in your device installing the [Expo](https://expo.io/) app and opening this page: 
- https://expo.io/@vidalv/astrale

## 🍋 Features
In the current version you can:
- Check your **daily horoscope**, that includes focus of the day, lucky numbers and compatibility.
- **Learn more** about astrology and the zodiac.
- Check **compatibility** with other signs.
- Ask **questions** to our own non AI Astrologers.

Also, as extra features:
- Switch between **Dark/Light theme**.
- Change to **other signs** with ease (And check their daily horoscope :p).

## 🤖 Behind the scenes
A good astrology application needs new data for each day and for each sign soooo... Python scraper to the rescue:
- THE DATA: It comes from a [**scraper programmed with Python**](https://github.com/jvidalv/python-vv-scrapers) that each day at midnight goes to astrology pages in spanish and english for the data.
- THE SAFE: The data that python extracts **its saved in a NoSQL DB, Mongo**.
- THE CONNECTOR: A [**PHP backend**](https://github.com/jvidalv/vvadmin) **with an API REST** that serves the data to the application.
- THE DIRECTOR: All the process commented, deploys, testings... Are **orchestrated with Jenkins pipelines and projects**.


