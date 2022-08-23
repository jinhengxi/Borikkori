import { useRef } from 'react';
import styled from 'styled-components';

function Ingredient({ handleNameIngredient,handleQuanIngredient, ingredient, setIngredient }) {
  const pushId = useRef(ingredient.length);

  const handleAddComponent = () => {
    const addComponent = { id: pushId.current, name: '', quan: '' };
    setIngredient(ingredient.concat(addComponent));
    pushId.current += 1;
  };

  const handleRemoveComponent = id => {
    let removeComponent = ingredient.filter(ingredient => ingredient.id !== id);
    setIngredient(removeComponent);
  };

  return (
    <Container>
      <IngredientTitle>Ingredient</IngredientTitle>
      <IngredientContent>
        {ingredient.map(ingredient => (
          <IngredientInputBox key={ingredient.id}>
            <IngredientInput
              onChange={e => handleNameIngredient(e, ingredient.id)}
              name="name"
              type="text"
              placeholder="예) 당근"
            />
            <IngredientInput
              onChange={e => handleQuanIngredient(e, ingredient.id)}
              name="quan"
              type="text"
              placeholder="예) 1개"
            />
            <RemoveBtn
              onClick={() => {
                handleRemoveComponent(ingredient.id);
              }}
            >
              x
            </RemoveBtn>
          </IngredientInputBox>
        ))}
      </IngredientContent>
      <AddBtnBox>
        <AddBtn onClick={handleAddComponent}>+ 추가</AddBtn>
      </AddBtnBox>
    </Container>
  );
}

export default Ingredient;

const Container = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

const IngredientTitle = styled.div`
  margin-left: 50px;
  margin-bottom: 20px;
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

const IngredientContent = styled.div`
  width: 100%;
  max-height: 270px;
  padding: 45px;
  background-color: #f4f3f2;
  overflow-inline: inherit;
  ${props => props.theme.flex.flexBox('', '', '')};
  flex-wrap: wrap;
  overflow: auto;
`;

const IngredientInputBox = styled.div`
  margin-left: 5px;
  ${props => props.theme.flex.flexBox('', 'center', '')};
`;

const IngredientInput = styled.input`
  width: 190px;
  height: 40px;
  margin: 5px 7px;
  padding: 0 15px;
  border: 1px solid ${props => props.theme.colors.lightGray};
`;

const RemoveBtn = styled.button`
  width: 18px;
  height: 18px;
  background-color: #999999;
  color: white;
  border: none;
  border-radius: 50%;

  &:active {
    background-color: ${props => props.theme.colors.gray};
  }
`;

const AddBtnBox = styled.div`
  ${props => props.theme.flex.flexBox()};
`;

const AddBtn = styled.button`
  width: 128px;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: ${props => props.theme.fontSizes.xl};
  background-color: ${props => props.theme.colors.lightPurple};

  &:active {
    background-color: ${props => props.theme.colors.neonPurple};
  }
`;
