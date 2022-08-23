import React from 'react';
import styled from 'styled-components';

const BestImgDiv = ({ data }) => {
  const {
    title,
    intro,
    recipe_thumbnail,
    user_thumbnail,
    rating_mark_image,
    user_name,
    hit,
    like_count,
    comment_count,
  } = data;

  return (
    <BestImgWrapper recipeImg={recipe_thumbnail}>
      <BestInfoDiv>
        <BestIconsWrapper>
          <Views>
            <InfoIcons src="/images/BestViews.png" />
            <span>{hit}</span>
          </Views>
          <Likes>
            <InfoIcons src="/images/BestLikes.png" />
            <span>{like_count}</span>
          </Likes>
          <Comments>
            <CommentsIcon src="images/BestComments.png" />
            <span>{comment_count}</span>
          </Comments>
        </BestIconsWrapper>
        <UserInfo>
          <UserIcon src={user_thumbnail} />
          <UserRank src={rating_mark_image} />
          <UserName>{user_name}</UserName>
        </UserInfo>
        <BestName>{title}</BestName>
        <BestDesc>{intro}</BestDesc>
      </BestInfoDiv>
    </BestImgWrapper>
  );
};

export default BestImgDiv;

const BestName = styled.p`
  margin: 10px 0;
  width: 400px;
  height: 28px;
  font-size: 20px;
  font-weight: bold;
  color: #d9d9d9;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const BestDesc = styled.p`
  width: 400px;
  height: 41px;
  font-size: 18px;
  color: #d9d9d9;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const BestImgWrapper = styled.div`
  width: 470px;
  height: 470px;
  margin: 10px;
  display: flex;
  cursor: pointer;
  border-radius: 10px;
  background-size: 200%;
  object-fit: cover;
  background-image: url(${props => props.recipeImg});
  background-position: center;
  transition: background-size 0.3s ease;
  -moz-transition: background-size 0.3s ease;
  -web-kit-transition: background-size 0.3s ease;
  &:hover ${BestName} {
    color: white;
  }

  &:hover ${BestDesc} {
    color: white;
  }

  &:hover {
    background-size: 220%;
  }
`;

const BestInfoDiv = styled.div`
  padding: 30px 40px;
  border-radius: 10px;
  height: 470px;
  width: 470px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: space-between;
  flex-direction: column;
  transition: 0.5s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const UserIcon = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
`;

const UserRank = styled.img`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 5px;
`;

const UserName = styled.span`
  width: 60px;
  height: 11px;
  font-size: 14px;
  color: white;
`;

const BestIconsWrapper = styled.div`
  width: 235px;
  height: 470px;
  display: flex;
  font-weight: 200;
  font-size: 20px;
  color: white;
`;

const InfoIcons = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const CommentsIcon = styled.img`
  width: 30px;
  height: 20px;
  margin-right: 5px;
`;

const Views = styled.div`
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

const Likes = styled.div`
  width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

const Comments = styled.div`
  width: 80px;
  height: 40px;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-right: 8px;
`;
