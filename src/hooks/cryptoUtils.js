import CryptoJS from 'crypto-js';

const secretKey = 'your-secret-key';

export function encryptData(data) {
  const dataJSON = JSON.stringify(data);
  return CryptoJS.AES.encrypt(dataJSON, secretKey).toString();
}

export function decryptData(encryptedData) {
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decryptedData);
}

export function storeEncryptedData(key, data) {
  const encryptedData = encryptData(data);
  localStorage.setItem(key, encryptedData);
}

export function retrieveDecryptedData(key) {
  const storedEncryptedData = localStorage.getItem(key);
  if (storedEncryptedData) {
    return decryptData(storedEncryptedData);
  } else {
    console.log('No data found in localStorage.');
    return null;
  }
}
