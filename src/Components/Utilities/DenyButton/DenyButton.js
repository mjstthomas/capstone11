import React from 'react';
import './DenyButton.css'

export default function ConfirmButton(props){
    return (
        <section className="deny-btn-container">
            <button className="deny-btn" onClick={props.onClick}><i className="fas fa-times"></i></button>
        </section>
    )
}