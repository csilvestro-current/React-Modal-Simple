import React, { Component } from 'react'

class SignInModal extends Component {
    state = {
        user: '',
        rememberMe: false,
        password:''
    }

    rememberMeChange = (e) => {
        const input = e.target
        const value = input.type === 'checkbox' ? input.checked : input.value
        this.setState({ [input.name]: value })
    }

    signInSubmit = () => {
        const { user, rememberMe } = this.state;
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('user', rememberMe ? user : '');
    }

    render() {
        return (
            <div style={styles.container}>
                <form onSubmit={this.signInSubmit} style={styles.form}>
                    <label>User: 
                        <input name="user" 
                                value={this.state.user} 
                                onChange={this.rememberMeChange}/>
                    </label>
                    <label>Password: 
                        <input name="password" 
                                value={this.state.password} 
                                onChange={this.rememberMeChange}/>
                    </label>
                    <label>
                        <input name="rememberMe" 
                                checked={this.state.rememberMe} 
                                onChange={this.rememberMeChange} 
                                type="checkbox"/> 
                                Remember me
                    </label>
                    <button type="submit">Sign In</button>
                </form>
            </div>
        )
    }
}

export default SignInModal

const styles = {
    container: {
        display: 'flex',
        margin: 'auto',
        width: '20%',
        background: 'white',
        borderRadius: 10
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10
    }
}