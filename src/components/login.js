import React, {useState} from 'react'
import {Helmet} from 'react-helmet'

const Login = () => {

    const [state, setState] = useState({})

    let handleSubmit = e => {
        e.preventDefault()
        console.log(state)
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
                        <label for="username">Username</label>
                        <input type="text" class="form-control" placeholder="Enter you username" name="txtUsername" onChange={handleChange} value={state.txtUsername}></input>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" placeholder="Enter you password" name="txtPassword" onChange={handleChange} value={state.txtPassword} ></input>
                    </div>
                    <button type="submit" class="btn btn-primary">Enter</button>
                </form>
            </div>
        </div>
    )
}
    


export default Login