import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import signImage from '../../public/s1.jpg';

const signin = () => {
    return (
        <>
            <div className="container-fluid bg-light">
                <div className="row p-5">
                    <div className="col-sm-4">
                        <Image
                            src={signImage}
                            alt="SignIn Image"
                            width={500}
                            height={580}
                        />
                    </div>
                    <div className="col-sm-8 p-5">
                        <form className="mx-5">
                            <h1 className="h3 mb-3 fw-normal ">Please sign in</h1>

                            <div className="form-floating mb-3">
                            <label htmlFor="floatingInput">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="form-floating mb-3 py-5">
                            <label htmlFor="floatingPassword">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                />
                            </div>

                            <button className="w-100 btn btn-lg btn-primary" type="submit">
                                Sign in
                            </button>
                            <p className="text-center mt-5">Don't have an account? <a href="#">Sign Up</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default signin