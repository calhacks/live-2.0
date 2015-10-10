var apis = [
  // title

  {
    name: "Microsoft",
    link: "aka.ms/api.lib",
    description: "Build on one or more of the following Microsoft technologies and qualify for the Microsoft Hack: Microsoft Azure, Windows 10, Kinect, OneNote, Bing, OneDrive, Office, more available.",
    tier: "title",
    img: "assets/img/sponsors/microsoft.svg",
    prize: "Prize for the Best Overall Use of Microsoft: Grand Prize – Microsoft Surface Pro 3, Runner Up – Microsoft Band v1"
  },

  // polar
  {
    name: "Uber",
    link: "https://developer.uber.com",
    description: "Access many of the primitives that power Uber’s magical experience: pass a destination address to the Uber app, display pickup times, provide fare estimates, access trip history and more.",
    tier: "polar",
    img: "assets/img/sponsors/uber.svg",
    prize: "Prize: $250 dollar Uber credits for the team"
  },
  {
    name: "Capital One",
    link: "http://api.reimaginebanking.com/",
    description: "Nessie is Capital One’s Hackathon API that gives you access to a multitude of real public-facing data - such as ATM and bank branch locations - along with mock customer account data. Use HTTP requests to set up peer-to-peer transactions, simulate a weekly paycheck, or even schedule bills for customers! This is all structured in a way that resembles how we actually run things here at Capital One.",
    tier: "polar sponsor-too-small",
    img: "assets/img/sponsors/capital1.png"
  },

  // grizzly
  {
    name: "Teespring",
    link: "",
    description: "",
    tier: "grizzly",
    img: "assets/img/sponsors/teespring.svg"
  },
  {
    name: "Visa",
    link: "",
    description: "",
    tier: "grizzly",
    img: "assets/img/sponsors/visa.png"
  },
  {
    name: "HERE",
    link: "https://developer.here.com/documentation",
    description: "Build immersive native applications while leveraging a powerful and flexible mapping platform. JavaScript API: Build Web applications with feature rich, interactive HERE Maps at their center. REST APIs: Flexible and fast access to variety of map data and functionalities. Perform batch geocode requests, advanced traffic incident reports, and creating an isoline route.",
    tier: "sponsor-too-small grizzly",
    img: "assets/img/sponsors/here.png",
    prize: "Samsung Gear and Garmin Vivoactive watches to the winning team members"
  },
  {
    name: "GM",
    link: "",
    description: "",
    tier: "grizzly sponsor-too-small",
    img: "assets/img/sponsors/gm.svg"
  },
  {
    name: "Blockchain",
    link: "https://blockchain.info/api",
    description: "With our API, we provide end-to-end functionality for sending and receiving bitcoin with one of the largest wallet platforms in the bitcoin space. In addition to our wallet, we also run the biggest data & analytics engine available to build on!",
    tier: "grizzly sponsor-too-small",
    img: "assets/img/sponsors/block.png"
  },
  {
    name: "Moxtra",
    link: "https://developer.moxtra.com/",
    description: "Collaboration and communication for any devices or backends. With native iOS, Android, and Javascript SDKs and RESTful APIs, you can seamlessly and instantaneously integrate Group Chat, File Sharing, Document Annotation, Whiteboarding, Voice Conferencing, Screen Sharing and Video Chat, to and from any device, fully customized to your application. Letting your app's users connect to each other has never been easier, increasing the virality of your platform and boosting the features with just ten lines of code.",
    tier: "grizzly sponsor-too-small",
    img: "assets/img/sponsors/moxtra.png",
    prize: "$1,000 prize for the best use of the Moxtra SDK/API"
  },
  {
    name: "BlackRock",
    link: "",
    description: "",
    tier: "grizzly",
    img: "assets/img/sponsors/blackrock.png"
  },
  {
    name: "A16Z",
    link: "",
    description: "",
    tier: "grizzly",
    img: "assets/img/sponsors/a16z.svg"
  },
  {
    name: "Illumio",
    link: "",
    prize: "Prize for best Data Visualization Hack",
    description: "",
    tier: "grizzly",
    img: "assets/img/sponsors/illumio.png"
  },
  {
    name: "Aerospike",
    link: "http://aerospike.com/calhacks",
    description: "Aerospike is a high performance NoSQL database delivering speed at scale. Designed for real-time high-volume applications, such as real time bidding, dynamic pricing and fraud detection.",
    tier: "grizzly",
    img: "assets/img/sponsors/aerospike.svg"
  },
  {
    name: "GapTech",
    link: "",
    description: "",
    tier: "grizzly",
    img: "assets/img/sponsors/gap.svg",
    prize: "Prize for best Social Media Hack, to the hack centered around Gap Inc. and its brands (Old Navy, Gap, Banana Republic, Athleta & Intermix) showcasing its products and/or Gap in social media."
  },
  {
    name: "KPCB",
    link: "http://kpcbfellows.com/build-for-good/challenges",
    description: "Partner with organizations like Ideo.org, Internet.org, Kiva, Pencils of Promise, and many others who have tough challenges for you to tackle. Help these non-profits create a better world and #BuildforGood.",
    tier: "grizzly",
    img: "assets/img/sponsors/kpcb.svg"
  },
  {
    name: "FireEye",
    link: "",
    description: "",
    tier: "grizzly",
    img: "assets/img/sponsors/fireeye.png"
  },

  //brown


  {
    name: "Facebook",
    link: "",
    description: "",
    tier: "brown",
    img: "assets/img/sponsors/facebook.svg"
  },
  {
    name: "PDT Partners",
    link: "",
    description: "",
    tier: "brown",
    img: "assets/img/sponsors/pdt.png"
  },
  {
    name: "Postmates",
    link: "https://postmates.com/developer",
    description: "Postmates' overall mission is to power local, on-demand logistics focused on fast deliveries from any type of merchant at scale. We provide an API that lets you move anything from point A to point B in less than an hour.",
    tier: "brown",
    img: "assets/img/sponsors/postmates.png",
    prize: "$1000 Postmates delivery credit to the team that builds the best on-demand app."
  },
  {
    name: "Unity",
    link: "",
    description: "",
    tier: "brown",
    img: "assets/img/sponsors/unity.svg"
  },
  {
    name: "pwc",
    link: "",
    description: "",
    tier: "sponsor-too-small brown",
    img: "assets/img/sponsors/pwc.png"
  },
  {
    name: "Splunk",
    link: "",
    description: "",
    tier: "brown",
    img: "assets/img/sponsors/splunk.png"
  },
  {
    name: "Thiel Foundation",
    link: "",
    description: "",
    tier: "brown",
    img: "assets/img/sponsors/thiel.png"
  },
  {
    name: "Compose",
    link: "www.compose.io/calhacks",
    description: "Need a fast database for your Cal Hacks app? Compose offers cloud database hosting including MongoDB, PostgreSQL, Redis, Elasticsearch and RethinkDB. Get one or more databases for 60-days free.",
    tier: "brown",
    img: "assets/img/sponsors/compose.svg"
  },
  {
    name: "Accel Partners",
    link: "",
    description: "",
    tier: "brown",
    img: "assets/img/sponsors/accel.png"
  },
  {
    name: "Magnet",
    link: "http://calhacks.magnet.com",
    description: "Magnet Message is a mobile communication framework that lets you easily add messaging and chat to your app. Magnet Message has the APIs and features you need to add 1-to-1 and 1-to-many chat, public forums, private discussions, content feeds, and so much more! The code is free to download and Apache open source. It includes a ready-to-run server and native mobile SDKs for iOS and Android.",
    tier: "brown",
    img: "assets/img/sponsors/magnet.png"
  },

  //cub


  {
    name: "Branch Metrics",
    link: "",
    description: "The Branch Metrics SDK for deferred and contextual mobile deep linking. Branch helps mobile apps grow with deep links that power referral systems, sharing links and invites with full attribution and analytics.",
    tier: "cub sponsor-too-small",
    img: "assets/img/sponsors/branch.png",
    custom: "<a href='https://github.com/BranchMetrics/iOS-Deferred-Deep-Linking-SDK'>IOS</a> <br> <a href='https://github.com/BranchMetrics/Android-Deferred-Deep-Linking-SDK'>Android</a>",
  },
  {
    name: "elastic",
    link: "",
    description: "",
    tier: "cub",
    img: "assets/img/sponsors/elastic.png"
  },
  {
    name: "Thync",
    link: "",
    description: "",
    tier: "cub",
    img: "assets/img/sponsors/thync.svg"
  },
  {
    name: "Sensel",
    link: "",
    description: "",
    tier: "cub",
    img: "assets/img/sponsors/sensel.png"
  },
  {
    name: "Typesafe",
    link: "",
    description: "",
    tier: "cub",
    img: "assets/img/sponsors/typesafe.png"
  },
  {
    name: "Zenefits",
    link: "",
    description: "",
    tier: "cub",
    img: "assets/img/sponsors/zenefits.png"
  },
  {
    name: "Meerkat",
    link: "",
    description: "",
    tier: "cub",
    img: "assets/img/sponsors/meerkat.svg"
  },
  {
    name: "nerdwallet",
    link: "",
    description: "",
    tier: "cub",
    img: "assets/img/sponsors/nerdwallet.png"
  },
  {
    name: "Ebay",
    link: "",
    description: "",
    tier: "cub",
    img: "assets/img/sponsors/ebay.png"
  },
  {
    name: "truprice",
    link: "",
    description: "",
    tier: "cub",
    img: "assets/img/sponsors/truprice.png"
  },
  {
    name: "Pivotal",
    link: "",
    description: "",
    tier: "cub",
    img: "assets/img/sponsors/pivotal.png"
  },
  {
    name: "soylent",
    link: "",
    description: "",
    tier: "cub",
    img: "assets/img/sponsors/soylent.png"
  },
  {
    name: "Pfizer",
    link: "",
    description: "",
    tier: "cub",
    img: "assets/img/sponsors/pfizer.png"
  },
  {
    name: "Namecheap",
    link: "https://nc.me/",
    description: "Students may register certain domains for free at: https://nc.me/ and win $150 in Namecheap Credit for the best domain name, winner TBD on Monday, October 12th.",
    tier: "cub",
    img: "assets/img/sponsors/namecheap.png"
  },
  {
    name: "Indeed",
    link: "",
    description: "",
    tier: "cub",
    img: "assets/img/sponsors/indeed.png"
  },
  {
    name: "Digital Ocean",
    link: "",
    description: "",
    tier: "cub",
    img: "assets/img/sponsors/digitalocean.png"
  },
  {
    name: "AT&T",
    link: "http://developer.att.com",
    description: "Integrate AT&T API to do amazing things, like speech to text and in-app messaging! ",
    tier: "cub",
    img: "assets/img/sponsors/atnt.svg"
  },
  {
    name: "Yik Yak",
    link: "",
    description: "",
    tier: "cub",
    img: "assets/img/sponsors/yikyak.png"
  },
  {
    name: "1517",
    link: "",
    description: "",
    tier: "cub",
    img: "assets/img/sponsors/1517.png"
  },
  {
    name: "Tiger Text",
    link: "",
    description: "",
    tier: "cub",
    img: "assets/img/sponsors/tigertext.png"
  },


]
