import React from "react";
import Cookies from "js-cookie";


export function Field(props) {
    return (
        <div className="mb-3">
            <label htmlFor={props.name.toLowerCase() + 'Input'} className="form-label">{props.name}</label>
            <input id={props.name.toLowerCase() + 'Input'} type={props.type} className="form-control"
                   name={props.name.toLowerCase()}/>
        </div>
    );
}

export function SubmitButton(props) {
    return <button className="btn btn-primary" type="submit">{props.name}</button>
}

export function CSRFToken(props) {
    return <input type="hidden" value={Cookies.get('csrftoken')} name="csrfmiddlewaretoken"/>
}