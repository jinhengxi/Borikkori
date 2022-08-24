import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://10.58.5.197:8000/user/${params?.id}/wrecipe`);
  const post = await res.json();
  return { props: { post } };
};


const DetailReview = ({post}) => {
  const [userDetailPost, setUserDetailPost] = useState();

  useEffect(() => {
    fetch(`http://10.58.5.197:8000/user/${post.id}/wreview`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setUserDetailPost(data);
      });
  }, []);

  return (
    <UserPostWrapper>
      {userDetailPost?.map(({ id, title, content, itemImg, date }) => (
        <UserPostCard key={id}>
          <UserPostImg src={itemImg} />
          <PostDetailWrapper>
            <PostTitle>{title}</PostTitle>
            <PostContent>{content}</PostContent>
            <PostDate>{date}</PostDate>
          </PostDetailWrapper>
        </UserPostCard>
      ))}
      {/* <UserPostCard >
 <UserPostImg src='/images/음식2.jpeg'/>
 <PostDetailWrapper>
     <PostTitle>[후기]안동찜닭 황금레시피</PostTitle>
     <PostContent>닭볶음탕도 너무 좋지만 아이와 함께 먹기에는 찜닭이 최고지요!</PostContent>
     <PostDate>2022.08.19</PostDate>
 </PostDetailWrapper>
 </UserPostCard>
 <UserPostCard >
 <UserPostImg src='images/음식2.jpeg'/>
 <PostDetailWrapper>
     <PostTitle>[후기]안동찜닭 황금레시피</PostTitle>
     <PostContent>닭볶음탕도 너무 좋지만 아이와 함께 먹기에는 찜닭이 최고지요!</PostContent>
     <PostDate>2022.08.19</PostDate>
 </PostDetailWrapper>
 </UserPostCard>
 <UserPostCard >
 <UserPostImg src='images/음식2.jpeg'/>
 <PostDetailWrapper>
     <PostTitle>[후기]안동찜닭 황금레시피</PostTitle>
     <PostContent>닭볶음탕도 너무 좋지만 아이와 함께 먹기에는 찜닭이 최고지요!</PostContent>
     <PostDate>2022.08.19</PostDate>
 </PostDetailWrapper>
 </UserPostCard>
 <UserPostCard >
 <UserPostImg src='images/음식2.jpeg'/>
 <PostDetailWrapper>
     <PostTitle>[후기]안동찜닭 황금레시피</PostTitle>
     <PostContent>닭볶음탕도 너무 좋지만 아이와 함께 먹기에는 찜닭이 최고지요!</PostContent>
     <PostDate>2022.08.19</PostDate>
 </PostDetailWrapper>
 </UserPostCard> */}
    </UserPostWrapper>
  );
};

const UserPostWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const UserPostCard = styled.div`
  margin-top: 50px;
  width: 330px;
`;
const UserPostImg = styled.img`
  width: 330px;
  height: 330px;
`;
const PostDetailWrapper = styled.div`
  margin: 10px 0;
`;
const PostTitle = styled.div`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bold;
`;

const PostContent = styled.div`
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 400;
`;
const PostDate = styled.div`
  font-size: 12;
  color: #969696;
`;
export default DetailReview;