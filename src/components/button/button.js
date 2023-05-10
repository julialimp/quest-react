import { React, useState, useEffect } from "react"
import './button.css'

const Button = ({ label }) => {
    const message = () => {
        alert(`This button label is "${label}"`)
    }

    return <button
        className="btn"
        onClick={() => {
            message();
        }}
    >
        {label}
    </button>
}

export default Button