import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css``}
`

export const InputGroup = styled.div`
  display: flex;
  grid-gap: 1rem;
  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: column;
    grid-gap: 1.3rem;
  `}
`

export const CartWrapper = styled.form`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    grid-gap: ${theme.spacings.xlarge};
  `}
  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`

export const PaymentInfo = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    grid-gap: ${theme.spacings.xlarge};
    ${media.greaterThan('medium')`
    margin-top: 2.125rem;
  `}
  `}
`

export const CardWrapper = styled.section``

export const FormDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1.3rem;
`

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    grid-gap: ${theme.spacings.xlarge};
    ${media.greaterThan('medium')`
      padding: 1.5rem;
      display: grid;
      grid-template-columns: 290px 200px;
      align-items: center;
      flex-direction: row;
  `}
  `}
`
