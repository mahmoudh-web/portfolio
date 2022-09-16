const dev = process.env.NODE_ENV === 'development'

const serverUrl = dev ? 'http://localhost:3000' : 'https://mahmoudh.com'

export default serverUrl