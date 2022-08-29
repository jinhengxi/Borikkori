import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BestImgDiv from '../components/bestRecipe/BestImgDiv';
import InfiniteScroll from 'react-infinite-scroll-component';

const BestRecipe = () => {
  const [bestRecipes, setBestRecipes] = useState();

  const fetchData = () => {
    fetch('http://10.58.6.89:8000/recipe/4/list?sort=4', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setBestRecipes([...bestRecipes, ...data.result]);
      });
  };

  useEffect(() => {
    fetch('http://10.58.6.89:8000/recipe/4/list?sort=4', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setBestRecipes(data.result);
      });
  }, []);

  return (
    <BestWrapper>
      <BestTitle>BEST</BestTitle>

      <InfiniteScroll dataLength={6} next={fetchData} hasMore={true}>
        <BestImgWrapper>
          {bestRecipes?.map(data => (
            <Link
              key={data.id}
              href="/recipeDetail/[id]"
              as={`/recipeDetail/${data.id}`}
            >
              <BestImgDiv data={data} />
            </Link>
          ))}
        </BestImgWrapper>
      </InfiniteScroll>
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
