import styled from "styled-components";
import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md';

export  const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    padding: 0 30px;
    position: relative;
    z-index: 1
    :before{
        content:"";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
      bottom: 0;
      background: linear-gradient(180deg , rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.6) 100%)
      , linear-gradient(180deg , rgba(0,0,0,0.2) 0%,transparent 100%);
    //   z-index: 2;
     @media only screen and (max-width : 600px){
   max-width:auto;
   }
`;
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
export   const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
       object-fit: cover;
       background: #000;
           z-index:-1
   @media only screen and (max-width : 300px){
   max-width:auto;
   }
`;
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1000px;
    position: absolute;
    padding: 8px 24px   ;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    text-shadow: 0 0 10px #2a2559 , 0 0 20px #2a2559 , 0 0 30px #2a2559 ; /* Adjust the color and blur radius as needed */
    direction: rtl;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;
export const ImgHero=styled.div`
width: '100%';
marginBottom:'-80vh';
height: 'auto' ;
z-index:6;
position:'absolute'
@media screen and (max-width: 768px){
}
`;
export const HeroP = styled.p `
    margin-top: 24px;
    max-width: 600px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    direction: rtl;

    text-shadow: 0 0 10px #8fd1e3, 0 0 20px #8fd1e3, 0 0 30px #8fd1e3; /* Adjust the color and blur radius as needed */
    
    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div`
            margin-top: 32px;
            display: flex;
            align-items: center;
            flex-direction: column;

`;
export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size; 20px;

`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size; 20px;
`;