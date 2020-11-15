export function fetchHousings() {
  return fetch("/housings").then((response) => {
    return response.json();
  });
}

export function fetchHousing(id) {
  return fetch(`/housings/${id}`).then((response) => {
    return response.json();
  });
}

export function fetchMatchHousing(key){
  return fetch(`/housings/${key}`).then((response) => {
    return response.json();
  })
}

export function fetchMemberByUserId(user_id) {
  return fetch(`/members/?user_id=${user_id}`).then((response) => {
    if (response.status >= 400) {
      return Promise.reject("There was an error requesting the resource.");
    }
    return response.json();
  });
}

export function fetchMember(id) {
  return fetch(`/members/${id}`).then((response) => {
    if (response.status >= 400) {
      return Promise.reject("There was an error requesting the resource.");
    }
    return response.json();
  });
}

export function postMember(data) {
  return fetch("/members", {
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
  return fetch(`/members/${data.id}`,{
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
  return fetch(`/housings/${data.id}`,{
    method: "put",
    body: JSON.stringify(data),
    headers:{
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  })
}