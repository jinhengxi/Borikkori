import styled from 'styled-components';

function writingRecipe() {
  return (
    <Container>
      <RecipeTitle placeholder='레시피 제목을 입력하세요.' />
      <RecipeContent placeholder='레시피 소개 내용을 작성하세요.'/>
    </Container>
  );
}

export default writingRecipe;

const Container = styled.div`
  width: 100%;
  height: 340px;
  margin-bottom: 50px;
`;
const RecipeTitle = styled.input`
  width: 100%;
  height: 100px;
  padding: 0 30px;
  border: 1px solid ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.titleSize};
  font-weight: ${props => props.theme.fontWeights.semiBold};
`;

const RecipeContent = styled.textarea`
  width: 100%;
  height: 240px;
  padding: 30px 30px;
  font-size: ${props => props.theme.fontSizes.xl};
  border: 1px solid ${props => props.theme.colors.gray};
  border-top: none;
  outline: none;
`;
