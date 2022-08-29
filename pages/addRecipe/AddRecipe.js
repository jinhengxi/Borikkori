import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useRouter } from 'next/router';

import CoverImg from '../../components/addRecipe/CoverImg';
import RecipeInfo from '../../components/addRecipe/RecipeInfo';
import Ingredient from '../../components/addRecipe/Ingredient';
import WritingRecipe from '../../components/addRecipe/WritingRecipe';
import RecipeItem from '../../components/addRecipe/RecipeItem';
import CookingStep from '../../components/addRecipe/CookingStep';
import HashTag from '../../components/addRecipe/HashTag';
import { BASE_URL } from '../../config';

function AddRecipe() {
  const [coverImg, setCoverImg] = useState('');
  const [recipeInfo, setRecipeInfo] = useState({});
  const [writingRecipe, setWritingRecipe] = useState({});
  const [ingredient, setIngredient] = useState([
    { id: 0, name: '', quantity: '' },
  ]);
  const [recipeItem, setRecipeItem] = useState([]);
  const [cookingStep, setCookingStep] = useState([
    { id: 0, step: 1, content: '' },
  ]);
  const [arrImg, setArrimg] = useState([]);
  const [arrImg2, setArrimg2] = useState([]);
  const [hashTag, setHashTag] = useState([]);
  
  const router = useRouter();

  const sendCommentToServer = async () => {
    const formData = new FormData();
    formData.append('title', writingRecipe.title);
    formData.append('intro', writingRecipe.content);
    formData.append('thumbnail', coverImg);
    formData.append('cooktime', recipeInfo.minute);
    formData.append('serving', recipeInfo.people);
    formData.append('difficulty', recipeInfo.difficulty);
    formData.append('main_category_id', recipeInfo.country);
    formData.append('sub_category_id', recipeInfo.situation);
    formData.append('ingredient', JSON.stringify(ingredient));
    formData.append('product', JSON.stringify(recipeItem));
    formData.append('content', JSON.stringify(cookingStep));
    for (let i = 0; i < arrImg.length; i++) {
      formData.append('content_image', arrImg[i]);
    }
    formData.append('hash_tag', hashTag);

    await axios({
      method: 'POST',
      url: `${BASE_URL}/recipe/4/write`,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.MrVqp5dnDsVI9Oy4uOJdNkAjvza09ytMSTFGQnDsM_w',
      },
      data: formData,
    })
      .then(res => {
        if (res.status === 200) {
          alert('발행 완료');
          router.push('/UserRecipe');
        }
      })
      .catch(error => {
        alert(`에러가 발생했습니다. (${error})`);
      });
  };

  const back = ()=>{
    router.push('/UserRecipe');
  }

  const handleLoadCoverImg = e => {
    setCoverImg(e.target.files[0]);
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
    const inputItemsCopy = ingredient;
    inputItemsCopy[id].name = value;
    setIngredient(inputItemsCopy);
  };

  const handleQuanIngredient = (e, id) => {
    const { value } = e.target;
    const inputItemsCopy = JSON.parse(JSON.stringify(ingredient));
    inputItemsCopy[id].quantity = value;
    setIngredient(inputItemsCopy);
  };

  const handleCookingStep = (e, id) => {
    const { value } = e.target;
    const inputItemsCopy = JSON.parse(JSON.stringify(cookingStep));
    inputItemsCopy[id].content = value;
    setCookingStep(inputItemsCopy);
  };

  const handCookingImg = e => {
    setArrimg(arrImg.concat(e.target.files[0]));
    setArrimg2(arrImg2.concat(URL.createObjectURL(e.target.files[0])));
  };

  const handRecipeItem = item => {
    setRecipeItem(recipeItem.concat(item));
    alert('저장완료');
  };

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
      <RecipeItem handRecipeItem={handRecipeItem} recipeItem={recipeItem} />
      <CookingStep
        handleCookingStep={handleCookingStep}
        handCookingImg={handCookingImg}
        cookingStep={cookingStep}
        setCookingStep={setCookingStep}
        arrImg={arrImg2}
      />
      <HashTag
        handleAddHashTag={handleAddHashTag}
        handleRemoveHashTag={handleRemoveHashTag}
        hashTag={hashTag}
      />
      <Btns>
        <CancelBtn onClick={back}>취소</CancelBtn>
        <SaveBtn onClick={sendCommentToServer}>발행</SaveBtn>
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
