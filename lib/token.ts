import { cookies } from "next/headers";

const TOKEN_AGE = 16200; // 4.5 hours in seconds
const TOKEN_NAME = "auth-token";
const TOKEN_REFRESH_NAME = "auth-refresh-token";

export async function getToken(): Promise<string | undefined> {
  const cookiesList = await cookies();
  const myAuthToken = await cookiesList.get(TOKEN_NAME);
  return myAuthToken?.value;
}

export async function getRefresToken(): Promise<string | undefined> {
  const cookiesList = await cookies();
  const myAuthToken = await cookiesList.get(TOKEN_REFRESH_NAME);
  return myAuthToken?.value;
}

export async function setToken(authToken: string): Promise<void> {
  const cookiesList = await cookies();
  await cookiesList.set({
    name: TOKEN_NAME,
    value: authToken,
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV !== 'development',
    maxAge: TOKEN_AGE,
  });
}

export async function refreshToken(authRefreshToken: string): Promise<void> {
  const cookiesList = await cookies();
  await cookiesList.set({
    name: TOKEN_REFRESH_NAME,
    value: authRefreshToken,
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV !== 'development',
    maxAge: TOKEN_AGE,
  });
}

export async function deleteToken(): Promise<void> {
  const cookiesList = await cookies();
  await cookiesList.delete(TOKEN_REFRESH_NAME);
  await cookiesList.delete(TOKEN_NAME);
}