import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  const router = useRouter();
  const BestRecipe = styled.span`
    cursor: pointer;
    color: ${router.pathname === '/bestRecipe' ? '#5f0080' : 'black'};
    border-bottom: ${router.pathname === '/bestRecipe'
      ? '1px solid #5f0080'
      : 'none'};
  `;
  const KurlyRecipe = styled.span`
    cursor: pointer;
    color: ${router.pathname === '/kurlyRecipe' ? '#5f0080' : 'black'};
    border-bottom: ${router.pathname === '/kurlyRecipe'
      ? '1px solid #5f0080'
      : 'none'};
  `;
  const UserRecipe = styled.span`
    cursor: pointer;
    color: ${router.pathname === '/UserRecipe' ? '#5f0080' : 'black'};
    border-bottom: ${router.pathname === '/UserRecipe'
      ? '1px solid #5f0080'
      : 'none'};
  `;
  const Review = styled.span`
    cursor: pointer;
    color: ${router.pathname === '/review' ? '#5f0080' : 'black'};
    border-bottom: ${router.pathname === '/review'
      ? '1px solid #5f0080'
      : 'none'};
  `;
  const KurlyTip = styled.span`
    cursor: pointer;
    color: ${router.pathname === '/kurlyTip' ? '#5f0080' : 'black'};
    border-bottom: ${router.pathname === '/kurlyTip'
      ? '1px solid #5f0080'
      : 'none'};
  `;
  return (
    <Navbar>
      <NavbarWrapper>
        <NavTopDiv>
          <UserDiv>
            <SignUp>회원가입 </SignUp>| 로그인 | 고객센터
            <svg
              width="9"
              height="8"
              viewBox="0 0 9 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.34415 6.67081C4.95133 7.28933 4.04867 7.28933 3.65585 6.67081L0.71242 2.03611C0.289602 1.37034 0.767889 0.5 1.55657 0.5L7.44343 0.500001C8.23211 0.500001 8.7104 1.37034 8.28758 2.03611L5.34415 6.67081Z"
                fill="#969696"
              />
            </svg>
          </UserDiv>
        </NavTopDiv>
        <NavMidDiv>
          <KurlyDiv>
            <KurlyLogo src="/images/borikkori.png" />
            <span>
              <Market>보리꼬리</Market> | 뷰티꼬리
            </span>
          </KurlyDiv>
          <SearchDiv>
            <SearchInput placeholder="검색어를 입력해 주세요." />
            <SearchIcon src="/images/Search.png" />
            <KirmuBtn onClick={() => router.push('/')}>커뮤니티</KirmuBtn>
          </SearchDiv>
          <IconDiv>
            <Icons>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6684 31.0483L17.985 31.7783L18.6684 31.0483ZM19.3319 31.0483L20.0153 31.7783L19.3319 31.0483ZM10.6587 15.4533C10.6587 12.9027 11.9556 11.3368 13.6599 10.3578C15.4137 9.35026 17.5641 9 19.0002 9V7C17.3224 7 14.8021 7.39507 12.6636 8.62356C10.4756 9.88049 8.65869 12.0413 8.65869 15.4533H10.6587ZM19.3519 30.3183C17.7964 28.862 15.5981 26.4616 13.7969 23.7344C11.9775 20.9796 10.6587 18.0338 10.6587 15.4533H8.65869C8.65869 18.6306 10.2433 21.9829 12.1281 24.8366C14.031 27.7179 16.3377 30.2361 17.985 31.7783L19.3519 30.3183ZM20.0153 31.7783C21.6627 30.2361 23.9693 27.7179 25.8723 24.8366C27.757 21.9829 29.3416 18.6306 29.3416 15.4533H27.3416C27.3416 18.0338 26.0228 20.9796 24.2034 23.7344C22.4022 26.4616 20.2039 28.862 18.6484 30.3183L20.0153 31.7783ZM29.3416 15.4533C29.3416 12.0413 27.5247 9.88049 25.3367 8.62356C23.1982 7.39507 20.6779 7 19.0002 7V9C20.4362 9 22.5867 9.35026 24.3405 10.3578C26.0447 11.3368 27.3416 12.9027 27.3416 15.4533H29.3416ZM17.985 31.7783C18.5569 32.3138 19.4434 32.3138 20.0153 31.7783L18.6484 30.3183C18.8456 30.1338 19.1548 30.1338 19.3519 30.3183L17.985 31.7783Z"
                  fill="#272626"
                />
                <circle
                  cx="19"
                  cy="17"
                  r="3"
                  stroke="#272626"
                  strokeWidth="2"
                />
              </svg>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0953 22.8059L12.8024 22.0988L12.8024 22.0988L12.0953 22.8059ZM20.7258 29.694L20.0026 29.0034L20.0026 29.0034L20.7258 29.694ZM27.6579 22.6331L28.3622 23.343V23.343L27.6579 22.6331ZM19.8703 30.5808L19.166 29.871L19.8703 30.5808ZM19.8701 30.5808L19.163 31.2879L19.8701 30.5808ZM20.4511 13.2225L19.564 12.761L20.4511 13.2225ZM14.3821 11C16.1394 11 17.3272 12.1753 18.089 13.6778L19.8729 12.7734C18.9544 10.9618 17.2281 9 14.3821 9V11ZM12.8024 22.0988C10.0545 19.3508 9.62863 16.5222 10.2512 14.4627C10.892 12.3433 12.6173 11 14.3821 11V9C11.5734 9 9.18246 11.0869 8.33682 13.884C7.47304 16.7411 8.19057 20.3153 11.3882 23.513L12.8024 22.0988ZM20.5772 29.8737L12.8024 22.0988L11.3882 23.513L19.163 31.2879L20.5772 29.8737ZM20.5747 31.2907C20.7525 31.1142 21.044 30.8088 21.449 30.3846L20.0026 29.0034C19.5859 29.4398 19.3194 29.7188 19.166 29.871L20.5747 31.2907ZM21.449 30.3846C22.5934 29.1862 24.7628 26.9144 28.3622 23.343L26.9535 21.9232C23.3364 25.5123 21.1533 27.7984 20.0026 29.0034L21.449 30.3846ZM28.3622 23.343C31.6349 20.0957 32.4111 16.5621 31.5263 13.7384C30.6571 10.9645 28.1937 9 25.3584 9V11C27.2349 11 28.9838 12.3131 29.6178 14.3364C30.2361 16.3099 29.8061 19.0928 26.9535 21.9232L28.3622 23.343ZM25.3584 9C22.3594 9 20.5232 10.9173 19.564 12.761L21.3382 13.6841C22.0966 12.2264 23.3721 11 25.3584 11V9ZM19.1516 31.2763C19.5114 31.648 20.1514 31.7107 20.5747 31.2907L19.166 29.871C19.5892 29.451 20.2291 29.5137 20.5889 29.8854L19.1516 31.2763ZM20.5946 31.2702C20.196 31.6891 19.5401 31.6776 19.1516 31.2763L20.5889 29.8854C20.2004 29.484 19.5444 29.4726 19.1458 29.8915L20.5946 31.2702ZM19.163 31.2879C19.5604 31.6854 20.2072 31.6773 20.5946 31.2702L19.1458 29.8915C19.5332 29.4844 20.1799 29.4764 20.5772 29.8737L19.163 31.2879ZM18.089 13.6778C18.4597 14.4088 19.2504 14.5783 19.7177 14.5767C20.1872 14.575 20.9658 14.3999 21.3382 13.6841L19.564 12.761C19.6328 12.6288 19.7251 12.5827 19.7398 12.576C19.7556 12.5689 19.7444 12.5765 19.7106 12.5767C19.6767 12.5768 19.6678 12.5691 19.6872 12.5779C19.7065 12.5865 19.8033 12.6362 19.8729 12.7734L18.089 13.6778Z"
                  fill="#272626"
                />
              </svg>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9H10.0357C10.2975 9 10.515 9.20197 10.5343 9.46306L10.7222 12M10.7222 12L12.4295 22.0835C12.4702 22.324 12.6785 22.5 12.9225 22.5H27.1396C27.3548 22.5 27.5459 22.3623 27.614 22.1581L30.7806 12.6581C30.8886 12.3343 30.6476 12 30.3063 12H10.7222Z"
                  stroke="#272626"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle
                  cx="15.5"
                  cy="28.5"
                  r="2"
                  stroke="#272626"
                  strokeWidth="2"
                />
                <circle
                  cx="24.5"
                  cy="28.5"
                  r="2"
                  stroke="#272626"
                  strokeWidth="2"
                />
              </svg>
            </Icons>
          </IconDiv>
        </NavMidDiv>
        <NavBotDiv>
          <CategoryDiv>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 15H26.5"
                stroke="#272626"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M13 26H26.5"
                stroke="#272626"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M13 20H26.5"
                stroke="#272626"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>카테고리</span>
          </CategoryDiv>
          <MenuDiv>
            <BestRecipe onClick={() => router.push('/bestRecipe')}>
              베스트
            </BestRecipe>
            <KurlyRecipe onClick={() => router.push('/kurlyRecipe')}>
              컬리의레시피
            </KurlyRecipe>
            <UserRecipe onClick={() => router.push('/UserRecipe')}>
              회원 레시피
            </UserRecipe>
            <Review onClick={() => router.push('/review')}>리뷰</Review>
            <KurlyTip onClick={() => router.push('/kurlyTip')}>컬리팁</KurlyTip>
          </MenuDiv>
          <DeliveryBtn>샛별/낯 배송안내</DeliveryBtn>
        </NavBotDiv>
      </NavbarWrapper>
    </Navbar>
  );
};

export default Nav;

const Navbar = styled.div`
  width: 100%;
`;

const NavbarWrapper = styled.div`
  width: 100%;
  height: 144.5px;
  border-bottom: 1px solid rgb(220 220 220);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 6px -6px #f5f5f5;
`;

const NavTopDiv = styled.div`
  width: 1050px;
  height: 42px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const UserDiv = styled.div`
  width: 175px;
  font-size: 13px;
  color: rgb(149 151 149);
`;

const SignUp = styled.span`
  font-weight: bold;
  color: rgb(131 0 128);
`;

const Market = styled.span`
  color: #5f0080;
  font-weight: bold;
`;

const NavMidDiv = styled.div`
  width: 1050px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const KurlyDiv = styled.div`
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const KurlyLogo = styled.img`
  width: 120px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 10px;
`;

const SearchDiv = styled.div`
  width: 481px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icons = styled.div``;

const NavBotDiv = styled.div`
  width: 1050px;
  height: 57.5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  position: relative;
  padding: 14px;
  width: 367px;
  height: 45px;
  border: 1px solid #5f0080;
  border-radius: 4px;
`;

const SearchIcon = styled.img`
  position: relative;
  width: 18px;
  height: 18px;
  right: 35px;
`;

const KirmuBtn = styled.button`
  color: #5f0080;
  font-weight: bold;
  background-color: #ffffff;
  border: 1px solid #e6e4e1;
  border-radius: 15px;
  width: 90px;
  height: 31px;
`;

const CategoryDiv = styled.div`
  width: 102px;
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

const MenuDiv = styled.div`
  width: 514px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: bold;

  span {
    cursor: pointer;
    &:hover {
      color: #5f0080;
      border-bottom: 1px solid #5f0080;
    }
  }
`;

const DeliveryBtn = styled.button`
  color: #5f0080;
  font-weight: bold;
  background-color: #ffffff;
  border: 1px solid #e6e4e1;
  border-radius: 15px;
  width: 120px;
  height: 28px;
`;
