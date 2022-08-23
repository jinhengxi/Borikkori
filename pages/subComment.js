import React, { useState } from 'react';
import styled from 'styled-components';

const SubComment = ({ subCommentDataList, commentId }) => {
  const [subInput, setSubInput] = useState();

  //대댓글 POST
  const subCommentAction = subInput => {
    fetch(`http://10.58.5.197:8000/reipe/detail/5/recomment/${commentId}`, {
      method: 'POST',
      body: JSON.stringify({
        content: subInput,
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

  const DeleteSubComment = id => {
    fetch(``, {
      method: 'DELETE',
      headers: { Authorization: localStorage.getItem('token') },
    }).then(() => {
      alert('삭제 되었습니다.');
    });
  };

  return (
    <SubWrapper>
      {subCommentDataList?.map(({ id, user_name, content }) => (
        <SubCommentBox key={id}>
          <SubCommentIcon src="/images/subCommentGray.png" />
          <SubCommentWrapper>
            <InfoBox>
              <SubUserId>{user_name}</SubUserId>
              <CommentAndDeleteBox>
                <SubComments>{content}</SubComments>
                {localStorage.getItem('token') ? (
                  <DeleteBtn
                    src="/images/DeleteGray.png"
                    onClick={() => DeleteSubComment()}
                  />
                ) : (
                  ''
                )}
              </CommentAndDeleteBox>
            </InfoBox>
          </SubCommentWrapper>
        </SubCommentBox>
      ))}
      <UpLoadBox onSubmit={() => subCommentAction()}>
        {localStorage.getItem('token') ? (
          <CommentUpLoadInput
            value={subInput}
            onChange={e => {
              setSubInput(e.target.value);
            }}
          />
        ) : (
          <CommentUpLoadInput
            placeholder="댓글을 작성하려면 로그인하세요."
            disabled="disabled"
            value={subInput}
          />
        )}
        {localStorage.getItem('token') ? (
          <SubUpLoadBtn type="submit">등록</SubUpLoadBtn>
        ) : (
          <SubUpLoadBtn type="submit" disabled="disabled">
            등록
          </SubUpLoadBtn>
        )}
      </UpLoadBox>
    </SubWrapper>
  );
};

const SubWrapper = styled.div``;

const SubCommentBox = styled.div`
  display: flex;
  margin-left: 84px;
  margin-top: 30px;
`;

const SubCommentIcon = styled.img`
  padding: 5px;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const SubCommentWrapper = styled.div``;

const InfoBox = styled.div``;

const CommentAndDeleteBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 650px;
  align-items: center;
`;

const SubUserId = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 6px 0;
`;

const SubComments = styled.p`
  margin: 15px 0 25px 0;
  font-size: 20px;
`;

const DeleteBtn = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
const UpLoadBox = styled.form`
  display: flex;
  margin-left: 84px;
  margin-top: 30px;
`;

const CommentUpLoadInput = styled.input`
  width: 599px;
  height: 50px;
  border-radius: 3px;
  padding: 15px;
  border-style: none;
  background-color: #f7f7f7;
  border-radius: 3px;
  font-size: 20px;
`;

const SubUpLoadBtn = styled.button`
  width: 90px;
  height: 50px;
  margin-left: 15px;
  background-color: #b5b5b5;
  border-style: none;
  border-radius: 3px;
  color: white;
  font-weight: bold;
  :hover {
    background-color: rgb(150, 150, 150);
  }
`;

export default SubComment;
