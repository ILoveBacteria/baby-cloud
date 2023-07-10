import React from "react";
import ReactDOM from "react-dom";
import Cookies from "js-cookie";


function Login(props) {
    return (
        <form method="post">
            <div className="mb-3">
                <label htmlFor="usernameInput" className="form-label">Username</label>
                <input id="usernameInput" type="text" className="form-control" name="username"/>
            </div>
            <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">Password</label>
                <input id="passwordInput" type="password" className="form-control" name="password"/>
            </div>
            <input type="hidden" value={Cookies.get('csrftoken')} name="csrfmiddlewaretoken"/>
            <button className="btn btn-primary" type="submit">Login</button>
        </form>
    );
}

ReactDOM.render(<Login/>, document.getElementById('app'));