import { FunctionComponent } from "react";
import Carousel from "react-multi-carousel";
import Chartpie, { School } from "../components/Chartpie";
import { GetStaticProps } from "next";
import { getJson } from "../service/api";
import styled from "styled-components";

const Title = styled.h1`
  padding: 0.8rem;
  text-align: center;
  font-size:28pt;
`
const Footer = styled.div`
  padding: 0.8rem;
  height: 135px;
            background-image: linear-gradient(to right, rgb(200, 220, 240), DodgerBlue);
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
            <Title>{school.situacao}</Title>
            <Chartpie {...school}></Chartpie>
            <Footer>
              <img src="http://3.236.124.244/jab/static/images/logoME.png" alt="Logo +Educar" />
              <img src="https://uploaddeimagens.com.br/images/002/746/830/full/BRASAO-MUNICIPAL-removebg.png?1593797452" alt="Logo Jaboticabal" width="150" height="135" />
            </Footer>
          </>
          <div>Chart 2</div>
          <div>Chart 3</div>
          <div>Chart 4</div>
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
