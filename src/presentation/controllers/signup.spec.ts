import { SignUpController } from './signup'

describe('Signup Controller', () => {
  test('Should return codeStatus 400 when no name is provided', () => {
    const sut = new SignUpController()

    const httpRequest = {
      body: {
        email: 'Qual@meial.com',
        password: '123456',
        passwordConfirmation: '123456'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing Param: name'))
  })

  test('Should return codeStatus 400 when no email is not provided', () => {
    const sut = new SignUpController()

    const httpRequest = {
      body: {
        name: 'Qualquer Nome',
        password: '123456',
        passwordConfirmation: '123456'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing Param: email'))
  })
})
