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
                    <a href="https://pt-br.facebook.com/StudioGhibliBrasil" target="blank"><img src={facebook} alt="logo facebook"/></a>
                    <a href="https://www.instagram.com/ghibli/" target="blank"><img src={instagram} alt="logo instagram"/></a>
                    <a href="https://twitter.com/JP_GHIBLI" target="blank"><img src={twitter} alt="logo twitter"/></a>
                    <a href="https://www.youtube.com/c/StudioghibliBrasil" target="blank"><img src={youtube} alt="logo youtube"/></a>
                </S.HeaderSocialMedia>
            </S.Header>

            <S.ContainerPrincipal>
                <S.ContainerInfos>
                    <S.H3ContainerInfos>HAYAO MIYAZAKI</S.H3ContainerInfos>
                    <S.H1ContainerInfos>A VIAGEM DE CHIHIRO</S.H1ContainerInfos>
                    <S.PContainerInfos>Chihiro chega a um mundo mágico dominado por uma bruxa. 
                        Aqueles que a desobedecem são transformados em animais.</S.PContainerInfos>
                    <S.ButtonDiv>
                        <a href="https://www.netflix.com/br/title/60023642" target="blank"><S.ButtonWatchN><img src={play} alt="icone de play"/>ASSISTIR AGORA</S.ButtonWatchN></a>
                        <a href="https://www.youtube.com/watch?v=SgZI655GgHk" target="blank"><S.ButtonWatchTr>ASSISTA O TRAILER</S.ButtonWatchTr></a>
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