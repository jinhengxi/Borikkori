import styled from 'styled-components';
import Slider from 'react-slick';

import useFetch from '../../hooks/useFetch';
import NewCarouselCard from './NewCarouselCard';
import { BASE_URL } from '../../config';

function NewCarousel() {
  const [newRecipes] = useFetch(`${BASE_URL}/recipe/4/list?sort=1`);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <StyledSlider {...settings}>
      {newRecipes?.map(newRecipe => (
          <NewCarouselCard key={newRecipe.id} newRecipe={newRecipe} />
      ))}
    </StyledSlider>
  );
}

export default NewCarousel;

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
      font-size: 30px;
    }
  }

  .slick-prev {
    top: 35%;
    left: 30px;
    z-index: 1;
  }

  .slick-next {
    top: 35%;
    right: 35px;
    z-index: 1;
  }
`;

