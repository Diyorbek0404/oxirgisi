import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';



const GetPost = () => {
    const [data, setData] = useState([])
    const [dataru, setDataru] = useState([])
    const [updateMode, setUpdateMode] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [postId, setPostId] = useState({})
    const [updateModeru, setUpdateModeru] = useState(false)
    const [titleru, setTitleru] = useState("")
    const [descriptionru, setDescriptionru] = useState("")
    const [postIdru, setPostIdru] = useState({})

    const username = localStorage.getItem("username")

    useEffect(() => {
        // setInterval(() => {
        const fetchPost = async () => {
            try {
                const res = await axios.get("https://newclinic.vercel.app/api/post")
                setData(res.data)
                console.log(username)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPost()
        // }, 1000);
    })

    const fetchPostru = async () => {
        try {
            const res = await axios.get("https://newclinic.vercel.app/api/postru")
            setDataru(res.data)
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
                {/* Same as */}
                <ToastContainer />
                <Header />
                <div className='bg-light pt-5' style={{
                    height: "100vh"
                }}>
                    <div className="container">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Hamma yangiliklar (O'zbk tilida)
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="col-12">
                                            {
                                                data.map(dat => {
                                                    return (
                                                        <div key={dat._id} className="shadow p-3 bg-white my-3" style={{
                                                            borderRadius: "20px"
                                                        }}>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <img
                                                                        src={dat.photo}
                                                                        alt="rasm"
                                                                        className='w-100'
                                                                        style={{
                                                                            borderRadius: "20px"
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className="col-md-6">
                                                                    {
                                                                        (dat._id === postId._id) && (updateMode) ?
                                                                            <input
                                                                                type="text"
                                                                                value={title}
                                                                                onChange={(e) => setTitle(e.target.value)}
                                                                                className='form-control'
                                                                            />
                                                                            :
                                                                            <h3>{dat.title}</h3>
                                                                    }
                                                                    {
                                                                        (dat._id === postId._id) && (updateMode) ?
                                                                            <textarea
                                                                                type="text"
                                                                                value={description}
                                                                                onChange={(e) => setDescription(e.target.value)}
                                                                                className='form-control my-5'
                                                                            />
                                                                            :
                                                                            <p>
                                                                                {dat.description}
                                                                            </p>
                                                                    }
                                                                    {(dat._id === postId._id) && (updateMode) ? (
                                                                        <button className="btn btn-primary" onClick={async () => {
                                                                            try {
                                                                                await axios.put(`https://newclinic.vercel.app/api/post/${dat._id}`, {
                                                                                    username: username,
                                                                                    title,
                                                                                    description
                                                                                })
                                                                                setUpdateMode(false)
                                                                                toast.success('Yangilash omadli bajarildi!', {
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
                                                                                toast.error('Yanliashda xato!', {
                                                                                    position: "top-right",
                                                                                    autoClose: 5000,
                                                                                    hideProgressBar: false,
                                                                                    closeOnClick: true,
                                                                                    pauseOnHover: true,
                                                                                    draggable: true,
                                                                                    progress: undefined,
                                                                                    });
                                                                            }
                                                                        }}>
                                                                            Yangilash
                                                                        </button>)
                                                                        :
                                                                        <div>
                                                                            <button className='btn btn-outline-primary mx-4' onClick={async () => {
                                                                                try {
                                                                                    const res = await axios.get(`https://newclinic-diyorbek0404.vercel.app/api/post/${dat._id}`)
                                                                                    setPostId(res.data)
                                                                                    console.log(res.data._id)
                                                                                } catch (error) {
                                                                                    console.log(error)
                                                                                }
                                                                                setUpdateMode(true)
                                                                            }}>
                                                                                <i className="fad fa-pencil-alt fa-2x"></i>
                                                                            </button>
                                                                            <button onClick={async () => {
                                                                                try {
                                                                                    await axios.delete(`https://newclinic-diyorbek0404.vercel.app/api/post/${dat._id}`, {
                                                                                        username: username,
                                                                                    })
                                                                                    toast.warn('Post omadli o`chirildi!', {
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
                                                                                    toast.error('Postni o`chirishda xatolik!', {
                                                                                        position: "top-right",
                                                                                        autoClose: 5000,
                                                                                        hideProgressBar: false,
                                                                                        closeOnClick: true,
                                                                                        pauseOnHover: true,
                                                                                        draggable: true,
                                                                                        progress: undefined,
                                                                                        });
                                                                                }
                                                                            }} className='btn btn-outline-danger'>
                                                                                <i className="fad fa-trash-alt fa-2x"></i>
                                                                            </button>
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo" onClick={fetchPostru}>
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Hamma yangiliklar (rus  tilida)
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <button className='btn btn-success' onClick={fetchPostru}><i className="fad fa-sync"></i> Yangilash</button>
                                        <div className="col-12">
                                            {
                                                dataru.map(dat => {
                                                    return (
                                                        <div key={dat._id} className="shadow p-3 bg-white my-3" style={{
                                                            borderRadius: "20px"
                                                        }}>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <img
                                                                        src={dat.photo}
                                                                        alt="rasm"
                                                                        className='w-100'
                                                                        style={{
                                                                            borderRadius: "20px"
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className="col-md-6">
                                                                    {
                                                                        (dat._id === postIdru._id) && (updateModeru) ?
                                                                            <input
                                                                                type="text"
                                                                                value={titleru}
                                                                                onChange={(e) => setTitleru(e.target.value)}
                                                                                className='form-control'
                                                                            />
                                                                            :
                                                                            <h3>{dat.title}</h3>
                                                                    }
                                                                    {
                                                                        (dat._id === postIdru._id) && (updateModeru) ?
                                                                            <textarea
                                                                                type="text"
                                                                                value={descriptionru}
                                                                                onChange={(e) => setDescriptionru(e.target.value)}
                                                                                className='form-control my-5'
                                                                            />
                                                                            :
                                                                            <p>
                                                                                {dat.description}
                                                                            </p>
                                                                    }
                                                                    {(dat._id === postIdru._id) && (updateModeru) ? (
                                                                        <button className="btn btn-primary" onClick={async () => {
                                                                            try {
                                                                                await axios.put(`https://newclinic-diyorbek0404.vercel.app/api/postru/${dat._id}`, {
                                                                                    username: username,
                                                                                    title: titleru,
                                                                                    description: descriptionru
                                                                                })
                                                                                setUpdateModeru(false)
                                                                                toast.success('Postingiz omadli yangilandi, Yangliash tugmasini bosing!', {
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
                                                                                toast.error('Postni yangilashda xatolik!', {
                                                                                    position: "top-right",
                                                                                    autoClose: 5000,
                                                                                    hideProgressBar: false,
                                                                                    closeOnClick: true,
                                                                                    pauseOnHover: true,
                                                                                    draggable: true,
                                                                                    progress: undefined,
                                                                                    });
                                                                            }
                                                                        }}>
                                                                            Yangilash
                                                                        </button>)
                                                                        :
                                                                        <div>
                                                                            <button className='btn btn-outline-primary mx-4' onClick={async () => {
                                                                                try {
                                                                                    const res = await axios.get(`https://newclinic-diyorbek0404.vercel.app/api/postru/${dat._id}`)
                                                                                    setPostIdru(res.data)
                                                                                    console.log(res.data._id)
                                                                                } catch (error) {
                                                                                    console.log(error)
                                                                                }
                                                                                setUpdateModeru(true)
                                                                            }}>
                                                                                <i className="fad fa-pencil-alt fa-2x"></i>
                                                                            </button>
                                                                            <button onClick={async () => {
                                                                                try {
                                                                                    await axios.delete(`https://newclinic-diyorbek0404.vercel.app/api/postru/${dat._id}`, {
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
                                                                            }} className='btn btn-outline-danger'>
                                                                                <i className="fad fa-trash-alt fa-2x"></i>
                                                                            </button>
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetPost;