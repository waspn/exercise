import React, {Component} from 'react'

class Login extends Component {
    render() {
        return(
            <div className='col-xs-12'>
                <div className='page-header'><h2>Login to REACT</h2></div>
                <div className='well center col-md-4 col-md-offset-4'>
                    <h5>Enter <b>username</b> and <b>password</b> to Login</h5>
                    <input type='text' className='form-control' placeholder='Username' />
                    <input type='password' className='form-control' placeholder='Password' />
                    <br/>
                    <button className='btn btn-default'> Login </button>
                    <hr/>
                    <div className='help'>
                        <a><small className='detail'>Forgot Password</small></a><br/>
                        <a><small className='detail'>Sign Up</small></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
