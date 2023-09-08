
interface FacebookData{
    id:number;
    url: string;
    width: number;
}
interface InstagramData {
    id: number;
    url: string;
    width: number;
}

interface CardData {
    id: number;
    img: string;
    title: string;
    name: string;
    desc: string;
}

interface Data {
    facebookData: FacebookData[];
    instagramData: InstagramData[];
    cardData: CardData[];
}

const data: 
Data = {
    facebookData: [
        {
            id: 1,
            url:"https://www.facebook.com/CordCSSE/posts/pfbid02gXkgeTQA6NMVe6A34p8pbrENHRWeHQueX5oHs6dmGWZsjnGN2JcCp5ZjCC4pUravl",
            width:550
        },
        {
            id: 2,
            url:"https://www.facebook.com/CordCSSE/posts/pfbid0ZwX6JLj8EVGznVRukFiuw4XrqfkmwBbqaCytZ9jDWw3kExVXR5bTfo19BDvCWwaMl",
            width:550
        },
        {
            id:3,
            url:"https://www.facebook.com/CordCSSE/posts/pfbid0RgdfGQaHVYkZDxbLZJXq4kiuR9UonawYBB9iS5x6CUWzzDgxLdof3HWoLdW2fdNKl",
            width:550
        },
        {
            id: 4,
            url:"https://www.facebook.com/CordCSSE/posts/pfbid02gXkgeTQA6NMVe6A34p8pbrENHRWeHQueX5oHs6dmGWZsjnGN2JcCp5ZjCC4pUravl",
            width:550
        },
        {
            id: 5,
            url:"https://www.facebook.com/CordCSSE/posts/pfbid0ZwX6JLj8EVGznVRukFiuw4XrqfkmwBbqaCytZ9jDWw3kExVXR5bTfo19BDvCWwaMl",
            width:550
        },
        {
            id:6,
            url:"https://www.facebook.com/CordCSSE/posts/pfbid0RgdfGQaHVYkZDxbLZJXq4kiuR9UonawYBB9iS5x6CUWzzDgxLdof3HWoLdW2fdNKl",
            width:550
        }
    ],
    instagramData: [
        {
            id: 1,
            url: "https://www.instagram.com/p/CN76vMeDAjg/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
            width: 320,
        },
        {
            id: 2,
            url: "https://www.instagram.com/p/CJDE7U6D9Cw/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
            width: 320,
        },
        {
            id: 3,
            url: "https://www.instagram.com/p/CUbHfhpswxt/",
            width: 320,
        },
        {
            id: 4,
            url: "https://www.instagram.com/p/CUbHfhpswxt/",
            width: 320,
        },
        {
            id: 5,
            url: "https://www.instagram.com/p/CUbHfhpswxt/",
            width: 320,
        },
        {
            id: 6,
            url: "https://www.instagram.com/p/CUbHfhpswxt/",
            width: 320,
        }
    ],
    cardData: [
        {
        id: 1,
        img: "/JaletaTesgera.jpg",
        title: "President of Computer Science Society",
        name: "Jaleta Tesgera",
        desc:
            "The morning air was crisp and sharp as Sean walked down the road. The pavement was slippery and cold beneath his feet, like a slimy, wet fish. For more information about words that help describe people, places and things, look at the topic on describing words (Adjectives)"
        },
        {
        id: 2,
        img: "/LauriceniaBuque.jpg",
        title: "Vice President of Computer Science Society",
        name: "Lauricenia Buque",
        desc:
            "The morning air was crisp and sharp as Sean walked down the road. The pavement was slippery and cold beneath his feet, like a slimy, wet fish. For more information about words that help describe people, places and things, look at the topic on describing words (Adjectives)"
        },
        {
        id: 3,
        img: "/SegniTulu.jpg",
        title: "Project Manager of Computer Science Society",
        name: "Segni Tulu",
        desc:
            "The morning air was crisp and sharp as Sean walked down the road. The pavement was slippery and cold beneath his feet, like a slimy, wet fish. For more information about words that help describe people, places and things, look at the topic on describing words (Adjectives)"
        }
        ,
        {
        id: 4,
        img: "/BrookGebreeyesus.jpg",
        name: "Brook",
        title: "Project Manager of Computer Science Society",
        desc:
            "The morning air was crisp and sharp as Sean walked down the road. The pavement was slippery and cold beneath his feet, like a slimy, wet fish. For more information about words that help describe people, places and things, look at the topic on describing words (Adjectives)"
        }
    ]
};
export default data;