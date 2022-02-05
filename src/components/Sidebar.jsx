import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='bg-dark text-white' style={{
            height: "100vh",
            width: "20%",
            position: "fixed",
            top: "0",
            bottom: "0",
            left: "0"
        }}>
            <h3 className='text-center my-3' style={{
                fontStyle: "italic"
            }}>Admin Panel</h3>


            {
                localStorage.getItem('user') ?
                    <ul className='sidebar'>
                        <span style={{
                            color: "#888",
                            fontSize: "14px"
                        }}>MENU</span>
                        <li>
                            <Link to="/"><i className="fas fa-home-lg-alt mx-2"></i>Bosh sahifa</Link>
                        </li>
                        <li>
                            <Link to="/addnews"><i className="fas fa-layer-plus mx-2"></i>Yangilik qo'shish</Link>
                        </li>
                        <li>
                            <Link to="/allnews"><i className="fad fa-newspaper mx-2"></i>Hamma yangiliklar</Link>
                        </li>
                        <li>
                            <Link to="/settings"><i className="fad fa-cog mx-2"></i>Sozlamalar</Link>
                        </li>
                        <li>
                            <Link to="/messages"><i className="fad fa-comments-alt mx-2"></i>Xabarlar</Link>
                        </li>
                    </ul>
                    :

                    <ul className='sidebar'>
                        <span style={{
                            color: "#888",
                            fontSize: "14px"
                        }}>MENU</span>
                        <li>
                            <Link to="/login"><i className="fad fa-sign-in-alt mx-2"></i>Login</Link>
                        </li>
                    </ul>
            }
        </div>
    );
};

export default Sidebar;