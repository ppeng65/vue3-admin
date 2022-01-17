import path from 'path'

const getChildrenRoutes = (routes) => {
  const result = []

  routes.forEach(item => {
    if (item.children && item.children.length > 0) {
      result.push(...item.children)
    }
  })

  return result
}

export const filterRouters = (routes) => {
  const childrenRoutes = getChildrenRoutes(routes)
  return routes.filter(item => {
    return !childrenRoutes.find(childRoute => {
      return childRoute.path === item.path
    })
  })
}

export const isNull = (data) => {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}

export const generateMenus = (routes, baseUrl = '') => {
  const result = []

  routes.forEach(item => {
    if (isNull(item.meta) && isNull(item.children)) return
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenus(item.children, baseUrl))
      return
    }

    const routePath = path.resolve(baseUrl, item.path)
    let route = result.find(item => item.path === routePath)
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }

      if (route.meta.icon && route.meta.title) {
        result.push(route)
      }
    }
    if (item.children) {
      route.children.push(...generateMenus(item.children, route.path))
    }
  })

  return result
}
