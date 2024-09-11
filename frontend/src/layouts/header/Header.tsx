import { useAppDispatch, useAppSelector } from "@/hooks";
import { uiSelector } from "@/store/uiSlice/uiSlice";
import { Avatar, Button } from "@/components/ui";
import { Popover } from "@/components/popover";
import { ArrowLeftCircleIcon, SettingIcon } from "@/components/ui/icon";
import { authSelector, logoutSuccess } from "@/store/authSlice/authSlice";
import { logout } from "@/api/authApi";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const HeaderMenuPopover = () => {
    const { user } = useAppSelector(authSelector);
    const { username, avatar, email } = user;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleLogout = async () => {
        const logoutSatuts = await logout();
        if (logoutSatuts === 200) {
            Cookies.remove("jwt");
            Cookies.remove("jwt-refresh");
            dispatch(logoutSuccess());
            navigate("/register");
        }
    };
    return (
        <div className="header-popover-wrapper">
            <div className="header-popover-top">
                <Avatar
                    img={avatar}
                    defaultImg="https://i.sstatic.net/l60Hf.png"
                    alt={`user-avatar-${username}`}
                    role="avatar"
                    size="sm"
                    rounder="full"
                />
                <div className="user-infor-details">
                    <h3>{username}</h3>
                    <span>{email}</span>
                </div>
            </div>
            <ul className="header-popover">
                <li>
                    <Button icon={<SettingIcon width="16px" height="16px" />}>
                        Setting
                    </Button>
                </li>
                <li>
                    <Button
                        icon={
                            <ArrowLeftCircleIcon width="16px" height="16px" />
                        }
                        onClick={() => handleLogout()}
                    >
                        Logout
                    </Button>
                </li>
            </ul>
        </div>
    );
};

const Header = () => {
    const { siderbarOpen } = useAppSelector(uiSelector);
    const { user } = useAppSelector(authSelector);
    const { username, avatar } = user;
    return (
        <header className={`header-main ${siderbarOpen ? "siderbarOpen" : ""}`}>
            <div className={`header-inner `}>
                <div className="header-logo">Tracker money asm</div>
                <div className="header-user-wrapper"></div>
                <div className="header-right-wrapper">
                    <Popover content={<HeaderMenuPopover />}>
                        <Avatar
                            img={avatar}
                            defaultImg={"https://i.sstatic.net/l60Hf.png"}
                            alt={`avatar-img-${username}`}
                            role="avatar"
                            size="sm"
                            rounder="full"
                            addClassnames="avatar-btn"
                        />
                    </Popover>
                </div>
            </div>
        </header>
    );
};

export default Header;
