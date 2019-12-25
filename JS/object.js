var movieDB = [
    {title: "In Bruges",
     rating: 5,
     hasWatched: "seen"
    },
    {title: "Frozen",
     rating: 4.5,
     hasWatched: "not seen"
    },
    {title: "Mad Max Fury Road",
     rating: 5,
     hasWatched: "seen"
    },
    {title: "Les Miserables",
     rating: 3.5,
     hasWatched: "not seen"
    }
];

for(var i = 0; i < movieDB.length; i++) {
    console.log("You have " + movieDB[i].hasWatched + " \"" + movieDB[i].title + "\" - " + movieDB[i].rating + " stars");
}