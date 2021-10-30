const crypto = require("crypto");
import publicKey from "./pubKey.txt";

/**
 * Encrypts data with RSA encryption.
 * @param {string} data
 */
export default function encrypt_data(data) {
  const buffer = Buffer.from(data);
  return crypto
    .publicEncrypt(
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_PADDING,
      },
      buffer
    )
    .toString("base64");
}
