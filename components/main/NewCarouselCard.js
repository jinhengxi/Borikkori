import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

function NewCarouselCard({ newRecipe }) {
  return (
    <Link href="/recipeDetail/[id]" as={`/recipeDetail/${newRecipe.id}`}>
      <Container>
        <ImgContainer>
          <Image
            src={newRecipe.recipe_thumbnail}
            alt="bestRecipeImg"
            width={234}
            height={154}
          />
          <ImgInfoFake />
          <ImgInfo>
            <Image src="/images/heart.png" alt="heart" width={12} height={11} />
            <HeartData>10</HeartData>
            <Image src="/images/chat.png" alt="chat" width={13} height={11} />
            <ChatData>10</ChatData>
          </ImgInfo>
        </ImgContainer>
        <NewContent>
          <Profile>
            <Image
              src={newRecipe.user_thumbnauil}
              alt="ProfileImg"
              width={25}
              height={25}
            />
            &nbsp;
            <Image
              src={newRecipe.rating_mark_image}
              alt="Grade"
              width={12}
              height={12}
            />
            <Nickname>{newRecipe.user_name}</Nickname>
          </Profile>
          <Title>{newRecipe.title}</Title>
          <Content>{newRecipe.intro}</Content>
        </NewContent>
      </Container>
    </Link>
  );
}

export default NewCarouselCard;

const Container = styled.div``;

const ImgContainer = styled.div`
  position: relative;

  img {
    border-radius: 5px;
    cursor: pointer;
  }
`;

const ImgInfoFake = styled.div`
  position: absolute;
  width: 73px;
  height: 24px;
  right: 14px;
  bottom: 3px;
  opacity: 0.7;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.lightPurple};
`;

const ImgInfo = styled(ImgInfoFake)`
  opacity: 1;
  background-color: transparent;
  color: ${props => props.theme.colors.white};
  ${props => props.theme.flex.flexBox()};
`;

const HeartData = styled.p`
  margin-right: 5px;
  margin-left: 3px;
  font-size: ${props => props.theme.fontSizes.xs};
`;

const ChatData = styled(HeartData)`
  margin-right: 0;
`;

const NewContent = styled.div`
  text-align: left;
  padding: 0 15px;
`;

const Profile = styled.div`
  margin-top: 10px;
  ${props => props.theme.flex.flexBox('', 'center', '')};

  img {
    border-radius: 50%;
  }
`;

const Nickname = styled.div`
  margin: 0 3px;
  font-size: ${props => props.theme.fontSizes.xs};
`;

const Title = styled.div`
  margin: 8px 0;
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.semiBold};
`;

const Content = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: ${props => props.theme.fontSizes.xs};
`;
