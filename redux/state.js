let state = {
    profile: {
        posts: [
            {name: `Alexandr`, message: `It's my first massage`, likesCount: `215`, commentsCount: `45`},
            {name: `Megan`, message: `It's my first massage`, likesCount: `525`, commentsCount: `67`},
            {name: `Ashley`, message: `It's my first massage`, likesCount: `20`, commentsCount: `2`},
        ],
        profileInfo: {
            name: "Pasha",
            secondName: "Zabuha",
            dayOfBirth: `12`,
            monthOfBirth: "September",
            city: "Kyiv",
            education: "NAU",
            webSite: "https://www.instagram.com/pavuchara.jpg/"}
    },
    dialogs: {
        contacts: [
            {name: `Sasha`, message: `I'm losing my mind!!!`},
            {name: `Bread`, message: `Is that possible for you?`},
            {name: `King`, message: `Entertaining`},
            {name: `Clown`, message: `Are u free for now?`},
            {name: `Outer world`, message: `I can't stop laughing`},
            {name: `Lesly`, message: `I literally want to die`},
            {name: `Lily`, message: `As good as always`},
            {name: `Andrew`, message: `Bye`}
        ],
        chat: [
            {name: `Sasha`, message: `I'm losing my mind!!!`, id: 0},
            {name: `Bread`, message: `Is that possible for you?`, id: 1},
            {name: `King`, message: `Entertaining`, id: 2},
            {name: `Clown`, message: `Are u free for now?`, id: 3},
            {name: `Outer world`, message: `I can't stop laughing`, id: 4},
            {name: `Lesly`, message: `I literally want to die`, id: 5},
            {name: `Lily`, message: `As good as always`, id: 6},
            {name: `Andrew`, message: `Bye`, id: 7}
        ]
    }
}
export default state;