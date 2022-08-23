import { useState } from 'react';
import styled from 'styled-components';

function HashTag({ handleAddHashTag, handleRemoveHashTag, hashTag }) {
  const [tagItem, setTagItem] = useState('');

  const onKeyPress = e => {
    if (e.target.value.length !== 0 && e.key === 'Enter') {
      handleAddHashTag(e);
      setTagItem('');
    }
  };

  return (
    <Container>
      <HashTagTitle>HashTag</HashTagTitle>
      <HashTagBox>
        {hashTag.map((hash, index) => {
          return (
            <HashTagItem key={index} onClick={handleRemoveHashTag}>
              <HashTags>{hash}</HashTags>
            </HashTagItem>
          );
        })}
        <HashTagInput
          type="text"
          placeholder="해시태그 추가해주세요."
          tabIndex={2}
          onChange={e => setTagItem(e.target.value)}
          value={tagItem}
          onKeyPress={onKeyPress}
        />
      </HashTagBox>
    </Container>
  );
}

export default HashTag;

const Container = styled.div`
  width: 100%;
  padding: 10px;
  margin-bottom: 50px;
`;

const HashTagTitle = styled.div`
  margin-left: 50px;
  margin-bottom: 20px;
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

const HashTagBox = styled.div`
  ${props => props.theme.flex.flexBox('', 'center', '')};
  flex-wrap: wrap;
  min-height: 80px;
  padding: 0 10px;
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 10px;

  &:focus-within {
    border-color: gray;
  }
`;

const HashTagItem = styled.div`
  ${props => props.theme.flex.flexBox()};
  margin: 5px;
  padding: 5px;
  background-color: ${props => props.theme.colors.gray};
  border-radius: 5px;
  font-size: 13px;
  width: 130px;
  height: 50px;
  margin: 10px 10px;
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.xl};
`;

const HashTags = styled.span``;

const HashTagInput = styled.input`
  display: inline-flex;
  min-width: 180px;
  background: transparent;
  border: none;
  outline: none;
  font-size: ${props => props.theme.fontSizes.xl};
  cursor: text;
`;
