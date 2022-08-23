import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import SubComment from './subComment';


const DetailComment = () => {

  const [commentDataList,setCommentDataList] = useState();  
  useEffect(() => {
    fetch('data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentDataList(data.result);
      });
  }, []);

;


  const [input, setInput] = useState('');
  const [bChecked, setChecked] = useState(false);
  const [heartState,setHeartState] = useState(false);
  const [talk,setTalk] = useState(false);
  const [heartId, setHeartId] = useState();
  const [commentId, setCommentId] = useState();
  // const [talkToggle, setTalkToggle] = useState(); 


const checkHandler = () => {
  setChecked(!bChecked);
};

const heartHandler = (id)=> {
  setHeartState(!heartState)
  setHeartId(id)
};


const talkHandler = (id) => {
  setTalk(!talk)
  setCommentId(id)
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

//좋아요 POST
// const likeAction = ( xx) => {
//   fetch(``, {
//     method: 'POST',
//     body: JSON.stringify({
//       likeAction:xx
//     }),
//   })
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       }
//     })
//     .then((data) => {
//       if (data) {
//       }
//     });
// };

//대댓글 
// const commentAction = ( xx) => {
//   fetch(``, {
//     method: 'POST',
//     body: JSON.stringify({
//       likeAction:xx
//     }),
//   })
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       }
//     })
//     .then((data) => {
//       if (data) {
//       }
//     });
// };


    return (
      <CommentWrapper>
        {commentDataList &&  <Comment>
        <CommentTitles>Comment</CommentTitles>
       
        <CommentBox> 
          {commentDataList?.map(({id,user_name,user_thumbnail,content,created_at,tag,liked})=>(
             <ComWrap key={id}>
               <CommentTop>
               <CommentImg src={user_thumbnail}/>
               <CommentTextBox>
                 <Left>
                  { tag ? <Lavel2>질문</Lavel2> : <Lavel>댓글</Lavel> }
                 <UserId>{user_name}</UserId>
                 </Left>
                 <Date>{created_at}</Date>
               </CommentTextBox>
               </CommentTop>
               <CommentContent>
              {content}
               </CommentContent> 
               <CommentIconBox>
                 <HeartIconBox>
                   <HeartIcon src= {liked ? '/images/HeartPurple.png': '/images/HeartGray.png'  } 
                    onClick={ () => { heartHandler(id) } }
                    />
                   <HeartNum>100</HeartNum>
                 </HeartIconBox>
                 <ComIconBox>
                   <ComIcon  value={talk} src={id === commentId ?'/images/TalkBlue.png' : '/images/TalkGray.png' } onClick={()=>{ talkHandler(id);}}/>
                   <ComNum>100</ComNum>
                 </ComIconBox>
               </CommentIconBox>
               {id === commentId ?  <SubComment/>: '' }
               </ComWrap>
          ))}     
       
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
      </Comment>}
       
      </CommentWrapper>
    );
};

const CommentWrapper = styled.div``;

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

const ComWrap= styled.div`

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

const Lavel2= styled.div`
    width: 66px;
    height: 34px;
    padding: 7px;
    border: 1px solid #5F0080;
    border-radius: 50px;
    text-align: center;
    font-size: 16px;
    margin-right: 10px;
    color: #5F0080;
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
:hover{
  background-color: #B78FD5;
}
`;


export default DetailComment;