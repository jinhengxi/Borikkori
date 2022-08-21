import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import SimilarCarouselCard from './SimilarCarouselCard';



const SimilarCasousel = () => {

    const [simillar, setSimillar] = useState();

    useEffect(() => {
        fetch('data/DATADATA.json', {
          method: 'GET',
        })
          .then(res => res.json())
          .then(data => {
            setSimillar(data);
          });
      }, []);
    
 ;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
      
    return (
        <SimilarRecipe>
            <SimilarRecipeTitle>Similar recipes</SimilarRecipeTitle>
        <SimilarCarousel>
        <StyledSlider  {...settings}>
            {simillar?.map(({id, name,itemImg}) => (
            <SimillarCard key={id}>
                <SimilarCarouselCard itemImg={itemImg}/>
                <CardTitle>{name}</CardTitle>
                </SimillarCard>
            ))}
            </StyledSlider>
        </SimilarCarousel>
    </SimilarRecipe>
    );
};

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow-x: hidden;
  }
  .slick-slide div {
    outline: none;
  }

  .slick-arrow {
    &::before {
      font-size: 50px;
    }
  }

  .slick-prev {
    top: 45%;
    left: 26px;
    z-index: 1;
  }

  .slick-next {
    top: 45%;
    right:  55px;
    z-index: 1;
  }
`;

const SimilarRecipe = styled.div`
  width:1050px;
  margin-top: 100px;
  margin-bottom: 150px;
`;


const SimillarCard = styled.div`
  width: 223px;
  height: 307px;
  margin: 0 13px;
  cursor: pointer;
`;


const CardTitle = styled.div`
    width: 230px;
    margin-top: 13px;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  cursor: pointer;
`;

const SimilarRecipeTitle = styled.div`
font-weight: bold;
font-size: 24px;
margin-bottom: 50px;
`;

const SimilarCarousel = styled.div`
width: 100%;

`;

export default SimilarCasousel;