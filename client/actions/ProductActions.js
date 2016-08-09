import API from '../API'

const ProductActions = {
  
  getAllMods() {
    API.getAllMods();
  },
  getOneMod(id) {
    API.getOneMod(id);
  },
  addNewMod(mod) {
    API.addNewMod(mod);
  },
  removeMod(id) {
    API.removeMod(id);
  },
}

export default ProductActions
