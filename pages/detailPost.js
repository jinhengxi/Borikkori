import { useState,useEffect } from 'react';
import styled from 'styled-components'

const DetailPost = () => {
  
    const [userDetailPost, setUserDetailPost] = useState();

    useEffect(() => {
        fetch('data/UserDetailData.json', {
          method: 'GET',
        })
          .then(res => res.json())
          .then(data => {
            setUserDetailPost(data);
          });
      }, []);


  return (
    <UserPostWrapper> 
 {userDetailPost?.map(({id,title,content,itemImg,date})=>(
 <UserPostCard key={id}>
 <UserPostImg src={itemImg}/>
 <PostDetailWrapper>
     <PostTitle>{title}</PostTitle>
     <PostContent>{content}</PostContent>
     <PostDate>{date}</PostDate>
 </PostDetailWrapper>
 </UserPostCard>
    ))} 
    </UserPostWrapper>
  )
}

const UserPostWrapper = styled.div`
width:100%;
display: flex;
flex-wrap: wrap;
justify-content:space-between;
margin-bottom: 100px;
`;

const UserPostCard = styled.div`
margin-top: 50px;
width: 330px;
cursor: pointer;
`;

const UserPostImg = styled.img`
width:330px;
height:330px;
`;

const PostDetailWrapper = styled.div`
margin:10px 0;
`;

const PostTitle = styled.div`
margin-bottom: 15px;
font-size: 20px;
font-weight: bold;
`;

const PostContent = styled.div`
margin-bottom: 12px;
font-size:16px;
font-weight: 400;
line-height: 25px;
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;
`;

const PostDate = styled.div`
font-size: 12;
color: #969696;
`;

export default DetailPost