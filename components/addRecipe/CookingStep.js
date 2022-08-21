import styled from 'styled-components';

function CookingStep() {
  return (
    <Container>
      <CookingStepTitle>Cooking Steps</CookingStepTitle>
      <StepBox>
        <AddImg>
          <AddImgBtn>﹢</AddImgBtn>
        </AddImg>
        <AddContent>
          <CountStep>Step 1</CountStep>
          <StepContent placeholder="내용을 입력하세요." />
        </AddContent>
      </StepBox>
      <AddBtn>﹢추가</AddBtn>
    </Container>
  );
}

export default CookingStep;

const Container = styled.div`
  width: 100%;
  margin-bottom: 50px;
  text-align: center;
`;

const CookingStepTitle = styled.div`
  margin-left: 50px;
  margin-bottom: 20px;
  text-align: start;
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

const StepBox = styled.div`
  width: 100%;
  height: 340px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.gray};
  ${props => props.theme.flex.flexBox()};
`;

const AddImg = styled.div`
  width: 400px;
  height: 340px;
  background-color: #f4f3f2;
  ${props => props.theme.flex.flexBox()};
`;

const AddImgBtn = styled.button`
  width: 120px;
  height: 120px;
  font-size: 80px;
  border: none;
  background-color: #f4f3f2;
  color: gray;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;

  img {
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }
`;

const AddContent = styled.div`
  width: 570px;
  height: 340px;
  padding: 40px 60px;
`;

const CountStep = styled.div`
  text-align: start;
  padding-bottom: 10px;
  font-size: ${props => props.theme.fontSizes.titleSize};
  font-weight: ${props => props.theme.fontWeights.bold};
  border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

const StepContent = styled.textarea`
  width: 100%;
  height: 80%;
  padding: 30px 0;
  border: none;
  outline: none;
  font-size: ${props => props.theme.fontSizes.xl};
`;

const AddBtn = styled.button`
  width: 128px;
  height: 50px;
  margin: 30px auto;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: ${props => props.theme.fontSizes.xl};
  background-color: ${props => props.theme.colors.lightPurple};

  &:active {
    background-color: ${props => props.theme.colors.neonPurple};
  }
`;
