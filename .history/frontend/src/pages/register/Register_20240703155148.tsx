import PageRouters from "@/enum/routers/routers";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="register-app-wrapper">
            <header>
                <Link to={PageRouters.HOME_ROOT}>Logo</Link>
            </header>
        </div>
    );
};

export default Register;
