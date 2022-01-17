export default (config) => {
  let body = config.body
  if (body) {
    body = JSON.parse(body)
  }
  if (body.username === 'super-admin') {
    return {
      success: true,
      code: 200,
      data: { token: 'f7fefe84-3b13-4f6d-a011-793e2a456449' },
      message: '登录成功'
    }
  } else {
    return {
      success: true,
      code: 203,
      data: { token: 'f7fefe84-3b13-4f6d-a011-793e2a456449' },
      message: '登录成功'
    }
  }
}
