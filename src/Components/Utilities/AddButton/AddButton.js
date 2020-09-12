import React from 'react';
import './AddButton.css'

export default function AddButton(props){
    return (
        <section className="add-btn-container">
            <button className="add-btn" onClick={props.onClick}><i className="fas fa-plus"></i></button>
        </section>
    )
}