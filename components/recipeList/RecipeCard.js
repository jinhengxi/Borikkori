import React from 'react';
import styled from 'styled-components';

const RecipeCard = ({ data }) => {
  const { foodImage, foodTitle, views, likes, comments } = data;
  return (
    <RecipeCardWrapper>
      <RecipeImg src={foodImage} />
      <RecipeName>{foodTitle}</RecipeName>
      <RecipeInfo>
        <Views>
          <InfoIcons src="/images/Views.png" />
          {views}
        </Views>
        <Likes>
          <InfoIcons src="/images/Likes.png" />
          {likes}
        </Likes>
        <Comments>
          <InfoIcons src="/images/Comments.png" />
          {comments}
        </Comments>
      </RecipeInfo>
    </RecipeCardWrapper>
  );
};

export default RecipeCard;

const RecipeCardWrapper = styled.div`
  width: 305px;
  height: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0ddda;
  border-radius: 5px;
  margin: 18px;
  cursor: pointer;
  background-color: white;

  &:hover {
    transition: all 0.3s ease-out;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.08);
  }
`;

const RecipeImg = styled.img`
  margin: 16px;
  margin-bottom: 10px;
  width: 271px;
  height: 271px;
  background-size: cover;
`;

const RecipeName = styled.p`
  width: 270px;
  height: 20px;
  font-weight: 600;
  font-size: 22px;
  margin: 8px 0;
`;

const RecipeInfo = styled.div`
  width: 271px;
  height: 20px;
  display: flex;
  align-items: center;
  font-size: 10px;
  color: #a3a3a3;
`;

const Views = styled.div`
  width: 40px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Likes = styled.div`
  width: 40px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Comments = styled.div`
  width: 40px;
  height: 20px;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const InfoIcons = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 3px;
`;
