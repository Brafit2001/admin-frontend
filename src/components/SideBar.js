import {Link} from "react-router-dom";
import SubMenu from "./SubMenu";
import {SidebarData} from "./SideBarData";

const SideBar = () => {

    return (
        <aside className="left-side-bar">
            <ul className="cards">
                <li>
                    <Link to="/">Home</Link>
                </li>
                {
                    SidebarData.map((item) => {
                        return (
                            <SubMenu item={item}/>
                        )
                    })
                }
            </ul>
        </aside>
    )

};

export default SideBar;