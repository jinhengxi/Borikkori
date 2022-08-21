import React from 'react';
import styled from 'styled-components';

const FoodInfo = () => {
    return (
        <FoodInfo>
          <RecipeInfoBox>
          <RecipeTitle></RecipeTitle>
          <RecipeContent></RecipeContent>
          <HashTag></HashTag>
          </RecipeInfoBox>
          <CookingInfo>
            <QantityBox>
              <QanIcon></QanIcon>
              <Qantity></Qantity>
            </QantityBox>
            <TimeBox>
              <TimeIcon></TimeIcon>
              <Time></Time>
            </TimeBox>
            <DifficultyBox>
              <DifficultyIcon></DifficultyIcon>
              <Difficulty></Difficulty>
            </DifficultyBox>
          </CookingInfo>
        </FoodInfo>
    );
};

export default FoodInfo;