import styled from 'styled-components';
import CookingSteps from '../../components/recipeDetailCom/cookingSteps';
import DetailComment from '../../components/recipeDetailCom/detailComment';
import Igredient from '../../components/recipeDetailCom/ingredient';
import RecipeCarousel from '../../components/recipeDetailCom/recipeCarousel';
import SimilarCasousel from '../../components/recipeDetailCom/similarCarousel';
import UserProfile from '../../components/recipeDetailCom/UserProfile';
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
  return (
    <RecipeDetailWrapper>
      {posts && (
        <>
          <UserProfile posts={posts} hash={posts.hash_tag} />
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
