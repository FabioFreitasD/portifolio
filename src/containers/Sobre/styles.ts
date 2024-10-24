import styled from 'styled-components'

export const GithubSecao = styled.div`
  display: flex;
  justify-contant: space-around;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 64px;

  img {
    height: 157px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;

    img {
      height: auto;
      width: 100%;
    }
  }
`
