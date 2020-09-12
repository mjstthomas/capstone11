import React from 'react';
import './ConfirmButton.css'

export default function ConfirmButton(props){
    return (
        <section className="confirm-btn-container">
            <button className="confirm-btn" onClick={props.onClick}><i className="fas fa-check"></i>

</button>
        </section>
    )
}