import "../styles.css"
import styled from 'styled-components';
import Polo from '../images/polog.png';


const ArtistH3 = styled.h3`
  color:#fff;
  font-size:14px;
  font-weight:200;
  cursor:pointer;
  transition:0.3s;
  &:hover{
  text-decoration:underline;
  }
`

const Li = styled.li`
    list-style:none;
    display:flex;
    align-items:center;
    margin-bottom:4px;
    padding:5px 3px 0 9px;
    border-radius:4px;
    transition:0.3s; 
`

const ArtistImage = styled.img`
width:60px;
height:60px;
border-radius:3px;
`


function Player() {
    return(
        <>
            <section>
                <div className="player-container">
                    <div className="player-content">
                        <div className="first-div">
                            <div className="first-div-content">
                                
                            <ul style={{ display:'flex'}}>
                                        <Li>
                                            <div>
                                                <ArtistImage src={Polo} alt="" />
                                            </div>

                                            <div style={{lineHeight:'20px',marginLeft:'15px'}}>
                                                <ArtistH3>Polo G</ArtistH3>
                                                <ArtistH3 style={{color:'gray'}}>Rapstar</ArtistH3>
                                            </div>
                                        </Li>

                                        <Li>
                                            <ArtistH3>+</ArtistH3>
                                        </Li>

                                    </ul>
                            </div>
                        </div>

                        <div className="second-div">

                        </div>

                        <div className="third-div">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Player