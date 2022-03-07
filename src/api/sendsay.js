/* eslint-disable import/prefer-default-export */
import Sendsay from 'sendsay-api';

let sendsay = new Sendsay();

export const sendsayRequest = (token, data) => {

  sendsay.setSession(token)

  return new Promise((resolve, reject) => {
    sendsay.request(data)
      .then(res => {
        resolve(res)
    })
    .catch(reject)
  })
  
}

export const sendsayUserData = (token, store) => {

  sendsay.setSession(token)

  return new Promise((resolve) => {
    sendsay.request({ action: 'pong' })
      .then(res => {
        resolve(res)
    })
    .catch(() => store.setAuth(null))
  })
  
}

export const sendsayLogin = ({ login, sublogin, password }) => {
  
  sendsay = new Sendsay({
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
