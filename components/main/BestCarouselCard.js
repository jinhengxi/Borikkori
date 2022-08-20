import styled from 'styled-components';
import Image from 'next/image';

function BestCarouselCard() {
  return (
    <Container>
      <BestCard>
        <Image
          src="/images/음식.jpg"
          alt="bestRecipeImg"
          width={233}
          height={307}
        />
      </BestCard>
      <CardProfile>
        <Image src="/images/음식.jpg" alt="ProfileImg" width={44} height={44} />
        &nbsp;&nbsp;
        <Image src="/images/등급.png" alt="Grad" width={12} height={12} />
        <Nickname>tokkichef</Nickname>
      </CardProfile>
      <CardContent>
        <Title>요리제목</Title>
        <Content>
          한줄설명한줄설명한줄설명한줄설명한줄설명한줄설명한줄설명한줄설명한줄설명한줄설명
        </Content>
      </CardContent>
    </Container>
  );
}

export default BestCarouselCard;

const Container = styled.div`
  position: relative;
`;

const BestCard = styled.div`
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
  font-size: ${props => props.theme.fontSizes.base};
`;
