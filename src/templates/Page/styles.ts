import styled from 'styled-components'

export const Content = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: var(--container);
  margin: auto;
`

export const Heading = styled.div`
  font-size: var(--large);
  margin-bottom: var(--large);
`

export const Body = styled.div`
  p {
    font-size: var(--medium);
  }
`
