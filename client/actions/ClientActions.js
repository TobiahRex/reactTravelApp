import API from '../API'

const ClientActions = {
  getAllClientData() {
    API.getAllClientData();
  },
  deleteAllClients(){
    API.deleteAllClients();
  },
  createClient() {
    API.createClient();
  },
  addClientData(newData, clientId) {
    API.addClientData(newData, clientId);
  },
  getClientData(clientId) {
    API.getClientData(clientId);
  },
  deleteClient(clientId) {
    API.deleteClient(clientId);
  }
}

export default ClientActions
