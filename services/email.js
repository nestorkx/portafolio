import API from '@/plugins/axios'

export function sendData(data) {
  return API().post('/posts', data)
}

export default {
  sendData
}
