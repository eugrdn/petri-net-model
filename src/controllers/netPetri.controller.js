export default class PetriNetController {

	constructor(PetrNetiModel) {
		this._model = PetrNetiModel;
	}

	get positions() {
		return this._model.PetriNet;
	}

	get bannedTransitions(){
		return this._model.bannedTransitions;
	}

	executeTransition(tsId) {
		this._model.setState(tsId);
	}

	updateTransitions(){
		this._model.updateBannedTransitions();
	}

}