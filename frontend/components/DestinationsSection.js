"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import FeaturesSection from "./FeaturesSection";
import DestinationCard from "./DestinationCard";
import DestinationSearch from "./DestinationSearch";
import CountryFilter from "./CountryFilter";
import TripPlannerSection from "@/components/TripPlannerSection";
import DeveloperBadge from "./DeveloperBadge";
import { ImageMinus } from "lucide-react";

const destinations = [
  // 🇮🇳 India
  {
    city: "Jaipur",
    country: "India",
    rating: "4.9",
    price: "399",
   images: [
  "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1599661046827-dacff0c0f09e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1524492514790-831f5b6d0a8f?auto=format&fit=crop&w=1200&q=80",
]
  },
  {
    city: "Goa",
    country: "India",
    rating: "4.8",
    price: "349",
    images: [
  "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
]
  },
  {
    city: "Varanasi(Banaras)",
    country: "India",
    rating: "4.9",
    price: "349",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStzi2CM63uJxoon4bsT5sfYra_-ajlIIGTScgG-viq3Q&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNhN0CHcsiYj6iYTSGj6jfLY4MQp7QACOn5KOFjQboag&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYxUs8pjwpI23H_wUEzvY9lolDNAwNUjBbobjaanW0w&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSBAs0imkRHdT7FLRxLRTEJG_JrQjLnxr8guG4wGHh9g&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKtXMiPnNtiqnhmG23mGakotxRgUP7s3BXrOpf047_w&s=10",
      "https://www.travelogyindia.com/public/storage/tipl-durga-kund.jpeg",
      
    ]
  },
  {
    city: "Kerala",
    country: "India",
    rating: "4.9",
    price: "449",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdxsEGwxXa_Xk6_wKSVTPiyw6bLVPURlIG-ovvKJOxQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1y9cqpfZnPy50kKGrtxeKfi1sbqx69e1vddkEEcfg1A&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLGZawG4UQd8VHJ2QZFwFOHpaUrAhLYDpywIgyGry0Rg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHLFSs0OSSqqQI5SRr4lgNy_voZeiG9y5kIbTxP1bfg&s=10",

    ]
  },
  {
    city: "Rishikesh",
    country: "India",
    rating: "4.8",
    price: "299",
    images:[ "https://media1.thrillophilia.com/filestore/hnttf0iqtmioi4bbfmcwwbpzbehf_1587022695_shutterstock_1005613216.jpg?w=753&h=450&dpr=2.0",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVAJKLRv8tP1wPPrJdWkAzoQZs12PlDEMqCc-YNGpO5Q&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlx_P6GvPP4xPuiThhTKH8DLFWTVleFjf8agChIxVMPg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfI6h7Zngcs0TnYdDLcwWjnMKmvh0doIM38k1UUK69Fw&s=10",

    ]
  },
  {
    city: "Agra",
    country: "India",
    rating: "4.8",
    price: "299",
    images:[ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1liEdl93KQaXZ3rYxZR4QGkSDq9nOD55NfE6yLaLoRQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7q-SbuT9glsaebS2vTmnuNv6x2d4wtW4e2aQt5aCTQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlLxhnqYTWZIsQwnLERW8ezpPyMZeFhWaBIAWQPug7A&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6GbI5ANAXz37cTmFXElQ-hLmzURAOv3ngm34RyERxSQ&s=10",
    ]
  },
{
    city: "paris",
    country: "France",
    rating: "4.8",
    price: "899",
   images: [
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=1200&q=80",
]
  },  
  {
    city: "Nice",
    country: "France",
    rating: "4.8",
    price: "799",
    images:[ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6cIeZhzEwUZ1NXklnsgky2NKEglxVi8t_h8-UBpNUdQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsjCsjLjCR9qG-wN6lwPOF-HsZWmX02xuOD-XIFuIFvg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRfB4X2BgZKjsvUI0iu6rZH9HuLYLgAd8-5Es-ocg1zw&s=10",
    ]
  },

  // 🇮🇹 Italy
  {
    city: "Rome",
    country: "Italy",
    rating: "4.9",
    price: "849",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUN5LgD7j-JAN24JvfWnZoXsvm_KgtqGmNdW_0Qfm9IA&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8xO9wqlMqpLLKeVIQOvO8Hk_naaFcbpQDW7GuylNzYw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVfworkYOAGbvfU9PySAIXiztpTZbtINgLXAW7ZwUxWQ&s=10",
    ]
  },
  {
    city: "Venice",
    country: "Italy",
    rating: "4.8",
    price: "899",
    images: ["https://www.findingtheuniverse.com/wp-content/uploads/2012/04/Grand-Canal-Venice_by_Laurence-Norah.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQT422Fl7rh76uw0FNNlB0lyPnhGBhcYdYR7d-V0TYw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMeJYl1iflbDBUom1Fnd19AedjihpeCRQqFlPVannepg&s=10",  ]
  },

  // 🇨🇭 Switzerland
  {
    city: "Interlaken",
    country: "Switzerland",
    rating: "5.0",
    price: "1299",
    images:[ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1_YKFGnLbmGWX089wDxJw1HsLw-bUMiN8LQKa3cXug&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8EraHYK_Yyt7H7OUghj8rDkgOEl6tZt4cSG19G2ytaw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXG20yI-W61JVdu4nTAO_eIoTtTRHXCkEHwQgmI9kCdA&s=10",
    ]
  },
  {
    city: "Swiss Alps",
    country: "Switzerland",
    rating: "5.0",
    price: "1499",
    images:["https://media.tacdn.com/media/attractions-splice-spp-360x240/12/54/17/d9.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAI_Q9IfVEBYw47hTxRD3m3PeF4JMhXyY8mR4-RRcMEQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpe_uePFnEcg7_5i7KVOYGSDerET9eNPv7ByspUHzoOA&s=10",

    ]
  },
  {
    city: "Lucerne",
    country: "Switzerland",
    rating: "4.9",
    price: "1199",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-33TdZxGFII-mFvPVsLr8WHpFyYS1-0Y99I8_rmnIQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9wgSctM9wX12eCgLOLRzQfYJKnyMviRQVoByGqYsv6w&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMQ6SoXsMgelVaiZ1rLF0-CTr6HruFUx5iZ0GDPp0U6w&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9jhsTFQqk7QnOYBLLVrXC8gz30Bhwci4pxoqRiUsaw&s",

    ]
  },

  // 🇯🇵 Japan
  {
    city: "Tokyo",
    country: "Japan",
    rating: "4.9",
    price: "1199",
    images: [
  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1200&q=80",
]
  },
  {
    city: "Kyoto",
    country: "Japan",
    rating: "4.8",
    price: "1099",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC2lwAq1T--t6P_xUjtSVGyPT-kpjKi7Av4vQ3HQyuFg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OmoVO_SMDtcWBXvmO7sn253MFYxAk4wTYbnTi447kA&s=10",
      "https://photos.smugmug.com/Kyoto/Kyoto-Things-To-Do/i-HNTzQRv/0/dc915472/L/shutterstock_1012503763.jpg",
    ]
  },
  {
    city: "Osaka",
    country: "Japan",
    rating: "4.8",
    price: "1049",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIhTpquSPNIHU-JRdTjITPxDNv8-h9aC6TDeRJzHauCQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFIv4CiBsSWxhY7sblFn-yOmCz-cRPe3RXVjv20gHvbA&s=10",
      "https://images.squarespace-cdn.com/content/v1/6683b1f0c2de43611580eee6/3b65ef7c-56fa-482a-beec-f706f376b06a/Osaka+Namba+shrine",
    ]
  },

  // 🇦🇪 UAE
  {
    city: "Dubai",
    country: "United Arab Emirates",
    rating: "4.9",
    price: "999",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2T8RmqTerCfYcb1X-almdtou8srYPD39nbeCKD5tdyw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyzEFLuCBDdsBc9sE5UxKxnKvSgk5BcgX8OJF-DCoIg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAS5FmkS9mCtZWVJXUNz4pfRX5RxM5sb00oFg5z4_AGA&s=10",
    ]
  },
  {
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    rating: "4.8",
    price: "949",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaEVCg0ptWD3slC0fyNApj9jv9i1GPm3n-LUWsoyLlUl9zs05zVI5p7So&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZHaFuM5abEfW-uNQXiQn2rlNWRyv0i99CM2QQQHW4g&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9itMAgZIGTIIpHFT7QyiJX88NuE5LaMdM1Cb09q5cQ&s=10",
    ]
  },

  // 🇺🇸 USA
  {
    city: "New York",
    country: "United States",
    rating: "4.9",
    price: "1099",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRyfTTUgWsK7XQIHq2dvwqZw7DG8BrsXQyEAe2s8f79g&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Aw_T0-8TwKDBtT8vLtFU6-qvdJf0beQWSGusIodlNQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUkSw64Z6Jj3G4vk8rGnLCc7_lVZ4wl9D9-bAHztqMA&s=10",
    ]
  },
  {
    city: "San Francisco",
    country: "United States",
    rating: "4.8",
    price: "999",
    images: ["https://offloadmedia.feverup.com/secretsanfrancisco.com/wp-content/uploads/2022/09/22053312/palace-of-fine-arts-sf-1024x683-1.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU8IKTmQyx-sqduBOWYEuqAgtVlp6siEE0ON7ab0IWlw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRXMVy5w5cXr_HJHXsZxGsHSOvRrnENGef9MvxscKAw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1TRiYX2M65EISUWTbhjJonA82ODYnaKTzqLADDpuInQ&s=10",

    ]
  },
  {
    city: "Las Vegas",
    country: "United States",
    rating: "4.7",
    price: "899",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBKB5QDvAy2dBEIKj0sJYL-rnOGeIsp2v05iCEaAKasg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRC3uRHMz24XmYAICrU0v2S_9kR1CdMfHME78hdlGdA&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQwvYioSkuGUCDAnqpyq_N2YDWLsMH4kmDomxRjXoKHQ&s=10",
    ]
  },

  // 🇬🇧 United Kingdom
  {
    city: "London",
    country: "United Kingdom",
    rating: "4.9",
    price: "999",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp5Zb3euj5JVfNyQG3Br9bqH9jwJzHXugl4d4_AqyC0A&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNrx27-aX5Jy9dWoUGxVEyvVZaGd7jbPd0C2OqOTB_9Q&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNX3GphWznqE7MeXLVL7qv-sjhdIAPo5jeJe1nnZiIkw&s=10",
    ]
  },
  {
    city: "Edinburgh",
    country: "United Kingdom",
    rating: "4.8",
    price: "849",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu27N-xou-udjxPUNz0qcTWlqQsDt2quEVl0HTO7ZI5g&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jXo6N08vmhMH2BXv14_pDhjOyuHmjbtWnfklqeHvgw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhX2L8_BsKjBkly_oCndHcOl9GYr1JJNaYdGABjUNwZQ&s=10",

    ]
  },

  // 🇹🇭 Thailand
  {
    city: "Phuket",
    country: "Thailand",
    rating: "4.8",
    price: "649",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8UDDcRNnn9ePs2SkQSMt3HUieCUoifsh9hf9R4xd-A&s=10g",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPK1V55wsSaIR4f8uLkL5JhTxwbt_KRl0b9vwML9Uaw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBXcUJVDQux4lodjfeiDqJnXkgXj8vf8QlryZ2ECQPJw&s=10",
    ]
  },
  {
    city: "Bangkok",
    country: "Thailand",
    rating: "4.7",
    price: "599",
    images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNvfZOFJQzKOLKlpvPlEVdc7ix3Opi9gpmsKEAqVmX7A&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7CTl80JGuHuQSF9aa1do-INq1bYke3i4QjudBVPpQQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTcFLTFqSWrxuvf3txEdy8jMA-maFXO13L2Uh6k_4zXA&s=10",
    ]
  },

  // 🇮🇩 Indonesia
  {
    city: "Bali",
    country: "Indonesia",
    rating: "4.9",
    price: "699",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5oU7TZ5dIUFn5Wz1ldLZKT-ELXFd3odOAXhAqZTkYRJ_DZGrXLs4yh3es&s=10",
      "https://www.champions.club/uploads/0000/27/2024/08/22/top-attractions-in-balijpg1.jpg",
      "https://www.outlooktravelmag.com/media/bali-tg.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrR3IwXFj_wQVASpU5YFEs5foQ_vZLLe15w-hwhUi1kw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5KZQyKHQBEzGsie7bGdTfP5FhlabdB5OR4IwQSrdQA&s=10",

    ]
  },

  // 🇲🇻 Maldives
  {
    city: "Malé",
    country: "Maldives",
    rating: "5.0",
    price: "1499",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGqnSTOWzT1YBmoifM4O3CjNtnFx-bWG8tp-tt3fzOQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO8VZJid_Fsp6IhjFCii6rZD-AynFP2oXcnI6vbtf0Dg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSsBAK4GdbMSduPrMAsPtLt9xudqc1X1dQgdxkYAQN7Q&s=10",
    ]
  },
  {
    city: "Fihalhohi island",
    country: "Maldives",
    rating: "4.9",
    price: "1299 ",
    images: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/cc/0e/53/aerial-view.jpg?w=500&h=400&s=1",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSraBVU3kV_2N1CZYW2jEz-5frdDHP6DnZ7HKt6-_q_cQ&s=10",
    ]
  },
  // 🇸🇬 Singapore
  {
    city: "Singapore",
    country: "Singapore",
    rating: "4.9",
    price: "899",
    images:["https://images.ctfassets.net/dsbipkqphva2/4aYDPAMrGAFxdMq7I3oNFS/41832e9125fbfe6ad27d507ee1db6e69/joshua-ang-Gf_KqXHU-PY-unsplash.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzGgv2_jnB4kDG2L74t-GgLzQGsNcH_1Gy4URG6QJu0g&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPEV5rt_CEX3cSMarxZdoZDh2_aDV3mD42bw6mG0JKmw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWLFLwSr0vBEsC_pj3SR4oJil6m6cYX5wlSfqqryf1Lg&s=10",
    ]
  },

  // 🇦🇺 Australia
  {
    city: "Sydney",
    country: "Australia",
    rating: "4.8",
    price: "1399",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYk_6PPn8cWJtpZlAH_BtqIXDv5CZifPrkd5_h47Zmxg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrPDhQZ2ETsk_6ZFRuMNh9CBD3fBEplXBszHM0trtIyA&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-4YrmKSRpJbB4OPwYrvSHSXJUwFp1jd91rOUT8SYfHA&s=10",
    ]
  },

  // 🇬🇷 Greece
  {
    city: "Santorini",
    country: "Greece",
    rating: "4.9",
    price: "1299",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHO3RUjG4sDJIWpDMMHVBi_GzMFD7PksPWv6q8I04_Pw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhvbG-63zbzKOSCnoiVvVWxwt_hN0ukChCz1U2N6tp1w&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf0aed-ye6GYcYQJ48IBAjaUHf160-i0aAKLGqpvl1nA&s=10",
    ]
  },


  // 🇨🇦 Canada
  {
    city: "Banff National Park",
    country: "Canada",
    rating: "5.0",
    price: "1399",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdcz9oTVP5ohzNRK-VLYmQHcr6-AWisPDUjJpE4OmiWA&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa3Jc6eIK9l0mMz9oizznsTUbvo-Td_t838_zJ9LhmpQ&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrnnMgA6HSTFB6r7Tgvn9ZccsdyLk77Nljv2sGvnIog&s=10",
    ]
  },
];

export default function DestinationsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [visibleCards, setVisibleCards] = useState(8);

  const countries = [
    "All",
    ...new Set(destinations.map((destination) => destination.country)),
  ];


  const filteredDestinations = destinations.filter((destination) => {
  const matchesSearch =
    destination.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    destination.country.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesCountry =
    selectedCountry === "All" ||
    destination.country === selectedCountry;

  return matchesSearch && matchesCountry;
});

useEffect(() => {
  setVisibleCards(8);
}, [searchTerm, selectedCountry]);

  return (
    <section
      id="destinations"
      className="bg-[#0B1120] py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Explore Popular Destinations
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Discover breathtaking destinations around the world and let AI
            create your perfect travel itinerary.
          </p>
        </div>

        <DestinationSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredDestinations.length > 0 ? (
          filteredDestinations
  .slice(0, visibleCards)
  .map((destination, index) => {
    console.log(index, destination.city, destination.images?.[0]);

    return (
      <DestinationCard
        key={destination.city}
        destination={destination}
      />
    );
  })
          ) : (
            <div className="col-span-full text-center py-16">
              <h3 className="text-2xl text-white font-semibold">
                No destinations found
              </h3>

              <p className="text-gray-400 mt-2">
                Try searching for another city or country.
              </p>
            </div>
          )}
        </div>

      {visibleCards < filteredDestinations.length && (
  <div className="mt-12 flex justify-center">
    <button
      onClick={() => setVisibleCards((prev) => prev + 8)}
      className="rounded-full bg-cyan-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-cyan-700 hover:scale-105"
    >
      Load More
    </button>
  </div>
)}

      </div>
    </section>
  );
}