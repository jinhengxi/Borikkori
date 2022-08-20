import styled from 'styled-components';

function CoverImg() {
  return (
    <Container>
      <Explanation>
        추가하기 버튼으로 커버사진을
        <br />
        업로드 해주세요.
      </Explanation>
      <AddImg>커버 사진 추가</AddImg>
    </Container>
  );
}

export default CoverImg;

const Container = styled.div`
  width: 100%;
  height: 440px;
  ${props => props.theme.flex.flexBox('column')};
  background-color: #f4f3f2;
`;

const Explanation = styled.div`
  text-align: center;
  color: #969696;
  font-size: ${props => props.theme.fontSizes.small};
`;

const AddImg = styled.button`
  width: 168px;
  height: 55px;
  margin-top: 15px;
  background-color: gray;
  border: none;
  border-radius: 5px;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.base};

  &:active {
    background-color: #969696;
  }
`;
