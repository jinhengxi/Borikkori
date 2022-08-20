import React from 'react';
import styled from 'styled-components';

const bestRecipe = () => {
  return (
    <>
      <BestWrapper>
        <BestTitle>BEST</BestTitle>
        <BestImgWrapper>
          <BestImgDiv></BestImgDiv>
          <BestImgDiv>
            <BestImgRightFirstDiv></BestImgRightFirstDiv>
            <BestImgRightSecondDiv></BestImgRightSecondDiv>
          </BestImgDiv>
          <BestImgDiv>
            <BestImgLeftFirstDiv>
              <BestImgLeftFirstFirstDiv></BestImgLeftFirstFirstDiv>
              <BestImgLeftFirstSecondDiv></BestImgLeftFirstSecondDiv>
            </BestImgLeftFirstDiv>
            <BestImgLeftSecondDiv></BestImgLeftSecondDiv>
          </BestImgDiv>
          <BestImgDiv></BestImgDiv>
        </BestImgWrapper>
      </BestWrapper>
    </>
  );
};

export default bestRecipe;

const BestWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BestTitle = styled.h1`
  margin: 29px 0;
  font-size: 24px;
`;

const BestImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const BestImgDiv = styled.div`
  width: 470px;
  height: 470px;
  margin: 10px;
  border: 1px solid black;
`;

const BestImgRightFirstDiv = styled.div`
  width: 470px;
  height: 225px;
  margin-bottom: 20px;
  border: 1px solid black;
`;

const BestImgRightSecondDiv = styled.div`
  width: 470px;
  height: 225px;
  border: 1px solid black;
`;

const BestImgLeftFirstDiv = styled.div`
  width: 470px;
  height: 225px;
  margin-bottom: 20px;
  border: 1px solid black;
  display: flex;
`;

const BestImgLeftFirstFirstDiv = styled.div`
  width: 225px;
  height: 225px;
  margin-right: 20px;
  border: 1px solid black;
`;

const BestImgLeftFirstSecondDiv = styled.div`
  width: 225px;
  height: 225px;
  border: 1px solid black;
`;

const BestImgLeftSecondDiv = styled.div`
  width: 470px;
  height: 225px;
  border: 1px solid black;
`;
