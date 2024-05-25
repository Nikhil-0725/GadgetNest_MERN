import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/AuthStyles.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`, { email, newPassword, answer })
            if (res && res.data.success) {
                toast.success(res.data.message);
                
                navigate('/login');
            } else {
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something Went Wrong');
        }
    }

    return (
        <Layout title={'forgot-password-GagnetNest'}>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <h4 className="title">RESET PASSWORD</h4>

                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputEmail" className="form-label">Email</label> */}
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail"
                            placeholder="Enter Your Email"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputEmail" className="form-label">Email</label> */}
                        <input
                            type="text"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control"
                            id="exampleInputAnswer"
                            placeholder="Your Best Friend Name ?"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputPassword1" className="form-label">Password</label> */}
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter Your New Password"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">
                            RESET
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default ForgotPassword
