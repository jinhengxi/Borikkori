import React from 'react';
import styled from 'styled-components';


const DetailComment = () => {
    return (
        <Comment>
        <CommentTitle></CommentTitle>
        <CommentBox>
          <CommentImg></CommentImg>
          <CommentTextBox>
            <Lavel></Lavel>
            <UserId></UserId>
            <Date></Date>
          </CommentTextBox>
          <CommentContent>
            댓글내용
          </CommentContent>
          <CommentIconBox>
            <HeartIconBox>
              <HeartIcon></HeartIcon>
              <HeartNum></HeartNum>
            </HeartIconBox>
            <ComIconBox>
              <ComIcon></ComIcon>
              <ComNum></ComNum>
            </ComIconBox>
          </CommentIconBox>
          <LavelSelectBox>
            <LavelSelect></LavelSelect>
          </LavelSelectBox>
          <WriteCommentBox>
            <CommentContainer></CommentContainer>
            <CommentBtn></CommentBtn>
          </WriteCommentBox>
        </CommentBox>
      </Comment>
    );
};

export default DetailComment;