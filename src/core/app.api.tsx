import axios from 'axios';




export function* apiGet<T>(url : string) : IterableIterator<any> {
    const getResponse = axios.get<T>(url);
    return yield getResponse.then(response=>response.data);
}

