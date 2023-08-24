import React, { useContext } from "react";
import { ParagraphStyleContext, styles } from "../../contexts/style-context";
import Paragraph from "../paragraph/index";


export const StyleToggler = () => {
    const { paragraphStyle, setParagraphStyle } = useContext(ParagraphStyleContext)

    return (
        <div>
            <Paragraph onClick={() => setParagraphStyle(paragraphStyle === styles.default ? styles.colorful : styles.default)}> oi </Paragraph>
        </div>
    )
}