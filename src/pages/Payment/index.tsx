import React from 'react'
import Menu from '../../components/Menu'
import * as S from './styles'
import { useCartDetails } from '../../hooks/useCartDetails'
import Loader from '../../components/Loader'
import PaymentForm from '../../components/PaymentForm'

export function Payment() {
  const {
    discount,
    shippingTotal,
    subTotal,
    total,
    mounted,
    handleUserPaymentInfo
  } = useCartDetails()

  interface Values {
    creditCard: string
  }

  return (
    <>
      {!mounted ? (
        <Loader />
      ) : (
        <>
          <S.Wrapper>
            <S.MenuWrapper>
              <Menu activeLink="/payment" />
            </S.MenuWrapper>
            <PaymentForm
              shippingTotal={shippingTotal}
              subTotal={subTotal}
              total={total}
              discount={discount}
              onSubmit={handleUserPaymentInfo}
            />
          </S.Wrapper>
        </>
      )}
    </>
  )
}
