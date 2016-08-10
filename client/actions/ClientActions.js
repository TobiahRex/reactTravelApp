import API from '../API'

const ClientActions = {
  getClientData() {
    API.getClientData();
  },
  addClientData(newData) {
    API.addClientData(newData);
  },
}

export default ClientActions
