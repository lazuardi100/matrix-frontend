
import Cookies from 'js-cookie'
export const setJwtCookie = (jwtToken: string) =>{
  Cookies.set('token', jwtToken)
}
export const getJwtCookie = () =>{
  return Cookies.get('token')
}
export const delJwtCookie = () =>{
  Cookies.remove('token')
}