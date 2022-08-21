import React from 'react';
import styled from 'styled-components';

const CookingSteps = () => {
    return (
        <CookingSteps>
          <CookingTitle></CookingTitle>
          <StepBox>
            <StepImg></StepImg>
            <StepWrapper>
              <Step></Step>
              <StepContent></StepContent>
            </StepWrapper>
          </StepBox>
        </CookingSteps>
    );
};

export default CookingSteps;