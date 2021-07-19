import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Image, StyledParagraph, Wrapper } from "./styled";
import WBTaiko from "./WBTaiko.png";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Wojciech Bylica"
            body={
                <>
                    <Wrapper>
                        <Image src={WBTaiko} alt="Wojciech Bylica photo" />
                        <StyledParagraph>Perkusista, kompozytor, twórca o szerokich zainteresowaniach
                            stylistycznych. Absolwent UMFC w Warszawie i PSJ im.
                            H. Majewskiego w Warszawie. Stypendysta Urbanator Days, laureat konkursu Roland V-Drums.
                        </StyledParagraph>
                    </Wrapper>
                </>
            }
        />
    </Container>
);