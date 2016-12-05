import PetriNetStorage from '../storage/positionPetri.storage.js';

export default class PetriNet {

	constructor() {
		this.net = PetriNetStorage;
		this.bannedTransitions = new Set();
	}

	get PetriNet() { return this.net; }

	setState(tsId) {
		let actionsArray = this.net.slice();

		this.net = actionsArray.map(elt => {
			let transitions = elt.transitions;
			let outerStateValue;
			let innerStateValue;

			for (let _tsId in transitions) {
				if (_tsId === tsId) {

					outerStateValue = transitions[tsId].outer;
					innerStateValue = transitions[tsId].inner;

					if (innerStateValue) elt.chips += innerStateValue;
					if (outerStateValue) elt.chips -= outerStateValue;

					break;
				}
			}

			return elt;
		});

	}

	updateBannedTransitions() {
		this.bannedTransitions.clear();

		this.net.forEach(currentPosition => {
			for (let tsId in currentPosition.transitions) {
				if (currentPosition.transitions[tsId].outer > currentPosition.chips) {
					this.bannedTransitions.add(tsId);
				}
			}
		});
	}

}