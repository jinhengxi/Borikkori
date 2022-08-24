import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import SimilarCarouselCard from './similarCarouselCard';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { BASE_URL } from '../../config';

const SimilarCarousels = ({ posts }) => {
  const [simillar, setSimillar] = useState();

  console.log(simillar)

  useEffect(() => {
    fetch(`${BASE_URL}/recipe/detail/${posts.id}/similitube`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setSimillar(data);
      });
  }, [posts]);

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
    <div>
      {(simillar && simillar.length > 0) && (
        <SimilarRecipe>
          <SimilarRecipeTitle>Similar recipes</SimilarRecipeTitle>
          <SimilarCarousel>
            <StyledSlider {...settings}>
              {simillar?.map(({ id, title, thumbnail }) => (
                <SimillarCard key={id}>
                  <SimilarCarouselCard itemImg={thumbnail} />
                  <CardTitle>{title}</CardTitle>
                </SimillarCard>
              ))}
            </StyledSlider>
          </SimilarCarousel>
        </SimilarRecipe>
      )}
    </div>
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

  .slick-prev,
  .slick-next {
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

const SimilarRecipe = styled.div`
  width: 1050px;
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

export default SimilarCarousels;
