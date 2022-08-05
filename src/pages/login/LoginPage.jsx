import React, { useEffect, useState } from 'react'
import './login.css'
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector, } from 'react-redux';
import { baseActions } from '../../redux/module/baseSlice';
import constants from '../../helpers/constants';
import authService from '../../services/authService';
import toast from 'react-hot-toast';


const LoginPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    const user = useSelector(state => state.base.user)

    const handleOnSubmit = async () => {
        toast.loading('Loading...');
        try {
            const service = await authService.login(login)
            const user = service.user
            toast.dismiss()
            dispatch(baseActions.setUser(JSON.stringify(user)))
            navigate(constants.ROUTE.dashboard)
            toast.success('Login berhasil!');
        } catch (error) {
            toast.dismiss()
            toast.error('Login gagal!');
        }
    }

    if (user) {
        return <Navigate to='/dashboard' replace state={{ location }} />
    }

    return (
        <div className='body-login'>
            <div style={{
                height: '100vh',
            }} className="container d-flex align-items-center justify-content-center flex-column">
                <div className="card" style={{
                    width: '400px'
                }}>
                    <div className="card-header">
                        Silahkan masuk untuk melanjutkan
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Masukan email' onChange={(e) => {
                                    setLogin({
                                        ...login,
                                        email: e.target.value,
                                    })
                                }} />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Masukan password' onChange={(e) => {
                                    setLogin({
                                        ...login,
                                        password: e.target.value
                                    })
                                }} />
                            </div>
                            <center className="d-grid gap-2">
                                <button type="submit" class="btn btn-dark" onClick={(e) => {
                                    e.preventDefault()
                                    handleOnSubmit()
                                    // navigate('/dashboard')
                                }} >Masuk</button>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage