import styled, { keyframes } from "styled-components"

// Estilização do Container
export const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;

   @media(max-width: 992px) {
        height: 100%;
   }
`
// Estilização do Header
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 10rem;
    width: 100%;
    gap: 26%;
`
// Estilização Social media do Header
export const HeaderSocialMedia = styled.div`
    display: flex;
    gap: 30px;

    @media(max-width: 472px) {
        gap: 20px;
    }
`
// Estilização Container Principal
export const ContainerPrincipal = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 65%;
    width: 90%;

    @media(max-width: 992px) {
        flex-direction: column-reverse; 
        height: 100%;
    }
`
// Estilização Container Infos
export const ContainerInfos = styled.div`
    display: flex;
    width: 30%;
    gap: 20px;
    flex-direction: column;
    justify-content: space-around;

    @media(max-width: 992px) {
        width: 100%;

    }
`
export const H3ContainerInfos = styled.h3`
    font-size: 1.5rem;

    @media(max-width: 1500px) {
        font-size: 1.2rem;
    }

    @media(max-width: 1296px) {
        font-size: 1.1rem;
    }
`
export const H1ContainerInfos = styled.h1`
    font-size: 4rem;
    width: 80%;
    font-weight: 800;
    line-height: 109%;
    
    @media(max-width: 1740px) {
        font-size: 3.6rem;
        width: 350px;
    }

    @media(max-width: 1500px) {
        font-size: 3.2rem;
        width: 300px;
    }

    @media(max-width: 1296px) {
        font-size: 2.5rem;
        width: 250px;
    }
`
export const PContainerInfos = styled.p`
    font-size: 1.25rem;
    line-height: 180%;

    @media(max-width: 1740px) {
        font-size: 1.20rem;
    }

    @media(max-width: 1667px) {
        font-size: 1.15rem;
        width: 450px;
    }

    @media(max-width: 1296px) {
        font-size: 0.9rem;
        width: 340px;
    }
`
// Estilização Container Imagens
const animationGhost = keyframes`
    0%{
        transform: translateY(-4%);
        transition: ease-in-out 0.5;
    }
    
    50% {
        transform: translateY(4%);
        transition: ease-in-out  0.5;
    }
`
export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-4%);
    animation: ${animationGhost}  4s infinite;
`
export const ImgContainer = styled.img`
    @media(max-width: 472px) {
        width: 100%;
    }
`
// Estilização Button 
export const ButtonDiv = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 20px;
    margin-bottom: 20px;

    @media(max-width: 600px) {
        width: 100%;
    }
`
export const ButtonWatchN = styled.button`
    font-weight: 400;
    width: 15rem;
    background-color: #658E76;
    border: none;
    padding: 10px;
    cursor: pointer;
    transform: skew(-18deg);
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    &:before {
        content: "";
        position: absolute;
        left: 0px;
        width: 0;
        height: 100%;
        background-color: #1A4855;
        z-index: -1;
        transition:  1000ms;
}

    &:hover::before {
        width: 100%;
    }

    @media(max-width: 1380px) {
        font-size: 0.9rem;
    }

    @media(max-width: 1286px) {
        font-size: 0.8rem;
    }

    @media(max-width: 600px) {
        width: 100%;
    }
`
export const ButtonWatchTr = styled.button`
    background: transparent;
    border: 2px solid #658E76;
    padding: 10px;
    font-weight: 400;
    width: 15rem;
    cursor: pointer;
    transform: skew(-18deg);

    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 0;
        height: 100%;
        background-color: #1A4855;
        z-index: -1;
        transition:  1000ms;
}

    &:hover::before {
        width: 100%;
    }

    @media(max-width: 1380px) {
        font-size: 0.9rem;
    }

    @media(max-width: 1286px) {
        font-size: 0.8rem;
    }

    @media(max-width: 600px) {
        width: 100%;
    }
`