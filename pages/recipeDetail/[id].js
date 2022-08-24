import styled from 'styled-components';
import CookingSteps from '../../components/recipeDetailCom/cookingSteps';
import DetailComment from '../../components/recipeDetailCom/detailComment';
import Igredient from '../../components/recipeDetailCom/ingredient';
import RecipeCarousel from '../../components/recipeDetailCom/recipeCarousel';
import SimilarCasousel from '../../components/recipeDetailCom/similarCarousel';
import UserProfile from '../../components/recipeDetailCom/UserProfile';
import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../config';

export const getStaticPaths = async () => {
  const res = await fetch(`${BASE_URL}/recipe/4/list`);
  const post = await res.json();
  const posts = post.result;
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`${BASE_URL}/recipe/detail/${params?.id}`);
  const post = await res.json();
  const posts = await post.result;
  return { props: { posts } };
};

const RecipeDetail = ({posts}) => {
  console.log(posts)

  // const [userRecipeInfo, setUserRecipeInfo] = useState();

  // useEffect(() => {
  //   fetch(
  //     `http://10.58.5.197:8000/recipe/detail/${window.location.search.replace(
  //       '?id=',
  //       ''
  //     )}`,
  //     {
  //       method: 'GET',
  //     }
  //   )
  //     .then(res => res.json())
  //     .then(data => {
  //       setUserRecipeInfo(data.result);
  //     });
  // }, []);

  //목데이터
  // useEffect(() => {
  //   fetch(
  //     `data/recipeDetailData.json`,
  //     {
  //       method: 'GET',
  //     }
  //   )
  //     .then(res => res.json())
  //     .then(data => {
  //       setUserRecipeInfo(data.result);
  //     });
  // }, []);

  return (
    <RecipeDetailWrapper>
      {posts && (
        <>
          <UserProfile posts={posts} />
          <Igredient posts={posts.ingredient} />
          <RecipeCarousel posts={posts.product} />
          <CookingSteps posts={posts.content} />
          <DetailComment posts={posts}/>
          <SimilarCasousel posts={posts}/>
        </>
      )}
    </RecipeDetailWrapper>
  );
};

const RecipeDetailWrapper = styled.div`
  width: 1050px;
`;

export default RecipeDetail;
