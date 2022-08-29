import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';


function BestCarouselCard({ bestRecipe }) {
  return (
    <Link href="/recipeDetail/[id]" as={`/recipeDetail/${bestRecipe.id}`}>
      <Container>
        <BestCardImgOpacity>
          <Image
            src={bestRecipe.recipe_thumbnail}
            alt="bestRecipeImg"
            width={233}
            height={307}
          />
        </BestCardImgOpacity>
        <CardProfile>
          <Image
            src={bestRecipe.user_thumbnail}
            alt="ProfileImg"
            width={44}
            height={44}
          />
          &nbsp;&nbsp;
          <Image
            src={bestRecipe.rating_mark_image}
            alt="Grade"
            width={17}
            height={17}
          />
          <Nickname>{bestRecipe.user_name}</Nickname>
        </CardProfile>
        <CardContent>
          <Title>{bestRecipe.title}</Title>
          <Content>{bestRecipe.intro}</Content>
        </CardContent>
      </Container>
    </Link>
  );
}

export default BestCarouselCard;

const Container = styled.div`
  position: relative;
`;

const BestCardImgOpacity = styled.div`
  position: relative;

  img {
    object-fit: cover;
    border-radius: 5px;
  }

  &::before {
    width: 233px;
    height: 307px;
    z-index: 999;
    content: '';
    opacity: 0.4;
    position: absolute;
    top: 0px;
    left: 15px;
    right: 0px;
    bottom: 0px;
    border-radius: 5px;
    background-color: #000;
  }
`;

const CardProfile = styled.div`
  ${props => props.theme.flex.flexBox()};
  position: absolute;
  top: 20px;
  left: 40px;
  z-index: 1000;
  cursor: pointer;

  img {
    border-radius: 50%;
  }
`;

const Nickname = styled.div`
  margin: 0 3px;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.small};
`;

const CardContent = styled.div`
  position: absolute;
  width: 70%;
  bottom: 40px;
  left: 35px;
  text-align: left;
  color: ${props => props.theme.colors.white};
  z-index: 1000;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: ${props => props.theme.fontSizes.xl};
  margin-bottom: 5px;
`;

const Content = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  white-space: normal;
  line-height: 1.2;
  font-size: ${props => props.theme.fontSizes.base};
`;
