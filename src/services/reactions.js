
import getToken from '../utils/token'
import api from './api'

export async function reactions(data) {
  const token = getToken()
  if (token) {
    try {
      const response = await api.post('/reaction', {
       ...data
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      return response
    } catch (error) {
      console.log(error)
      return error
    }
  }

}