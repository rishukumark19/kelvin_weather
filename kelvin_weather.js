// Kelvin Weather Converter
// Developed during Codecademy "Build Web Apps with React" skill path

// Enter temperature in Kelvin (can be modified as needed)
const kelvin = 293;

// Calculate Celsius temperature
const celsius = kelvin - 273;

// Calculate Fahrenheit temperature and round down
let fahrenheit = celsius * (9 / 5) + 32;
fahrenheit = Math.floor(fahrenheit);

// Display Fahrenheit result in the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// [Optional] Calculate Newton temperature and round down
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
