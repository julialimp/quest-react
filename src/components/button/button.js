import { React } from "react"
import './button.css'

const Button = ({ label }) => {
    const message = () => {
        alert(`This button's label is "${label}"`)
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