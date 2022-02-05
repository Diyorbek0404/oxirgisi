import React, { useState } from 'react';
import Header from '../components/Header';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
// import Dashboard from '../components/Dashboard';
// import { PieChart, Pie } from "recharts"

// const data01 = [
//     {
//         "name": "Group A",
//         "value": 400
//     },
//     {
//         "name": "Group B",
//         "value": 300
//     },
//     {
//         "name": "Group C",
//         "value": 300
//     },
//     {
//         "name": "Group D",
//         "value": 200
//     },
//     {
//         "name": "Group E",
//         "value": 278
//     },
//     {
//         "name": "Group F",
//         "value": 189
//     }
// ];
// const data02 = [
//     {
//         "name": "Group A",
//         "value": 2400
//     },
//     {
//         "name": "Group B",
//         "value": 4567
//     },
//     {
//         "name": "Group C",
//         "value": 1398
//     },
//     {
//         "name": "Group D",
//         "value": 9800
//     },
//     {
//         "name": "Group E",
//         "value": 3908
//     },
//     {
//         "name": "Group F",
//         "value": 4800
//     }
// ];

const Home = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [tel, setTel] = useState("");
    const [upload, setUpload] = useState(false)
    const [toifa, setToifa] = useState("")
    const [postId, setPostId] = useState("")

    const uploadPostXodim = async () => {
        const newXodim = {
            name,
            lastname,
            tel,
            toifa
        }
        try {
            await axios.post("https://newclinic.vercel.app/api/xodim/", newXodim)
            toast.success('post omadli yuklandi!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            console.log(error)
            toast.error('yuklashda xato!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    const getXodim = async () => {
        try {
            const res = await axios.get("https://newclinic.vercel.app/api/xodim/")
            console.log(res.data)
            setData(res.data)
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
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <div className='bg-light pt-5' style={{
                    height: "100vh"
                }}>
                    {/* <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <Dashboard />
                            </div>
                            <div className="col-6">
                                <div className='shadow bg-white p-3 h-100 mx-4' style={{
                                    borderRadius: "20px"
                                }}>
                                    <h4 className='text-success'>Xodimlar soni - <span className='text-danger'>44</span></h4>
                                    <h4 className='my-5 text-success'>Bugun kelgan  - <span className='text-danger'>30</span></h4>
                                    <h4 className='text-success'>Otpuskada  - <span className='text-danger'>3</span></h4>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='shadow mr-4 bg-white' style={{
                                    borderRadius:"20px",
                                    marginRight:"24px"
                                }}>
                                    <PieChart width={300} height={250}>
                                        <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                                        <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                                    </PieChart>
                                </div>

                            </div>
                        </div>
                    </div> */}
                    <div className='container'>
                        <div className="shadow p-3 bg-white px-5" style={{
                            borderRadius: "20px"
                        }}>
                            <h3 className='text-center'>Xodimlar ro'yxati</h3>
                            <div className='uploadxodim'>
                                <h5>Xodim Qo'shish</h5>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Ism</label>
                                    <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">familya</label>
                                    <input value={lastname} onChange={e => setLastname(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tel" className="form-label">phone</label>
                                    <input value={tel} onChange={e => setTel(e.target.value)} type="text" className="form-control" id="tel" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="toifa" className="form-label">toifa</label>
                                    <input value={toifa} onChange={e => setToifa(e.target.value)} type="text" className="form-control" id="toifa" />
                                </div>
                                <button onClick={uploadPostXodim} className="btn btn-primary">Submit</button>
                            </div>
                            <hr />
                            {/* get xodim */}
                            <div className='getxodim'>
                                <h6>Xodimlar ro'yxati</h6>
                                <button onClick={getXodim} className='btn btn-success shadow-none'><i className="fad fa-sync"></i> Yangilash</button>
                                <table className="table table-hover mt-3">
                                    <thead>
                                        <tr>
                                            <th scope="col">id</th>
                                            <th scope="col">Ism</th>
                                            <th scope="col">familya</th>
                                            <th scope="col">phone</th>
                                            <th scope="col">toifa </th>
                                            <th scope="col">amallar </th>
                                        </tr>
                                    </thead>
                                    {
                                        data.map((dat, inde) => {
                                            inde = inde + 1
                                            return (
                                                <tbody key={dat._id}>
                                                    <tr>
                                                        <th scope="row">{inde}</th>
                                                        <td>
                                                            {
                                                                (dat._id === postId._id) && (upload) ?
                                                                    <input className='form-control shadow-none' type="text" value={name} onChange={e => setName(e.target.value)} />
                                                                    :
                                                                    <span>{dat.name}</span>
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                (dat._id === postId._id) && (upload) ?
                                                                    <input className='form-control shadow-none' type="text" value={lastname} onChange={e => setLastname(e.target.value)} />
                                                                    :
                                                                    <span>{dat.lastname}</span>
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                (dat._id === postId._id) && (upload) ?
                                                                    <input className='form-control shadow-none' type="text" value={tel} onChange={e => setTel(e.target.value)} />
                                                                    :
                                                                    <span>{dat.tel}</span>
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                (dat._id === postId._id) && (upload) ?
                                                                    <input className='form-control shadow-none' type="text" value={toifa} onChange={e => setToifa(e.target.value)} />
                                                                    :
                                                                    <span>{dat.toifa}</span>
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                (dat._id === postId._id) && (upload) ?
                                                                    <button onClick={async () => {
                                                                        try {
                                                                            await axios.put(`https://newclinic.vercel.app/api/xodim/${dat._id}`, {
                                                                                name,
                                                                                lastname,
                                                                                tel,
                                                                                toifa,
                                                                            })
                                                                            setUpload(false)
                                                                            toast.success('post omadli yangilandi!', {
                                                                                position: "top-right",
                                                                                autoClose: 5000,
                                                                                hideProgressBar: false,
                                                                                closeOnClick: true,
                                                                                pauseOnHover: true,
                                                                                draggable: true,
                                                                                progress: undefined,
                                                                            });
                                                                        } catch (error) {
                                                                            console.log(error)
                                                                            toast.error('Sizning postingiz yangilanmadi!', {
                                                                                position: "top-right",
                                                                                autoClose: 5000,
                                                                                hideProgressBar: false,
                                                                                closeOnClick: true,
                                                                                pauseOnHover: true,
                                                                                draggable: true,
                                                                                progress: undefined,
                                                                            });
                                                                        }
                                                                    }}
                                                                        className='btn shadow-none btn-success'>Yangilash</button>
                                                                    :
                                                                    <div>
                                                                        <button onClick={async () => {
                                                                            try {
                                                                                await axios.delete(`https://newclinic-diyorbek0404.vercel.app/api/xodim/${dat._id}`, {
                                                                                    username: postId.username,
                                                                                })
                                                                                toast.warn('Sizning postingiz o`chdi!', {
                                                                                    position: "top-right",
                                                                                    autoClose: 5000,
                                                                                    hideProgressBar: false,
                                                                                    closeOnClick: true,
                                                                                    pauseOnHover: true,
                                                                                    draggable: true,
                                                                                    progress: undefined,
                                                                                });
                                                                            } catch (error) {
                                                                                console.log(error)
                                                                                toast.error('Sizning postingiz o`chmadi!', {
                                                                                    position: "top-right",
                                                                                    autoClose: 5000,
                                                                                    hideProgressBar: false,
                                                                                    closeOnClick: true,
                                                                                    pauseOnHover: true,
                                                                                    draggable: true,
                                                                                    progress: undefined,
                                                                                });
                                                                            }
                                                                        }} className='btn btn-danger'><i className="fad fa-trash-alt"></i>delete</button>
                                                                        <button onClick={async () => {
                                                                            try {
                                                                                const res = await axios.get(`https://newclinic-diyorbek0404.vercel.app/api/xodim/${dat._id}`)
                                                                                setPostId(res.data)
                                                                            } catch (error) {
                                                                                console.log(error)
                                                                            }
                                                                            setUpload(true)
                                                                        }} className='btn btn-primary mx-2'><i className="fad fa-pencil-alt"></i>edit</button>
                                                                    </div>
                                                            }
                                                        </td>
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
    );
};

export default Home;