import React from 'react';
import ConfirmButton from '../ConfirmButton/ConfirmButton';
import DenyButton from '../DenyButton/DenyButton';
import './Modal.css'

export default function Modal(props){
    return (
        <section className="modal-container" onClick={props.minimize}>
            <article className="modal">
                <h3>Accept Offer?</h3>
                <ConfirmButton onClick={()=>console.log('confirm')}/>
                <DenyButton onClick={()=>console.log('deny')}/>
            </article>
        </section>
    )
}