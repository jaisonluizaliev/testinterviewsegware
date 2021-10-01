
import api from './api'

const BEARER_TOKEN = 'testingtokenauthorization'

export async function signUpRequest(data) {
  await api.post('/sign-up', { ...data })
}

export async function signInRequest(data) {

  const res = await api.post('/sign-in', { ...data }, {
    headers: {
      'Authorization': `Bearer ${BEARER_TOKEN}`
    }
  })
  const token = res.data
  return { token }
}


export async function recoverUserInfo(token) {
  const { data } = await api.get('/feeds', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }) 
  return { data }
}

export async function postContent(token, content) {
  const { data } = await api.post('/feed', {...content}, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  return { data }
}