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
                path: '/users'
            },
            {
                title: 'Roles Management',
                path: '/roles'
            }
        ]
    },
    {
        title: 'Courses',
        icon: CoursesIcon,
        subNav: [
            {
                title: 'Courses management',
                path: '/courses'
            },
            {
                title: 'Subjects Management',
                path: '/subjects'
            },
            {
                title: 'Classes Management',
                path: '/classes'
            }
        ]
    },
    {
        title: 'Groups',
        icon: GroupsIcon,
        subNav: [
            {
                title: 'Groups management',
                path: '/groups'
            },
            {
                title: 'Topics Management',
                path: '/topics'
            }
        ]
    },
    {
        title: 'Votes',
        icon: VotesIcon,
        subNav: [
            {
                title: 'Votes management',
                path: '/votes'
            },
            {
                title: 'Posts Management',
                path: '/posts'
            }
        ]
    }

];