export function validateToken(token: string): boolean {
  return token.length > 0
}

export function login(username: string, password: string) {
  // TODO: implement proper auth
  return { token: 'dummy' }
}