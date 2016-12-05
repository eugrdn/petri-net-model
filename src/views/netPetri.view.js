import $ from 'jquery';

export default class PetriNetView {

	constructor(PetriNetController) {
		this._ctrl = PetriNetController;

		this.init();
	}

	init() {
		this.initializeHandlers();
		this.updateView();
	}

	initializeHandlers() {
		$('.btn-group').on('click', this.implementTransition.bind(this));
		
		this.$positions = $('.petri_position').toArray();
	}

	implementTransition(e) {
		let target = e.target || event.target;
		let tsId = target.id;

		if (target.type != 'button' || this._ctrl.bannedTransitions.has(tsId)) return;

		this._ctrl.executeTransition(tsId);
		this.updateView();
	}

	updateView() {
		let $positions = this.$positions;
		let positions = this._ctrl.positions;

		this.updatePositions($positions, positions);
		this.updateTransitions();
	}

	updatePositions($positions, positions) {
		$positions.forEach(elt => {
			for (let i = 0; i < positions.length; i++) {
				if (elt.id === positions[i].title) {
					elt.innerHTML = positions[i].chips;
					break;
				}
			}
		});
	}

	updateTransitions() {
		this._ctrl.bannedTransitions.forEach(elt => $('#' + elt).removeClass('disabled'));
		this._ctrl.updateTransitions();
		this._ctrl.bannedTransitions.forEach(elt => $('#' + elt).addClass('disabled'));
	}

}