export default function ({ $axios, store }) {
  $axios.onRequest((config) => {
    config.headers.common.Authorization = `Bearer ${store.state.security.token}`
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      store('/400')
    }
  })
}
