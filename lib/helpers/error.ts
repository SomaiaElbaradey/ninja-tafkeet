import { EMPTY_STRING } from '../constants'

export const error = (message?: string) => {
  throw {
    name: 'SyntaxError',
    message: message || EMPTY_STRING,
  }
}
