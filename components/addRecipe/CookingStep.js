import { useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

function CookingStep({
  handleCookingStep,
  handCookingImg,
  cookingStep,
  setCookingStep,
  arrImg
}) {
  const imgRef = useRef();
  const pushId = useRef(cookingStep.length);
  const pushStep = useRef(cookingStep.length);

  const handleFileUpload = () => {
    imgRef.current.click();
  };

  const handleAddComponent = () => {
    pushStep.current += 1;
    const addComponent = {
      id: pushId.current,
      step: pushStep.current,
      content: '',
    };
    pushId.current += 1;
    setCookingStep(cookingStep.concat(addComponent));
  };

  const disabled =
    arrImg[pushId.current - 1] !== '' &&
    cookingStep[pushId.current - 1].addComponent !== '';

  return (
    <Container>
      <CookingStepTitle>Cooking Steps</CookingStepTitle>
      {cookingStep.map(step => (
        <StepBox key={step.id}>
          <AddImg>
            {arrImg.length !== step.id ? (
              <Image
                src={arrImg[step.id]}
                alt="RecipeStepImg"
                width={400}
                height={340}
              />
            ) : (
              <AddImgBtn onClick={handleFileUpload}>﹢</AddImgBtn>
            )}
            <FileInput
              onChange={e => handCookingImg(e, step.id)}
              type="file"
              accept="image/*"
              ref={imgRef}
            />
          </AddImg>
          <AddContent>
            <CountStep>Step {step.step}</CountStep>
            <StepContent
              onChange={e => {
                handleCookingStep(e, step.id);
              }}
              name="content"
              type="text"
              placeholder="내용을 입력하세요."
            />
          </AddContent>
        </StepBox>
      ))}
      <AddBtn onClick={handleAddComponent} disabled={!disabled}>
        ﹢추가
      </AddBtn>
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
  margin-bottom: 20px;
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
  margin-top: 10px;
  margin-bottom: 30px;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: ${props => props.theme.fontSizes.xl};
  background-color: ${props => props.theme.colors.lightPurple};

  &:active {
    background-color: ${props => props.theme.colors.neonPurple};
  }

  &:disabled {
    background-color: ${props => props.theme.colors.lightGray};
    cursor: default;
  }
`;

const FileInput = styled.input`
  display: none;
`;
