import { FunctionComponent } from "react";
import Carousel from "react-multi-carousel";
import Chartpie, { School } from "../components/Chartpie";
import { GetStaticProps } from "next";
import { getJson } from "../service/api";
import styled from "styled-components";

const Header = styled.div`
  background: rgb(255, 255, 255)
`

const Title = styled.div`
  text-align: center;
  font-size:28pt;
`

const Footer = styled.div`
  padding: 0.8rem;
  height: 120spx;
            background-image: linear-gradient(to right, rgb(255, 255, 255), DodgerBlue);
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
    return (
      
        <Carousel
          responsive={responsive}
          ssr
          showDots={false}
          autoPlay
          autoPlaySpeed={5000}
          slidesToSlide={1}
          infinite
          containerClass="carousel-container"
          itemClass="chart-item"
          deviceType={""}
          removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
        >
          <>
            <Header>
              <Title>  {school.situacao}</Title>
              <img src="http://3.236.124.244/caj/static/images/logoCajamar.png" alt="Logo Cajamar" width="130" />
            </Header>
            <Chartpie {...school}></Chartpie>
            <Footer>
              <img src="http://3.236.124.244/jab/static/images/logoME.png" alt="Logo +Educar" />  
            </Footer>
          </>
          <div>Chart 2</div>
          <div>Chart 3</div>
        </Carousel>
      
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
