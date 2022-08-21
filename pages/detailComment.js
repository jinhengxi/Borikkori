import React from 'react';
import styled from 'styled-components';


const DetailComment = () => {
    return (
        <Comment>
        <CommentTitles>Comment</CommentTitles>
        <CommentBox>      
          <CommentTop>
          <CommentImg src='/images/프로필.png'/>
          <CommentTextBox>
            <Left>
            <Lavel>댓글</Lavel>
            <UserId>ssssssscscs</UserId>
            </Left>
            <Date>2022.05.09</Date>
          </CommentTextBox>
          </CommentTop>
          <CommentContent>
          닭 2마리해서 모든 양을 두배로 해보았어요. 제가 종이컵 1개를 200ml로 착각해서 국물이 너무 많았어요~ 중간에 좀 덜어놓고 했는데 그래서인지 살짝 싱거웠네요. 닭육질은 너무 부드러웠습니다. 닭 1마리 정량으로 조만간 다시 시도해볼 예정입니다. 맛있는 레시피 감사합니다 ^^ 
          </CommentContent>
          <CommentIconBox>
            <HeartIconBox>
              <HeartIcon src='/images/HeartGray.png'/>
              <HeartNum>100</HeartNum>
            </HeartIconBox>
            <ComIconBox>
              <ComIcon src='/images/TalkGray.png'/>
              <ComNum>100</ComNum>
            </ComIconBox>
          </CommentIconBox>
        </CommentBox>
        <CommentBox>      
          <CommentTop>
          <CommentImg src='/images/프로필.png'/>
          <CommentTextBox>
            <Left>
            <Lavel>댓글</Lavel>
            <UserId>ssssssscscs</UserId>
            </Left>
            <Date>2022.05.09</Date>
          </CommentTextBox>
          </CommentTop>
          <CommentContent>
          닭 2마리해서 모든 양을 두배로 해보았어요. 제가 종이컵 1개를 200ml로 착각해서 국물이 너무 많았어요~ 중간에 좀 덜어놓고 했는데 그래서인지 살짝 싱거웠네요. 닭육질은 너무 부드러웠습니다. 닭 1마리 정량으로 조만간 다시 시도해볼 예정입니다. 맛있는 레시피 감사합니다 ^^ 
          </CommentContent>
          <CommentIconBox>
            <HeartIconBox>
              <HeartIcon src='/images/HeartGray.png'/>
              <HeartNum>100</HeartNum>
            </HeartIconBox>
            <ComIconBox>
              <ComIcon src='/images/TalkGray.png'/>
              <ComNum>100</ComNum>
            </ComIconBox>
          </CommentIconBox>
        </CommentBox>
        <Upload>
        <LavelSelectBox>
          <ComSelecter>  
            <option value="댓글">댓글</option>
             <option value="질문">질문</option>
          </ComSelecter>
          </LavelSelectBox>
          <WriteCommentBox>
            <CommentContainer id="story" name="story"
          rows="5" cols="33" placeholder='댓글내용을 입력하시오.'>
           </CommentContainer>
            <CommentBtn>등록</CommentBtn>
          </WriteCommentBox>
          </Upload>
      </Comment>
    );
};

const Comment = styled.div`
  width:1050px;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const CommentTitles= styled.div`
font-weight: bold;
font-size: 24px;
margin-bottom: 50px;
`;


const CommentBox= styled.div`
margin-top: 30px;
margin-bottom: 30px;
`;


const CommentTop= styled.div`
display: flex;
width: 100%;
`;

const CommentImg= styled.img`
width: 64px;
height: 64px;
border-radius: 100%;
cursor: pointer;
`;

const CommentTextBox= styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;


`;

const Left= styled.div`
display: flex;
align-items: center;
`;

const Lavel= styled.div`
    width: 66px;
    height: 34px;
    padding: 7px;
    border: 1px solid #969696;
    border-radius: 50px;
    text-align: center;
    font-size: 16px;
    margin-right: 10px;
    color: #969696;
`;

const UserId= styled.div`
font-size: 20px;
font-weight: bold;
`;

const Date= styled.div`
font-size: 20px;
color: #969696;
`;

const CommentContent= styled.div`
margin-left: 84px;
font-size: 20px;
line-height: 28px;
`;

const CommentIconBox= styled.div`
display: flex;
margin-left: 84px;
margin-top: 30px;

`;

const HeartIconBox= styled.div`
display: flex;
align-items: center;
margin-right: 30px;

`;

const HeartIcon= styled.img`
width: 26px;
height: 26px;
cursor: pointer;
`;

const HeartNum= styled.div`
margin-left: 10px;
`;

const ComIconBox= styled.div`
display: flex;
align-items: center;


`;

const ComIcon= styled.img`
width: 26px;
height: 26px;
cursor: pointer;
`;

const ComNum= styled.div`
margin-left: 10px;
`;

const Upload= styled.div`

`;

const LavelSelectBox= styled.div`

`;

const ComSelecter= styled.select`
   width: 80px;
    height: 34px;
    padding: 7px;
    border: 1px solid #969696;
    border-radius: 50px;
    text-align: center;
    font-size: 16px;
    margin-right: 10px;
    color: black;
`;



const WriteCommentBox= styled.div`
margin-top: 30px;
display: flex;
justify-content: space-between;
`;

const CommentContainer= styled.textarea`
width: 900px;
height: 135px;
font-size: 18px;
font-weight: 400;
padding: 18px;
border-style: none;
background-color: #F7F7F7;
border-radius: 3px;
:focus {
    background-color: white;
    border-style: none;
    transition: all 0.3s ease-out;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.08);
  }
  :focus::-webkit-input-placeholder {
    color: transparent;
  }
  :focus:-moz-placeholder {
    color: transparent;
  }
  :focus::-moz-placeholder {
    color: transparent;
  }
`;


const CommentBtn = styled.button`
height: 135px;
width: 130px;
background-color: #B69ACA;
border-style: none;
color: white;
font-size: 16px;
font-weight: bold;
border-radius: 3px;
`;



export default DetailComment;