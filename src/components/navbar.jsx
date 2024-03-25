import React from "react";
import "../styles.css"
import styled from 'styled-components';
import { GoHomeFill } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import { LuLibrary } from "react-icons/lu";
import { RiAddLine } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";
import { IoListOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { FaHeart } from "react-icons/fa6";
import Future from '../images/future.png'



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

const Span = styled.span`
height:30px;
width:30px;
font-size:1.1rem;
display:flex;
justify-content:center;
align-items:center;
transition:0.3s;
border-radius:20px;
&:hover {
    background-color:rgb(63, 63, 62);
}
`
const Image = styled.img`
    width:50px;
    height:50px;
    border-radius:3px;
`

const Li = styled.li`
    list-style:none;
    display:flex;
    margin-bottom:10px;
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
                                        <Span ><LuSearch  /></Span>
                                    <Div className="recents" style={{display:'flex'}} >
                                        <H2 style={{fontSize:'1rem',color:'#aeafaf', marginTop:'5px'}}>Recents</H2>
                                        <h4 style={{marginLeft:'5px', fontSize:'30px',marginTop:'5px',color:'#aeafaf'}}><IoListOutline /></h4>
                                    </Div>
                                    </Div>
                                </div>

                                <div>
                                    <ul style={{marginTop:'30px'}}>
                                        <Li>
                                            <div style={{backgroundColor:'red',width:'50px',height:'50px',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'3px'}}>
                                                <FaHeart style={{fontSize:'20px'}} />
                                            </div>

                                            <div style={{lineHeight:'25px',marginLeft:'15px'}}>
                                                <h3>Liked Songs</h3>
                                                <p>Playlists<GoDotFill />77 songs</p>
                                            </div>
                                        </Li>

                                        <Li>
                                            <div>
                                                <Image src={Future} alt="" />
                                            </div>

                                            <div style={{lineHeight:'25px',marginLeft:'15px'}}>
                                                <h3>Liked Songs</h3>
                                                <p>Playlists<GoDotFill />77 songs</p>
                                            </div>
                                        </Li>

                                        <Li>
                                            <div>
                                                <Image src={""} alt="" />
                                            </div>

                                            <div style={{lineHeight:'25px',marginLeft:'15px'}}>
                                                <h3>Liked Songs</h3>
                                                <p>Playlists<GoDotFill />77 songs</p>
                                            </div>
                                        </Li>
                                    </ul>
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