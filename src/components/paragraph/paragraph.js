import React from 'react'
import './paragraph.css'

const Paragraph = ({ children, color, backgroundColor, border, textTransform }) => {
    return (
        <p
            className='paragraph' style={{ color: color, backgroundColor: backgroundColor, border: border, textTransform: textTransform }}
        >
            {children}

        </p>
    )
}

// Paragraph.defaultProps = {
//     color: 'lightgrey',
//     backgroundColor: 'grey',
//     border: 'black',
//     textTransform: 'uppercase'
// }

export default Paragraph