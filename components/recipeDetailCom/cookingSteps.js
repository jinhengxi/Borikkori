import React from 'react';
import styled from 'styled-components';

const CookingSteps = ({content}) => {
    return (
        <CookingStep>
          <CookingTitle>Cooking steps</CookingTitle>
          <CookWrapper>
          <StepBox>
            <StepImg src={content}/>
            <StepWrapper>
              <Step>Step 1</Step>
              <StepContent>먼저 가지를 먹기좋게 썰어주어요,저처럼 동글하게 썰어도 좋고, 손가락 만하게 썰어도 OK!</StepContent>
            </StepWrapper>
          </StepBox>
          </CookWrapper>
          <CookWrapper>
          <StepBox>
            <StepImg src='/images/음식.jpg'/>
            <StepWrapper>
              <Step>Step 1</Step>
              <StepContent>먼저 가지를 먹기좋게 썰어주어요,저처럼 동글하게 썰어도 좋고, 손가락 만하게 썰어도 OK!</StepContent>
            </StepWrapper>
          </StepBox>
          </CookWrapper>
        </CookingStep>
      
    );
};

const CookingStep = styled.div`
  width:1050px;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const CookWrapper = styled.div`
margin-top: 64px;
`;

const CookingTitle = styled.div`
font-weight: bold;
font-size: 24px;
 
`;
const StepBox = styled.div`
margin-top: 50px;
display: flex;
 
`;
const StepImg = styled.img`
 width: 380px;
 height: 380px;
 margin-right: 50px;
 object-fit: cover;
`;
const StepWrapper = styled.div`
 
`;
const Step = styled.div`
padding: 20px 0;
border-bottom: 1px solid #E6E4E1;
font-size: 28px;
font-weight: bold;
 
`;
const StepContent = styled.div`
font-size: 20px;
margin-top: 30px;
line-height: 30px;
 
`;
export default CookingSteps;