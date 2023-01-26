const baseUrl = "https://api.escuelajs.co/api/v1/";

export const GET = (type, id = "") => {
  return fetch(baseUrl + type + id).then((res) => res.json());
};

export const POST = (type, objBody) => {
  return fetch(baseUrl + type, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objBody),
  });
};

export const PUT = (type, objBody, id) => {
  return fetch(baseUrl + type + "/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objBody),
  });
};

export const DELETE = (type, id) => {
  return fetch(baseUrl + type + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
