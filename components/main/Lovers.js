import styled from 'styled-components';

import useFetch from '../../hooks/useFetch';
import LoversCard from "./LoversCard"
import { BASE_URL } from '../../config';

function Lovers() {
  const [lovers] = useFetch(`${BASE_URL}/user/list`);

  return (
    <Container>
    {lovers?.map(lover => (
        <LoversCard key={lover.id} lover={lover} />
    ))}
  </Container>
  )
}

export default Lovers

const Container = styled.div`
  ${props => props.theme.flex.flexBox()};
`