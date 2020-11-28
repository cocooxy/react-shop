import React, { Fragment } from 'react';
import '../css/app.scss'
class Login extends React.Component{
    render(){
        return (
            <Fragment>
                <div className="login-wrapper">
                    <form action="" className="box login-box">
                        <div className="filed">
                            <label htmlFor="" className="label">Email</label>
                            <div className="control">
                                <input class="input" type="text" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="filed">
                            <label htmlFor="" className="label">Password</label>
                            <div className="control">
                                <input class="input" type="text" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="filed">
                        <div class="control">
                            <button class="button is-primary is-fullwidth">Submit</button>
                        </div>                            
                        </div>

                    </form>   
                </div>
            </Fragment>
        );
    }
}

export default Login;


