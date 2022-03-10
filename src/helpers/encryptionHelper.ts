import key from "./pubKey.json";
import { JSEncrypt } from "jsencrypt";

/**
 * Encrypts data with RSA encryption.
 * @param {string} data
 */
export default function encrypt_data(data: string) {
  const jsencrypt = new JSEncrypt();
  if (process.env.NODE_ENV === "development") {
    jsencrypt.setPublicKey(key.pubKeyDev);
  } else {
    jsencrypt.setPublicKey(key.pubKey);
  }
  return jsencrypt.encrypt(data);
}
