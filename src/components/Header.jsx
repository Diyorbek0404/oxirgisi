import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getMessage = async () => {
            try {
                const res = await axios.get("https://newclinic.vercel.app/api/message")
                console.log(res.data)
                setData(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getMessage()
    })
    localStorage.setItem("uzunlik", data.length)
    return (
        <div className='bg-white p-2' style={{
            height: "70px"
        }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <h2 style={{
                            fontWeight: "700",
                            paddingLeft: "10px"
                        }}>Welcome, {localStorage.getItem("username")}</h2>
                    </div>
                    <div className="col-6">
                        <div className='form-header mx-5'>
                            <i className="fad fa-search"></i>
                            <input type="text" className='headerinput' />
                        </div>
                        <div className='mx-1' style={{
                            display: "inline-block"
                        }}>
                            <Link to={"/messages"} className='btn shadow-none'>
                                {
                                    // true ?
                                    //     <i className="fad fa-bell" style={{
                                    //         fontSize: "22px"
                                    //     }}></i>
                                    //     :
                                        <i className="fad fa-bell-on" style={{
                                            fontSize: "22px",
                                            color: "red"
                                        }}></i>
                                }
                                <span style={{
                                    fontSize: "14px"
                                }}>{data.length}</span>
                            </Link>
                            <Link className='btn shadow-none' to={"/settings"}>
                                <i className="fad fa-user-md" style={{
                                    fontSize: "22px"
                                }}></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;