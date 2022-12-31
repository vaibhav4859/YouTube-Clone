import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";
import { HomePageVideos } from "../../Types";
import { parseData } from "../../utils/parseData";
import { YOUTUBE_API_URL } from "../../utils/constants";

const DUMMY_DATA = {
  "kind": "youtube#searchListResponse",
  "etag": "z9Zqli3UtknxD0Ib2I1GEbYoNUU",
  "nextPageToken": "CBQQAA",
  "regionCode": "IN",
  "pageInfo": {
    "totalResults": 3774,
    "resultsPerPage": 20
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "X2lwxXePem63v7-7WsJfZ5AJseo",
      "id": {
        "kind": "youtube#video",
        "videoId": "EHTWMpD6S_0"
      },
      "snippet": {
        "publishedAt": "2021-07-21T10:30:02Z",
        "channelId": "UCwfaAHy4zQUb2APNOGXUCCA",
        "title": "🔴 Complete React JS Tutorial in Hindi with 5 Projects in 2022",
        "description": "Welcome, Complete React JS Tutorial for Beginners In Hindi In 2022. Learn Complete React with 5 Projects from Basic to ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/EHTWMpD6S_0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/EHTWMpD6S_0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/EHTWMpD6S_0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Thapa Technical",
        "liveBroadcastContent": "none",
        "publishTime": "2021-07-21T10:30:02Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "wUiL33ty0xpNZ5Oj2u_5dF1bFYU",
      "id": {
        "kind": "youtube#video",
        "videoId": "gpqoZQ8GNK8"
      },
      "snippet": {
        "publishedAt": "2022-07-01T13:00:25Z",
        "channelId": "UCVf_ji691VSuKUfmP0RObGA",
        "title": "React Responsive Gym Website Tutorial Using ReactJs | React js Projects for Beginners | Deploy",
        "description": "In this Reactjs project, we will make an awesome responsive gym website step-by-step. We learn React hooks, modern CSS, ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/gpqoZQ8GNK8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/gpqoZQ8GNK8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/gpqoZQ8GNK8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ZAINKEEPSCODE",
        "liveBroadcastContent": "none",
        "publishTime": "2022-07-01T13:00:25Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "MdqsyEnDv-xJSyFM8oRIFIPezKE",
      "id": {
        "kind": "youtube#video",
        "videoId": "b50zSyLiCYQ"
      },
      "snippet": {
        "publishedAt": "2022-10-24T04:30:08Z",
        "channelId": "UCO7afj9AUo0zV69pqEYhcjw",
        "title": "MASTER REACT JS IN ONE VIDEO WITH 5 PROJECTS",
        "description": "Join this channel to get access to the perks: https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw/join this is video ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/b50zSyLiCYQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/b50zSyLiCYQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/b50zSyLiCYQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "6 Pack Programmer",
        "liveBroadcastContent": "none",
        "publishTime": "2022-10-24T04:30:08Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "PD6fgkJqFlGxndIgXW6qaraAYiE",
      "id": {
        "kind": "youtube#video",
        "videoId": "RGKi6LSPDLU"
      },
      "snippet": {
        "publishedAt": "2021-04-14T14:43:19Z",
        "channelId": "UCeVMnSShP_Iviwkknt83cww",
        "title": "React Tutorial in Hindi 🔥🔥",
        "description": "Join my Recently launched Complete & Free React Course with 3 Projects: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/RGKi6LSPDLU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/RGKi6LSPDLU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/RGKi6LSPDLU/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "CodeWithHarry",
        "liveBroadcastContent": "none",
        "publishTime": "2021-04-14T14:43:19Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "and4TpymcAmNEZiqMuAipUCDYsc",
      "id": {
        "kind": "youtube#video",
        "videoId": "a_7Z7C_JCyo"
      },
      "snippet": {
        "publishedAt": "2020-10-27T13:34:16Z",
        "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
        "title": "Code 15 React Projects - Complete Course",
        "description": "Improve your skills with the React JavaScript library by building 15 projects using React. Code: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/a_7Z7C_JCyo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/a_7Z7C_JCyo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/a_7Z7C_JCyo/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "freeCodeCamp.org",
        "liveBroadcastContent": "none",
        "publishTime": "2020-10-27T13:34:16Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "zKY9aW0pmcCPB9irNN0_3tkL-9I",
      "id": {
        "kind": "youtube#video",
        "videoId": "0riHps91AzE"
      },
      "snippet": {
        "publishedAt": "2021-05-14T07:40:45Z",
        "channelId": "UChPxqdfDbulLE9PyUqhijWw",
        "title": "Learn React JS with Project in 2 Hours  | React Tutorial for Beginners | React Project Crash Course",
        "description": "This video is a complete React Crash Course for beginners. The video covers different React Topics and implementation in one ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/0riHps91AzE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/0riHps91AzE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/0riHps91AzE/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Dipesh Malvia",
        "liveBroadcastContent": "none",
        "publishTime": "2021-05-14T07:40:45Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "DD8JX0aFjFiL7Agkpwb5sIry-nU",
      "id": {
        "kind": "youtube#video",
        "videoId": "b9eMGE7QtTk"
      },
      "snippet": {
        "publishedAt": "2022-03-04T11:06:59Z",
        "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
        "title": "React JS Full Course 2022 | Build an App and Master React in 1 Hour",
        "description": "Are you wondering how to become a React developer? Look no further, and get all the info in one video. The first 1000 people to ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/b9eMGE7QtTk/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/b9eMGE7QtTk/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/b9eMGE7QtTk/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "JavaScript Mastery",
        "liveBroadcastContent": "none",
        "publishTime": "2022-03-04T11:06:59Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "EcV9SWYzeqld7VmuxpTbEQNwnMg",
      "id": {
        "kind": "youtube#video",
        "videoId": "RUku45vpSDU"
      },
      "snippet": {
        "publishedAt": "2020-07-01T04:30:02Z",
        "channelId": "UCwfaAHy4zQUb2APNOGXUCCA",
        "title": "🔴 Complete Responsive Animated Website using React JS in Hindi in 2020",
        "description": "Welcome, How to create a Complete Responsive Animated Website using React JS in Hindi in 2020. Responsive React website ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/RUku45vpSDU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/RUku45vpSDU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/RUku45vpSDU/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Thapa Technical",
        "liveBroadcastContent": "none",
        "publishTime": "2020-07-01T04:30:02Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "PTIrpufX7sEWJA2OzUQIHiNSFQY",
      "id": {
        "kind": "youtube#video",
        "videoId": "DgRrrOt0Vr8"
      },
      "snippet": {
        "publishedAt": "2021-11-20T17:00:07Z",
        "channelId": "UCFbNIlppjAuEX4znoulh0Cw",
        "title": "The Perfect Beginner React Project",
        "description": "Learn React Today Course: https://courses.webdevsimplified.com/learn-react-today Getting started with React can be incredibly ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/DgRrrOt0Vr8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/DgRrrOt0Vr8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/DgRrrOt0Vr8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Web Dev Simplified",
        "liveBroadcastContent": "none",
        "publishTime": "2021-11-20T17:00:07Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "Rq_O0f3OkhtR9YeXHo0lr8GDvZY",
      "id": {
        "kind": "youtube#video",
        "videoId": "KH-pw1cv34E"
      },
      "snippet": {
        "publishedAt": "2022-07-11T19:40:44Z",
        "channelId": "UCwQOndlLaoNIqdVlOF87jSA",
        "title": "Movies App | IMDB Clone | React App | ReactJs Project | 2022",
        "description": "Movies App | IMDB Clone | React App | ReactJs Project | 2022 In this video, we are going to create a Movie app, which will be a ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/KH-pw1cv34E/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/KH-pw1cv34E/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/KH-pw1cv34E/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Coding Star",
        "liveBroadcastContent": "none",
        "publishTime": "2022-07-11T19:40:44Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "NXHOFLe6MTtBPf5BfpsP0C9HP0I",
      "id": {
        "kind": "youtube#video",
        "videoId": "kmU7uX3ZHJc"
      },
      "snippet": {
        "publishedAt": "2022-03-27T11:30:09Z",
        "channelId": "UCxomVIZI0erwaoq3EDFoiuA",
        "title": "Full Stack Food Delivery App - React Redux Reducer, Firebase |  For Beginners",
        "description": "In this free course, we are going to develop a full stack food delivery application using Reactjs, Firebase, Framer motion, Tailwind ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/kmU7uX3ZHJc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/kmU7uX3ZHJc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/kmU7uX3ZHJc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Vetrivel Ravi",
        "liveBroadcastContent": "none",
        "publishTime": "2022-03-27T11:30:09Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "VV1bvBXXgmr-fKymcu881vqwbVQ",
      "id": {
        "kind": "youtube#video",
        "videoId": "u6gSSpfsoOQ"
      },
      "snippet": {
        "publishedAt": "2022-08-31T14:16:33Z",
        "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
        "title": "React JavaScript Framework for Beginners – Project-Based Course",
        "description": "Learn React in this full course for beginners. React is one of the most popular JavaScript frameworks and this course is the perfect ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/u6gSSpfsoOQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/u6gSSpfsoOQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/u6gSSpfsoOQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "freeCodeCamp.org",
        "liveBroadcastContent": "none",
        "publishTime": "2022-08-31T14:16:33Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "daFb-FWt6e6wpEmUVbUnHWaCdUk",
      "id": {
        "kind": "youtube#video",
        "videoId": "YSNsZQf_CPM"
      },
      "snippet": {
        "publishedAt": "2021-07-14T04:30:05Z",
        "channelId": "UCbaR6YYn5VGXrR5_f-4tNsA",
        "title": "Build a Movie Search App using ReactJS | React Movie App | ReactJS Projects",
        "description": "In this React Movie App tutorial, we'll be building the Movie App using ReactJS. This React Movie Search App will be having the ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/YSNsZQf_CPM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/YSNsZQf_CPM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/YSNsZQf_CPM/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "The Indian Dev",
        "liveBroadcastContent": "none",
        "publishTime": "2021-07-14T04:30:05Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "sVmHXKk-lFrfpq4NfNd3drbhwFU",
      "id": {
        "kind": "youtube#video",
        "videoId": "jx5hdo50a2M"
      },
      "snippet": {
        "publishedAt": "2022-05-20T10:01:37Z",
        "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
        "title": "Build and Deploy a React Admin Dashboard App With Theming, Tables, Charts, Calendar, Kanban and More",
        "description": "Every web developer needs to build a React Admin Dashboard Application. Learn how to create the best and most modern one ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/jx5hdo50a2M/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/jx5hdo50a2M/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/jx5hdo50a2M/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "JavaScript Mastery",
        "liveBroadcastContent": "none",
        "publishTime": "2022-05-20T10:01:37Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "P_E2f4Kx-863n8PDPLDIZbAz7ys",
      "id": {
        "kind": "youtube#video",
        "videoId": "czNS1XjCFAU"
      },
      "snippet": {
        "publishedAt": "2021-07-23T07:30:04Z",
        "channelId": "UCE1_bZxswCCARhhVeSQLuew",
        "title": "5 React Projects You Can Finish in a Weekend! | ReactJS for Beginners",
        "description": "In this video, we present 5 react projects that you can finish this weekend to help your resume stand out. Once you have learnt ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/czNS1XjCFAU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/czNS1XjCFAU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/czNS1XjCFAU/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "CrioDo",
        "liveBroadcastContent": "none",
        "publishTime": "2021-07-23T07:30:04Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "NgBBZ0FKfof8JwL28jFHqHYUGvI",
      "id": {
        "kind": "youtube#video",
        "videoId": "CKAn5dCK6RE"
      },
      "snippet": {
        "publishedAt": "2022-03-29T12:05:20Z",
        "channelId": "UCVf_ji691VSuKUfmP0RObGA",
        "title": "React Responsive Portfolio Website Tutorial Using ReactJs | React js Projects for Beginners | Deploy",
        "description": "In this Reactjs project, we will make an awesome responsive personal portfolio website step-by-step. We learn React hooks, ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/CKAn5dCK6RE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/CKAn5dCK6RE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/CKAn5dCK6RE/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "ZAINKEEPSCODE",
        "liveBroadcastContent": "none",
        "publishTime": "2022-03-29T12:05:20Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "NbhpT6FYF2DZ1LP9GJ6D53grQ6c",
      "id": {
        "kind": "youtube#video",
        "videoId": "UUga4-z7b6s"
      },
      "snippet": {
        "publishedAt": "2022-07-12T16:00:14Z",
        "channelId": "UCFbNIlppjAuEX4znoulh0Cw",
        "title": "Junior vs Senior React Folder Structure - How To Organize React Projects",
        "description": "FREE React Hooks Course: https://courses.webdevsimplified.com/react-hooks-simplified React is an unopinionated framework, ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/UUga4-z7b6s/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/UUga4-z7b6s/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/UUga4-z7b6s/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Web Dev Simplified",
        "liveBroadcastContent": "none",
        "publishTime": "2022-07-12T16:00:14Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "uN42MkYaU13RM348RzDn-e1AahM",
      "id": {
        "kind": "youtube#video",
        "videoId": "k3Vfj-e1Ma4"
      },
      "snippet": {
        "publishedAt": "2022-05-08T13:22:55Z",
        "channelId": "UCOxWrX5MIdXIeRNaXC3sqIg",
        "title": "React Node.js Booking App Full Tutorial | MERN Stack Reservation App (JWT, Cookies, Context API)",
        "description": "React Booking / Reservation System tutorial from scratch for beginners. MERN stack hotel reservation app project. React Node.js ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/k3Vfj-e1Ma4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/k3Vfj-e1Ma4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/k3Vfj-e1Ma4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Lama Dev",
        "liveBroadcastContent": "none",
        "publishTime": "2022-05-08T13:22:55Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "WldWtIjgMl5Xec1TJyqCyYF54nI",
      "id": {
        "kind": "youtube#video",
        "videoId": "QwarZBtFoFA"
      },
      "snippet": {
        "publishedAt": "2021-05-26T13:00:09Z",
        "channelId": "UC8S4rDRZn6Z_StJ-hh7ph8g",
        "title": "Code A React Website Tutorial | ReactJS Tutorial For Beginners",
        "description": "CODE: https://github.com/machadop1407/react-website-tutorial LINKS: https://nodejs.org/en/download/ ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/QwarZBtFoFA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/QwarZBtFoFA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/QwarZBtFoFA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "PedroTech",
        "liveBroadcastContent": "none",
        "publishTime": "2021-05-26T13:00:09Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "R1Hiec0PII80G36xkKyBZw505mE",
      "id": {
        "kind": "youtube#video",
        "videoId": "1r79Eqw6tfg"
      },
      "snippet": {
        "publishedAt": "2022-01-10T04:30:00Z",
        "channelId": "UC7A41-L2rIlxXGM3bas_WsQ",
        "title": "React JS In Telugu",
        "description": "Hey Everyone, This video is all about explanation of react js tutorial in telugu. This series will be continued please stay tune :) for ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/1r79Eqw6tfg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/1r79Eqw6tfg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/1r79Eqw6tfg/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Telugu Skillhub",
        "liveBroadcastContent": "none",
        "publishTime": "2022-01-10T04:30:00Z"
      }
    }
  ]
};

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
  "youtubeApp/homePageVidoes",
  async (isNext: boolean, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState() as RootState;

    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${YOUTUBE_API_URL}/search?maxResults=20&q="reactjs projects"&key=${API_KEY}&part=snippet&type=video&${
        isNext ? `pageToken=${nextPageTokenFromState}` : ""}`);
    // const nextPageToken: string = "";
    // console.log(isNext, nextPageTokenFromState);
    const parsedData: HomePageVideos[] = await parseData(items);
    return { parsedData: [...videos, ...parsedData], nextPageToken };
  }
);