import { useState } from 'react';
import styled from 'styled-components';

import CoverImg from '../../components/addRecipe/CoverImg';
import RecipeInfo from '../../components/addRecipe/RecipeInfo';
import Ingredient from '../../components/addRecipe/Ingredient';
import WritingRecipe from '../../components/addRecipe/WritingRecipe';
import RecipeItem from '../../components/addRecipe/RecipeItem';
import CookingStep from '../../components/addRecipe/CookingStep';
import HashTag from '../../components/addRecipe/HashTag';

function AddRecipe() {
  const [coverImg, setCoverImg] = useState('');
  const [recipeInfo, setRecipeInfo] = useState({});
  const [writingRecipe, setWritingRecipe] = useState({});
  const [ingredient, setIngredient] = useState([{ id: 0, name: '', quan: '' }]);
  const [recipeItem, setRecipeItem] = useState({});
  const [cookingStep, setCookingStep] = useState([
    { id: 0, step: 1, image: '', content: '' },
  ]);
  const [hashTag, setHashTag] = useState([]);

  const handleLoadCoverImg = e => {
    setCoverImg(URL.createObjectURL(e.target.files[0]));
  };

  const handleAddRecipeInfo = e => {
    const { name, value } = e.target;
    setRecipeInfo({
      ...recipeInfo,
      [name]: value,
    });
  };

  const handleWritingRecipe = e => {
    const { name, value } = e.target;
    setWritingRecipe({
      ...writingRecipe,
      [name]: value,
    });
  };

  const handleNameIngredient = (e, id) => {
    const { value } = e.target;
    const inputItemsCopy = JSON.parse(JSON.stringify(ingredient));
    inputItemsCopy[id].name = value;
    setIngredient(inputItemsCopy);
  };

  const handleQuanIngredient = (e, id) => {
    const { value } = e.target;
    const inputItemsCopy = JSON.parse(JSON.stringify(ingredient));
    inputItemsCopy[id].quan = value;
    setIngredient(inputItemsCopy);
  };

  const handleCookingStep = (e, id) => {
    const { value } = e.target;
    const inputItemsCopy = JSON.parse(JSON.stringify(cookingStep));
    inputItemsCopy[id].content = value;
    setCookingStep(inputItemsCopy);
  };

  const handCookingImg = (e, id) => {
    const inputItemsCopy = cookingStep;
    inputItemsCopy[id].image = URL.createObjectURL(e.target.files[0]);
    setCookingStep(inputItemsCopy);
  };
  console.log(cookingStep);

  const handleAddHashTag = e => {
    const addHashTag = [...hashTag];
    addHashTag.push(e.target.value);
    setHashTag(addHashTag);
  };

  const handleRemoveHashTag = e => {
    const removeHashTag = e.target.parentElement.firstChild.innerText;
    const filteredHashTag = hashTag.filter(hash => hash !== removeHashTag);
    setHashTag(filteredHashTag);
  };

  return (
    <Container>
      <CoverImg handleLoadCoverImg={handleLoadCoverImg} coverImg={coverImg} />
      <RecipeInfo handleAddRecipeInfo={handleAddRecipeInfo} />
      <WritingRecipe handleWritingRecipe={handleWritingRecipe} />
      <Ingredient
        handleNameIngredient={handleNameIngredient}
        handleQuanIngredient={handleQuanIngredient}
        ingredient={ingredient}
        setIngredient={setIngredient}
      />
      <RecipeItem />
      <CookingStep
        handleCookingStep={handleCookingStep}
        handCookingImg={handCookingImg}
        cookingStep={cookingStep}
        setCookingStep={setCookingStep}
      />
      <HashTag
        handleAddHashTag={handleAddHashTag}
        handleRemoveHashTag={handleRemoveHashTag}
        hashTag={hashTag}
      />
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
