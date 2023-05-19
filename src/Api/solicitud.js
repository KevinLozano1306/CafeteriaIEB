import { API_HOST } from "../Utils/constants"

export async function getSolicitudes(){
    try {
        const url = `${API_HOST}/solicitudes`
        const response = await fetch(url)
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}
export async function getSolicitudesDetails(id_servicio) {
try {
    const url = `${API_HOST}/solicitudes/${id_servicio}`
    const response = await fetch(url)
    const result = await response.json();
    return result;
} catch (error) {
    
}
}