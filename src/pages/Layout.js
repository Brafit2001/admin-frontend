import {Outlet} from "react-router-dom";
import '../styles/Layout.scss';
import SideBar from "../components/sideBar/SideBar";
import NavBar from "../components/NavBar";
const Layout = () => {



    return (
        <>
            <NavBar/>
            <main>
                <SideBar/>
                <section className="main-page">
                    <Outlet/>
                </section>
            </main>
        </>
    )
};

export default Layout;