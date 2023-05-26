import { createContext, useState } from "react";

export const styles = {
    colorful: {
        color: 'lightgrey',
        backgroundColor: 'coral',
        border: 'black',
        textTransform: 'uppercase'
    },

    default: {
        color: 'lightgrey',
        backgroundColor: 'grey',
        border: 'black',
        textTransform: 'initial'
    }
}

export const ParagraphStyleContext = createContext({})

export const ParagraphStyleProvider = (props) => {
    const [ paragraphStyle, setParagraphStyle ] = useState(styles.default)

    return (
        <ParagraphStyleContext.Provider value={{ paragraphStyle, setParagraphStyle }}>
            {props.children}
        </ParagraphStyleContext.Provider>
    )
}