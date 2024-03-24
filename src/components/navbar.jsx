import React from "react";
import "../styles.css"
import styled from 'styled-components';
import { GoHomeFill } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import { LuLibrary } from "react-icons/lu";
import { RiAddLine } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";
import { IoListOutline } from "react-icons/io5";




const Section = styled.section`
    width:100%;
`
const Container  = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;


`
const LeftWrapper = styled.div`
    width:100%;
    background-color:white;
    padding:10px;
    width:30%;
    margin:7px 3px;
`
const RightWrapper = styled.div`
    width:70%;
    background-color:white;
    height:90vh;
    margin:7px 3px;
    border-radius:7px;
` 


function Navbar() {
    return(
        <>
            <Section>
                <Container>
                    <LeftWrapper >
                        <div style={{
                            backgroundColor:'gray'
                        }}>
                            <div className="leftWrapper-navbar">
                                <h2> <span><GoHomeFill /></span> Home</h2>
                                <h3><span><LuSearch /></span>Search </h3>
                            </div>
                            <div className="leftWrapper-lower">
                                <div className="leftWrapper-lower-container">
                                    <div>
                                    <h3 title={"Collapse your library"}><span><LuLibrary /></span>Your Library </h3>
                                    <RiAddLine title={"Create playlist folder"} />
                                    <FiArrowRight title={"Show more"} />
                                    </div>
                                    <div>
                                        <p>Playlists</p>
                                        <p>Artists</p>
                                    </div>
                                    <div>
                                    <LuSearch />
                                    <h3>Recents<span><IoListOutline /></span></h3>
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