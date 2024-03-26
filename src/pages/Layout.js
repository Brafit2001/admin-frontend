import {Link, Outlet} from "react-router-dom";
import '../styles/Layout.scss';
import SideBar from "../components/SideBar";
import {login} from "../services/AuthService";
const Layout = () => {

    function handleLogin(){
        login('marce', '0000').then((response) =>
            localStorage.setItem("token", response.data.token)
        )
    }

    return (
        <>
            <header>
                <div className="content">
                    <div className="logo">
                        <Link to="/">Logo</Link>
                    </div>
                    <button onClick={handleLogin}>
                        Login
                    </button>
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