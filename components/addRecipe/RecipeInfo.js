import styled from 'styled-components';

function RecipeInfo() {
  return (
    <Container>
      <LeftInfo>
        <RecipeInfoTitle>요리정보</RecipeInfoTitle>
        <DropBox>
          <Select name="people">
            <option value="none">인원</option>
            <option value="1person">1명</option>
            <option value="2people">2명</option>
            <option value="3people">3명</option>
            <option value="4people">4명</option>
          </Select>
          <Select name="minute">
            <option value="none">시간</option>
            <option value="10minute">10분이내</option>
            <option value="20minute">20분이내</option>
            <option value="30minute">30분이내</option>
            <option value="40minute">40분이상</option>
          </Select>
          <Select name="difficulty">
            <option value="none">난이도</option>
            <option value="1star">★</option>
            <option value="2star">★★</option>
            <option value="3star">★★★</option>
            <option value="4star">★★★★</option>
          </Select>
        </DropBox>
      </LeftInfo>
      <RightInfo>
        <RecipeInfoTitle>카테고리</RecipeInfoTitle>
        <DropBox>
          <Select name="country">
            <option value="none">종류별</option>
            <option value="korea">한식</option>
            <option value="japan">일식</option>
            <option value="china">중식</option>
            <option value="america">양식</option>
            <option value="etc">그 외</option>
          </Select>
          <Select name="situation">
            <option value="none">상황별</option>
            <option value="maindish">메인요리</option>
            <option value="sidedish">밑반찬</option>
            <option value="snack">간식</option>
            <option value="munchies">안주</option>
          </Select>
        </DropBox>
      </RightInfo>
    </Container>
  );
}

export default RecipeInfo;

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const LeftInfo = styled.div`
  width: 50%;
  margin: 50px 0;
  padding: 0 50px;
  float: left;
  border-right: 1px solid ${props => props.theme.colors.lightGray};
`;

const RightInfo = styled(LeftInfo)`
  float: right;
  border: none;
`;

const RecipeInfoTitle = styled.div`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

const DropBox = styled.form`
    margin-top: 20px;
`;

const Select = styled.select`
    padding: 5px 15px;
    width: 90px;
    height: 35px;
    margin-right: 35px;
    outline: none;
`