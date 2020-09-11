import React from 'react';

class Login extends React.Component {


handleSubmit = event =>{
    event.preventDefault()
}
    render(){
        return (
            <section className="login-container">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <label for="username">Username:</label>
                    <br/>
                    <input className="login-input" />
                    <label for="password">Password:</label>
                    <br/>
                    <input className="login-input" />
                    <button className="login-btn">Log In</button>
                </form>
            </section>
        )
    }
}

export default Login;