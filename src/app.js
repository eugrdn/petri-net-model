import PetriNet from './models/netPetri.model.js';
import PetriNetController from './controllers/netPetri.controller.js';
import PetriNetView from './views/netPetri.view.js';

const PetriNetModel = new PetriNet();
const PetriNetCtrl = new PetriNetController(PetriNetModel);
const View = new PetriNetView(PetriNetCtrl);

