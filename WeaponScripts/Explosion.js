
var explosionTime=1;
var explosionRadius=5;
var power=2000;

function Start(){
	// destroy in x seconds to allow playing audio and animation
	Destroy(gameObject,explosionTime);
	
	// find nearby objects
	var colliders: Collider[]=Physics.OverlapSphere(transform.position,explosionRadius);
	for (var hit in colliders){
		if (hit.rigidbody)
		{
			hit.rigidbody.AddExplosionForce(power,transform.position,explosionRadius);
		}
	}
	
	// if particle emitter present 
	if (particleEmitter){
		particleEmitter.emit=true;
		yield WaitForSeconds(0.5);
		particleEmitter.emit=false;
	}
}