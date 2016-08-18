
export function getAllClientData() {
  return (dispatch) => {
    let options = {
      method: 'GET'
    };
    fetch('/api/clients/')
    .then(res => res.json())
    .then(parsedJson => dispatch(getAllClientData()));
  };
}

export function deleteAllClients() {
  return (dispatch) => {
    let options = {
      method: 'DELETE'
    };
    fetch('/api/clients/')
    .then(res => res.json())
    .then(parsedJson => dispatch(deleteAllClients()));
    dispatch(deleteAllClients()
  }
}

export function createClient() {
  return (dispatch) => dispatch(createClient());
}

export function addClientData(newData, clientId) {
  return (dispatch) => dispatch(addClientData(newData, clientId));
}

export function getClientData(clientId) {
  return (dispatch) => dispatch(getClientData(clientId));
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

const API = {
  getAllClientData() {
    get('/api/clients/')
    .done(res => ServerActions.receivedClientData(res))
    .fail(err => ServerActions.receivedError(err));
  },
  deleteAllClients() {
    ajax({
      url: '/api/clients/',
      method: 'DELETE',
    })
    .done(res => ServerActions.receivedClientData(res))
    .fail(err => ServerActions.receivedError(err));
  },
  createClient() {
    post('/api/clients/')
    .done(res => ServerActions.receivedNewClient(res))
    .fail(err => ServerActions.receivedError(err));
  },
  getClientData(clientId) {
    get(`/api/clients/${clientId}`)
    .done(res => { ServerActions.receivedClientData(res) })
    .fail(err => ServerActions.receivedError(err));
  },
  addClientData(newClientData, clientId) {
    ajax({
      url: `/api/clients/${clientId}`,
      method: 'PUT',
      data: newClientData,
    })
    .done(res => ServerActions.receivedClientData(res[0]))
    .fail(err => ServerActions.receivedError(err));
  },
  deleteClient(clientId) {
    ajax({
      url: `/api/clients/${clientId}`,
      method: 'DELETE',
    })
    .done()
    .fail(err => ServerActions.receivedError(err));
  },
  getItinerary(clientId, city) {
    post(`/api/yelp/itinerary/${clientId}`, {
      location: city,
    })
    .done(data => {
      console.log('ITINERARY RESPONSE:', data);
      ServerActions.receivedClientData(data);
    })
    .fail(err => ServerActions.receivedError(err));
  },
  submitEmail(clientId, email) {
    post(`/api/clients/email/${clientId}`, email)
    .done(res => ServerActions.sentEmailResponse(res))
    .fail(err => ServerActions.receivedError(err));
  },
};
