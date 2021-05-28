import React from "react";
import "./style.css";

const Section = ({ title, body, extraDivContent }) => (
    <section className="section">
        <div className="section__div">
            <h2 className="section__header">{title}</h2>
            {extraDivContent}
        </div>
        {body}
    </section>
);

export default Section;