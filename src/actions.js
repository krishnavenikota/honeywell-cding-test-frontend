export function getCity() {
    return {
       type: 'GET_CITY'
    }
 }

 export function getCity(payload) {
    return {
       type: 'FETCH_DATA_SUCCESS',
       payload:payload.data
    }
 }

 export function getCity(payload) {
    return {
       type: 'FETCH_DATA_FAILURE',
       payload:payload.error
    }
 }