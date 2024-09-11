import PageRouters from "@/enum/routers/routers";
import { Link } from "react-router-dom";
interface MenuListType {
    path: string;
    label: string;
}

const HeaderRoot = () => {
    const menuList: MenuListType[] = [
        {
            path: "/about",
            label: "about us",
        },
        {
            path: "/career",
            label: "career",
        },
    ];

    return (
        <header id="header-root">
            <div className="container">
                <div className="header-root-inner">
                    <h1 className="header-logo">
                        <Link
                            to={PageRouters.HOME_ROOT}
                            className="header-logo__link"
                        >
                            Tracker money
                        </Link>
                    </h1>
                    <div className="header-menu">
                        <ul className="header-menu__list">
                            {menuList.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.path}>{item.label}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderRoot;
