import { FaCode, FaGlobe, FaLock, FaMobileAlt, FaRobot, FaDatabase } from "react-icons/fa";

export const courses=[
    {
        id:"1",
        title:"Advanced data structures and algorithms",
        icon:<FaCode color="#facc15"/>
    },
    {
        id:"2",
        title:"Web development",
        icon:<FaGlobe color="#facc15"/>
    },
    {
        id:"3",
        title:"App development",
        icon:<FaMobileAlt color="#facc15"/>
    },
    {
        id:"4",
        title:"Machine Learning",
        icon:<FaRobot color="#facc15"/>
    },
    {id:"5",
        title:"Data fetching and caching",
        icon:<FaDatabase color="#facc15"/>
    },
    {
        id:"sec",
        title:"Security",
        icon:<FaLock color="#facc15"/>
    }
]
export const maincourses=[
    {
        id:1,
        title:"advanced data structures and algorithms ",
        duration:"6 months",
        level:"beginner to advanced",
        projects:[
            {id:1,title:"Design a social media app"},
            {id:2,title:"Build a personal portfolio website"},
            {id:3,title:"Create a task management app"},
        ]
    },
    {
        id:2,
        title:"web development",
        duration:"6 months",
        level:"beginner to advanced",
        projects:[
            {id:1,title:"Build a responsive website"},
            {id:2,title:"Create a blog using Next.js"},
            {id:3,title:"Develop a RESTful API"},
        ]
    },
    {id:3,
        title:"app development",
        duration:"6 months",
        level:"beginner to advanced",
        projects:[
            {id:1,title:"Build a mobile app using React Native"},
            {id:2,title:"Create a cross-platform app with Flutter"},
            {id:3,title:"Develop a RESTful API for a mobile app"},
        ]
    },
    {
        id:4,
        title:"machine learning",
        duration:"6 months",
        level:"beginner to advanced",
        projects:[
            {id:1,title:"Build a predictive model using Python"},
            {id:2,title:"Create a recommendation system"},
        ]
    },
    {id:5,
        title:"data fetching and caching",
        duration:"6 months",
        level:"beginner to advanced",
        projects:[
            {id:1,title:"Implement data fetching with React Query"},
            {id:2,title:"Optimize data fetching with SWR"},
            {id:3,title:"Manage global state with Redux"},
        
        ]},
    {id:6,
        title:"security",
        duration:"6 months",
        level:"beginner to advanced",
        projects:[
            {id:1,title:"Implement authentication with JWT"},
            {id:2,title:"Secure a web application"},
            {id:3,title:"Set up HTTPS and SSL certificates"},
        ]
    }
]