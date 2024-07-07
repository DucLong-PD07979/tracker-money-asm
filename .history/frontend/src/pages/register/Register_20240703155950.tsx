import React from "react";
import PageRouters from "@/enum/routers/routers";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui";

const Register = () => {
    return (
        <div className="register-app-wrapper">
            <header>
                <Link to={PageRouters.HOME_ROOT}>Tracker money</Link>
            </header>
            <main>
                <div className="register-form">
                    <form action="">
                        <div className="inner-form-container">
                            <h1>Welcome to Tracker money</h1>
                            <p>
                                Sign in or create an account.
                                <span>It's free!</span>
                            </p>
                            <Button>
                                <span>icon</span>
                                <span>Continue with Google</span>
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Register;
