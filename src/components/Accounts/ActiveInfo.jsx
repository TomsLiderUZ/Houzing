export default function ActiveInfo({ activeInfo }) {


    const valueToStoreInfo = activeInfo;
    const encodedValueInfo = btoa(valueToStoreInfo);
    localStorage.setItem("you!Prof_Active_ID-1.1", encodedValueInfo);

    const storedEncodedValueInfo = localStorage.getItem("you!Prof_Active_ID-1.1");
    const decodedValueInfo = atob(storedEncodedValueInfo);
    console.log(decodedValueInfo);

}