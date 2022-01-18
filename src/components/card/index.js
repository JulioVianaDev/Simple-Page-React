import React from "react";
import styled from "styled-components";
import you from '../images/youtube.png';
import lk from '../images/linkedin.png';
import git_blue from '../images/github_blue.png';
let Rodape =()=>{
    return(
        <>
           <Rodopio> 
               <p>
                Midias sociais: 
                <a href="https://www.youtube.com/channel/UCYW6QT0iGUC1SpgSMFVV1lQ"><Yi src={you}/></a>  
                <a href="https://www.linkedin.com/in/j%C3%BAlio-viana-408502219/"><Lk src={lk}/></a>
                <a href="github.com/juliovianadev"><GH src={git_blue}/></a>
               </p>
            </Rodopio>
        </>
    )
}

export default Rodape;
const Yi = styled.img`
    width:20px;
    height:20px;
`;
const Lk = styled.img`
    padding:1px;
    width:20px;
    height:20px;
`;
const GH = styled.img`
    padding:1px;
    width:20px;
    height:20px;
`;
const Rodopio = styled.div`
    background-color:black;
    width:50vw;
    height:11.5vh;
    text-align:left;
    padding-left:10px;
    a{
        color:white;
    };
    p{
        color:white;
        padding-top:22px;
    };
`;