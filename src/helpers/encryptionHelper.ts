import key from "./pubKey.json";
import { JSEncrypt } from "jsencrypt";

/**
 * Encrypts data with RSA encryption.
 * @param {string} data
 */
export default function encrypt_data(data: string): string {
  const jsencrypt = new JSEncrypt();
  if (process.env.NODE_ENV === "development") {
    jsencrypt.setPublicKey(key.pubKeyDev);
  } else {
    jsencrypt.setPublicKey(key.pubKey);
  }
  const encryptedData = jsencrypt.encrypt(data);
  if (!encryptedData) {
    return "";
  }
  return encryptedData;
}
