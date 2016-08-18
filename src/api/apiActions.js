import * as API from './apiActions';

export function getAllClientData() {
  return (dispatch) => {
    const options = {
      method: 'GET',
    };
    fetch('/api/clients/', options)
    .then(res => res.json())
    .then(parsedJson => dispatch(API.getAllClientData(parsedJson)))
    .catch(err => dispatch(API.receivedError(err)));
  };
}

export function deleteAllClients() {
  return (dispatch) => {
    const options = {
      method: 'DELETE',
    };
    fetch('/api/clients/', options)
    .then(res => res.json())
    .then(parsedJson => dispatch(API.deleteAllClients(parsedJson)))
    .catch(err => dispatch(API.receivedError(err)));
  };
}

export function createClient() {
  return (dispatch) => {
    const options = {
      method: 'POST',
    };
    fetch('/api/clients', options)
    .then(res => res.json())
    .then(parsedJson => dispatch(API.createClient(parsedJson)))
    .catch(err => dispatch(API.receivedError(err)));
  };
}

export function addClientData(newData, clientId) {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      body: {
        newData,
        clientId,
      },
    };
    fetch(`/api/clients/${clientId}`, options)
    .then(res => res.json())
    .then(parsedJson => dispatch(API.receivedClientData(parsedJson[0])))
    .catch(err => dispatch(API.receivedError(err)));
  };
}

export function getClientData(clientId) {
  return (dispatch) => {
    const options = {
      method: 'GET',
      body: clientId,
    };
    fetch(`/api/clients/${clientId}`, options)
    .then(res => res.json())
    .then(parsedJson => dispatch(API.receivedClientData(parsedJson)))
    .catch(err => dispatch(API.receivedError(err)));
  };
}

export function deleteClient(clientId) {
  return (disptatch) => {
    const options = {
      method: 'DELETE',
      body: clientId,
    };
    fetch(`/api/clients/${clientId}`, options)
    .then(res => res.json())
    .catch(err => API.receivedError(err));
  };
}

export function getItinerary(clientId, city) {
  return (dispatch) => {
    const options = {
      method: 'GET',
      body: city,
    };
    fetch(`/api/clients/${clientId}`, options)
    .then(res => res.json())
    .then(parsedJson => dispatch(API.getItinerary(parsedJson)))
    .catch(err => dispatch(API.receivedError(err)));
  };
}

export function submitEmail(clientId, email) {
  return dispatch => {
    const options = {
      method: 'POST',
      body: email,
    };
    fetch(`/api/clients/email/${clientId}`, options)
    .then(res => res.json())
    .then(parsedJson => dispatch(API.submitEmail(parsedJson)))
    .catch(err => dispatch(API.receivedError(err)));
  };
}
