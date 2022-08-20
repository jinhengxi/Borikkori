import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import BestCarouselCard from './BestCarouselCard';

function BestCarousel() {
  const [bestRecipes, setBestRecipes] = useState();

  useEffect(() => {
    fetch('data/DATA.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setBestRecipes(data);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <StyledSlider {...settings}>
      {bestRecipes?.map(bestRecipe => (
        <BestCard key={bestRecipe}>
          <BestCarouselCard bestRecipe={bestRecipe} />
        </BestCard>
      ))}
    </StyledSlider>
  );
}

export default BestCarousel;

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
    left: 40px;
    z-index: 1;
  }

  .slick-next {
    top: 45%;
    right: 40px;
    z-index: 1;
  }
`;

const BestCard = styled.div`
  width: 223px;
  height: 307px;
  margin: 0 13px;
`;
