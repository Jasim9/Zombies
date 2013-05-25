
var repeatTime:int;
var spawnPoints:GameObject;

private var i=0;

function Start () {
     InvokeRepeating("Check", 5, repeatTime);
}

function Check () {
	i++;
	var zombies:GameObject[]=GameObject.FindGameObjectsWithTag("RoboZombie"); 
	Debug.Log("Zombie count: "+zombies.Length);
	if (zombies.Length==0){
		var points:GameObject[];
		points=GameObject.FindGameObjectsWithTag("spawnPoint"); 
		Debug.Log("Length:"+points.length);
		for (var point: GameObject in points){
			var script=point.GetComponent(SpawnScript);
	//		script.check(i);
			script.nextLevel();
		}
	}
}

function Update () {
        // In standalone player we have to provide our own key
        // input for unlocking the cursor
        if (Input.GetKeyDown ("escape"))
            Screen.lockCursor = false;
            
        if (Input.GetKeyDown("m")){
        	Screen.lockCursor=true;
        }
}
