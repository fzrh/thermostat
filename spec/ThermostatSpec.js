describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('is initially at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20)
  })

  it('power saving mode is enabled by default', function(){
    expect(thermostat.powerSavingMode).toBe(true)
  })

  it('minimum temperature is 10 degrees', function(){
    expect(thermostat.minimumTemperature()).toEqual(10);
  })

  it('maximum temperature is 25 degrees with power saving mode on', function(){
    expect(thermostat.maximumTemperature()).toEqual(25);
  })

  it('maximum temperature is 32 degrees with power saving mode off', function(){
    thermostat.powerSavingMode = false;
    expect(thermostat.maximumTemperature()).toEqual(32);
  })

})