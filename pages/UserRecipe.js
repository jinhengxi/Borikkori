import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from '../components/Pagination';
import { HiSearch } from 'react-icons/hi';

const UserRecipe = () => {
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);
  const [recipeData, setRecipeData] = useState([]);
  const [searchOption, setSearchOption] = useState('제목');
  const [searchText, setSearchText] = useState('');

  const router = useRouter();
  const offset = (page - 1) * limit;

  const handleSearch = e => {
    setSearchText(e.target.value);
  };

  const onSubmit = e => {
    router.push({ query: { tag: searchOption, search: searchText } });

    e.preventDefault();
  };

  useEffect(() => {
    fetch('data/UserRecipe.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setRecipeData(data);
      });
  }, []);

  const FilteredData = recipeData.filter(
    data => typeof data.userId !== 'number'
  );

  console.log(FilteredData);
  const CategoryDiv = styled.p`
    width: 65px;
    height: 19px;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    color: ${props =>
      router.query.main === props.data ? '#b69aca' : '#a3a3a3'};
    border-bottom: ${props =>
      router.query.main === props.data ? '2px solid #b69aca' : 'none'};
    cursor: pointer;

    &:hover {
      color: #b69aca;
      border-bottom: 2px solid #b69aca;
    }
  `;

  const CategoryBtn = styled.button`
    width: 80px;
    height: 28px;
    font-size: 12px;
    font-weight: bold;
    background-color: ${props =>
      router.query.sub === props.data ? '#b69aca' : '#ffffff'};
    border: 1px solid #f0f0ef;
    color: ${props =>
      router.query.sub === props.data ? '#ffffff' : '#a3a3a3'};
    cursor: pointer;

    &:hover {
      background-color: #b69aca;
      color: white;
    }
  `;

  const FilterBtn = styled.button`
    width: 67px;
    height: 28px;
    background-color: ${props =>
      router.query.sort === props.data ? '#a3a3a3' : '#ffffff'};
    border: none;
    border-radius: 5px;
    color: ${props =>
      router.query.sort === props.data ? '#ffffff' : '#a3a3a3'};
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #a3a3a3;
      color: white;
    }
  `;

  return (
    <UserRecipeWrapper>
      <RecipeTitle>회원레시피</RecipeTitle>
      <RecipeCategory>
        {RECIPE_CATEGORIES.map(data => (
          <CategoryDiv
            key={data.id}
            data={data.name}
            onClick={() => router.push({ query: { main: data.value } })}
          >
            {data.name}
          </CategoryDiv>
        ))}
      </RecipeCategory>
      <RecipeSubCategory>
        {RECIPE_SUBCATEGORIES.map(data => (
          <CategoryBtn
            key={data.id}
            data={data.name}
            onClick={() =>
              router.push({ query: { ...router.query, sub: data.value } })
            }
          >
            {data.name}
          </CategoryBtn>
        ))}
      </RecipeSubCategory>
      <RecipeFilter>
        <FilterWrapper>
          {RECIPE_SORT.map(data => (
            <FilterBtn
              key={data.id}
              data={data.name}
              onClick={() =>
                router.push({ query: { ...router.query, sort: data.value } })
              }
            >
              {data.name}
            </FilterBtn>
          ))}
        </FilterWrapper>
        <WriterWrapper>
          <WriteBtn>글쓰기</WriteBtn>
        </WriterWrapper>
      </RecipeFilter>
      <RecipeList>
        {recipeData.slice(offset, offset + limit).map(recipe => (
          <RecipeCard key={recipe.id}>
            <RecipeImg src={recipe.recipe_thumbnail} />
            <RecipeName>{recipe.title}</RecipeName>
            <UserId>
              <UserIcon src={recipe.user_thumbnail} />
              <UserRank src={recipe.rating_mark_image} />
              <UserProfile>{recipe.user_name}</UserProfile>
            </UserId>
            <RecipeInfo>
              <Views>
                <InfoIcons src="/images/Views.png" />
                {recipe.hit}
              </Views>
              <Likes>
                <InfoIcons src="/images/Likes.png" />
                {recipe.like_count}
              </Likes>
              <Comments>
                <InfoIcons src="/images/Comments.png" />
                {recipe.comment_count}
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
      <RecipeSearch onSubmit={onSubmit}>
        <SearchSelect onChange={e => setSearchOption(e.target.value)}>
          {SEARCH_OPTIONS.map(data => (
            <option key={data.id} value={data.value}>
              {data.name}
            </option>
          ))}
        </SearchSelect>
        <SearchDiv>
          <SearchInput
            placeholder="검색어를 입력해주세요"
            value={searchText}
            onChange={handleSearch}
          />
          <SearchButton type="submit">
            <SearchIcon />
          </SearchButton>
        </SearchDiv>
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

const RecipeSubCategory = styled.div`
  width: 397px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 21px;
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

const RecipeSearch = styled.form`
  width: 1050px;
  height: 26px;
  margin: 17px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchDiv = styled.div`
  width: 186px;
  height: 36px;
  display: flex;
  margin: 0 19px;
`;

const SearchInput = styled.input`
  width: 160px;
  height: 36px;
  border: 2px solid #795b8f;
  border-radius: 5px 0 0 5px;
`;

const SearchSelect = styled.select`
  padding: 5px;
  width: 98px;
  height: 36px;
  border: 2px solid #795b8f;
  border-radius: 5px;
`;

const SearchButton = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0 5px 5px 0;
  background-color: #795b8f;
  font-size: 15px;
`;

const SearchIcon = styled(HiSearch)`
  color: #ffffff;
  font-weight: bold;
`;

const RECIPE_CATEGORIES = [
  {
    id: 1,
    value: 1,
    name: '전체보기',
  },
  {
    id: 2,
    value: 2,
    name: '한식',
  },
  {
    id: 3,
    value: 3,
    name: '중식',
  },
  {
    id: 4,
    value: 4,
    name: '일식',
  },
  {
    id: 5,
    value: 5,
    name: '양식',
  },
  {
    id: 6,
    value: 6,
    name: '그외',
  },
];

const RECIPE_SUBCATEGORIES = [
  {
    id: 1,
    value: 1,
    name: '전체보기',
  },
  {
    id: 2,
    value: 2,
    name: '메인요리',
  },
  {
    id: 3,
    value: 3,
    name: '밑반찬',
  },
  {
    id: 4,
    value: 4,
    name: '간식',
  },
  {
    id: 5,
    value: 5,
    name: '안주',
  },
];

const RECIPE_SORT = [
  {
    id: 1,
    value: 1,
    name: '최신순',
  },
  {
    id: 2,
    value: 2,
    name: '추천순',
  },
  {
    id: 3,
    value: 3,
    name: '조회순',
  },
];

const SEARCH_OPTIONS = [
  {
    id: 1,
    value: 1,
    name: '제목',
  },
  {
    id: 2,
    value: 2,
    name: '내용',
  },
  {
    id: 3,
    value: 3,
    name: '제목+내용',
  },
  {
    id: 4,
    value: 4,
    name: '작성자',
  },
];
