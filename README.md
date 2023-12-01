<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Bot logo"></a>
</p>

<h3 align="center">Instagram Bot(Poems)</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Platform](https://img.shields.io/badge/platform-reddit-orange.svg)](https://www.reddit.com/user/Wordbook_Bot)
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> 🤖 The bot that can send your poems to your instagram account
    <br> 
</p>

## About <a name = "about"></a>

this bot was made because the school i need to create a instagram page and send poems so i made a bot that send for me

## Usage <a name = "usage"></a>

The first thing that you need to know is have already open your account and have firefox inn this exactly position of the hot bar
<img src="./docs/firefox.png">

### Example:

you need to put the poems that you want to send in the json (poems.json) and put the poem in this format:

```json
{
  "poems": [
    {
      "author": "YOUR NAME",
      "title": "POEM TITLE",
      "content": "CONTENT OF THE POEM"
    }
  ]
}
```

and put your name in all of the files that need that like Poems.js and BotClient.js other think put the api access key in .env

### Installing

A step by step series of examples that tell you how to get a development env running.

clone the repository

```
git clone https://github.com/TheGod7/Instagram-Bot.git
```

And then

```
node src/index.js
```
