import User1 from "../../resources/images/user1.png"
import User2 from "../../resources/images/user2.png"
import User3 from "../../resources/images/user3.png"
import User4 from "../../resources/images/user4.png"


export const TableData = {
    users: {
        title: "Users",
        headers: ["image","id", "username", "name", "surname", "email"],
        editable: ["username", "name", "surname", "email", "image"],
        create: ["username", "name", "surname", "email"],
        filter: ["id", "username", "name", "surname", "email"],
        show: ["name", "id" ,"username", "surname", "email", "image"],
        defaultImages: {
            user1: User1,
            user2: User2,
            user3: User3,
            user4: User4
        }
    },
    roles: {
        title: "Roles",
        headers: ["id","name"],
        editable: ["name"],
        create: ["name"],
        filter: ["id", "name"],
        show: ["name"]
    },
    permissions: {
        title: "Permissions",
        headers: ["id","name", "type"],
        editable: ["name"],
        create: ["name"],
        filter: ["id", "name"],
        show: ["name"]
    }
    ,
    courses: {
        title: "Courses",
        headers: ["id","title","year"],
        editable: ["title", "year"],
        create: ["title", "year"],
        filter: ["id","title","year"],
        show: ["title", "year"]
    },
    classes: {
        title: "Classes",
        headers: ["id","subject", "title"],
        editable: ["title"],
        create: ["subject", "title"],
        createWithSubjectId: ["title"],
        filter: ["id","subject", "title"],
        show: ["title"]
    },
    groups: {
        title: "Groups",
        headers: ["id","name","description", "class"],
        editable: ["name","description"],
        create: ["name","description", "class"],
        createWithClassId: ["name","description"],
        filter: ["id","name","description", "class"],
        show: ["name","description"]
    },
    subjects: {
        title: "Subjects",
        headers: ["id","code","title", "course"],
        editable: ["code","title"],
        create: ["code","title", "course"],
        createWithCourseId: ["code","title"],
        filter: ["id","code","title", "course"],
        show: ["title","code"]
    },
    rubrics: {
        title: "Rubrics",
        headers: ["id","name"],
        editable: ["name"],
        create: ["name"],
        filter: ["id","name"],
        show: ["id", "name"]
    },
    topics: {
        title: "topics",
        headers: ["id","title","deadline", "unit"],
        editable: ["title","deadline", "unit"],
        create: ["title","deadline", "unit"],
        filter: ["id","title","deadline", "unit"],
        show: ["title","deadline", "unit"]
    },
    votes: {
        title: "Votes",
        headers: ["id","user","post", "mean"],
        editable: [],
        create: ["user", "post"],
        filter: ["id","user","post", "mean"],
        show: ["user" , "post" ,"mean"]
    },
    posts: {
        title: "Posts",
        headers: ["id","user","topic", "title", "type"],
        editable: ["title", "type", "content"],
        create: ["topic", "title", "type", "content"],
        filter: ["id","user","topic", "title", "type", "content"],
        show: ["title", "type", "content"]
    },

}
