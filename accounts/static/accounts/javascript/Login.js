import React from "react";
import ReactDOM from "react-dom";
import {Field, SubmitButton, CSRFToken} from "./Form";


function Login(props) {
    return (
        <form method="post">
            <Field name="Username" type="text"/>
            <Field name="Password" type="password"/>
            <CSRFToken/>
            <SubmitButton name="Login"/>
        </form>
    );
}

ReactDOM.render(<Login/>, document.getElementById('app'));