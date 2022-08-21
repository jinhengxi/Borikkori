import styled from 'styled-components';

import CoverImg from '../../components/addRecipe/CoverImg';
import RecipeInfo from '../../components/addRecipe/RecipeInfo';
import Ingredient from '../../components/addRecipe/Ingredient';
import WritingRecipe from '../../components/addRecipe/WritingRecipe';
import RecipeItem from '../../components/addRecipe/RecipeItem';
import CookingStep from '../../components/addRecipe/CookingStep';
import HashTag from '../../components/addRecipe/HashTag';

function AddRecipe() {
  return (
    <Container>
      <CoverImg />
      <RecipeInfo />
      <WritingRecipe />
      <Ingredient />
      <RecipeItem />
      <CookingStep />
      <HashTag/>
      <Btns>
        <CancelBtn>취소</CancelBtn>
        <SaveBtn>발행</SaveBtn>
      </Btns>
    </Container>
  );
}

export default AddRecipe;

const Container = styled.div`
  width: 970px;
  margin: auto;
`;

const Btns = styled.div`
  margin-bottom: 100px;
  ${props => props.theme.flex.flexBox()};
`;

const CancelBtn = styled.button`
  width: 100px;
  height: 35px;
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 5px;
  color: gray;
  background-color: white;
  margin: 0 10px;

  &:active {
    background-color: ${props => props.theme.colors.lightGray};
  }
`;

const SaveBtn = styled(CancelBtn)`
  color: white;
  background-color: ${props => props.theme.colors.purple};

  &:active {
    background-color: ${props => props.theme.colors.lightPurple};
  }
`;
