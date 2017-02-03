var opts_accel = {
  lines: 12, // The number of lines to draw
  angle: 0, // The length of each line
  lineWidth: 0.30, // The line thickness
  pointer: {
    length: 0.78, // The radius of the inner circle
    strokeWidth: 0.050, // The rotation offset
    color: '#000000' // Fill color
  },
  limitMax: 'true',   // If true, the pointer will not go past the end of the gauge
  colorStart: '#6FADCF',   // Colors
  colorStop: '#8FC0DA',    // cor que vai enchendo
  strokeColor: '#E0E0E0',   // cor mais clara para dar um efeito legal
  generateGradient: true
};
var target_canvas_accelX = document.getElementById('gauge-accelX'); // your canvas element
var gauge_accelX = new Gauge(target_canvas_accelX).setOptions(opts_accel); // create sexy gauge!
gauge_accelX.maxValue = 16384; // set max gauge value
gauge_accelX.minValue = -16384;
gauge_accelX.animationSpeed = 1; // set animation speed (32 is default value)
gauge_accelX.set(0); // set actual value

var target_canvas_accelY = document.getElementById('gauge-accelY'); // your canvas element
var gauge_accelY = new Gauge(target_canvas_accelY).setOptions(opts_accel); // create sexy gauge!
gauge_accelY.maxValue = 16384; // set max gauge value
gauge_accelY.minValue = -16384;
gauge_accelY.animationSpeed = 1; // set animation speed (32 is default value)
gauge_accelY.set(0); // set actual value

var target_canvas_accelZ = document.getElementById('gauge-accelZ'); // your canvas element
var gauge_accelZ = new Gauge(target_canvas_accelZ).setOptions(opts_accel); // create sexy gauge!
gauge_accelZ.maxValue = 16384; // set max gauge value
gauge_accelZ.minValue = -16384;
gauge_accelZ.animationSpeed = 1; // set animation speed (32 is default value)
gauge_accelZ.set(0); // set actual value

var opts_gyro = {
  lines: 12, 
  angle: 0, 
  lineWidth: 0.30, 
  pointer: {
    length: 0.78, 
    strokeWidth: 0.050, 
    color: '#000000'
  },
  limitMax: 'true',   
  colorStart: '#6FADCF',   
  colorStop: '#6b86af',    
  strokeColor: '#E0E0E0',   
  generateGradient: true
};
var target_canvas_gyroX = document.getElementById('gauge-gyroX'); 
var gauge_gyroX = new Gauge(target_canvas_gyroX).setOptions(opts_gyro); 
gauge_gyroX.maxValue = 25000; 
gauge_gyroX.minValue = -25000;
gauge_gyroX.animationSpeed = 1; 
gauge_gyroX.set(0); 

var target_canvas_gyroY = document.getElementById('gauge-gyroY'); 
var gauge_gyroY = new Gauge(target_canvas_gyroY).setOptions(opts_gyro); 
gauge_gyroY.maxValue = 25000; 
gauge_gyroY.minValue = -25000;
gauge_gyroY.animationSpeed = 1; 
gauge_gyroY.set(0);

var target_canvas_gyroZ = document.getElementById('gauge-gyroZ'); 
var gauge_gyroZ = new Gauge(target_canvas_gyroZ).setOptions(opts_gyro); 
gauge_gyroZ.maxValue = 25000; 
gauge_gyroZ.minValue = -25000;
gauge_gyroZ.animationSpeed = 1; 
gauge_gyroZ.set(0);

var opts_temp = {
  lines: 12, 
  angle: 0, 
  lineWidth: 0.30, 
  pointer: {
    length: 0.78, 
    strokeWidth: 0.050, 
    color: '#000000'
  },
	percentColors: [[0.0, "#ffbaba" ], [0.50, "#ff6868"], [1.0, "#fc0000"]],
  limitMax: 'true',   
  colorStart: '#6FADCF',   
  colorStop: '#db2525',    
  strokeColor: '#E0E0E0',   
  generateGradient: true
};
var target_canvas_temp = document.getElementById('gauge-temp'); 
var gauge_temp = new Gauge(target_canvas_temp).setOptions(opts_temp); 
gauge_temp.maxValue = 50; 
gauge_temp.minValue = -15;
gauge_temp.animationSpeed = 1; 
gauge_temp.set(0); 

