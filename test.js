import { KintoneRestAPIClient } from '@kintone/rest-api-client'

console.info('start')
const client = new KintoneRestAPIClient({
  baseUrl: 'https://hoge.hoge.hoge',
  auth: { apiToken: 'hoge' },
})
console.log('end')
