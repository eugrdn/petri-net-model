export default class PetriPosition {

	constructor(id = 0, title = 'unknown', chips = 0, transitions = null) {
		this.id = id;
		this.title = title;
		this.chips = chips;
		this.transitions = transitions;
	}

}