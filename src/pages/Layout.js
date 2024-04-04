import {Outlet} from "react-router-dom";
import '../styles/Layout.scss';
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
const Layout = () => {



    return (
        <>
            <NavBar/>
            <main>
                <SideBar/>
                <section className="main-page">
                    <div className="content-1">
                        <Outlet/>
                    </div>
                </section>
            </main>
        </>
    )
};

export default Layout;