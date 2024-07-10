import {Link} from "react-router-dom";
import {useState} from "react";
import ArrowDown from '../../resources/images/arrow-down.svg'
import ArrowUp from '../../resources/images/arrow-up.svg'

const SubMenu = ({item}) => {

    const [subnav, setSubnav] = useState(true)

    const showSubnav = () => setSubnav(!subnav);

    return (
        <li className="card">
            <div className="icon-title" style={subnav ? {backgroundColor: "#000B71"} : null} onClick={showSubnav}>
                <p  className="text">{item.title}</p>
                <img src={subnav ? ArrowUp : ArrowDown} alt=""/>
            </div>
            {subnav &&
                item.subNav.map((subItem, value) => {
                    return (
                        <ul className="subCard" key={value}>
                        <Link key={value} to={subItem.path}><p className="subText">{subItem.title}</p></Link>
                        </ul>
                    )
                })
            }
        </li>
    )
};

export default SubMenu;