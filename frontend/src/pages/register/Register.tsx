import React, { useState } from "react";
import PageRouters from "@/enum/routers/routers";
import { Link } from "react-router-dom";
import { Button, Separate } from "@/components/ui";
import { AppleIcon, FaceBookIcon, GoogleIcon } from "@/components/ui/icon";
import { URL_LOGIN_GOOGLE } from "@/api/authApi";

const Register = () => {
    const [isOpentEmailInput, setIsOpenEmailInput] = useState<boolean>(false);

    const handleOpenEmail = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        setIsOpenEmailInput(!isOpentEmailInput);
    };

    const handleLoginWithGoogle = () => {
        window.location.href = URL_LOGIN_GOOGLE;
    };

    const handleLoginWithApple = () => {
        window.location.href = URL_LOGIN_GOOGLE;
    };

    const handleLoginWithFacebook = () => {
        window.location.href = URL_LOGIN_GOOGLE;
    };

    return (
        <div className="register-app-wrapper">
            <div className="logo-wrapper">
                <Link to={PageRouters.HOME_ROOT}>Tracker money</Link>
            </div>
            <main>
                <div className="register-form">
                    <div className="inner-form-container">
                        <h1>Welcome to Tracker money</h1>
                        <p className="recomment">
                            Sign in or create an account.
                            <span>It's free!</span>
                        </p>
                        <div className="method-register-wrapper">
                            <Button
                                classNames="btn-register"
                                onClick={() => handleLoginWithGoogle()}
                            >
                                <GoogleIcon />
                                <span>Continue with Google</span>
                                <div></div>
                            </Button>
                            <Button
                                classNames="btn-register"
                                onClick={() => handleLoginWithApple()}
                            >
                                <AppleIcon />
                                <span>Continue with Apple</span>
                                <div></div>
                            </Button>
                            <Button
                                classNames="btn-register"
                                onClick={() => handleLoginWithFacebook()}
                            >
                                <FaceBookIcon />
                                <span>Continue with Facebook</span>
                                <div></div>
                            </Button>
                            <Separate
                                thickness="1px"
                                margin="10px 0"
                                style={{ width: "320px" }}
                            />
                            <form action="">
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
                            </form>
                        </div>
                        <p className="register-note">
                            By signing up, you agree to the Terms and Conditions
                            and Privacy Policy.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Register;
