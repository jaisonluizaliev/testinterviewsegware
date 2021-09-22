
import api from './api'

// type SignInRequestData = {
//   username: string;
//   password: string;
// }

// const token = process.env.BEARER_TOKEN

export async function SignInRequest(data) {
  //api.defaults.headers['Authorization'] = `Bearer ${token}`;
  await api.post('/sign-in')
  return {
    username,
    password
  }
}