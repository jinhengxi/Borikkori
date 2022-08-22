import React from 'react';
import styled from 'styled-components';

const Igredient = () => {
  return (
    <Ingredient>
      <IngredientWrapper>
        <IngreTitle>Ingredient</IngreTitle>
        <IngredientBox>
          <IngredientOne>
            <IngredientName>미역줄기</IngredientName>
            <IngredientQuan>300g</IngredientQuan>
          </IngredientOne>
          <IngredientOne>
            <IngredientName>미역줄기</IngredientName>
            <IngredientQuan>300g</IngredientQuan>
          </IngredientOne>
          <IngredientOne>
            <IngredientName>미역줄기</IngredientName>
            <IngredientQuan>300g</IngredientQuan>
          </IngredientOne>
          <IngredientOne>
            <IngredientName>미역줄기</IngredientName>
            <IngredientQuan>300g</IngredientQuan>
          </IngredientOne>
          <IngredientOne>
            <IngredientName>미역줄기</IngredientName>
            <IngredientQuan>300g</IngredientQuan>
          </IngredientOne>
          <IngredientOne>
            <IngredientName>미역줄기</IngredientName>
            <IngredientQuan>300g</IngredientQuan>
          </IngredientOne>
          <IngredientOne>
            <IngredientName>미역줄기</IngredientName>
            <IngredientQuan>300g</IngredientQuan>
          </IngredientOne>
          <IngredientOne>
            <IngredientName>미역줄기</IngredientName>
            <IngredientQuan>300g</IngredientQuan>
          </IngredientOne>
        </IngredientBox>
      </IngredientWrapper>
    </Ingredient>
  );
};

export default Igredient;

const Ingredient = styled.div`
   width:1050px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const IngredientWrapper = styled.div`
  width: 1050px;
  height: 330px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const IngreTitle = styled.p`
font-weight: bold;
font-size: 24px;
`;

const IngredientBox = styled.div`
justify-content: center;
  width: 1050px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  margin-top: 50px;
  box-shadow: 2px 5px 20px rgba(0,0,0, 0.25)
`;

const IngreRight = styled.div`

`;
const IngreLeft = styled.div`

`;


const IngredientOne = styled.div`
  width: 400px;
  height: 62px;
  padding: 10px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IngredientName = styled.span`
  text-align: center;
`;

const IngredientQuan = styled.span`
  text-align: center;
  color: #969696;
`;