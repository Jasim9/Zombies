
var corpseRemovalTime:int;

function Start () {
	// Destroy our corpse after x seconds
	Destroy (gameObject, corpseRemovalTime);
}
