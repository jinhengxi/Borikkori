import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';

import { BASE_URL } from '../../config';

function RecipeItem({ handRecipeItem, recipeItem }) {
  const [isModal, setIsModal] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchData, setSearchData] = useState();
  const [selectItem, setSelectItem] = useState('');
  
  const handleModalOn = () => {
    setIsModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleModalOff = ()=>{
    setIsModal(false)
    document.body.style.overflow = 'unset';
    setSearchText('');
    setSearchData('');
  };

  const handleSearch = e => {
    setSearchText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    fetch(`${BASE_URL}/product/list?search=${searchText}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setSearchData(data.result);
      });
  };

  const handleSelectItem = id => {
    setSelectItem(id);
  };

  return (
    <Container>
      <RecipeItemTitle>Recipe Items</RecipeItemTitle>
      <CardBox>
        <RecipeItemCard>
          <AddBtn onClick={handleModalOn}>+</AddBtn>
        </RecipeItemCard>
        {recipeItem.map((item,idx) => (
          <RecipeItemCard key={idx}>
            <Image
              src={item?.image}
              alt="bestRecipeImg"
              width={165}
              height={210}
            />
            <ItemInfo>
              <ItemTitle>{item.name}</ItemTitle>
              <ItemPrice>{item.price}</ItemPrice>
            </ItemInfo>
          </RecipeItemCard>
        ))}
      </CardBox>
      <Modal isModal={isModal}>
        <ModalBody>
          <ModalTitle>Recipe Items</ModalTitle>
          <InputBox onSubmit={onSubmit}>
            <ModalInput
              value={searchText}
              onChange={handleSearch}
              placeholder="상품을 검색하세요."
            />
            <ImgBox>
              <Image
                src="/images/glass.png"
                alt="bestRecipeImg"
                width={18}
                height={18}
              />
            </ImgBox>
          </InputBox>
          <ModalItem>
            {searchData ? (
              searchData.map(data => (
                <RecipeItemCard
                  key={data.id}
                  onClick={() => {
                    handleSelectItem(data.id);
                  }}
                >
                  {data.id === selectItem && <AddBtn>✓</AddBtn>}
                  <Image
                    src={data.image}
                    alt="bestRecipeImg"
                    width={165}
                    height={210}
                  />
                  <ItemInfo>
                    <ItemTitle>{data.name}</ItemTitle>
                    <ItemPrice>{data.price}</ItemPrice>
                  </ItemInfo>
                </RecipeItemCard>
              ))
            ) : (
              <Alert>상품을 추가해주세요.</Alert>
            )}
          </ModalItem>
          <ModalBtns>
            <CancelBtn onClick={handleModalOff}>닫기</CancelBtn>
            <SaveBtn
              onClick={() => {
                handRecipeItem(searchData);
              }}
            >
              저장하기
            </SaveBtn>
          </ModalBtns>
        </ModalBody>
      </Modal>
    </Container>
  );
}

export default RecipeItem;

const Container = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

const RecipeItemTitle = styled.div`
  margin-left: 50px;
  margin-bottom: 10px;
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

const CardBox = styled.div`
  ${props => props.theme.flex.flexBox('', '', '')};
`;

const RecipeItemCard = styled.div`
  position: relative;
  width: 165px;
  height: 285px;
  margin: 10px 7.5px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.gray};
  cursor: pointer;

  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

const AddBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 999;
  width: 45px;
  height: 45px;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 40px;
  font-weight: ${props => props.theme.fontWeights.thin};
  background-color: ${props => props.theme.colors.lightPurple};

  &:active {
    background-color: ${props => props.theme.colors.neonPurple};
  }
`;

const ItemInfo = styled.div`
  margin-top: 20px;
  ${props => props.theme.flex.flexBox('column')};
`;

const ItemTitle = styled.div`
  margin-bottom: 5px;
`;
const ItemPrice = styled.div``;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  ${props => props.theme.flex.flexBox()};
  z-index: 999;
  display: ${({ isModal }) => (isModal ? 'flex' : 'none')};
`;

const ModalBody = styled.div`
  width: 830px;
  max-height: 860px;
  padding: 40px;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  font-size: 16px;
`;

const ModalTitle = styled(RecipeItemTitle)`
  margin-left: 0;
`;

const InputBox = styled.form`
  position: relative;
  width: 310px;
  height: 45px;
`;

const ModalInput = styled.input`
  width: 310px;
  height: 45px;
  padding: 0 15px;
`;

const ImgBox = styled.button`
  position: absolute;
  top: 13px;
  right: 13px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const ModalItem = styled(CardBox)`
  margin: 10px 0;
  flex-wrap: wrap;
`;

const ModalBtns = styled.div`
  ${props => props.theme.flex.flexBox()};
`;

const CancelBtn = styled.button`
  width: 100px;
  height: 35px;
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 5px;
  color: gray;
  background-color: white;
  margin: 0 10px;

  &:active {
    background-color: ${props => props.theme.colors.lightGray};
  }
`;

const SaveBtn = styled(CancelBtn)`
  color: white;
  background-color: ${props => props.theme.colors.purple};

  &:active {
    background-color: ${props => props.theme.colors.lightPurple};
  }
`;

const Alert = styled.div`
  ${props => props.theme.flex.flexBox()};
`;
