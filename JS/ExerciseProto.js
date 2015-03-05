function Exercise(name, path, duration, constraints){
	this.name = name;
	this.path = path;
	this.duration = duration;
	this.constraints = constraints;
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

Exercise.prototype.hasConstraint = function(c){
	return this.constraints.indexOf(c) >= 0;
}

Exercise.prototype.getConstraints = function(){
	return this.constraints;
}

Exercise.prototype.printConstraints = function(){
	console.log(this.constraints);
}