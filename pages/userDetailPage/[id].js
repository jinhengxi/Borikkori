import { useState, useEffect } from 'react';
import styled from 'styled-components'
import DetailPost from '../../components/userDetailCom/detailPost';
import DetailReview from '../../components/userDetailCom/detailReview';

import { BASE_URL } from '../../config';

const UserDetailPage = () => {
 
  const [categoryList, setCategoryList] = useState(true);
  
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch(`${BASE_URL}/user/${window.location.pathname.slice(-1)}/info`, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      setPosts(data.result);
      });
  }, []);


  const activeReview = () => {
    setCategoryList(true);
  };

  const activeRecipe = () => {
    setCategoryList(false);
  };


  return (
    
    <UserDetail>
      {posts && (
      <DetailWrapper>
      <ProfileBox>
          <ProfileImgWrapper>
  <ProfileImg src='/images/UserProfile.png'/>
  </ProfileImgWrapper>
  <ProfileTextBox>
  <UserId>{posts.name}</UserId>
  <LevelBox>
  <LevelLogo src={posts.rating_mark_image}/>
  <UserLevel>{posts.rating_name}</UserLevel>
  </LevelBox>
  </ProfileTextBox>
      </ProfileBox>
      <UserCategory>
  
       <UserRecipe active={categoryList} onClick={activeReview} >
      작성레시피({posts.recipe_count})
       </UserRecipe>
       <UserReview active={categoryList} onClick={activeRecipe}>
      작성후기({posts.review_count})
       </UserReview>
      </UserCategory>
    {categoryList=== true?  <DetailPost post={posts}/> : <DetailReview post={posts}/> }
      </DetailWrapper>
      )}
  
    </UserDetail>
  )
}

const UserDetail = styled.div`
display: flex;
justify-content: center;
width:1050px;
`;


const DetailWrapper = styled.div`
margin-top: 50px;
width:700px;
flex-wrap: wrap;
`;

const ProfileImgWrapper = styled.div`
`;

const ProfileBox = styled.div`
display: flex;
align-items: center;
`
const ProfileImg = styled.img`
width:100px;
height: 100px;
margin-right: 20px;
`;


const ProfileTextBox = styled.div`

`;

const UserId = styled.div`
font-size:24px ;
font-weight: bold;
`;

const LevelBox = styled.div`
display: flex;
margin-top:8px;

`;


const LevelLogo = styled.img`
width:16px;
height:16px;
border-radius: 100%;
margin-right:5px;
`;

const UserLevel = styled.div`
font-size: 15px;
color: rgb(150,150,150);


`;

const UserCategory = styled.div`
display: flex;
justify-content: center;
margin-top: 80px;
`;

const UserRecipe = styled.div`
width: 350px;
justify-content: center;
display: flex;
border-top: 2px solid ;
border-color : ${props => props.active === true ?    'rgb(182,154, 202)':'rgb(230, 228, 225)'};
padding:16px;
color: ${props => props.active === true ?  'rgb(182,154, 202)' : 'rgb(230, 228, 225)'  };
font-weight:bold;
cursor: pointer;
`;

const UserReview = styled.div`
width: 350px;
justify-content: center;
display: flex;
border-top: 2px solid ;
border-color : ${props => props.active  === false?  'rgb(182,154, 202)' : 'rgb(230, 228, 225)' };
padding:16px;
color: ${props => props.active  === false ?  'rgb(182,154, 202)' : 'rgb(230, 228, 225)' };
font-weight:bold;
cursor: pointer;
`;

export default UserDetailPage