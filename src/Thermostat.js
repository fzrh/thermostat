function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true;
}

Thermostat.prototype.minimumTemperature = function() {
  return 10;
};

Thermostat.prototype.maximumTemperature = function() {
  if (this.powerSavingMode) {
  	return 25; } 
  else { return 32; }
};

Thermostat.prototype.warmer = function() {
	if (this.temperature < this.maximumTemperature()) {
		this.temperature +=1; }
};

Thermostat.prototype.cooler = function() {
  if(this.temperature > this.minimumTemperature()) {
    this.temperature -= 1; }
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function() {
  if(this.temperature >= 25) return 'high';
};