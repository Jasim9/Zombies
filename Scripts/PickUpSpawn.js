
var upgradeTime:int;
var upgradePrefab:GameObject;

function Start () {
	InvokeRepeating("Upgrades",5,upgradeTime);
}

function Upgrades(){
	var Newposition=transform.position;
	Newposition.x+=Random.Range(-10,11);
	Newposition.z+=Random.Range(-10,11);
	var spawnedPickup:GameObject =Instantiate (upgradePrefab, Newposition, transform.rotation);
	spawnedPickup.transform.parent = transform;
	
	Destroy(spawnedPickup,10);
}

