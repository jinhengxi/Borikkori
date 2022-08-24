import React from 'react';
import styled from 'styled-components';

const Igredient = ({posts}) => {

  return (
    <Ingredient>
      <IngredientWrapper>
        <IngreTitle>Ingredient</IngreTitle>
        <IngredientBox>

            {posts?.map(({ id, name, quantity})=>(
              <IngredientOne key={id}>
                <IngredientName>{name}</IngredientName>
                <IngredientQuan>{quantity}</IngredientQuan>
             </IngredientOne>
            ))}

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
margin-bottom: 50px;
`;

const IngredientBox = styled.div`
  width: 1050px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  box-shadow: 2px 5px 10px #e6e4e1;
`;

const IngredientOne = styled.div`
  width: 400px;
  height: 62px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const IngredientName = styled.span`
  text-align: center;
  margin-left: 120px;
`;

const IngredientQuan = styled.span`
  text-align: center;
  color: #969696;
`;