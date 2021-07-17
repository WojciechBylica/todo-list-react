import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Wrapper } from "./styled"
export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Wojciech Bylica"
            body={
                <>
                    <Wrapper>
                        <p>Perkusista, kompozytor, twórca o szerokich zainteresowaniach
                            stylistycznych
                            Absolwent UMFC w Warszawie i PSJ im.
                            H. Majewskiego w Warszawie. Stypendysta Urbanator Days, laureat konkursu Roland V-Drums.
                        </p>
                    </Wrapper>
                </>
            }
        />
    </Container>
);