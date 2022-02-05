import axios from 'axios';
import React, {useRef } from 'react';
import Header from '../components/Header';


const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const loginDetail = async () => {
        try {
            const res = await axios.post("https://newclinic.vercel.app/api/auth/login", {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            })
            localStorage.setItem("user", JSON.stringify(res.data))
            localStorage.setItem("username", res.data.username)
            window.location.replace("/")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='w-100 d-flex'>
            <div className='bg-white' style={{
                width: "100%",
                height: "100%",
                marginLeft: "20%"
            }}>
                <Header />
                <div className='bg-light pt-5' style={{
                    height: "100vh"
                }}>
                    <div className='container'>
                        <div className="row">
                            <div className="col-12">
                                <div className="shadow p-3 bg-white" style={{
                                    borderRadius: "20px"
                                }}>
                                    <h3 className='text-center'>Login</h3>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">email</label>
                                        <input
                                            ref={emailRef}
                                            type="email"
                                            className="form-control"
                                            id="title"
                                            placeholder="title"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">password</label>
                                        <input
                                            ref={passwordRef}
                                            type="password"
                                            className="form-control"
                                            id="title"
                                            placeholder="title"
                                        />
                                    </div>
                                    <button className='btn btn-warning' type="submit" onClick={() => {
                                        loginDetail()
                                    }}>
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;