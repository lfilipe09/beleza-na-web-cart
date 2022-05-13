# Entregas

O que foi feito para esse processo seletivo:

- ✅ Typescript
- ✅ Testes unitários
- ✅ 100% responsividade
- ✅ rotas em URL única
- ✅ Validação de formulário
- ✅ Temas customizados/Acessibilidade
- ✅ Deploy
- ✅ Credit Card Visualizer

## Stacks:

- [Styled components](https://styled-components.com/)
- [React Router](https://reactrouter.com/)
- [React Input Mask](https://github.com/sanniassin/react-input-mask)
- [React Credit Cards](https://github.com/amaroteam/react-credit-cards)
- [Joi](https://joi.dev/api/?v=17.6.0)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Styled Media Query](https://github.com/morajabi/styled-media-query)
- [Styled Icons](https://styled-icons.dev/)

## Instalação

Clone esse repositório e, na pasta raiz, rode o seguinte comando:

```bash
yarn install
```

## Deploy

Acesse a aplicação no seu navegador pelo link:

```bash
https://beleza-na-web-cart.vercel.app/
```

# Responsividade

![gif-carrinho](https://user-images.githubusercontent.com/81202572/168205670-0c61adb3-f8ad-4355-a107-74a2261181ba.gif)
![gif-creditcard](https://user-images.githubusercontent.com/81202572/168205856-d56c2d4b-0beb-4cff-b6ed-0aea2121de9b.gif)
![gif-confirma](https://user-images.githubusercontent.com/81202572/168206099-555a6efb-ce64-422a-91b3-a0860695b75a.gif)


# Validações
![error](https://user-images.githubusercontent.com/81202572/168207647-55fffba2-5336-494b-94d0-a1a6be1a879d.gif)
![enableButton](https://user-images.githubusercontent.com/81202572/168207657-5fc25759-1799-42d5-9cae-2d443043b081.gif)

- Mensagens personalizadas em português
- Input Mask que completa a resposta do usuário. Ex: quando digita o número do cartão automaticamente insere os '.'
- Validação é feita assim que o usuário dá o blur no campo e o botão só habilita para compra quando não há mensagem de erro e tudo está preenchido

- **Cartão de crédito**
  - Validação das seguintes bandeiras:  Visa, MasterCard, American Express, Diners Club, Discover, and JCB cards
  - Campo obrigatório
  - Valida a entrada para que tenha no mínimo 16 dígitos
 
- **Nome**
  - Não aceita caracteres especiais ou número
  - Campo obrigatório
  - Valida a entrada para que tenha no mínimo 3 dígitos 

- **Data de vencimento**
  - Não aceita mês que não existe e só permite números
  - Campo obrigatório
  - Valida a entrada para que tenha no mínimo 4 dígitos 

- **CVV**
  - Campo obrigatório
  - Valida a entrada para que tenha no mínimo 3 dígitos 
