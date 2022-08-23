import React, { useState } from 'react';
import styled from 'styled-components';


const DetailComment = () => {

  const [input, setInput] = useState('');
  const [bChecked, setChecked] = useState(false);
  const [heartState,setHeartState] = useState(false);

const checkHandler = () => {
  setChecked(!bChecked);
};

const heartHandler = () => {
  setHeartState(!heartState)
};

const commentUpload = (input, bChecked) => {
  fetch(``, {
    method: 'POST',
    body: JSON.stringify({
      btnCheck: bChecked,
      input:input
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      if (data) {
      }
    });
};

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
              <HeartIcon  src= {heartState ? '/images/HeartRed.png': '/images/HeartGray.png'  } 
              onChange={heartHandler} onClick={()=>heartHandler}/>
              <HeartNum >100</HeartNum>
            </HeartIconBox>
            <ComIconBox>
              <ComIcon src='/images/TalkGray.png'/>
              <ComNum>100</ComNum>
            </ComIconBox>
          </CommentIconBox>
          <SubCommentBox>
            <SubCommentIcon src='/images/subCommentGray.png'/>
            <SubCommentWrapper>
            <InfoBox>
              <SubUserId>하이하이</SubUserId>
              <SubComment>저도 한번 만들어 먹어봐야 겠어요~!</SubComment>
            </InfoBox>
            <UpLoadBox>
              <CommentUpLoadInput/>
              <SubUpLoadBtn>등록</SubUpLoadBtn>
            </UpLoadBox>
            </SubCommentWrapper>
          </SubCommentBox>
        </CommentBox>
        <Upload>
        <LavelSelectBox>
          <CommentCheck type="checkbox" checked={bChecked} onChange={(e) => checkHandler(e)}/>  
          <Labels>질문</Labels>
          </LavelSelectBox>
          <WriteCommentBox>
            <CommentContainer id="story" name="story" rows="5" cols="33" value={input} onChange={e =>{
              setInput(e.target.value);
            }} placeholder="댓글내용을 입력하시오."/>
            <CommentBtn onClick={()=>{commentUpload()}}>등록</CommentBtn>
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

const SubCommentBox = styled.div`
display: flex;
margin-left: 84px;
margin-top: 30px;
`;

const SubCommentIcon = styled.img`
padding: 5px;
width:30px;
height:30px;
margin-right: 10px;
`;

const SubCommentWrapper = styled.img`
display: flex;
flex-direction: column;
`;
const InfoBox = styled.div`
padding: 10px;`;


const SubUserId = styled.p``;


const SubComment = styled.p``;


const UpLoadBox = styled.div``;


const CommentUpLoadInput = styled.input``;


const SubUpLoadBtn = styled.button``;


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
    display: flex;
    align-items: center;
`;

const CommentCheck= styled.input`
    width:  20px;
    height: 34px;
    padding: 7px;
    border: 1px solid #969696;
    border-radius: 50px;
    text-align: center;
    font-size: 16px;
    margin-right: 10px;
    color: black;
`;

const Labels = styled.label`
    font-size: 18px;
`;

const WriteCommentBox= styled.div`
display: flex;
justify-content: space-between;
`;

const CommentContainer= styled.textarea`
width: 900px;
height: 135px;
font-size: 18px;
font-weight: 500;
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