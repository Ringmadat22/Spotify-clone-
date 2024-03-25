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
    background-color:black;
    width:35%;

`
const RightWrapper = styled.div`
    width:100%;
    background-color:#151515;
    height:90vh;
    margin:7px 10px 7px 5px;
    border-radius:7px;
` 


function Navbar() {
    return(
        <>
            <Section>
                <Container>
                    <LeftWrapper >
                        <div>
                            <div className="leftWrapper-navbar" style={{
                                    margin:'7px 3px 7px 7px',
                                    padding:'20px 15px',
                                    backgroundColor:'#151515',
                                    lineHeight:'40px',
                                    fontSize:'13px',
                                    borderRadius:'7px',
                            }}>
                                <div style={{display:'flex'}}>
                                    <i style={{marginRight:'20px', fontSize:'30px',marginTop:'4px'}}><GoHomeFill /></i>
                                    <h2 style={{fontSize:'1rem'}}>Home</h2>
                                </div>
                                <div style={{display:'flex'}}>
                                    <i style={{marginRight:'20px', fontSize:'30px',marginTop:'4px',color:'#aeafaf'}}><LuSearch /></i>
                                    <h2 style={{fontSize:'1rem',color:'#aeafaf'}}>Search</h2>
                                </div>
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