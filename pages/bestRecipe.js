import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BestImgDiv from '../components/bestRecipe/BestImgDiv';

const BestRecipe = () => {
  const [bestRecipes, setBestRecipes] = useState();
  const router = useRouter();
  useEffect(() => {
    fetch('http://10.58.5.197:8000/recipe/4/list?sort=4', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setBestRecipes(data.result);
      });
  }, []);

  console.log(bestRecipes);

  return (
    <BestWrapper>
      <BestTitle>BEST</BestTitle>

      <BestImgWrapper>
        {bestRecipes?.map(data => (
          <BestImgDiv
            key={data.id}
            data={data}
            onClick={() =>
              router.push({ pathname: `/recipeDetail`, query: { id: data.id } })
            }
          />
        ))}
      </BestImgWrapper>
    </BestWrapper>
  );
};

export default BestRecipe;

const BestWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BestTitle = styled.h1`
  margin: 29px 0;
  font-size: 24px;
`;

const BestImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
