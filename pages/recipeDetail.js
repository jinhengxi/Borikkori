
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CookingSteps from './CookingSteps';
import DetailComment from './DetailComment';
import Igredient from './ingredient';
import RecipeCarousel from './RecipeCarousel';
import SimilarCasousel from './similarCarousel';
import UserProfile from './UserProfile';




const RecipeDetail = () => {
  const [userRecipeInfo, setUserRecipeInfo] = useState();

  useEffect(() => {
    fetch(
      `http://10.58.5.197:8000/recipe/detail/${window.location.search.replace(
        '?id=',
        ''
      )}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        setUserRecipeInfo(data.result);
      });
  }, []);


  return (
    <RecipeDetailWrapper>
      {userRecipeInfo && (
        <>
          <UserProfile userRecipeInfo={userRecipeInfo} />
          <Igredient ingredient={userRecipeInfo.ingredient} />
          <RecipeCarousel />
          <CookingSteps />
          <DetailComment />
          <SimilarCasousel />
        </>
      )}
    </RecipeDetailWrapper>
  );
};

const RecipeDetailWrapper = styled.div`
  width: 1050px;
`;

export default RecipeDetail;
