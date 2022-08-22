import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BestImgDiv from '../components/bestRecipe/BestImgDiv';

const BestRecipe = () => {
  const [bestRecipes, setBestRecipes] = useState();

  useEffect(() => {
    fetch('data/Bestdata.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setBestRecipes(data);
      });
  }, []);

  return (
    <BestWrapper>
      <BestTitle>BEST</BestTitle>
      <BestImgWrapper>
        {bestRecipes?.map(data => (
          <BestImgDiv key={data.id} data={data} />
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
