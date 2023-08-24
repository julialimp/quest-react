import { React } from "react"
import './index.css'

const AlertButton = ({ label }) => {

    return <button
        className="btn"
        onClick={() => {
            alert(`This button's label is "${label}"`)
        }}
    >
        {label}
    </button>
}

export default AlertButton