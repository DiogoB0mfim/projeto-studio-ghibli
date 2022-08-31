import styled, { keyframes} from "styled-components"

// Estilização do Container
export const Container = styled.div`
   background-image: linear-gradient(to right, #628E75 , #1A4855);
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
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
`
// Estilização Container Principal
export const ContainerPrincipal = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 65%;
    width: 90%;
`
// Estilização Container Infos
export const ContainerInfos = styled.div`
    display: flex;
    width: 30%;
    gap: 20px;
    flex-direction: column;
    justify-content: space-around;
`
export const H3ContainerInfos = styled.h3`
    font-size: 1.5rem;
`
export const H1ContainerInfos = styled.h1`
    font-size: 4rem;
    width: 80%;
    font-weight: 800;
    line-height: 109%;
`
export const PContainerInfos = styled.p`
    font-size: 1.25rem;
    line-height: 180%;
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
    animation: ${animationGhost}  3.5s infinite;
`

// Estilização Button 
export const ButtonDiv = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 20px;
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
`