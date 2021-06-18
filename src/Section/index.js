import React from "react";
import "./style.css";

const Section = ({ title, body, additionalButtons }) => (
    <section className="section">
        <div className="section__div">
            <h2 className="section__header">{title}</h2>
            {additionalButtons}
        </div>
        {body}
    </section>
);

export default Section;