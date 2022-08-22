import React from 'react'
import styled from 'styled-components'
import CookingSteps from './CookingSteps'
import DetailComment from './DetailComment'
import Igredient from './ingredient'

import RecipeCarousel from './RecipeCarousel'
import SimilarCasousel from './similarCarousel'
import UserProfile from './UserProfile'

const RecipeDetail = () => {
  return (
    <RecipeDetailWrapper>
      <UserProfile/>
      <Igredient/>
      <RecipeCarousel/>
      <CookingSteps/>
      <DetailComment/>
      <SimilarCasousel/>
    </RecipeDetailWrapper>
  )
}

const RecipeDetailWrapper = styled.div`
  width:1050px;
`;

export default RecipeDetail