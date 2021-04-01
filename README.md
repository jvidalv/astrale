# Astrale - Horoscope of the Zodiac

<p align="center">
  <img src="https://i.imgur.com/1JDnz7u.png">
</p>

## 🌍 About the app

Astrale is an astrology mobile application made with **React Native**. Uses **Expo** as a toolchain and **Paper** for styling and theming.

It also supports multiple languages thanks to **i18n**, by default comes with texts in both English and Spanish.

Is only published in Android, as Apple is not accepting more Astrology apps, but works for both platforms.

- Android: https://play.google.com/store/apps/details?id=josep.astrale


## 🔧 Run it yourself
The app uses Expo for bootstrapping and as develop environment. To get started, first install the dependencies:
```bash
$ yarn || npm install
```
Then run Expo:
```bash
$ expo start
```
Then you can use your own mobile device to run the app or use an Android/iOS emulator. Yes, Expo is amazing.

## 🍋 Features

In the current version you can:

- Check your **daily horoscope**, that includes focus of the day, lucky numbers and compatibility.
- Check **compatibility** with other signs.
- **Learn more** about astrology and the zodiac.
- Ask **questions** to our own non AI Astrologers.

As extra features:

- Switch between **Dark & Light theme**.
- Change to **other signs** with ease (And check their daily horoscope :p).

## 🤖 Behind the scenes
_(Deprecated, now all the data is local)_

A good astrology application needs new data for each day and for each sign soooo.... Python scraper to save the day:

- Data: Comes from a [**scraper programmed with Python**](https://github.com/jvidalv/python-vv-scrapers) that each day at midnight goes to astrology pages in spanish and english for the data.
- Persistence: The data that python extracts **is stored in MongoDB**.
- Api: A [**PHP rest API layer**](https://github.com/jvidalv/vvadmin) **with an API REST** that dispatches the data to the application.
- The boss: All of this (deploys, tests, scraping) is possible thanks to a custom **Jenkins**.
