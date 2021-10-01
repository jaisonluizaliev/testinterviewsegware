import { parseCookies } from "nookies";

export default function getToken() {
  const { "@token/text-style": token } = parseCookies();
  return token
}