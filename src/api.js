export function fetchHousings(){
    return fetch("/housings").then((response) => {
        return response.json();
    });
}

export function fetchHousing(id){
    return fetch(`/housings/${id}`).then((response) => {
        return response.json();
    });
}