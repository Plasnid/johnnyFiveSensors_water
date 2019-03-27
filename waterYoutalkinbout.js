var five = require("johnny-five"),
  fsr, led;

(new five.Board()).on("ready", function() {

  // Create a new `fsr` hardware instance.
  fsr = new five.Sensor({
    pin: "A0",
    freq: 25
  });

  led = new five.Led(13);

  // Scale the sensor's value to the LED's brightness range
  fsr.scale([0, 255]).on("data", function() {

    // set the led's brightness based on force
    // applied to force sensitive resistor
    console.log(this.scaled);
    if(this.scaled>170){
        console.log("turning on led");
        led.on();
    }else{
        led.off();
    }
    
    //led.brightness(this.scaled);
  });
});