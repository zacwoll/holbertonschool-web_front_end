let user = {
    hobby: "Calligraphy",
    faavoriteSport: "Hockey",
    astrologicalSign: "Aries",
    firstName: "Buillaume",
    lastName: "Ialva",
    location: "Telaviv",
    occupation: "Engineer"
}

function logWelcomeUser(welcomeString) {
    console.log(`${welcomeString} ${user.firstName}, your occupation is ${user.occupation}`);
}

let bindLogWelcomeUser = logWelcomeUser.bind(user);