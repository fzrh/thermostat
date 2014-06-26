function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true;
}

Thermostat.prototype.minimumTemperature = function() {
  return 10;
}

Thermostat.prototype.maximumTemperature = function() {
  return 25;
}