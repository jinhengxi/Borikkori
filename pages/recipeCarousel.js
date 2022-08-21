import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrPrevious, GrNext } from 'react-icons/gr';
import Image from 'next/image';

const RecipeCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <GrNext />,
    prevArrow: <GrPrevious />,
  };
  return (
    <RecipeItems>
      <CarouselTitle>Recipe Items</CarouselTitle>
      <RecipeBox>
        <ItemSlider {...settings}>
          <div>
            <Image alt="image" src="images/음식.jpg" />
          </div>
          <div>
            {' '}
            <Image alt="image" src="images/음식.jpg" />
          </div>
          <div>
            {' '}
            <Image alt="image" src="images/음식.jpg" />
          </div>
          <div>
            <Image alt="image" src="images/음식.jpg" />
          </div>
          <div>
            {' '}
            <Image alt="image" src="images/음식.jpg" />
          </div>
          <div>
            {' '}
            <Image alt="image" src="images/음식.jpg" />
          </div>
          <div>
            {' '}
            <Image alt="image" src="images/음식.jpg" />
          </div>
          <div>
            {' '}
            <Image alt="image" src="images/음식.jpg" />
          </div>
          <div>
            {' '}
            <Image alt="image" src="images/음식.jpg" />
          </div>
          <div>
            {' '}
            <Image alt="image" src="images/음식.jpg" />
          </div>
        </ItemSlider>
      </RecipeBox>
    </RecipeItems>
  );
};

export default RecipeCarousel;

const RecipeItems = styled.div`
  width: 1050px;
  height: 358px;
  display: flex;
  justify-content: center;

  flex-direction: column;
`;

const CarouselTitle = styled.p`
  width: 194px;
  height: 27px;
  font-size: 24px;
  margin-left: 22px;
  margin-bottom: 38px;
`;

const RecipeBox = styled.div`
  width: 1050px;
  height: 296px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemSlider = styled(Slider)`
  width: 950px;
  height: 275px;

  img {
    width: 166px;
    height: 212px;
  }

  div {
    background-color: red;
  }
`;
