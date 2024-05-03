import User1 from "../../resources/images/user1.png"
import User2 from "../../resources/images/user2.png"
import User3 from "../../resources/images/user3.png"
import User4 from "../../resources/images/user4.png"


export const TableData = {
    users: {
        title: "Users",
        headers: [
            "image","id", "username", "name", "surname", "email"
        ],
        editable: [
            "username", "name", "surname", "email", "image"
        ],
        create: [
            "username", "name", "surname", "email"
        ],
        filter: [
            "id", "username", "name", "surname", "email"
        ],
        show: [
            "name", "id" ,"username", "surname", "email", "image"
        ],
        defaultImages: {
            user1: User1,
            user2: User2,
            user3: User3,
            user4: User4
        }
    },
    roles: {
        title: "Roles",
        headers: [
            "id","name"
        ],
        editable: [
            "name"
        ],
        create: [
            "name"
        ],
        filter: [
            "id", "name"
        ],
        show: [
            "name"
        ]
    },
    permissions: {
        title: "Permissions",
        headers: [
            "id","name", "type"
        ],
        editable: [
            "name"
        ],
        create: [
            "name"
        ],
        filter: [
            "id", "name"
        ],
        show: [
            "name"
        ]
    }
    ,
    courses: {
        title: "Courses",
        headers: [
            "id","title","year"
        ],
        editable: [
            "title", "year"
        ],
        create: [
            "title", "year"
        ],
        filter: [
            "id","title","year"
        ],
        show: [
            "title", "year"
        ]
    },
    classes: {
        title: "Classes",
        headers: [
            "id","subject", "title"
        ],
        editable: [
            "subject", "title", "image"
        ],
        create: [
            "subject", "title", "image"
        ],
        filter: [
            "id","subject", "title"
        ],
        show: [
            "title", "image"
        ]
    },
    groups: {
        title: "Groups",
        headers: [
            "id","name","description", "class"
        ],
        editable: [
            "name","description", "class"
        ],
        create: [
            "name","description", "class"
        ],
        filter: [
            "id","name","description", "class"
        ],
        show: [
            "name","description"
        ]
    },
    subjects: {
        title: "Subjects",
        headers: [
            "id","code","title", "course"
        ],
        editable: [
            "code","title", "course"
        ],
        create: [
            "code","title", "course"
        ],
        filter: [
            "id","code","title", "course"
        ],
        show: [
            "title","code"
        ]
    },
    topics: {
        title: "topics",
        headers: [
            "id","title","deadline", "unit"
        ],
        editable: [
            "title","deadline", "unit"
        ],
        create: [
            "title","deadline", "unit"
        ],
        filter: [
            "id","title","deadline", "unit"
        ],
        show: [
            "title","deadline", "unit"
        ]
    },
    votes: {
        title: "Votes",
        headers: [
            "id","user","post", "topic", "content", "originality", "clarity", "mean"
        ],
        editable: [
            "user","post", "topic", "content", "originality", "clarity", "mean"
        ],
        create: [
            "user","post", "topic", "content", "originality", "clarity", "mean"
        ],
        filter: [
            "id","user","post", "topic", "content", "originality", "clarity", "mean"
        ],
        show: [
            "user","content", "originality", "clarity", "mean"
        ]
    },
    posts: {
        title: "Posts",
        headers: [
            "id","user","topic", "title", "type"
        ],
        editable: [
            "user","topic", "title", "type", "content"
        ],
        create: [
            "user","topic", "title", "type", "content"
        ],
        filter: [
            "id","user","topic", "title", "type", "content"
        ],
        show: [
            "title", "type", "content"
        ]
    },

}
