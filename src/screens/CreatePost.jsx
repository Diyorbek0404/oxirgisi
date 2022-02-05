import React, { useState } from 'react';
import Header from '../components/Header';
import axios from "axios"
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const CreatePost = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    const [titleRU, setTitleRU] = useState("")
    const [descriptionru, setDescriptionru] = useState("")


    const username = localStorage.getItem("username")
    const postdetailes = async (e) => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "maktab")
        data.append("cloud_name", "cafe-uz")
        fetch("https://api.cloudinary.com/v1_1/cafe-uz/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setUrl(data.url)
                console.log(data.url)
                alert("yuklandi")
            })
            .catch(error => {
                console.log(error)
            })
    }
    const uploadPost = async (e) => {
        const newchildrenPost = {
            username: username,
            title,
            description,
            photo: url,
        }
        try {
            await axios.post("https://newclinic-diyorbek0404.vercel.app/api/post", newchildrenPost)
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
    const uploadPostru = async (e) => {
        const newchildrenPost = {
            username: username,
            title:titleRU,
            description:descriptionru,
            photo: url,
        }
        try {
            await axios.post("https://newclinic-diyorbek0404.vercel.app/api/postru", newchildrenPost)
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
                {/* Same as */}
                <ToastContainer />
                <div className='bg-light pt-5' style={{
                    height: "100vh"
                }}>
                    <div className="container">
                        <div className="col-12">
                            <div className='shadow bg-white p-4 mt-3' style={{
                                borderRadius: "20px"
                            }}>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                O'zbek tilida yangilik qo'shing
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                {
                                                    image && (
                                                        <img width={100} src={URL.createObjectURL(image)} alt="rasm" />
                                                    )
                                                }
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                                        <i className="fad fa-image fa-3x" style={{
                                                            cursor: "pointer"
                                                        }}></i>
                                                    </label> <br />
                                                    <button className='btn btn-outline-dark' onClick={() => {
                                                        postdetailes()
                                                    }}>rasmni yuklash</button>
                                                    <input onChange={(e) => setImage(e.target.files[0])}
                                                        type="file" className="form-control" id="exampleFormControlInput1" style={{
                                                            display: "none"
                                                        }} />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="title" className="form-label">Yangilik mavzusi</label>
                                                    <input
                                                        value={title}
                                                        onChange={e => setTitle(e.target.value)}
                                                        type="text"
                                                        className="form-control"
                                                        id="title"
                                                        placeholder="title"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="description" className="form-label">Yangilikning to'liq matni</label>
                                                    <textarea
                                                        className="form-control"
                                                        id="description"
                                                        placeholder='description'
                                                        rows="3"
                                                        value={description}
                                                        onChange={e => setDescription(e.target.value)}
                                                    />
                                                </div>
                                                <button onClick={() => {
                                                    uploadPost()
                                                }} className='btn btn-success' type='submit'>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Rus tilida yangilik qo'shing
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                {
                                                    image && (
                                                        <img width={100} src={URL.createObjectURL(image)} alt="rasm" />
                                                    )
                                                }
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                                        <i className="fad fa-image fa-3x" style={{
                                                            cursor: "pointer"
                                                        }}></i>
                                                    </label> <br />
                                                    <button className='btn btn-outline-dark' onClick={() => {
                                                        postdetailes()
                                                    }}>rasmni yuklash</button>
                                                    <input onChange={(e) => setImage(e.target.files[0])}
                                                        type="file" className="form-control" id="exampleFormControlInput1" style={{
                                                            display: "none"
                                                        }} />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="title" className="form-label">Yangilik mavzusi  (rus tilida)</label>
                                                    <input
                                                        value={titleRU}
                                                        onChange={e => setTitleRU(e.target.value)}
                                                        type="text"
                                                        className="form-control"
                                                        id="title"
                                                        placeholder="title"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="description" className="form-label">Yangilikning to'liq matni (rus tilida)</label>
                                                    <textarea
                                                        className="form-control"
                                                        id="description"
                                                        placeholder='description'
                                                        rows="3"
                                                        value={descriptionru}
                                                        onChange={e => setDescriptionru(e.target.value)}
                                                    />
                                                </div>
                                                <button onClick={() => {
                                                    uploadPostru()
                                                }} className='btn btn-success' type='submit'>Submit</button>
                                            </div>
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

export default CreatePost;