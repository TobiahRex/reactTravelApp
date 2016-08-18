
import * as API from './apiActions';

export function getAllClientData() {
  return (dispatch) => {
    const options = {
      method: 'GET',
    };
    fetch('/api/clients/')
    .then(res => res.json())
    .then(parsedJson => dispatch(getAllClientData()));
  };
}

export function deleteAllClients() {
  return (dispatch) => {
    const options = {
      method: 'DELETE',
    };
    fetch('/api/clients/')
    .then(res => res.json())
    .then(parsedJson => dispatch(deleteAllClients()));
  };
}

export function createClient() {
  return (dispatch) => {
    const options = {
      method: 'POST',
    };
    fetch('/api/clients')
    .then(res => res.json())
    .then(parsedJson => dispatch(createClient()));
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
    fetch(`/api/clients/${clientId}`)
    .then(res => res.json())
    .then(parsedJson => API.receivedClientData(parsedJson))
    .catch(err => API.receivedError(err));
  };
}

export function deleteClient(clientId) {
  return (dispatch) => dispatch(deleteClient(clientId));
}

export function getItinerary(clientId, city) {
  return (dispatch) => dispatch(getItinerary(clientId, city));
}

export function submitEmail(clientId, email) {
  return (dispatch) => dispatch(submitEmail(clientId, email));
}
