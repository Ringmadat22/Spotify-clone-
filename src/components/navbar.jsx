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
    width:30%;

`
const RightWrapper = styled.div`
    width:100%;
    background-color:#151515;
    height:90vh;
    margin:7px 10px 7px 5px;
    border-radius:7px;
` 

const H2 = styled.h2`
  color: #aeafaf;
  &:hover {
    color: #fff; 
  }
`;

const H3 = styled.h3`
  color: #aeafaf;
  font-size:1rem;
  &:hover {
    color: #fff; 
  }
`;

const Div = styled.div`
display:flex;

`

const P = styled.p`
background-color:rgb(37, 37, 37);
margin:0 10px 0 0;
padding:3px 15px;
font-size:0.9rem;
color:#fff;
border-radius:30px;
&:hover{
    background-color: rgb(45, 45, 45);
}
`

function Navbar() {
    return(
        <>
            <Section>
                <Container>
                    <LeftWrapper className="leftWrapper">
                        <div>
                            <div className="leftWrapper-navbar" style={{
                                    margin:'7px 3px 7px 7px',
                                    padding:'20px 15px',
                                    backgroundColor:'#151515',
                                    lineHeight:'40px',
                                    fontSize:'13px',
                                    borderRadius:'7px',
                                    cursor:'pointer'
                            }}>
                                <Div>
                                    <i style={{marginRight:'20px', fontSize:'30px',marginTop:'4px'}}><GoHomeFill /></i>
                                    <H2 style={{fontSize:'1rem',color:'#fff'}}>Home</H2>
                                </Div>
                                <Div>
                                    <i style={{marginRight:'20px', fontSize:'30px',marginTop:'4px',color:'#aeafaf'}}><LuSearch /></i>
                                    <H3 >Search</H3>
                                </Div>
                            </div>
                            <div className="leftWrapper-lower" style={{
                                    margin:'7px 3px 7px 7px',
                                    padding:'20px 15px',
                                    backgroundColor:'#151515',
                                    lineHeight:'30px',
                                    fontSize:'13px',
                                    borderRadius:'7px',
                                    color:'#aeafaf',
                                    cursor:'pointer'
                                }}>
                                <div className="leftWrapper-lower-container">
                                    <div style={{display:'flex',justifyContent:'space-between'}}>
                                    <H2 style={{fontSize:'1.2rem'}} title={"Collapse your library"}><span style={{marginRight:'10px'}}><LuLibrary /></span>Your Library </H2>
                                    <Div style={{fontSize:'1.2rem'}} >
                                        <i><RiAddLine title={"Create playlist folder"} /></i>
                                        <i><FiArrowRight title={"Show more"} /></i>
                                    </Div>
                                    </div>
                                    <Div style={{width:'120px',margin:'20px 0'}}>
                                        <P>Playlists</P>
                                        <P>Artists</P>
                                    </Div>
                                    <Div style={{
                                        justifyContent:'space-between'
                                    }}>
                                    <LuSearch />
                                    <Div >
                                        <H2 style={{fontSize:'1rem',color:'#aeafaf'}}>Search</H2>
                                        <i style={{marginRight:'20px', fontSize:'30px',marginTop:'4px',color:'#aeafaf'}}><IoListOutline /></i>
                                       
                                    </Div>
                                    </Div>
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