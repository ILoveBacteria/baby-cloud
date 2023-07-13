import React from "react";
import ReactDOM from "react-dom";
import {Field, SubmitButton, CSRFToken} from "./Form";


/**
 * A signup form.
 * @returns {JSX.Element} - a form
 */
function Signup() {
    const [loading, setLoading] = React.useState(false);

    return (
        <form method="post" onSubmit={() => setLoading((prevState) => !prevState)}>
            <Field name="Username" type="text"/>
            <Field name="Password" type="password"/>
            <CSRFToken/>
            <SubmitButton name="Signup" loading={loading}/>
        </form>
    );
}

ReactDOM.render(<Signup/>, document.getElementById('app'));