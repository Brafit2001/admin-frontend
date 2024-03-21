import {Link} from "react-router-dom";
import {useState} from "react";


const SubMenu = ({item}) => {

    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav);

    return (
        <li>
            <p onClick={showSubnav} className="card">{item.title}</p>
            {subnav &&
                item.subNav.map((subItem, value) => {
                    return (
                        <ul className="subcards" key={value}>
                            <Link to={subItem.path}>{subItem.title}</Link>
                        </ul>
                    )
                })
            }
        </li>
    )
};

export default SubMenu;