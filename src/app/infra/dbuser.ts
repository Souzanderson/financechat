const TOKEN_KEY = 'financechat_user_token';

export function storeUserToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getUserToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}
