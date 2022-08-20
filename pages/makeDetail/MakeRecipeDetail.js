import styled from 'styled-components';

import CoverImg from '../../components/makeDetail/CoverImg';

function MakeRecipeDetail() {
  return (
    <Container>
      <CoverImg />
    </Container>
  );
}

export default MakeRecipeDetail;

const Container = styled.div`
  width: 970px;
  margin: auto;
`;
