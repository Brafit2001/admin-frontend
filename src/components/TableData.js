

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
        ]
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
        ]
    },
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
        ]
    },
    votes: {
        title: "Votes",
        headers: [
            "id","user","post", "topic", "content", "originality", "clarity", "mean"
        ],
        editable: [
            "post", "topic", "content", "originality", "clarity", "mean"
        ],
        create: [
            "post", "topic", "content", "originality", "clarity", "mean"
        ]
    },
    posts: {
        title: "Posts",
        headers: [
            "id","user","topic", "title", "type", "content"
        ],
        editable: [
            "user","topic", "title", "type", "content"
        ],
        create: [
            "user","topic", "title", "type", "content"
        ]
    },

}
