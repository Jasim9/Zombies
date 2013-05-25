
var zombiePrefab1:GameObject;


private var zombie: int;
private var zombies:GameObject[];

var zombieMultiplier:int;
var wave : int;
var zombienum : int;

var frameCount=0;
var spawning:boolean;

function Start () {

	wave = 1;
	
	zombienum = zombieMultiplier*wave;
	
	zombie = 0;
	
	spawning=true;

}

function Update(){
	if (frameCount%311==0){
		SpawnZombie();
	}
	if (spawning)
		frameCount+=1+Random.Range(0,3);
	if (frameCount>1000)
		frameCount=1;
}

function SpawnZombie(){

	if (zombie < zombienum) {
		var Newposition=transform.position;
		Newposition.x+=Random.Range(-5,6);
		Newposition.z+=Random.Range(-5,6);
		Instantiate (zombiePrefab1, Newposition, transform.rotation); 
		zombie += 1;
	} 
	if (zombie==zombienum){
		spawning=false;
	}
}

function nextLevel(){
	wave+=1;
	zombie=0;
	zombienum=wave*zombieMultiplier;
	spawning=true;
}

function check(i:int){
	Debug.Log("Checking success"+i);
}

