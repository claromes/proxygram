> [!NOTE]
> Forked project from [codeberg.org/proxigram](https://codeberg.org/proxigram/proxigram).

# Proxigram

Proxigram: A privacy focused and open-source front-end for Instagram.
Inspired by [ProxiTok](https://github.com/pablouser1/ProxiTok), [Nitter](https://github.com/zedeus/nitter/), [LibreMdb](https://codeberg.org/zyachel/libremdb), and [many others](https://github.com/digitalblossom/alternative-frontends)

### Why?

We all know the record of bad practices that Meta has done against user's privacy. Regardless of that, Instagram still is one of the largest social media in the world. This makes it imposible to not have to check Instagram sometimes, but it can be hard to use Instagram when the website is filled with sign-up banners everywhere, is tracking all your activity and wants you to install the official app. This is where Proxigram comes in.

There are other Instagram viewers out there, but some of them can be a little tricky to use since most of them have ads, need JavaScript or are full of captchas and trackers. Proxigram does the job for you and goes to these services, parses the data, and gives it back to you.

Using an instance of Proxigram, you can browse Instagram without JavaScript while retaining your privacy with all the requests going through the server. The client never talks to Instagram or other service providers (unless it is specified).

### Features

-   User profile and feed
-   Individual post
-   Tags
-   Stories
-   RSS feeds
    -   `/{username}/rss` -> Feed
    -   `/{username}/stories/rss` -> Stories
-   API
    -   `/api/{username}` -> profile info
    -   `/api/{username}/posts` -> profile feed
        -   query:
            -   cursor
    -   `/api/{username}/stories` -> profile stories
    -   `/api/p/{shortcode}` -> post
    -   `/api/p/{shortcode}/comments` -> post's comments
    -   `/api/tag/{tag}` -> tag posts

## Installation

As Proxigram is made with Next.js, you can deploy it anywhere where Next.js is supported. Below are a few other methods:

### Docker

Clone the repository.

```bash
git clone https://github.com/claromes/proxygram
```

Move to the folder.

```bash
cd proxigram
```

Change the configuration to your needs.

```bash
cp .env.example .env
```

Start containers.

```bash
docker compose up -d
```

## License

 This project is a fork of [codeberg.org/proxigram](https://codeberg.org/proxigram/proxigram). Distributed under the AGPLv3 License. See `LICENSE` for more information.

## Legal Notice

Proxigram does not host any content. All content shown on any Proxigram instances is from Instagram. Any issue with the content shown on any instance of Proxigram, needs to be reported to Instagram, not the maintainer's ISP or domain provider. Proxigram is not affiliated with Meta Platforms, Inc.
