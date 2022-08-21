import React from 'react'
import styled from 'styled-components'
import CookingSteps from './CookingSteps'
import DetailComment from './DetailComment'
import FoodInfo from './FoodInfo'

import RecipeCarousel from './RecipeCarousel'
import SimilarCasousel from './SimilarCasousel'
import UserProfile from './UserProfile'

const RecipeDetail = () => {
  return (
    <RecipeDetailWrapper>
      <UserProfile/>
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