import {Link, Outlet} from "react-router-dom";
import '../styles/Layout.scss';
import SideBar from "../components/SideBar";
const Layout = () => {
    return (
        <>
            <header>
                <div className="content">
                    <div className="logo">
                        <Link to="/">Logo</Link>
                    </div>
                    <div className="search">
                        search section
                    </div>
                    <div className="profile">
                        profile section
                    </div>
                </div>
            </header>
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