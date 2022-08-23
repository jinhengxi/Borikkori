import styled from 'styled-components';
import Slider from 'react-slick';

import useFetch from '../../hooks/useFetch';
import BestCarouselCard from './BestCarouselCard';

function BestCarousel() {
  const [bestRecipes] = useFetch('http://10.58.5.197:8000/recipe/4/list?sort=3');

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
          <BestCarouselCard key={bestRecipe.id} bestRecipe={bestRecipe} />
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
    left: 35px;
    z-index: 1;
  }

  .slick-next {
    top: 45%;
    right: 60px;
    z-index: 1;
  }
`;
