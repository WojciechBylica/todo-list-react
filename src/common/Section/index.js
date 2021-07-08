import React from "react";
import { PageSection, PageSectionDiv, PageSectionH2 } from "./styled";

const Section = ({ title, body, extraContent }) => (
    <PageSection>
        <PageSectionDiv>
            <PageSectionH2>{title}</PageSectionH2>
            {extraContent}
        </PageSectionDiv>
        {body}
    </PageSection>
);

export default Section;