import styled from 'styled-components';

import BestCarousel from '../components/main/BestCarousel';
import Lovers from '../components/main/Lovers';
import NewCarousel from '../components/main/NewCarousel';

export default function Home() {
  return (
    <Container>
      <MainTitle>Best 레시피</MainTitle>
      <BestCarousel />
      <MainTitle>New 레시피</MainTitle>
      <NewCarousel/>
      <MainTitle>추천 러버스</MainTitle>
      <Lovers/>
    </Container>
  );
}

const Container = styled.main`
  text-align: center;
`;

const MainTitle = styled.h1`
  margin: 20px 0;
  font-size: ${props => props.theme.fontSizes.xxl};
`;
