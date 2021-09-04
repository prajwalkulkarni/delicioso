import React from "react";
import './Card.css'
export default function Card(props){
    const class_name = 'card '+props.className
    return(
        <section className={class_name}>
            {props.children}

        </section>
    )

}