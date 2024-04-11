import UsersIcon from '../../resources/images/users.svg'
import CoursesIcon from '../../resources/images/courses.svg'
import GroupsIcon from '../../resources/images/groups.svg'
import VotesIcon from '../../resources/images/votes.svg'

export const SidebarData = [
    {
        title: 'Users',
        icon: UsersIcon,
        subNav: [
            {
                title: 'Users management',
                path: '/clipclass/users'
            },
            {
                title: 'Roles Management',
                path: '/clipclass/roles'
            }
        ]
    },
    {
        title: 'Courses',
        icon: CoursesIcon,
        subNav: [
            {
                title: 'Courses management',
                path: '/clipclass/courses'
            },
            {
                title: 'Subjects Management',
                path: '/clipclass/subjects'
            },
            {
                title: 'Classes Management',
                path: '/clipclass/classes'
            }
        ]
    },
    {
        title: 'Groups',
        icon: GroupsIcon,
        subNav: [
            {
                title: 'Groups management',
                path: '/clipclass/groups'
            },
            {
                title: 'Topics Management',
                path: '/clipclass/topics'
            }
        ]
    },
    {
        title: 'Votes',
        icon: VotesIcon,
        subNav: [
            {
                title: 'Votes management',
                path: '/clipclass/votes'
            },
            {
                title: 'Posts Management',
                path: '/clipclass/posts'
            }
        ]
    }

];