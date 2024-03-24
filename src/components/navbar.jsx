import React from "react";
import "../styles.css"
import styled from 'styled-components';
import { GoHomeFill } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import { LuLibrary } from "react-icons/lu";
import { RiAddLine } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";




const Section = styled.section`
    width:100%;
`
const Container  = styled.div`
    width:100%;

`
const LeftWrapper = styled.div`
    width:100%;
`
const RightWrapper = styled.div`
    width:100%;
`


function Navbar() {
    return(
        <>
            <Section>
                <Container>
                    <LeftWrapper>
                        <div>
                            <div className="leftWrapper-navbar">
                                <h2> <span><GoHomeFill /></span> Home</h2>
                                <h3><span><LuSearch /></span>Search </h3>
                            </div>
                            <div className="leftWrapper-lower">
                                <div className="leftWrapper-lower-container">
                                    <div>
                                    <h3 title={"Collapse your library"}><span><LuLibrary /></span>Your Library </h3>
                                    <RiAddLine />
                                    <FiArrowRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </LeftWrapper>

                    <RightWrapper>

                    </RightWrapper>
                </Container>    
            </Section>
        </>
    )
}

export default Navbar