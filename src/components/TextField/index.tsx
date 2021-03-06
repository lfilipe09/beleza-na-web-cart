import React from 'react'
import { useState, InputHTMLAttributes } from 'react'
import InputMask from 'react-input-mask'
import * as S from './styles'

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  handleOnBlur?: () => void
  handleOnFocus?: () => void
  label?: string
  initialValue?: string
  mask?: string | null
  error?: string
  noMask?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  initialValue = '',
  mask,
  error,
  name,
  onInputChange,
  handleOnBlur,
  handleOnFocus,
  noMask,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)
    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      {!noMask ? (
        <InputMask
          mask={mask ?? ''}
          onChange={onChange}
          value={value}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        >
          {(inputProps: any) => (
            <S.Input
              type="text"
              name={name}
              {...(label ? { id: name } : {})}
              {...props}
              {...inputProps}
            />
          )}
        </InputMask>
      ) : (
        <S.Input
          onChange={onChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          value={value}
          type="text"
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      )}
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}
export default TextField
