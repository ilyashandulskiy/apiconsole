/* eslint-disable import/prefer-default-export */
import Sendsay from 'sendsay-api';
import { LOGIN } from '../store/types'

export const sendsayUserData = (token, dispatch) => {

  const sendsay = new Sendsay();
  sendsay.setSession(token)

  return new Promise((resolve) => {
    sendsay.request({ action: 'pong' })
      .then(res => {
        resolve(res)
    })
    .catch(() => dispatch({type: LOGIN, payload: null}))
  })
  
}

export const sendsayLogin = ({ login, sublogin, password }) => {
  
  const sendsay = new Sendsay({
    auth: {
      login,
      sublogin,
      password,
    }
  })

  return new Promise((resolve, reject) => {
    sendsay.request({ action: 'sys.settings.get', list: ['about.id'] })
      .then(() => {
        resolve(sendsay.session);
      })
      .catch(err => reject(JSON.stringify(err)))
  })

}
