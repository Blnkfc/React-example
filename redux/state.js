import {rerenderEntireTree} from "../render.js"


let state = {
    profileData: {
        postsArray: [
            {id: 0, name: `Alexandr`, text: `It's my first massage!`, likesCount: 215, commentsCount: 45},
            {id: 1, name: `Megan`, text: `Random stuff to take some space and see the look of the post when it wraps on the next line and understand what to do with that, this should be enough to take the whole space on the first line, i could just increase font size but this solution is for the weak people`, likesCount: 525, commentsCount: 67},
            {id: 2, name: `Ashley`, text: `It's my first massage`, likesCount: 20, commentsCount: 2},
        ],
        profileInfo: {
            firstName: "Pasha",
            secondName: "Zabuha",
            dayOfBirth: `12`,
            monthOfBirth: "September",
            city: "Kyiv",
            education: "NAU",
            webSite: "https://www.instagram.com/pavuchara.jpg/"}
    },
    dialogs: {
        contacts: [
            {id: `0`, name: `Sasha`, message: `I'm losing my mind!!!`},
            {id: `1`, name: `Bread`, message: `Is that possible for you?`},
            {id: `2`, name: `King`, message: `Entertaining`},
            {id: `3`,name: `Clown`, message: `Are u free for now?`},
            {id: `4`, name: `Outer world`, message: `I can't stop laughing`},
            {id: `5`, name: `Lesly`, message: `I literally want to die`},
            {id: `6`, name: `Lily`, message: `As good as always`},
            {id: `7`, name: `Andrew`, message: `Bye`}
        ],
        chat: [
            {name: `Sasha`, message: `I'm losing my mind!!!`, id: `0`},
            {name: `Bread`, message: `Is that possible for you?`, id: `1`},
            {name: `King`, message: `Entertaining`, id: `2`},
            {name: `Clown`, message: `Are u free for now?`, id: `3`},
            {name: `Outer world`, message: `I can't stop laughing`, id: `4`},
            {name: `Lesly`, message: `I literally want to die`, id: `5`},
            {name: `Lily`, message: `As good as always`, id: `6`},
            {name: `Andrew`, message: `Bye`, id: `7`}
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        name: "Somebody",
        text: postMessage,
        likesCount: 0,
        commentsCount: 0
    }
    state.profileData.postsArray.push(newPost);
    rerenderEntireTree(state);
}
export default state;