import * as RX from './rxClientActions';
import { get, post, ajax } from 'jquery';


export function getAllClientData() {
  return (dispatch) => {
    const options = {
      method: 'GET',
    };
    fetch('/api/clients/', options)
    .then(res => res.json())
    .then(parsedJson => dispatch(RX.receivedClientData(parsedJson)))
    .catch(err => dispatch(RX.receivedError(err)));
  };
}

export function deleteAllClients() {
  return (dispatch) => {
    const options = {
      method: 'DELETE',
    };
    fetch('/api/clients/', options)
    .then(res => res.json())
    .then(parsedJson => dispatch(RX.receivedClientData(parsedJson)))
    .catch(err => dispatch(RX.receivedError(err)));
  };
}

export function createClient() {
  return (dispatch) => {
    const options = {
      method: 'POST',
    };
    fetch('/api/clients', options)
    .then(res => res.json())
    .then(parsedJson => dispatch(RX.receivedNewClient(parsedJson)))
    .catch(err => dispatch(RX.receivedError(err)));
  };
}

export function addClientData(newData, clientId) {
  return (dispatch) => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    const options = {
      headers,
      method: "PUT",
      credentials: "same-origin",
      mode: "cors",
      cache: "default",
      body: JSON.stringify(newData),
    };

    fetch(`/api/clients/${clientId}`, options)
    .then(res => res.json())
    .then(parsedJson => dispatch(RX.receivedClientData(parsedJson[0])))
    .catch(err => dispatch(RX.receivedError(err)));
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
    .then(parsedJson => dispatch(RX.receivedClientData(parsedJson)))
    .catch(err => dispatch(RX.receivedError(err)));
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
    .catch(err => RX.receivedError(err));
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
    .then(parsedJson => dispatch(RX.receivedClientData(parsedJson)))
    .catch(err => dispatch(RX.receivedError(err)));
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
    .then(parsedJson => dispatch(RX.sentEmail(parsedJson)))
    .catch(err => dispatch(RX.receivedError(err)));
  };
}
