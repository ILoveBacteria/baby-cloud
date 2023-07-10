import React from "react";
import ReactDOM from "react-dom";
import {Field, SubmitButton, CSRFToken} from "./Form";


function Signup(props) {
    return (
        <form method="post">
            <Field name="Username" type="text"/>
            <Field name="Password" type="password"/>
            <CSRFToken/>
            <SubmitButton name="Signup"/>
        </form>
    );
}

ReactDOM.render(<Signup/>, document.getElementById('app'));