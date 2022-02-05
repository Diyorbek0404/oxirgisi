import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from "axios"

const Message = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const res = await axios.get("https://newclinic.vercel.app/api/message")
                console.log(res.data)
                setData(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchMessage()
    })
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
                                    borderRadius: "10px"
                                }}>
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">id</th>
                                                <th scope="col">Ism</th>
                                                <th scope="col">email</th>
                                                <th scope="col">phone</th>
                                                <th scope="col">Xabar matni </th>
                                            </tr>
                                        </thead>
                                        {
                                            data.map((dat, inde) => {
                                                inde = inde+1
                                                return (
                                                    <tbody key={dat._id}>
                                                        <tr>
                                                            <th scope="row">{inde}</th>
                                                            <td>{dat.name}</td>
                                                            <td>{dat.email}</td>
                                                            <td>{dat.phone}</td>
                                                            <td>{dat.description}</td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            })
                                        }
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;