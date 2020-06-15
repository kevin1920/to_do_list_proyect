import React, {useState} from 'react'

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

        <div class="card">
            <div class="card-body">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" placeholder="Enter you email" name="txtEmail" onChange={handleChange} value={state.txtEmail}></input>
                </div>
                <div class="form-group">
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