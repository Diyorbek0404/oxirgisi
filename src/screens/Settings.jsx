import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

const Settings = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const username = user.username;
    // useEffect(() => {
    //     const fetchUser = async () =>{
    //         try {
    //             const res = await axios.get(`https://clicnic-git-main-diyorbek0404.vercel.app/api/user/${data._id}`)
    //             console.log(res.data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchUser()
    // })
    const deleteUser = () => {
        localStorage.clear()
        window.location.replace("/")
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
                    <h3 className='px-3'>Admin Malumotlari</h3>
                    <div className="container">
                        <div className="row shadow p-4 bg-white mx-4" style={{
                            borderRadius: "20px"
                        }}>
                            {/* <div className='' style={{
                                borderRadius: "20px"
                            }}> */}
                            <div className="col-6">
                                <img
                                    src={user.profilepic}
                                    alt="rasm"
                                    style={{
                                        width: "200px",
                                        height: "200px",
                                    }}
                                /> <br />

                            </div>
                            <div className="col-6">
                                <h4 className='d-flex'>Ism: {username}</h4>


                                <button className='btn btn-outline-danger mt-4' onClick={deleteUser}>Hisobdan chiqish</button>
                                <button type='submit' className='btn btn-outline-success mx-5 mt-4' onClick={async () => {
                                    try {
                                        await axios.put(`https://newclinic.vercel.app/api/user/${user._id}`, {
                                            userId: user._id,
                                            username,
                                            email: user.email,
                                        })
                                    } catch (error) {
                                        console.log(error)
                                    }
                                }}>Saqlash</button>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Settings;