function randomMovie() {
    var moviesArray = [
        "Amelie",
        "Stand By Me",
        "2001",
        "Groundhog Day",
        "Forrest Gump",
        "Rocky",
        "The Great Dictator",
        "The Truman Show",
        "Spirited Away",
        "Up",
        "The Lion King",
        "The Goonies",
        "Ghostbusters",
        "The Wizard of Oz",
        "Spaceballs",
        "Dora and the Lost City of Gold",
        "The Peanuts Movie",
        "Honey I Shrunk the Kids",
        "Inner Space",
        "The Love Bug",
        "Babe",
        "Pee-Wee's Big Adventure",
        "Over the Moon (Netflix)",
        "Yesterday",
        "Crouching Tiger Hidden Dragon",
        "Temple Grandin"
    ];
    var movieTonight = moviesArray[Math.floor(Math.random() * moviesArray.length)];
    console.log(moviesArray.length);
    console.log(movieTonight);
}
randomMovie();