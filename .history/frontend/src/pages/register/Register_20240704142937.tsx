import React, { useState } from "react";
import PageRouters from "@/enum/routers/routers";
import { Link } from "react-router-dom";
import { Button, Separate } from "@/components/ui";
import { AppleIcon, FaceBookIcon, GoogleIcon } from "@/components/ui/icon";

const Register = () => {
    const [isOpentEmailInput, setIsOpenEmailInput] = useState<boolean>(false);

    const handleOpenEmail = (e) => {
        e.preventDefault();
        setIsOpenEmailInput(!isOpentEmailInput);
    };

    return (
        <div className="register-app-wrapper">
            <div className="logo-wrapper">
                <Link to={PageRouters.HOME_ROOT}>Tracker money</Link>
            </div>
            <main>
                <div className="register-form">
                    <form action="">
                        <div className="inner-form-container">
                            <h1>Welcome to Tracker money</h1>
                            <p className="recomment">
                                Sign in or create an account.
                                <span>It's free!</span>
                            </p>
                            <div className="method-register-wrapper">
                                <Button classNames="btn-register">
                                    <GoogleIcon />
                                    <span>Continue with Google</span>
                                    <div></div>
                                </Button>
                                <Button classNames="btn-register">
                                    <AppleIcon />
                                    <span>Continue with Apple</span>
                                    <div></div>
                                </Button>
                                <Button classNames="btn-register">
                                    <FaceBookIcon />
                                    <span>Continue with Facebook</span>
                                    <div></div>
                                </Button>
                                <Separate
                                    thickness="1px"
                                    margin="10px 0"
                                    style={{ width: "320px" }}
                                />
                                <div className="register-with-email">
                                    {isOpentEmailInput && (
                                        <input
                                            type="email"
                                            placeholder="email"
                                        />
                                    )}
                                    <Button
                                        classNames="btn-register"
                                        onClick={(e) => handleOpenEmail(e)}
                                    >
                                        <span>Continue with Email</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Register;
