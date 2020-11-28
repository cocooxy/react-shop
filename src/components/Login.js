import React, { Fragment } from 'react';

class Login extends React.Component{
    emailRef = React.createRef();
    passwordRef = React.createRef();
    handelSubmit = (event)=>{
        event.preventDefault();
        const formData={
            email: this.emailRef.current.value,
            password:this.passwordRef.current.value
        }
        console.log(formData)

        this.props.history.push('/');
    }
    render(){
        return (
            <Fragment>
                <div className="login-wrapper">
                    <form action="" className="box login-box" >  
                        <div className="filed">
                            <label htmlFor="" className="label">Email</label>
                            <div className="control">
                                <input class="input" type="text" placeholder="Email" ref={this.emailRef}/>
                            </div>
                        </div>
                        <div className="filed">
                            <label htmlFor="" className="label">Password</label>
                            <div className="control">
                                <input class="input" type="text" placeholder="Password" ref={this.passwordRef}/>
                            </div>
                        </div>
                        <div className="filed">
                        <div class="control">
                            <button class="button is-primary is-fullwidth" onClick={this.handelSubmit}>Submit</button>
                        </div>                            
                        </div>

                    </form>   
                </div>
            </Fragment>
        );
    }
}

export default Login;


