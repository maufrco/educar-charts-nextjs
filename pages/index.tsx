
import { FunctionComponent } from "react";
import Carousel from "react-multi-carousel";
import Chartpie, { School } from "../components/Chartpie";
import { GetStaticProps } from "next";
import { getJson } from "../service/api";
import styled from "styled-components";
import {GeneroIcon} from "../src/icons/Icons";
import { Box } from '@material-ui/core';



const Header = styled.div`
  background: rgb(255, 255, 255)
  text-align: center;
  font-size:28pt;
`

const Footer = styled.div`
  padding: 0.8rem;
  height: 120spx;
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
          <Box>
            <img src="http://3.236.124.244/caj/static/images/logoCajamar.png" alt="Logo Cajamar" width="130" />
            <Chartpie {...school}></Chartpie>
            <Footer>
              <img src="http://3.236.124.244/jab/static/images/logoME.png" alt="Logo +Educar" />    
            </Footer>
            <GeneroIcon fill-opacity="0.1" style={{position:'absolute', top: 5, right:5, width:'450px'}} />
          </Box>
          <Box>Chart 2</Box>
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
