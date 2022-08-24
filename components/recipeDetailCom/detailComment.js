import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SubComment from './subComment';

const DetailComment = () => {
  const [commentDataList, setCommentDataList] = useState();
  const [subCommentDataList, setSubCommentDataList] = useState();
  const [input, setInput] = useState('');
  const [bChecked, setChecked] = useState(false);
  const [heartState, setHeartState] = useState(false);
  const [talk, setTalk] = useState(false);
  const [heartId, setHeartId] = useState();
  const [commentId, setCommentId] = useState();


  const checkHandler = () => {
    setChecked(!bChecked);
  };

  const heartHandler = id => {
    setHeartState(!heartState);
    setHeartId(id);
  };

  const talkHandler = id => {
    setTalk(!talk);
    setCommentId(id);
  };

  //댓글GET
  useEffect(() => {
    fetch(`http://10.58.5.197:8000/recipe/detail/${post.id}/comment`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentDataList(data.result);
      });
  }, []);


  useEffect(() => {
    fetch(`http://10.58.5.197:8000/recipe/detail/${post.id}/recomment/${commentId}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setSubCommentDataList(data.result);
      });
  }, [setTalk, commentId]);

//POST 댓글업로드
const commentUpload = (input, bChecked) => {
  fetch(`http://10.58.5.197:8000/recipe/detail/${post.id}/commnet`, {
    method: 'POST',
    body: JSON.stringify({
      tag: bChecked,
      content: input,
    }),
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(data => {
      if (data) {
      }
    });
  
  }

// const CommentCheck = (commentId) => {
//   fetch(``, {
//     method: 'POST',
//     body: JSON.stringify({
//       tag: bChecked,
//       content:commentId
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
  //POST 좋아요
  const likeAction = id  => {
    fetch(`http://10.58.5.197:8000/recipe/${post.id}/comment/${id}/like`, {
      method: 'POST',
      body: JSON.stringify({
        likeAction: heartState,
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        if (data) {
        }
      });
  };

  const DeleteComment = id => {
    fetch(``, {
      method: 'DELETE',
      headers: { Authorization: localStorage.getItem('token') },
    }).then(() => {
      alert('삭제 되었습니다.');
    });
  };

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:8080/todos/${id}`, {
  //       headers: { Authorization: localStorage.getItem("token") },
  //     });
  //     alert("삭제완료");
  //   } catch (error) {
  //     alert(error);
  //   }
  // };
  return (
    <CommentWrapper>
      {commentDataList && (
        <Comment>
          <CommentTitles>Comment</CommentTitles>

          <CommentBox>
            {commentDataList?.map(
              ({
                id,
                user_name,
                user_thumbnail,
                content,
                created_at,
                tag,
                liked,
                recipe_comment_like,
                counter,
              }) => (
                <ComWrap key={id}>
                  <CommentTop>
                    <CommentImg src={user_thumbnail} />
                    <CommentTextBox>
                      <Left>
                        {tag ? <Lavel2>질문</Lavel2> : <Lavel>댓글</Lavel>}
                        <UserId>{user_name}</UserId>
                      </Left>
                      <Date>{created_at}</Date>
                    </CommentTextBox>
                  </CommentTop>
                  <CommentAndDeleteBox>
                    <CommentContent>{content}</CommentContent>
                    {localStorage.getItem('token') ? (
                      <DeleteBtn
                        src="/images/DeleteGray.png"
                        onClick={() => DeleteComment()}
                      />
                    ) : (
                      ''
                    )}
                  </CommentAndDeleteBox>
                  <CommentIconBox>
                    <HeartIconBox>
                      {localStorage.getItem('token') ? (
                        <HeartIcon
                          src={
                            liked
                              ? '/images/HeartPurple.png'
                              : '/images/HeartGray.png'
                          }
                          onClick={() => {
                            heartHandler(id);
                          }}
                        />
                      ) : (
                        <HeartIcon
                          src="/images/HeartGray.png"
                          onClick={() => {
                            heartHandler(id);
                            likeAction(id);
                          }}
                        />
                      )}

                      <HeartNum>{recipe_comment_like}</HeartNum>
                    </HeartIconBox>
                    <ComIconBox>
                      <ComIcon
                        value={talk}
                        src={
                          id === commentId && talk === true
                            ? '/images/TalkBlue.png'
                            : '/images/TalkGray.png'
                        }
                        onClick={() => {
                          talkHandler(id);
                        }}
                      />
                      <ComNum>{counter}</ComNum>
                    </ComIconBox>
                  </CommentIconBox>
                  {id === commentId && talk === true ? (
                    <SubComment
                      subCommentDataList={subCommentDataList}
                      commentId={commentId}
                    />
                  ) : (
                    ''
                  )}
                </ComWrap>
              )
            )}
          </CommentBox>
          <Upload>
            <LavelSelectBox>
              {localStorage.getItem('token') ? (
                <CommentCheck
                  type="checkbox"
                  checked={bChecked}
                  onChange={e => checkHandler(e)}
                />
              ) : (
                <CommentCheck
                  type="checkbox"
                  disabled="disabled"
                  checked={bChecked}
                  onChange={e => checkHandler(e)}
                />
              )}

              <Labels>질문</Labels>
            </LavelSelectBox>
            <WriteCommentBox onSubmit={() => commentUpload()}>
              {!localStorage.getItem('token') ? (
                <CommentContainer
                  id="story"
                  name="story"
                  rows="5"
                  cols="33"
                  value={input}
                  onChange={e => {
                    setInput(e.target.value);
                  }}
                  placeholder="댓글내용을 입력하세요."
                />
              ) : (
                <CommentContainer
                  id="story"
                  name="story"
                  rows="5"
                  cols="33"
                  disabled="disabled"
                  value={input}
                  placeholder="댓글을 작성하려면 로그인하세요."
                />
              )}
              {!localStorage.getItem('token') ? (
                <CommentBtn type="submit">등록</CommentBtn>
              ) : (
                <CommentBtn type="submit" disabled="disabled">
                  등록
                </CommentBtn>
              )}
            </WriteCommentBox>
          </Upload>
        </Comment>
      )}
    </CommentWrapper>
  );
};

const CommentWrapper = styled.div``;

const Comment = styled.div`
  width: 1050px;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const CommentTitles = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 50px;
`;

const ComWrap = styled.div`
  margin-top: 20px;
`;

const CommentBox = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const CommentTop = styled.div`
  display: flex;
  width: 100%;
`;

const CommentImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  cursor: pointer;
`;

const CommentAndDeleteBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CommentTextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const DeleteBtn = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const Lavel = styled.div`
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

const Lavel2 = styled.div`
  width: 66px;
  height: 34px;
  padding: 7px;
  border: 1px solid #5f0080;
  border-radius: 50px;
  text-align: center;
  font-size: 16px;
  margin-right: 10px;
  color: #5f0080;
`;
const UserId = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Date = styled.div`
  font-size: 20px;
  color: #969696;
`;

const CommentContent = styled.div`
  margin-left: 84px;
  font-size: 20px;
  line-height: 28px;
  width: 850px;
`;

const CommentIconBox = styled.div`
  display: flex;
  margin-left: 84px;
  margin-top: 30px;
`;

const HeartIconBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

const HeartIcon = styled.img`
  width: 26px;
  height: 26px;
  cursor: pointer;
`;

const HeartNum = styled.div`
  margin-left: 10px;
`;

const ComIconBox = styled.div`
  display: flex;
  align-items: center;
`;

const ComIcon = styled.img`
  width: 26px;
  height: 26px;
  cursor: pointer;
`;

const ComNum = styled.div`
  margin-left: 10px;
`;

const Upload = styled.div``;

const LavelSelectBox = styled.div`
  display: flex;
  align-items: center;
`;

const CommentCheck = styled.input`
  width: 20px;
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

const WriteCommentBox = styled.form`
  display: flex;
  justify-content: space-between;
`;

const CommentContainer = styled.textarea`
  width: 900px;
  height: 135px;
  font-size: 18px;
  font-weight: 500;
  padding: 18px;
  border-style: none;
  background-color: #f7f7f7;
  border-radius: 3px;
  resize: none;
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
  background-color: #b69aca;
  border-style: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 3px;
  :hover {
    background-color: #b78fd5;
  }
`;

export default DetailComment;
