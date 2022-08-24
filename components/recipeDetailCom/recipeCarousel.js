import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { GrPrevious, GrNext } from 'react-icons/gr';

import RecipeCarouselCard from './recipeCarouselCard';

const RecipeCarousel = ({posts}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <GrNext />,
    prevArrow: <GrPrevious />,
  };

  return (
    <RecipeItems>
      <RecipeItemsTitle>Recipe Items</RecipeItemsTitle>
      <RecipeBox>
        <StyledSlider {...settings}>
          {posts?.map(({ id, name, image, price }) => (
            <RecipeCard key={id}>
              <RecipeCarouselCard itemImg={image} />
              <RecipeTitle>{name}</RecipeTitle>
              <RecipePrice>{price}원</RecipePrice>
            </RecipeCard>
          ))}
        </StyledSlider>
      </RecipeBox>
    </RecipeItems>
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

  .slick-prev, .slick-next{
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 45%;
    width: 30px;
    height: 100px;
    padding: 0;
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: transparent;
  }

`;

const RecipeItems = styled.div`
  width: 1050px;
  margin-top: 100px;
  margin-bottom: 150px;
`;

const RecipeCard = styled.div`
  width: 223px;
  height: 307px;
  margin: 0 13px;
  cursor: pointer;
`;

const RecipeTitle = styled.div`
  width: 230px;
  margin-top: 13px;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
  text-align: center;
`;

const RecipePrice = styled.div`
  width: 230px;
  margin-top: 13px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
  text-align: center;
`;

const RecipeItemsTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 50px;
`;

const RecipeBox = styled.div`
  width: 100%;
`;

export default RecipeCarousel;
