export function fetchHousings() {
  return fetch("/api/housings").then((response) => {
    return response.json();
  });
}

export function fetchHousing(id) {
  return fetch(`/api/housings/${id}`).then((response) => {
    return response.json();
  });
}

export function fetchMatchHousing(key){
  return fetch(`/api/housings/${key}`).then((response) => {
    return response.json();
  })
}

export function fetchMemberByUserId(user_id) {
  return fetch(`/api/members/?user_id=${user_id}`).then((response) => {
    if (response.status >= 400) {
      return Promise.reject("There was an error requesting the resource.");
    }
    return response.json();
  });
}

export function fetchMember(id) {
  return fetch(`/api/members/${id}`).then((response) => {
    if (response.status >= 400) {
      return Promise.reject("There was an error requesting the resource.");
    }
    return response.json();
  });
}

export function postMember(data) {
  return fetch("/api/members", {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

export function addFav(data){
  return fetch(`/api/members/${data.id}`,{
    method: "put",
    body: JSON.stringify(data),
    headers:{
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

export function postReview(data){
  return fetch(`/api/housings/${data.id}`,{
    method: "put",
    body: JSON.stringify(data),
    headers:{
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  })
}