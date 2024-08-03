// storageUtils.js

// Ma'lumotni JSON formatida saqlash
export function storeData(key, value) {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  }
  
  // JSON formatidan ma'lumotni olish
  export function retrieveData(key) {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return null;
  }
  