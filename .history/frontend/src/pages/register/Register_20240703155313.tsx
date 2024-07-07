import React from "react";
import PageRouters from "@/enum/routers/routers";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="register-app-wrapper">
            <header>
                <Link to={PageRouters.HOME_ROOT}>Tracker money</Link>
            </header>
            <main>
                <h1>Welcome to Tracker money</h1>
            </main>
        </div>
    );
};

export default Register;
