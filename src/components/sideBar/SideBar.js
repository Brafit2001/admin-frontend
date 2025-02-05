import SubMenu from "./SubMenu";
import {SidebarData} from "./SideBarData";

const SideBar = () => {

    return (
        <aside className="left-side-bar">
            <ul className="cards">
                {
                    SidebarData.map((item, index) => {
                        return (
                            <SubMenu item={item} key={index}/>
                        )
                    })
                }
            </ul>
        </aside>
    )

};

export default SideBar;