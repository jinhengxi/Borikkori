import styled from 'styled-components';

function RecipeInfo({handleAddRecipeInfo}) {
  return (
    <Container onChange={handleAddRecipeInfo}>
      <LeftInfo>
        <RecipeInfoTitle>요리정보</RecipeInfoTitle>
        <DropBox >
          <Select name="people" >
            <option value="none">인원</option>
            <option value="1">1명</option>
            <option value="2">2명</option>
            <option value="3">3명</option>
            <option value="4">4명</option>
          </Select>
          <Select name="minute">
            <option value="none">시간</option>
            <option value="10">10분이내</option>
            <option value="20">20분이내</option>
            <option value="30">30분이내</option>
            <option value="40">40분이상</option>
          </Select>
          <Select name="difficulty">
            <option value="none">난이도</option>
            <option value="초급">초급</option>
            <option value="중급">중급</option>
            <option value="고급">고급</option>
          </Select>
        </DropBox>
      </LeftInfo>
      <RightInfo>
        <RecipeInfoTitle>카테고리</RecipeInfoTitle>
        <DropBox>
          <Select name="country">
            <option value="none">종류별</option>
            <option value="한식">한식</option>
            <option value="일식">일식</option>
            <option value="중식">중식</option>
            <option value="양식">양식</option>
            <option value="그외">그 외</option>
          </Select>
          <Select name="situation">
            <option value="none">상황별</option>
            <option value="메인요리">메인요리</option>
            <option value="밑반찬">밑반찬</option>
            <option value="간식">간식</option>
            <option value="안주">안주</option>
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