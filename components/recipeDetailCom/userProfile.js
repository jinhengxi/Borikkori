import styled from 'styled-components';

const userProfile = ({ posts, hash }) => {
  return (
    <UserProfiles>
      {posts && (
        <ProfileBox>
          <IdBox>
            <FoodThumb src={posts.thumbnail} />
            <InfoBox>
              <ProfileImg src={posts.user_thumbnail} />
              <UserInfoBox>
                <Level src={posts.rating_mark_image} />
                <UserId>{posts.name}</UserId>
              </UserInfoBox>
            </InfoBox>
          </IdBox>
          <ActionIcons>
            <WatchBox>
              <WatchIcon src="/images/FaceGray.png" />
              <Num>{posts.hit}</Num>
            </WatchBox>
            <HeartBox>
              <HeartIcon src="/images/HeartGray.png" />
              <Num>{posts.like_count}</Num>
            </HeartBox>
            <CommentBox>
              <CommentIcon src="/images/TalkGray.png" />
              <Num>{posts.comment_count}</Num>
            </CommentBox>
          </ActionIcons>
          <ContentWrapper>
            <CookTitle>{posts.tilte}</CookTitle>
            <CookContent>{posts.intro}</CookContent>
            <HashWrapper>
              {hash &&
                hash?.map(hash => <HashTag key={hash.id}>#{hash.name}</HashTag>)}
            </HashWrapper>
          </ContentWrapper>
          <IconsWrapper>
            <IconBox>
              <IconPerson src="/images/PersonGray.png" />
              <QuantityText>{posts.serving}인분</QuantityText>
            </IconBox>
            <IconBox>
              <IconClock src="/images/ClockGray.png" />
              <Min>{posts.cooktime}분</Min>
            </IconBox>
            <IconBox>
              <IconStar src="/images/StarGray.png" />
              <DifficultyText>{posts.difficulty}</DifficultyText>
            </IconBox>
          </IconsWrapper>
        </ProfileBox>
      )}
    </UserProfiles>
  );
};

const UserProfiles = styled.div`
  width: 1050px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const FoodThumb = styled.img`
  width: 100%;
  height: 495px;
  object-fit: cover;
`;

const InfoBox = styled.div`
  position: absolute;
  top: 400px;
`;
const ProfileBox = styled.div``;

const ProfileImg = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
`;

const IdBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-top: 10px;
  color: 20px;
`;

const ActionIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
`;

const WatchBox = styled.div`
  display: flex;
  align-items: center;
`;

const WatchIcon = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 5px;
`;

const HeartBox = styled.div`
  display: flex;
  align-items: center;
`;

const HeartIcon = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 5px;
`;

const CommentBox = styled.div`
  display: flex;
  align-items: center;
`;

const CommentIcon = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 5px;
`;

const Num = styled.div`
  margin-right: 10px;
  color: #969696;
`;

const ContentWrapper = styled.div`
  margin-top: 40px;
`;

const CookTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #393939;
  margin-bottom: 20px;
  margin-top: 70px;
`;

const CookContent = styled.div`
  color: #969696;
  font-size: 24px;
  line-height: 30px;
`;

const HashWrapper = styled.div`
  display: flex;
`;

const HashTag = styled.div`
  margin-top: 30px;
  margin-right: 10px;
  font-size: 24px;
  color: rgb(182, 154, 202);
`;

const UserInfoBox = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const Level = styled.img`
  width: 23px;
  height: 23px;
`;

const UserId = styled.div`
  margin-left: 5px;
  font-weight: bold;
  font-size: 20px;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  margin: 0 80px;
  color: #969696;
`;

const IconPerson = styled.img`
  margin-bottom: 10px;
  width: 40px;
  height: 40px;
`;

const IconClock = styled.img`
  margin-bottom: 10px;
  width: 40px;
  height: 40px;
`;

const IconStar = styled.img`
  margin-bottom: 10px;
  width: 40px;
  height: 40px;
`;

const QuantityText = styled.div``;
const Min = styled.div``;
const DifficultyText = styled.div``;
export default userProfile;
