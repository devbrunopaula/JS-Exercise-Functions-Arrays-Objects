// ⭐️ Example Challenge start ⭐️

/**
 * ### Challenge `addNumbers`
 * 
 * @instructions
 * This function should be able to take two numbers as arguments
 * and return the result of adding them together.
 * 
 * For example, if we invoke `addNumbers` passing 5 and 3,
 * the returned value should be 8.
 *
 * NOTE: This example has been completed for you.
*/
function addNumbers(num1, num2) {
    return num1 + num2;
  }
  
  // ⭐️ Example Challenge end ⭐️
  
  
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  
  /**
   * ### Challenge `sayGoodbye`
   * 
   * @instructions
   * This function should take an a name as an argument,
   * and return a string that says 'Goodbye, {name}. Have a great day.'
   * 
   * For example, if we invoke `sayGoodbye`
   * passing 'Andy' as the argument,
   * the returned value should look like: 'Goodbye, Andy. Have a great day.'
   * 
  */
  
  
  function sayGoodbye(name) {
    
  return `Goodbye, ${name}. Have a great day.`
  }
  
  
  // console.log(sayGoodbye('Bruno'))
  
  
  
  
  /**
   * ### Challenge `temperatureCtoF`
   * 
   * @instructions
   * This function should take an a temperature in celsius as an argument,
   * and return the temperature in fahrenheit, rounded to the nearest whole number. 
   * 
   * For example, if we invoke `temperatureCtoF`
   * passing 24 as the argument,
   * the returned value should be: 75
   * 
   * Hint 1: The formula for converting celsius to fahrenheit is t*9/5 + 32 where t is the temperature in celsius.
   * Hint 2: There is a very easy way to round numbers in JS. Do a google search to find out how. 
  */
  const temperatureCtoF = c => Math.round(c * 9 / 5 + 32)
  
  // console.log(temperatureCtoF(24)) // ==> 75
  
  /**
   * ### Challenge `temperatureInF`
   * 
   * @instructions
   * This function should take an a temperature and a unit (either 'F' or 'C') as arguments,
   * and return the temperature in fahrenheit, rounded to the nearest whole number. 
   * 
   * For example, if we invoke `temperatureInF`
   * passing 88, 'F' as the arguments,
   * the returned value should be: '88F'
   * 
   * If we invoke `temperatureInF`
   * passing 24, 'C' as the arguments,
   * the returned value should be: '75F'
   * 
   * Hint: You can call your `temperatureCtoF` function from inside `temperatureInF`.
  */
   const temperatureInF = (temp, unit) => unit === 'F' ? `${temp}F` : `${temperatureCtoF(temp)}F`
  
  
   
  // console.log(temperatureInF(88, 'F')) // ==> '88F' 
  // console.log(temperatureInF(24, 'C')) // ==> '75F' 			
  
  /**
   * ### Challenge `makePersonObject`
   * 
   * @instructions
   * This function should take an id, a name and an email as arguments,
   * and return an object with `id`, `name` and `email` properties.
   * 
   * For example, if we invoke `makePersonObject`
   * passing 5, 'Leia' and 'leia@leia.com' as arguments,
   * the returned value should look like:
   * {
   *   id: 5,
   *   name: "Leia",
   *   email: "leia@leia.com",
   * }
  */
  function makePersonObject(id, name, email) {
    const obj = {
      id: id,
      name: name,
      email: email 
    }
    
    return obj
  }
  
  // console.log(makePersonObject(5, 'Leia', 'leia@leia.com')) // ==> {
                                                  //     id: 5,
                                                  //     name: "Leia",
                                                  //     email: "leia@leia.com",
                                                  //   }
  
  
  /**
   * ### Challenge `getName`
   * 
   * @instructions
   * This function takes as its only argument
   * an object containing a `name` property,
   * and return a string that reads `Hello, my name is {name}`,
   * where `{name}` is the name stored in the object.
   * 
   * For example, if we invoke `getName`
   * passing { id: 1, name: 'Leia', email: 'leia@leia.com` } as the argument,
   * the returned value should look like `Hello, my name is Leia`.
  */
  
  
  const getName = obj => `Hello, my name is ${obj.name}.`
  
  // const obj = { id: 1, name: 'Leia', email: 'leia@leia.com' }
  
  // console.log(getName(obj)) // ==> `Hello, my name is Leia`,
  
  
  /**
   * ### Challenge `appleIndex`
   * 
   * @instructions
   * This function takes as its only argument an array 
   * containing strings,
   * and returns the index in the array of the string 'apple'.
   * 
   * You may assume the string 'apple' will appear exactly 
   * once in the array.
   * 
   * For example, if we invoke `appleIndex`
   * passing in [ 'orange', 'grape', 'apple', 'banana', 'mango' ] as the argument,
   * the returned value should be: 2.
  */
  
  
  const appleIndex = arr => arr.indexOf('apple')
  
  const array = [ 'orange', 'grape', 'apple', 'banana', 'mango' ]
  
  // for(let i = 0; i < array.length; i++){
  // 	 if(array[i] === 'apple'){
  // 		 console.log(i)
  // 	 }
  // }
  
  // console.log(appleIndex(array)) // ==> 2
  
  
  
  
  /**
   * ### Challenge `isItAnApple`
   * 
   * @instructions
   * This function takes as its only argument an array 
   * containing strings,
   * and returns an array of equal length containing the `true`
   * if the corresponding entry in the original array is 'apple' 
   * and `false` if it is anything else.
   * 
   * 
   * For example, if we invoke `isItAnApple`
   * passing in [ 'orange', 'apple', 'banana', 'apples', 'apple', 'mango' ] as the argument,
   * the returned value should be: [ false, true, false, false, true, false ].
   * 
  */
  
  const Fruits = [ 'orange', 'apple', 'banana', 'apples', 'apple', 'mango' ];
  
  function isItAnApple(array) {
  
      const newArray = []
  
      for(let i = 0; i < array.length; i++){
  
          // if the element equals to apple, add true to the array.
              if( array[i] === 'apple'){
                  newArray.push(true)
              }
              else { 	// else add false to the array.
               newArray.push(false)
          }
      }
  
  return newArray
  
  }
  
  //console.log(isItAnApple(Fruits)) // ==>  [ false, true, false, false, true, false ]
  
  
  
  /*
  // ⭐️ Example Test Data ⭐️
  */
  // var inventory = [
  //   { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  //   { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  //   { id: 3, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  //   { id: 4, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  //   { id: 5, car_make: "Mitsubishi", car_model: "Galant", car_year: 1990 },
  //   { id: 6, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  //   { id: 7, car_make: "Smart", car_model: "Fortwo", car_year: 2009 },
  //   { id: 8, car_make: "Audi", car_model: "4000CS Quattro", car_year: 1987 },
  //   { id: 9, car_make: "Ford", car_model: "Windstar", car_year: 1996 },
  //   { id: 10, car_make: "Mercedes-Benz", car_model: "E-Class", car_year: 2000 },
  //   { id: 11, car_make: "Infiniti", car_model: "G35", car_year: 2004 },
  //   { id: 12, car_make: "Lotus", car_model: "Esprit", car_year: 2004 },
  //   { id: 13, car_make: "Chevrolet", car_model: "Cavalier", car_year: 1997 },
  //   { id: 14, car_make: "Dodge", car_model: "Ram Van 1500", car_year: 1999 }
  //]
  //   /// ... Truncated
  
  
  /**
    * ### Example Array Challenge:
    * 
    * @instructions
    * get3rdCar() should return the string `The car is a Land Rover Defender Ice Edition`
    * 
    *
    * NOTE: This example has been completed for you.
  **/
  function get3rdCar(inventory) {
    return `The car is a ${inventory[2].car_make} ${inventory[2].car_model}`
  }
  
  // console.log(get3rdCar(inventory)) // ==> `The car is a Land Rover Defender Ice Edition`
  
  
  
  
  
  
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  
  
  /**
   * ### Challenge `getCarInfoByIndex`
   * 
   * @instructions
   * getCarInfoByIndex takes two arguments:
   *     (1) an array which is an inventory of cars like the preview above (see ⭐️ Preview Test Data ⭐️)
   *     (2) a number which is the desired index in the array.
   * getCarInfoByIndex returns a string in the format `This is a {car_make} {car_model}`
   * 
   * For example, if getCarInfoByIndex is invoked with the inventory and the number 0,
   * it will return `This is a Lincoln Navigator`.
  */
  
  
  
  function getCarInfoByIndex(array, index) {
    
      const car = array[index]
      
      const string = `This is a ${car.car_make} ${car.car_model}`
      
      return string 
  }
  
  // console.log(getCarInfoByIndex(inventory, 0))// ==> `This is a Lincoln Navigator`
  
  /**
   * ### Challenge `getLastCarInfo`
   * 
   * @instructions
   * getLastCarInfo takes a single argument:
   *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
   * getLastCarInfo returns a string in the format `This is a {car_make} {car_model}
   * 
   * For example, if getLastCarInfo is invoked passing the inventory inside /data/inventory.js,
   * it will return `This is a Lincoln Town Car`.
  */
  function getLastCarInfo(inventory) {
    const lastCarIndex = inventory.length - 1
    const car = inventory[lastCarIndex]
    const string = `This is a ${car.car_make} ${car.car_model}`
    return string
  }
  
  // console.log(getLastCarInfo(inventory)) // ==> This is a Lincoln Town Car
  
  /**
   * ### Challenge `getModelYears`
   * 
   * @instructions
   * We need the years from every car in the inventory!
   * getModelYears takes a single argument:
   *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
   * getModelYears returns an array containing all the 'car_year's in the inventory.
  */
  function getModelYears(array) {
    
      const years = []
  
      for(let i = 0; i < array.length; i++){
           years.push(array[i].car_year)
      }
  
      return years
  
  }
  
  // console.log(getModelYears(inventory)) // ==> 'car_year's in the inventory'
  
  
  /**
   * ### Challenge `getCarInfoById`
   *  * * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
   * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
   * 
   * @instructions
   * getCarInfoById takes two arguments:
   *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
   *     (2) a number which is the desired car id (see how each car has its own unique id).
   * getCarInfoById returns a string in the format `This is a {car_make} {car_model}
   * 
   * For example, if getCarInfoById is invoked with the inventory and the number 1,
   * it will return `This is a Lincoln Navigator`.
  */
  function getCarInfoById(arr, id) {
    
    for (let i = 0; i < arr.length; i++) {
      const string = `This is a ${arr[i].car_make} ${arr[i].car_model}`
      if (arr[i].id === id) {
        return string
      }
    }
  }
  
  //console.log(getCarInfoById(inventory, 1)) // ==> This is a Lincoln Navigator
  /**
   * ### Challenge `getOlderCars`
   * * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
   * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
   * 
   * @instructions
   * We need a utility to find older cars!
   * getOlderCars takes two arguments:
   *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
   *     (2) a number which is the desired max year.
   * getOlderCars returns an array containing all the cars
   * with a `car_year` which is at most the given desired max year,
   * in the same order as they appear in the original inventory.
  */
  function getOlderCars(array, maxYear) {
   
   const olderCars = []
  
    for(let i = 0; i < array.length; i++){
  
          // returns an array containing all the cars older tham the max year.
  
          if(array[i].car_year <= maxYear){
              olderCars.push(`${array[i].car_year} ${array[i].car_make} ${array[i].car_model}`)
          }
      }
  
   
      return olderCars
  }
  
  
  
  // console.log(getOlderCars(inventory, 2000)) // ==> [1964 Pontiac GTO]
  
  /**
   * ### Challenge `getGermanCars`
   * * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
   * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
   * 
   * @instructions
   * We need a utility to find German cars!
   * getGermanCars takes a single argument:
   *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
   * getGermanCars returns an array containing all the cars
   * made by either `Audi` or `Mercedes-Benz` or `Volkswagen` or `BMW`,
   * in the same order as they appear in the original inventory.
  */
  function getGermanCars(arr) {
    // create array with all german brands
    const germanCars = ['Audi', 'BMW', 'Mercedes-Benz', 'Volkswagen']
  
    // create new array with all the german cars
    const newArr = []
  
    // loop through arr and check if car_make is included in germanCars array
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < germanCars.length; j++) {
        if (arr[i].car_make === germanCars[j]) {
          const string = `${arr[i].car_year} ${arr[i].car_make} ${arr[i].car_model}`
          newArr.push(string)
        }
      }
    }
    return newArr
  }
  
  //console.log(getGermanCars(inventory)) // ==> Return all german cars `Audi` or `Mercedes-Benz` or `Volkswagen` or `BMW`
  
  /**
   * ### Challenge `carMaker`
   * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
   * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
   * 
   * @instructions
   * This function takes a single odometer argument (a number) and returns an object.
   * The returned object has the following characteristics:
   *     it has an `odometer` property that contains the argument passed in.
   *     it has a `drive` method that takes a distance as its argument, and
   *         (1) causes the odometer in the object to be increased by the distance,
   *         (2) returns the updated value of the `odometer`.
  */
  function carMaker(odometer) {
          let obj = {
              odometer: odometer,
              drive: function(distance) {
          return this.odometer + distance
                  }
          }
      return obj 
  }
  //console.log(carMaker(2).drive(2)) // ==> retun upadated odemer value 
  
  
  
  
  
  /// ////// END OF CHALLENGE /////////
  /// ////// END OF CHALLENGE /////////
  /// ////// END OF CHALLENGE /////////
  if (typeof exports !== 'undefined') {
    // IGNORE: Test/Env Detected
    // For Node/Non-browser test env
    module.exports = module.exports || {}
    if (addNumbers) { module.exports.addNumbers = addNumbers }
    if (sayGoodbye) { module.exports.sayGoodbye = sayGoodbye }
    if (temperatureCtoF) { module.exports.temperatureCtoF = temperatureCtoF }
    if (temperatureInF) { module.exports.temperatureInF = temperatureInF }
    if (makePersonObject) { module.exports.makePersonObject = makePersonObject }
    if (getName) { module.exports.getName = getName }
    if (appleIndex) { module.exports.appleIndex = appleIndex }
  
    if (isItAnApple) { module.exports.isItAnApple = isItAnApple }
    
  
    
    if (carMaker) { module.exports.carMaker = carMaker }
    if (getCarInfoByIndex) { module.exports.getCarInfoByIndex = getCarInfoByIndex }
    if (getLastCarInfo) { module.exports.getLastCarInfo = getLastCarInfo }
    if (getCarInfoById) { module.exports.getCarInfoById = getCarInfoById }
  
    if (getModelYears) { module.exports.getModelYears = getModelYears }
    if (getOlderCars) { module.exports.getOlderCars = getOlderCars }
    if (getGermanCars) { module.exports.getGermanCars = getGermanCars }
   
  }
  