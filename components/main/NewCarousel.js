import styled from 'styled-components';
import Slider from 'react-slick';

import useFetch from '../../hooks/useFetch';
import NewCarouselCard from './NewCarouselCard';

function NewCarousel() {
  const [newRecipes] = useFetch('data/DATA.json');

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
          <NewCarouselCard key={newRecipe.id} bestRecipe={newRecipe} />
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

