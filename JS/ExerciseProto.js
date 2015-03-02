function Exercise(name, path, duration){
	this.name = name;
	this.path = path;
	this.duration = duration;
}

Exercise.prototype.getName = function() {
	return this.name;
};

Exercise.prototype.getPath = function(){
	return this.path;
};

Exercise.prototype.getDuration = function(){
	return this.duration;
}; 

Exercise.prototype.getRandomDuration = function(max){
	if(max == null)
	{
		max = this.duration;
	}
	this.duration = Math.floor((Math.random() * max) + 1);
	return this.duration;
};

Exercise.prototype.setName = function(newName){
	this.name = newName;
};

Exercise.prototype.setPath = function(newPath){
	this.path = newPath;
};

Exercise.prototype.setDuration = function(newDuration){
	this.duration = newDuration;
};