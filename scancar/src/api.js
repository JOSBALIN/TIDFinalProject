import Parse from 'parse'
//Initialize SDK
 Parse.initialize('kBkP8zQ5gmsLZQ1UiZzB37HlcD6kRQP8cejp6V1H',
'DllqYKE8Uy0zwC6caULyJvHbuC2ynSUi1jMFuzXL');
 Parse.serverURL="https://parseapi.back4app.com/";


/**
 * @param 
 * @returns list of all cars mapped
 */
  export async function getAllCars() {
    try {
    let query = new Parse.Query('Car');
    // Run the query to retrieve all objects on Cars class, with their respective attributes
    let queryResult = await query.find();
    console.log(queryResult);
    // Mapping all rows to a map
    const carList = queryResult.map((car) => {return {carGroup: car.get("group"), carMake: car.get("make"), carModel: car.get("model"), carLicenseplateno: car.get("licenseplateno"),
    carStatus: car.get("status"), carFueltype: car.get("fueltype"), carNoofdoors: car.get("noofdoors"), carColor: car.get("color")}});    
    console.log(carList);
    return carList;
    } catch (error) {
        console.log(error);   
    }
  }
  
  /**
 * @param 
 * @returns list of all persons 
 */
  export async function getAllPersons() {
    try {
    let query = new Parse.Query('Person');
    let queryResult = await query.find();
    console.log(queryResult);
    // Mapping all rows to a map
    const personList = queryResult.map((person) => {return {personPhonenumber: person.get("phonenumber"), personAddress: person.get("address"), personDriverlicensenumber: person.get("driverlicensenumber"),
    personPersonid: person.get("personid"), personFullname: person.get("fullname")}});
    console.log(personList);
    return personList;
    } catch (error) {
        console.log(error);
    }
  }

  /**
 * @param 
 * @returns list of all bookings mapped
 */
  export async function getAllBookings() {
    try {
    let query = new Parse.Query('Booking');
    // Run the query to retrieve all objects of Booking class, and their respective attibutes
    let queryResult = await query.find();
    console.log(queryResult);
    // Mapping all rows to the map
    const bookingList = queryResult.map((booking) => {return {bookingBookingid: booking.get("bookingid"), bookingPickupdate: booking.get("pickupdate"),
    bookingPickuplocation: booking.get("pickuplocation"), bookingDropoffdate: booking.get("dropoffdate"), bookingDropofflocation: booking.get("dropofflocation"),
    bookingPersonid: booking.get("personid"), bookingStatus: booking.get("status"), bookingLicenseplateno: booking.get("licenseplateno")}});
    console.log(bookingList);
    return bookingList;
    } catch (error) {
        console.log(error);
    }
  }

  /**
 * @param 
 * @returns list of all parking lots 
 * @description lotnoid is a candidate key = location+region+lotno 
 */
  export async function getAllParkinglots() {
    try {
    //create your Parse Query retreiving the parkinglot Class, and their respective attributes
    let query = new Parse.Query('Parkinglot');
    
    let queryResult = await query.find();
    console.log(queryResult);
    // Mapping all parkinglots to the map 
    const parkinglotList = queryResult.map((parkinglot) => {return {parkinglotLocation: parkinglot.get("location"), parkinglotLotno: parkinglot.get("lotno"),
    parkinglotLicenseplateno: parkinglot.get("licenseplateno"), parkinglotRegion: parkinglot.get("region"), parkinglotLotnoid: parkinglot.get("lotnoid")}});
    console.log(parkinglotList);
    return parkinglotList;
    } catch (error) {
        console.log(error);
    }
  }


