import PetriPosition from '../models/positionPetri.model.js';

const PetriPositionStorage = [
	new PetriPosition(1, 'p1', 1, {
		t1: { inner: 1, outer: 1 }
	}),
	new PetriPosition(2, 'p2', 0, {
		t1: { inner: 0, outer: 1 },
		t2: { inner: 2, outer: 0 }
	}),
	new PetriPosition(3, 'p3', 3, {
		t1: { inner: 0, outer: 1 },
		t2: { inner: 1, outer: 0 },
		t3: { inner: 0, outer: 1 }
	}),
	new PetriPosition(4, 'p4', 0, {
		t2: { inner: 0, outer: 1 },
		t3: { inner: 1, outer: 0 }
	}),
	new PetriPosition(5, 'p5', 0, {
		t1: { inner: 0, outer: 1 },
		t3: { inner: 1, outer: 0 }
	})
];

export default PetriPositionStorage;