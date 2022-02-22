/* eslint-disable import/prefer-default-export */
import Sendsay from 'sendsay-api'

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
    .then((res) => {
    resolve(res.list['about.id'].toString());
    })
    .catch(err => reject(JSON.stringify(err)))
  })

}
