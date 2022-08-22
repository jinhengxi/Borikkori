import styled from 'styled-components';

function HashTag() {
  return (
    <Container>
      <HashTagTitle>HashTag</HashTagTitle>
      <HashBox>
        <Hash>#닭요리</Hash>
        <Hash>#닭요리</Hash>
        <Hash>#닭요리</Hash>
        <Hash>#닭요리</Hash>
      </HashBox>
      <HashInput placeholder="해시태그 추가해주세요." />
    </Container>
  );
}

export default HashTag;

const Container = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

const HashTagTitle = styled.div`
  margin-left: 50px;
  margin-bottom: 10px;
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

const HashBox = styled.div`
  ${props => props.theme.flex.flexBox('', '', '')};
`;

const Hash = styled.div`
  width: 130px;
  height: 50px;
  margin: 10px 10px;
  background-color: ${props => props.theme.colors.gray};
  border-radius: 50px;
  ${props => props.theme.flex.flexBox()};
  cursor: pointer;
`;

const HashInput = styled.input`
  width: 100%;
  height: 80px;
  border-radius: 5px;
  padding: 0 20px;
  color: gray;
  border: 1px solid ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.xl};
`;
