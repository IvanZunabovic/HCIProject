require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Music Split`,
    description: `Music shop site for all music shops in Split`,
    author: `@gatsbyjs`,
    menuItems: [
      {
        text: "Home",
        path: "/",
      },
      {
        text: "Courses",
        path: "/courses",
      },
      {
        text: "Events",
        path: "/events",
      },
      {
        text: "Store",
        path: "/store",
      },
      {
        text: "Blog",
        path: "/blog",
      },
      {
        text: "Profile",
        path: "/profile",
      },
      {
        text: "Login",
        path: "/login",
      },
      {
        text: "Cart",
        path: "/",
      },
    ],
    users: [
      {
        name: "Ivan",
        lastName: "Žunabović",
        email: "ivan.zunabovic1234@gmail.com",
        passwordSHA:
          "5d64e3e14b692ade369b9cc4f80dd84cadc9b93fed60611f31dffedf82fa2f2f",
      },
      {
        name: "Sandro",
        lastName: "Jažo",
        email: "sandro.jazo@gmail.com",
        passwordSHA:
          "6c9fbed6653e602ca49f72ca7925fcf264ddec4495a3ef2db9cb9c73e9f11000",
      },
      {
        name: "Jure",
        lastName: "Jurić",
        email: "jure.juric@gmail.com",
        passwordSHA:
          "cf0a4bab6cb2aa99465b288e9dbb498503133fb142651e524a3d2c3fad76c99d",
      },
      {
        name: "User",
        lastName: "User",
        email: "user.user@gmail.com",
        passwordSHA:
          "cf0a4bab6cb2aa99465b288e9dbb498503133fb142651e524a3d2c3fad76c99d",
      },
    ],
    eventInfo: [
      {
        tags: "Daughtry, Rock, Pop, Alternative",
        title: "Cage to Rattle Tour",
        author: "Daughtry",
        description:
          "Band Members: Brian Craddock - Guitar, Elvio Fernandes - Keyboard, Josh Steely - Guitar, Chris Daughtry - Vocals, Josh Paul - Bass",
        price: "450 Kn",
      },
      {
        tags: "Prljavo Kazalište, Rock, Domaće",
        title: "Heroj Ulice",
        author: "Prljavo Kazalište",
        description:
          "Band Members: Mladen Bodalec, Jasenko Houra, Nino Hrastek, Tihomir Fileš, Damir Lipošek, Kex Jurica Leikauff",
        price: "350 Kn",
      },
      {
        tags: "Foo Fighters, Rock, Punk, Tour",
        title: "Sonic Highways",
        author: "Foo Fighters",
        description:
          "Band Members: Pat Smear, Nate Mendel, Chris Shiflett, Dave Grohl, Taylor Hawkins",
        price: "700 Kn",
      },
      {
        tags: "Red Hot Chili Peppers, Rock, Live, Latest",
        title: "Stadium Arcadium",
        author: "Red Hot Chili Peppers",
        description:
          "Band Members: Anthony Kiedis, Flea, Chad Smith, Josh Klinghoffer",
        price: "640 Kn",
      },
      {
        tags: "Eric Clapton, Rock, Jazz, Guitar, Live",
        title: "Just One Night",
        author: "Eric Clapton",
        description:
          "The Eric Clapton World Tour 2020 is a concert tour by British rock and blues guitarist and singer Eric Clapton",
        price: "650 Kn",
      },
    ],
    coursesInfo: [
      {
        tags: "Vocal, Guitar, Bass, Drums, Keys",
        title: "Rock music lessons",
        author: "Tim Morello",
        description:
          "Vocals, Guitar, Bass, Drums, Keys…. These are the basic elements of rock and roll music! They provide the power, energy and lift to all your favorite rock and roll songs. At Musicology Performance Center we take our Rock instruments seriously.",
        price: "150 Kn",
      },
      {
        tags: "Piano",
        title: "Piano lessons",
        author: "Dora Matić",
        description:
          "Piano is the most popular instrument being studied at Musicology. Whether you are looking to learn classical or jazz piano or simply want to learn to play to accompany singing we have the right teacher for you! From beginner to expert, our teachers can help you get the most out of the piano.",
        price: "100 Kn",
      },
      {
        tags: "Sax, Trombone, French horn",
        title: "Brass & woodwind lessons",
        author: "Tina Franić",
        description:
          "Brass and woodwinds instrument lessons are incredibly popular at Musicology. Sax, Trombone and French horn can be always heard in our lesson rooms. Whether you want to learn to improvise on the saxophone or learn to play the trumpet Musicology can provide you with the right teacher to meet your goals.",
        price: "90 Kn",
      },
      {
        tags: "Vocal",
        title: "Vocal lessons",
        author: "Marin Marić",
        description:
          "At Musicology Performance Center we help our students find their voice. Whether you love pop, rock, opera or musical theater vocal lessons at Musicology will help you gain the skill and the confidence you need to put on a great performance.",
        price: "120 Kn",
      },
      {
        tags: "Violin, viola, cello, double bass",
        title: "String lessons",
        author: "Mateo Ković",
        description:
          "The sound of a violin can speak directly to the soul. Violas, Cellos and double bass can create an entire musical landscape in the form classical music to movie scores. Musicology offer lessons and ensemble for every orchestral instrument from classically trained teachers.",
        price: "120 Kn",
      },
    ],
    userReviews: [
      {
        userName: "Davor Trst",
        userReview: "Prihvatljive cijene i prilično dobra ponuda",
        userStars: [
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
        ],
      },
      {
        userName: "Mate Matić",
        userReview:
          "Usluga i kvaliteta na najvišoj razini. Ljubaznost za sve pohvale, a ponuda extra",
        userStars: [
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
        ],
      },
      {
        userName: "Damir Damirić",
        userReview:
          "Apsolutna katastrofa. Odnos prodavač - kupac, 0 bodova. Nakon što sam zamolio gospodina mogu li probati gitaru iz višeg cjenovnog ranga dočekalo me pitanje mislim li kupiti instrument.Kada sam iskreno odgovorio da trenutno ne mislim kupiti instrument, pogotovo ne bez probe istog dočekao me govor o tome kako se takav instrument ne daje na probu, kako takav instrument kupuju ljudi koji ne žele da je instrument diran, kako on zbog ovakvih kao ja gubi novac, kako on taj posao radi već trideset godina i da ga neću ja poslu učiti itd., sve to uz povišen ton i obraćanje s ti i sl.",
        userStars: [
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/star--v1.png",
          "https://img.icons8.com/color/48/000000/star--v1.png",
          "https://img.icons8.com/color/48/000000/star--v1.png",
          "https://img.icons8.com/color/48/000000/star--v1.png",
        ],
      },
      {
        userName: "Joe Lipski",
        userReview:
          "Main item in order was cancelled after it was paid for - Improve you stock accuracy!",
        userStars: [
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/star--v1.png",
          "https://img.icons8.com/color/48/000000/star--v1.png",
          "https://img.icons8.com/color/48/000000/star--v1.png",
          "https://img.icons8.com/color/48/000000/star--v1.png",
        ],
      },
      {
        userName: "John Johnson",
        userReview: "Indeed the Best Service around.",
        userStars: [
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
        ],
      },
      {
        userName: "Marino Marić",
        userReview: "Indeed the Best Service around.",
        userStars: [
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
        ],
      },
      {
        userName: "Toni Ilić",
        userReview: "Indeed the Best Service around.",
        userStars: [
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
        ],
      },
      {
        userName: "Mario Marić",
        userReview: "Indeed the Best Service around.",
        userStars: [
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
        ],
      },
      {
        userName: "Matko Milić",
        userReview: "Indeed the Best Service around.",
        userStars: [
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
        ],
      },
      {
        userName: "Toni Kajić",
        userReview: "Indeed the Best Service around.",
        userStars: [
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
        ],
      },
      {
        userName: "Marina Ivić",
        userReview: "Indeed the Best Service around.",
        userStars: [
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
        ],
      },
      {
        userName: "Matea Kuštra",
        userReview: "Indeed the Best Service around.",
        userStars: [
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
        ],
      },
      {
        userName: "Anton Bilić",
        userReview: "Indeed the Best Service around.",
        userStars: [
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
        ],
      },
      {
        userName: "Dario Darić",
        userReview: "Indeed the Best Service around.",
        userStars: [
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
        ],
      },
      {
        userName: "Maja Majić",
        userReview: "Indeed the Best Service around.",
        userStars: [
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
        ],
      },
      {
        userName: "Teofil Draković",
        userReview: "Indeed the Best Service around.",
        userStars: [
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
        ],
      },
      {
        userName: "Tino Mraković",
        userReview: "Indeed the Best Service around.",
        userStars: [
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
        ],
      },
      {
        userName: "Matea Izabelić",
        userReview: "Indeed the Best Service around.",
        userStars: [
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
        ],
      },
      {
        userName: "Tarik Tariković",
        userReview: "Indeed the Best Service around.",
        userStars: [
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
        ],
      },
      {
        userName: "Ivano Ivić",
        userReview: "Indeed the Best Service around.",
        userStars: [
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
          "https://img.icons8.com/color/48/000000/filled-star.png",
        ],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
