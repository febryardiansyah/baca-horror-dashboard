import React, { useState } from 'react'
import './login.css'
import { useNavigate } from "react-router-dom";
import http from '../../services/http';
import { useDispatch } from 'react-redux';
import { baseActions } from '../../redux/module/baseSlice';


const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const handleOnSubmit = async () => {
        console.log(`Login data ${login.email}`);
        console.log(`Login data ${login.password}`);
        try {
            const response = await http.post('user/login', login);
            navigate('/dashboard')
            // const { token, user } = response.data
            // dispatch(baseActions.setUser(user))
        } catch (error) {
            console.log(error);
        }
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