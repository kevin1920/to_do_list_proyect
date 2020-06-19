import React, {useState} from 'react'
import {Helmet} from 'react-helmet'
import users from '../config'

const Login = () => {

    localStorage.setItem('users',JSON.stringify(users))

    const [state, setState] = useState({})

    let handleSubmit = e => {
        e.preventDefault()
        users.map(x => {
            if(x.username === state.txtUsername && x.password === state.txtPassword){
                localStorage.setItem('name',JSON.stringify(x.username))
                document.location.href='/projects'
            }
        })
    }

    let handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    return (
        <div>
            <Helmet>
            <style>{"body { background-color: #282c34; }"}</style>
            </Helmet>
            <div className="card" style={{backgroundColor:"#fff",margin:"50px",borderRadius:"18px",width:"600px",marginLeft:"450px"}}>
                <h1 style={{marginTop:"40px",marginLeft:"240px"}}>Login</h1>
                <form onSubmit={handleSubmit} style={{margin:"50px",width:"500px",marginTop:"-1px"}}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" placeholder="Enter you username" name="txtUsername" onChange={handleChange} value={state.txtUsername}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" placeholder="Enter you password" name="txtPassword" onChange={handleChange} value={state.txtPassword} ></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Enter</button>
                </form>
            </div>
        </div>
    )
}
    


export default Login