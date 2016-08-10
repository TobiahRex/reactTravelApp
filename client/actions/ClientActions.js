import API from '../API'

const ProductActions = {

  getClientData() {
    API.getClientData();
  },
  addClientData(newData) {
    API.addClientData(newData);
  },
}

export default ProductActions
