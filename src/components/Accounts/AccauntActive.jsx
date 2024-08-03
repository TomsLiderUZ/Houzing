
function AccauntActive({active}) {
    function encodeData(data) {
        return btoa(data);
    }
    
    function decodeData(encodedData) {
        return atob(encodedData);
    }
    
    const valueToStore = active;
    const encodedValue = encodeData(valueToStore);
    localStorage.setItem("you!Prof_Active_ID-1.0", encodedValue);
    

    const storedEncodedValue = localStorage.getItem("you!Prof_Active_ID-1.0");
    const decodedValue = decodeData(storedEncodedValue); 
    const retrievedData = (decodedValue === 'true');
    // console.log(retrievedData);
}

export default AccauntActive