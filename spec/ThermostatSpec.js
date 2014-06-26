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

})