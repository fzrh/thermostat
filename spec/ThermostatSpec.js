describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('is initially at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('power saving mode is enabled by default', function(){
    expect(thermostat.powerSavingMode).toBe(true);
  });

  it('minimum temperature is 10 degrees', function(){
    expect(thermostat.minimumTemperature()).toEqual(10);
  });

  it('maximum temperature is 25 degrees with power saving mode on', function(){
    expect(thermostat.maximumTemperature()).toEqual(25);
  });

  it('maximum temperature is 32 degrees with power saving mode off', function(){
    thermostat.powerSavingMode = false;
    expect(thermostat.maximumTemperature()).toEqual(32);
  });

  it('temperature can be increased if < 25', function(){
    thermostat.warmer();
    expect(thermostat.temperature).toEqual(21);
  });

  it('temperature can be decreased if > 10', function(){
    thermostat.cooler();
    expect(thermostat.temperature).toEqual(19);
  });

  it('temperature resets to 20', function(){
    thermostat.temperature = 25;
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it('the energy usage is high when usage is >=25', function(){
    thermostat.temperature = 26;
    expect(thermostat.energyUsage()).toEqual('high')
  });

  it('the energy usage is low when usage is <18', function(){
    thermostat.temperature = 16;
    expect(thermostat.energyUsage()).toEqual('low')
  });

});