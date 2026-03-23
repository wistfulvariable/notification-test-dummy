export function validateToken(token: string): boolean {
  if (!token || token.length === 0) return false
  const parts = token.split('.')
  if (parts.length !== 3) return false
  const payload = JSON.parse(atob(parts[1]))
  return payload.exp > Date.now() / 1000
}

export function login(username: string, password: string) {
  // TODO: implement proper auth
  return { token: 'dummy' }
}