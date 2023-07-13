import React from "react";
import Cookies from "js-cookie";


/**
 * A form field with a label and input. Gets the name and type from props.
 * @param props - name and type
 * @returns {JSX.Element} - a div with a label and input
 */
export function Field(props) {
    return (
        <div className="mb-3">
            <label htmlFor={props.name.toLowerCase() + 'Input'} className="form-label">{props.name}</label>
            <input id={props.name.toLowerCase() + 'Input'} type={props.type} className="form-control"
                   name={props.name.toLowerCase()}/>
        </div>
    );
}

/**
 * A Submit button with a spinner if loading is true.
 * @param props - name and loading
 * @returns {JSX.Element} - a button
 */
export function SubmitButton(props) {
    if (props.loading) {
        return (
            <button className="btn btn-primary" type="submit" disabled>
                <span className="spinner-border spinner-border-sm" role="status" style={{'marginRight': '0.4rem'}}></span>
                {props.name}
            </button>
        );
    }
    return <button className="btn btn-primary" type="submit">{props.name}</button>
}

/**
 * A CSRF token input field.
 * @returns {JSX.Element} - a hidden input field
 */
export function CSRFToken() {
    return <input type="hidden" value={Cookies.get('csrftoken')} name="csrfmiddlewaretoken"/>
}