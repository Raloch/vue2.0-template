import fetch from './fetch'

export const operatorInfo = params => fetch({
  url: '/bips/user/get-company-info',
  params: params,
  method: 'post'
})