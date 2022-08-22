import styled from 'styled-components';

function Ingredient() {
  return (
    <Container>
      <IngredientTitle>Ingredient</IngredientTitle>
      <IngredientContent>
        <IngredientInputBox>
          <IngredientInput placeholder="예) 당근" />
          <IngredientInput placeholder="예) 1개" />
          <RemoveBtn>x</RemoveBtn>
        </IngredientInputBox>
        <IngredientInputBox>
          <IngredientInput placeholder="예) 당근" />
          <IngredientInput placeholder="예) 1개" />
          <RemoveBtn>x</RemoveBtn>
        </IngredientInputBox>
        <IngredientInputBox>
          <IngredientInput placeholder="예) 당근" />
          <IngredientInput placeholder="예) 1개" />
          <RemoveBtn>x</RemoveBtn>
        </IngredientInputBox>
        <AddBtn>+ 추가</AddBtn>
      </IngredientContent>
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
  margin-bottom: 50px;
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

const AddBtn = styled.button`
  width: 70px;
  height: 25px;
  margin: 10px auto;
  color: white;
  border: none;
  border-radius: 50px;
  background-color: ${props => props.theme.colors.lightPurple};

  &:active {
    background-color: ${props => props.theme.colors.neonPurple};
  }
`;
