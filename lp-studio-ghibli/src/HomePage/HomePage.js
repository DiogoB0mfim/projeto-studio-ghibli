import * as S from "./styled"
// import das imagens
import logo from "../Assets/logo-studio-gb.png"
import instagram from "../Assets/instagram.png"
import facebook from "../Assets/facebook.png"
import twitter from "../Assets/twitter.png"
import youtube from "../Assets/youtube.png"
import ghost from "../Assets/ghostOne.png"
import play from "../Assets/play.png"

const HomePage = () => {
    return (
        <S.Container>
            <S.Header>
                <img src={logo} alt="logo studio ghibli"/>
                <S.HeaderSocialMedia>
                    <img src={facebook} alt="logo facebook"/>
                    <img src={instagram} alt="logo instagram"/>
                    <img src={twitter} alt="logo twitter"/>
                    <img src={youtube} alt="logo youtube"/>
                </S.HeaderSocialMedia>
            </S.Header>

            <S.ContainerPrincipal>
                <S.ContainerInfos>
                    <S.H3ContainerInfos>HAYAO MIYAZAKI</S.H3ContainerInfos>
                    <S.H1ContainerInfos>A VIAGEM DE CHIHIRO</S.H1ContainerInfos>
                    <S.PContainerInfos>Chihiro chega a um mundo mágico dominado por uma bruxa. 
                        Aqueles que a desobedecem são transformados em animais.</S.PContainerInfos>
                    <S.ButtonDiv>
                        <S.ButtonWatchN><img src={play} alt="icone de play"/>ASSISTIR AGORA</S.ButtonWatchN>
                        <S.ButtonWatchTr>ASSISTA O TRAILER</S.ButtonWatchTr>
                    </S.ButtonDiv>
                </S.ContainerInfos>
                <S.ContainerImg>
                    <S.ImgContainer src={ghost} alt="imagem fantasmas"/>
                </S.ContainerImg>
            </S.ContainerPrincipal>
        </S.Container>
    )
}

export default HomePage;