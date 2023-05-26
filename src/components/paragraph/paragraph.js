import React, { useContext } from 'react'
import { ParagraphStyleContext } from '../../contexts/style-context'
import './paragraph.css'

const Paragraph = (props) => {
    const { paragraphStyle } = useContext(ParagraphStyleContext)

    return (
        <div>
            <p {...props} className='paragraph'
                style={{color: paragraphStyle.color, backgroundColor: paragraphStyle.backgroundColor, border: paragraphStyle.border, textTransform: paragraphStyle.textTransform}}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis quisquam incidunt inventore.Ipsum commodi explicabo ipsa eos odit aliquam, sapiente ducimus ?
                <br /><br />

                To change paragraph style click on this text area.
            </p>
        </div>
    )
}

Paragraph.defaultProps = {
    color: 'lightgrey',
    backgroundColor: 'grey',
    border: 'black',
    textTransform: 'initial'
}

export default Paragraph