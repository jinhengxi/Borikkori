import React from 'react';
import styled from 'styled-components';

const CookingSteps = ({ posts }) => {
  return (
    <Container>
      {posts?.map((post, i) => (
        <CookingStep key={i}>
          <CookingTitle>Cooking steps</CookingTitle>
          <CookWrapper>
            <StepBox>
              <StepImg src={post.image} />
              <StepWrapper>
                <Step>Step {post.step}</Step>
                <StepContent>{post.content}</StepContent>
              </StepWrapper>
            </StepBox>
          </CookWrapper>
        </CookingStep>
      ))}
    </Container>
  );
};

const Container = styled.div`
`

const CookingStep = styled.div`
  width: 1050px;
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
const StepWrapper = styled.div``;
const Step = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #e6e4e1;
  font-size: 28px;
  font-weight: bold;
`;
const StepContent = styled.div`
  font-size: 20px;
  margin-top: 30px;
  line-height: 30px;
`;
export default CookingSteps;
