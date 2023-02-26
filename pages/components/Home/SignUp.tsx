import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import signImage from '../../public/s1.jpg';
import Link from 'next/link';

const signUp = () => {
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
                    <div className="col-sm-8 px-5">
                        <form className="mx-5">
                            <h1 className="h3 mb-3 fw-normal">Please sign Up</h1>

                            <div className="form-floating mb-3">
                            <label htmlFor="floatingInput">First Name</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="John"
                                />
                            </div>
                            <div className="form-floating mb-3 py-2">
                            <label htmlFor="floatingInput">Last Name</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="Doe"
                                />
                            </div>
                            <div className="form-floating mb-3 py-2">
                            <label htmlFor="floatingInput">Email Adress</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="form-floating mb-3 py-2">
                            <label htmlFor="floatingPassword">Set Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                />
                            </div>

                            <button className="w-100 btn btn-lg btn-primary" type="submit">
                                Sign Up
                            </button>
                            <p className="text-center mt-5">Already have an account? </p>
                            <Link href={"/SignUp"}></Link>
                            <button type="button" className="btn"></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default signUp