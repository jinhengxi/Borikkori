import { useState} from 'react';
import styled from 'styled-components'
import DetailPost from './detailPost';
import DetailReview from './detailReview';


function UserDetailPage () {
    const [catagoryList,setCatagoryList] = useState(1);
  
    const list = {
        1:   <DetailPost/>,
        2:  <DetailReview/>
      };


  return (
    <UserDetail>
        <DetailWrapper>
    <ProfileBox>
        <ProfileImgWrapper>
<ProfileImg src='/images/UserProfile.png'/>
</ProfileImgWrapper>
<ProfileTextBox>
<UserId>보리꼬리</UserId>
<LevelBox>
<LevelLogo src='/images/LevelPurple.png'/>
<UserLevel>더퍼플</UserLevel>
</LevelBox>
</ProfileTextBox>
    </ProfileBox>
    <UserCategory>
        {CATAGORY_LIST.map(({id, title})=>(
            <UserRecipe key={id}
            onClick={() => setCatagoryList(id)}
            active={catagoryList === id}
            >{title}</UserRecipe>
        ))}
    
    </UserCategory>
  {list[catagoryList]}
    </DetailWrapper>
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
border-color : ${props => props.active? 'rgb(182,154, 202)' : 'rgb(230, 228, 225)'};
padding:16px;
color: ${props => props.active? 'rgb(182,154, 202)' : 'rgb(230, 228, 225)'};
font-weight:bold;
`;


const CATAGORY_LIST = [
    {
      id: 1,
      title: '작성 레시피',
    },
    {
      id: 2,
      title: '작성 후기',
    },
]
export default UserDetailPage