import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const UserRecipe = () => {
  const [recipeData, setRecipeData] = useState([]);
  useEffect(() => {
    fetch('data/UserRecipe.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setRecipeData(data);
      });
  }, []);
  return (
    <UserRecipeWrapper>
      <RecipeTitle>회원레시피</RecipeTitle>
      <RecipeCategory>
        <CategoryDiv>전체보기</CategoryDiv>
        <CategoryDiv>한식</CategoryDiv>
        <CategoryDiv>중식</CategoryDiv>
        <CategoryDiv>일식</CategoryDiv>
        <CategoryDiv>양식</CategoryDiv>
        <CategoryDiv>그외</CategoryDiv>
      </RecipeCategory>
      <RecipeSubCategory>
        <CategoryBtn>전체보기</CategoryBtn>
        <CategoryBtn>메인요라</CategoryBtn>
        <CategoryBtn>밑반찬</CategoryBtn>
        <CategoryBtn>간식</CategoryBtn>
        <CategoryBtn>안주</CategoryBtn>
      </RecipeSubCategory>
      <RecipeFilter>
        <FilterWrapper>
          <FilterBtn>최신순</FilterBtn>
          <FilterBtn>추천순</FilterBtn>
          <FilterBtn>조회순</FilterBtn>
        </FilterWrapper>
        <WriterWrapper>
          <WriteBtn>글쓰기</WriteBtn>
        </WriterWrapper>
      </RecipeFilter>
      <RecipeList>
        {recipeData.map(recipe => (
          <RecipeCard key={recipe.id}>
            <RecipeImg src={recipe.foodImage} />
            <UserId>
              <UserIcon src={recipe.userIcon} />
              <UserRank src={recipe.userRank} />
              <UserProfile>{recipe.userId}</UserProfile>
            </UserId>
            <RecipeName>{recipe.foodTitle}</RecipeName>
            <RecipeInfo>
              <Views>
                <InfoIcons src="/assets/images/Views.png" />
                {recipe.views}
              </Views>
              <Likes>
                <InfoIcons src="/assets/images/Likes.png" />
                {recipe.likes}
              </Likes>
              <Comments>
                <InfoIcons src="/assets/images/Comments.png" />
                {recipe.comments}
              </Comments>
            </RecipeInfo>
          </RecipeCard>
        ))}
      </RecipeList>
      <RecipePaginate>Pagination</RecipePaginate>
      <RecipeSearch>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <SearchInput />
      </RecipeSearch>
    </UserRecipeWrapper>
  );
};

export default UserRecipe;

const UserRecipeWrapper = styled.div`
  width: 1050px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RecipeTitle = styled.h1`
  margin-top: 28px;
  font-size: 24px;
  font-weight: bold;
`;

const RecipeCategory = styled.div`
  width: 395px;
  height: 19px;
  margin-top: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryDiv = styled.p`
  width: 65px;
  height: 19px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: #a3a3a3;
  cursor: pointer;

  &:hover {
    color: #b69aca;
    border-bottom: 2px solid #b69aca;
  }
`;

const RecipeSubCategory = styled.div`
  width: 397px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 21px;
`;

const CategoryBtn = styled.button`
  width: 80px;
  height: 28px;
  font-size: 12px;
  font-weight: bold;
  background-color: white;
  border: 1px solid #f0f0ef;
  color: #a3a3a3;
  cursor: pointer;

  &:hover {
    background-color: #b69aca;
    color: white;
  }
`;

const RecipeFilter = styled.div`
  width: 1010px;
  height: 28px;
  margin-top: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FilterWrapper = styled.div`
  width: 189px;
  height: 28px;
  display: flex;
  align-items: center;
`;

const FilterBtn = styled.button`
  width: 67px;
  height: 28px;
  background-color: white;
  border: none;
  border-radius: 5px;
  color: #a3a3a3;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #a3a3a3;
    color: white;
  }
`;

const WriterWrapper = styled.div`
  width: 73px;
  height: 28px;
`;

const WriteBtn = styled.button`
  width: 73px;
  height: 28px;
  background-color: #795b8f;
  color: white;
  font-size: 12px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
`;

const RecipeList = styled.div`
  width: 1050px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const RecipeCard = styled.div`
  width: 305px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0ddda;
  border-radius: 5px;
  margin: 22px;
`;

const RecipeImg = styled.img`
  margin: 16px;
  margin-bottom: 10px;
  width: 271px;
  height: 271px;
  background-size: cover;
`;

const UserId = styled.div`
  width: 271px;
  height: 20.45px;
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

const UserIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 2px;
`;

const UserRank = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 2px;
`;

const UserProfile = styled.span`
  width: 60px;
  height: 11px;
  font-size: 14px;
  font-weight: bold;
`;

const RecipeName = styled.p`
  width: 270px;
  height: 20px;
  font-weight: bold;
  font-size: 18px;
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

const RecipePaginate = styled.div`
  width: 1050px;
  height: 29px;
  margin-top: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecipeSearch = styled.div`
  width: 1050px;
  height: 26px;
  margin: 17px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 186px;
  height: 26px;
  border: 2px solid #795b8f;
  border-radius: 5px;
  margin: 0 19px;
`;
