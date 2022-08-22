import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from '../components/Pagination';

const UserRecipe = () => {
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
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
        {RECIPE_CATEGORIES.map(data => (
          <CategoryDiv key={data.id}>{data.name}</CategoryDiv>
        ))}
      </RecipeCategory>
      <RecipeSubCategory>
        {RECIPE_SUBCATEGORIES.map(data => (
          <CategoryBtn key={data.id}>{data.name}</CategoryBtn>
        ))}
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
        {recipeData.slice(offset, offset + limit).map(recipe => (
          <RecipeCard key={recipe.id}>
            <RecipeImg src={recipe.foodImage} />
            <RecipeName>{recipe.foodTitle}</RecipeName>
            <UserId>
              <UserIcon src={recipe.userIcon} />
              <UserRank src={recipe.userRank} />
              <UserProfile>{recipe.userId}</UserProfile>
            </UserId>
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
      <RecipePaginate>
        <Pagination
          total={recipeData.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </RecipePaginate>
      <RecipeSearch>
        <SearchSelect>
          <option>글제목</option>
          <option>내용</option>
          <option>작성자</option>
        </SearchSelect>
        <SearchInput placeholder="검색어를 입력해주세요" />
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
  cursor: pointer;
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
  margin: 8px 0;
  margin-bottom: 10px;
`;

const UserIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
`;

const UserRank = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
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

const RecipePaginate = styled.div`
  width: 1050px;
  height: 29px;
  margin: 40px 0;
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
  height: 36px;
  border: 2px solid #795b8f;
  border-radius: 5px;
  margin: 0 19px;
`;

const SearchSelect = styled.select`
  width: 98px;
  height: 36px;
  border: 2px solid #795b8f;
  border-radius: 5px;
`;

const RECIPE_CATEGORIES = [
  {
    id: 1,
    name: '전체보기',
  },
  {
    id: 2,
    name: '한식',
  },
  {
    id: 3,
    name: '중식',
  },
  {
    id: 4,
    name: '일식',
  },
  {
    id: 5,
    name: '양식',
  },
  {
    id: 6,
    name: '그외',
  },
];

const RECIPE_SUBCATEGORIES = [
  {
    id: 1,
    name: '전체보기',
  },
  {
    id: 2,
    name: '메인요리',
  },
  {
    id: 3,
    name: '밑반찬',
  },
  {
    id: 4,
    name: '간식',
  },
  {
    id: 5,
    name: '안주',
  },
];
