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
    
    query.include("lotno");
    // Run the query to retrieve all objects on Cars class, with their respective attributes
    let queryResult = await query.find();
    console.log(queryResult);
    // Mapping all rows to a map
    const carList = queryResult.map((car) => {return {carGroup: car.get("group"), carMake: car.get("make"), carModel: car.get("model"), carLicenseplateno: car.get("licenseplateno"),
    carStatus: car.get("status"), carFueltype: car.get("fueltype"), carNoofdoors: car.get("noofdoors"), carColor: car.get("color"),
    carParkingLotno: car.get("lotno").get("lotno")}});    
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
    const personList = queryResult.map((person) => {return {personPhonenumber: person.get("phonenumber"), personAddress: person.get("address"), personDriverlicensenumber: person.get("driverlicenseno"),
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
    query.include("licenseplateno")
    let queryResult = await query.find();
    
    console.log(queryResult);
    // Mapping all rows to the map
    const bookingList = queryResult.map((booking) => {return {bookingid: booking.get("bookingid"), bookingPickupdate: booking.get("pickupdate"),
    bookingPickuplocation: booking.get("pickuplocation"), bookingDropoffdate: booking.get("dropoffdate"), bookingDropofflocation: booking.get("dropofflocation"),
    bookingStatus: booking.get("status"), bookingLicenseplateno: booking.get("licenseplateno").get("licenseplateno"), bookingFullname: booking.get("fullname").get("fullname")}});
    console.log(bookingList);
    console.log(bookingList[0].bookingDropoffdate.getMonth())
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

  export async function getAllBookingInfo() {
    try {
      let query = new Parse.Query("Booking");
      query.include("licenseplateno")
      query.include("driverlicenseno")
      query.include("address")
      query.include("phonenumber")
      query.include("fullname")
      query.include("group")
      let queryResult = await query.find();
      
      const allBookingInfoList = queryResult.map((booking) => {return {licenseplateno: booking.get("licenseplateno").get("licenseplateno"),
      driverlicenseno: booking.get("fullname").get("driverlicenseno"), address: booking.get("fullname").get("address"), phonenumber: booking.get("fullname").get("phonenumber"),
      fullname: booking.get("fullname").get("fullname"), cargroup: booking.get("licenseplateno").get("group"), location: booking.get("pickuplocation"), bookingid: booking.get("bookingid"),
      pickupdate: booking.get("pickupdate"), dropoffdate: booking.get("dropoffdate")
     }});
      console.log(allBookingInfoList);
      return allBookingInfoList;
    } catch (error) {
      console.log("error")
    }
  }