import React from "react";
import ReactDOM from "react-dom";
import {Field, SubmitButton, CSRFToken} from "./Form";


/**
 * A login form.
 * @returns {JSX.Element} - a form
 */
function Login() {
    const [loading, setLoading] = React.useState(false);

    return (
        <form method="post" onSubmit={() => setLoading((prevState) => !prevState)}>
            <Field name="Username" type="text"/>
            <Field name="Password" type="password"/>
            <CSRFToken/>
            <SubmitButton name="Login" loading={loading}/>
        </form>
    );
}

ReactDOM.render(<Login/>, document.getElementById('app'));