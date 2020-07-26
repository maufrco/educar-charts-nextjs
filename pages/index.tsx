
import { FunctionComponent } from "react";
import Carousel from "react-multi-carousel";
import Chartpie, { School } from "../components/Chartpie";
import { GetStaticProps } from "next";
import { getJson } from "../service/api";
import styled from "styled-components";
import {GeneroIcon, CajamarIcon} from "../src/icons/Icons";
import { Box } from '@material-ui/core';
import Chartstacked from "../components/ChartStacked";


const Content = styled.div`
  flex: 1 0 auto;
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Header = styled.div`
  color: #555555;
  margin: 0 0 1.8em;
  background-color: #f8fafb
  padding: 0 1.2em 1em 1.6em;
  border-top:12px solid #253e91;
  box-shadow: 0px 3px 5px rgba(0,0,0,0.1);
}
`
const Title = styled.div`
  font-size: 26px;
  flex-grow: 1; 
  text-align: center;
  line-height: 96px;
`
const Logo = styled.div`
  height: 95px;
  width: 280px;
  text-align: center;
`
const Cajamar = styled.img`
  height: 95px;
  width: 250px;
`
const Educar = styled.img`
  height:70px;
`
const Footer = styled.div`
  font-size:28pt;
  text-align:right;
  padding: 0 0.8em ;
  flex-shrink: 0; 
`
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

type Props = {
  school: School;
};
const Index: FunctionComponent<Props> = ({ school }) =>{

const separar = (itens:[], maximo: number):[] => {
  return itens.reduce((acumulador, item, indice) => {
    const grupo = Math.floor(indice / maximo);
    acumulador[grupo] = [...(acumulador[grupo] || []), item];
    return acumulador;
  }, []);
};
  
const gruposEscolas = separar(school.matriculasEscolaPorSexoDto,10)
const chartPerSchool = gruposEscolas.map((schools:[], index:number )=>(
  <Content key={index}>
    <Chartstacked matriculasEscolaPorSexoDto={schools}></Chartstacked>
</Content>
))

    return (
          <>
              <Header>
                <FlexContainer>
                  <Logo>
                    <CajamarIcon style={{height:"95px",width:"250px"}} />
                  </Logo>
                  <Title><b>GRÁFICO</b> - TOTAL DE MATRÍCULA POR SEXO</Title>
                  <Logo/>
                </FlexContainer>
              </Header>
              <Carousel
                responsive={responsive}
                ssr
                showDots={false}
                autoPlay
                autoPlaySpeed={10000}
                slidesToSlide={1}
                infinite
                containerClass="carousel-container"
                itemClass="chart-item"
                deviceType={""}
                removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
              >
                <Content>
                  <Chartpie {...school}></Chartpie>
                </Content>  

                {chartPerSchool}
                


            </Carousel>
            <Footer>
              <Educar src="http://3.236.124.244/jab/static/images/logoME.png" /> 
            </Footer>
          
          </>

    );
  }
export const getStaticProps: GetStaticProps = async () => {
  const response = await getJson();
  return {
    props: {
      school: response[0],
    },
  };
};
export default Index;
