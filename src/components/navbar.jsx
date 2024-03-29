import React, { useState, useEffect } from 'react';
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
import Future from '../images/future.png';
import goosebumps from '../images/goosebumps.png';
import Latto from '../images/latto.png';
import Polo from '../images/polog.png';
import NBA from '../images/nba.png'
import LilBaby from '../images/lilbaby.png'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GrInstallOption } from "react-icons/gr";
import { FaRegBell } from "react-icons/fa";




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
    height:90vh;

`
const RightWrapper = styled.div`
    width:100%;
    background-color:#151515;
    height:90vh;
    margin:7px 10px 7px 5px;
    border-top-right-radius: 0; 
    border-top-left-radius: 7px; 
    border-bottom-right-radius: 7px; 
    border-bottom-left-radius: 7px; 
    overflow-y: scroll;
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

const ArtistH3 = styled.h3`
  color:#fff;
`


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

const ArtistImage = styled.img`
    width:50px;
    height:50px;
    border-radius:50%;
`

const Li = styled.li`
    list-style:none;
    display:flex;
    align-items:center;
    margin-bottom:4px;
    padding:5px 3px 0 9px;
    border-radius:4px;
    transition:0.3s;
    &:hover{
        background-color: #262626;
    }
`
const RightSection = styled.section`
    width:100%;
`

const Nav = styled.nav`
    width:100%;
    padding:10px 25px;
    border-top-right-radius: 0; 
    border-top-left-radius:7px;
`

const UpperNav = styled.div`
    display:flex;
    justify-content:space-between;
    padding-top:10px;
    height:6vh;
`

const LeftUpperNav = styled.div`
    display:flex;
`

const RightUpperNav = styled.div`
    display:flex;
`

const LowerNav = styled.div`
`

const Hero = styled.div`

`


const Navbar = () =>{

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos > currentScrollPos;
  
        setPrevScrollPos(currentScrollPos);
        setVisible(visible);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);
  
    const Button = styled.button`
        padding:7px 10p;
    `

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
                                    lineHeight:'37px',
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
                                            <div style={{backgroundColor:'red',width:'50px',height:'50px',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'3px',marginBottom:'6px'}}>
                                                <FaHeart style={{fontSize:'20px'}} />
                                            </div>

                                            <div style={{lineHeight:'25px',marginLeft:'15px'}}>
                                                <ArtistH3>Liked Songs</ArtistH3>
                                                <p>Playlists<GoDotFill />77 songs</p>
                                            </div>
                                        </Li>

                                        <Li>
                                            <div>
                                                <Image src={Future} alt="" />
                                            </div>

                                            <div style={{lineHeight:'25px',marginLeft:'15px'}}>
                                                <ArtistH3>RapCavier</ArtistH3>
                                                <p>Playlists<GoDotFill />Spotify</p>
                                            </div>
                                        </Li>

                                        <Li>
                                            <div>
                                                <Image src={goosebumps} alt="" />
                                            </div>

                                            <div style={{lineHeight:'25px',marginLeft:'15px'}}>
                                                <ArtistH3>Liked Songs</ArtistH3>
                                                <p>Playlists<GoDotFill />Spotify</p>
                                            </div>
                                        </Li>

                                        <Li>
                                            <div>
                                                <ArtistImage src={Polo} alt="" />
                                            </div>

                                            <div style={{lineHeight:'25px',marginLeft:'15px'}}>
                                                <ArtistH3>Polo G</ArtistH3>
                                                <p>Artist</p>
                                            </div>
                                        </Li>

                                        <Li>
                                            <div>
                                                <ArtistImage src={LilBaby} alt="" />
                                            </div>

                                            <div style={{lineHeight:'25px',marginLeft:'15px'}}>
                                                <ArtistH3>Lil Baby </ArtistH3>
                                                <p>Artist</p>
                                            </div>
                                        </Li>

                                        <Li>
                                            <div>
                                                <ArtistImage src={NBA} alt="" />
                                            </div>

                                            <div style={{lineHeight:'25px',marginLeft:'15px'}}>
                                                <ArtistH3>NBA Young Boy</ArtistH3>
                                                <p>Artist</p>
                                            </div>
                                        </Li>

                                        <Li>
                                            <div>
                                                <ArtistImage src={Latto} alt="" />
                                            </div>

                                            <div style={{lineHeight:'25px',marginLeft:'15px'}}>
                                                <ArtistH3>Big Latto</ArtistH3>
                                                <p>Artist</p>
                                            </div>
                                        </Li>

                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    </LeftWrapper>

                    <RightWrapper className='rightWrapper'>
                        <RightSection>
                            <Nav style={{ top: visible ? '0' : '-100px' }} className='nav'>
                                <div >
                                    <UpperNav>
                                        <LeftUpperNav>
                                            <h3 className="nav-h3">
                                                <i style={{
                                                    color:'#aeafaf'
                                                }}><MdOutlineKeyboardArrowLeft /></i>
                                            </h3>

                                            <h3 className="nav-h3">
                                                <i><MdOutlineKeyboardArrowRight /></i>
                                            </h3>
                                        </LeftUpperNav>
                                        <RightUpperNav>
                                            <ul>
                                                <li>
                                                    <Button className='white-bg'>Explore Premium</Button>
                                                </li>

                                                <li>
                                                    <Button className='black-bg'><span><GrInstallOption /></span>
                                                        <h3>Install App</h3>
                                                    </Button>
                                                </li>

                                                <li>
                                                    <button className='noti-button'><FaRegBell /></button>
                                                </li>

                                                <li>
                                                    <h2>R</h2>
                                                </li>
                                            </ul>
                                        </RightUpperNav>
                                    </UpperNav>
                                    <LowerNav>
                                        <ul>
                                            <li>
                                                <button>All</button>
                                            </li>

                                            <li>
                                                <button>Music</button>
                                            </li>
                                        </ul>
                                    </LowerNav>
                                </div>
                            </Nav>
                            <Hero>

                            </Hero>
                        </RightSection>
                    </RightWrapper>
                </Container>    
            </Section>
        </>
    )
}

export default Navbar