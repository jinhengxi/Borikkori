import styled from 'styled-components';

import useFetch from '../../hooks/useFetch';
import LoversCard from "./LoversCard"

function Lovers() {
  const [lovers] = useFetch('data/DATA.json');

  return (
    <Container>
    {lovers?.map(lover => (
        <LoversCard key={lover.id} bestRecipe={lover} />
    ))}
  </Container>
  )
}

export default Lovers

const Container = styled.div`
  ${props => props.theme.flex.flexBox()};
`