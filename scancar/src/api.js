import Parse from "parse"
//Initialize SDK
 Parse.initialize("kBkP8zQ5gmsLZQ1UiZzB37HlcD6kRQP8cejp6V1H",
"DllqYKE8Uy0zwC6caULyJvHbuC2ynSUi1jMFuzXL");
 Parse.serverURL="https://parseapi.back4app.com/";

/* CRUD api calls
//create* are create operation, creating a object of the specified type with the mandatory fields associated to the obejct.
Any non mandatory pointer attributes will be in seperate calls
*/

// Creates a car without associating it with a booking
async function createCarWithoutBooking(props) {         
    try {
        const Car = Parse.Object.extend("Car");
        const thisCar = new Car();

        const lotquery = new Parse.Query("Parkinglot")
        lotquery.equalTo("lotno", props.lotno)

        let temp = await lotquery.find();
        var lotnobjectid = JSON.parse(JSON.stringify(temp))
        console.log(lotnobjectid[0].objectId)
        var lotnoPointer = {
            __type: "Pointer",
            className: "Parkinglot",
            objectId: lotnobjectid[0].objectId,
        };

        thisCar.set("status", props.status);
        thisCar.set("fueltype", props.fueltype);
        thisCar.set("color", props.color);
        thisCar.set("make", props.make);
        thisCar.set("model", props.model);
        thisCar.set("group", props.group);
        thisCar.set("noofdoors", props.noofdoors);
        thisCar.set("licenseplateno", props.licenseplateno);
        thisCar.set("lotno", lotnoPointer);

        const result = await thisCar.save();
        console.log("Car created", result);

    } catch (error) {
        console.error("Error while creating Car: ", error);
    }
}

// Creates a car and associates it with a existing booking
async function createCarWithBooking(props) {         
    try {
        const Car = Parse.Object.extend("Car");
        const thisCar = new Car();

        const lotquery = new Parse.Query("Parkinglot")
        lotquery.equalTo("lotno", props.lotno)

        let temp = await lotquery.find();
        var lotnobjectid = JSON.parse(JSON.stringify(temp))
        console.log(lotnobjectid[0].objectId)
        var lotnoPointer = {
            __type: "Pointer",
            className: "Parkinglot",
            objectId: lotnobjectid[0].objectId,
        };
        
        const bookingquery = new Parse.Query("Booking")
        bookingquery.equalTo("bookingid", props.bookingid)

        let temp1 = await bookingquery.find();
        var bookingobjectid = JSON.parse(JSON.stringify(temp1))
        console.log(bookingobjectid[0].objectId)
        var bookingPointer = {
            __type: "Pointer",
            className: "Booking",
            objectId: bookingobjectid[0].objectId,
        };

        thisCar.set("status", props.status);
        thisCar.set("fueltype", props.fueltype);
        thisCar.set("color", props.color);
        thisCar.set("make", props.make);
        thisCar.set("model", props.model);
        thisCar.set("group", props.group);
        thisCar.set("noofdoors", props.noofdoors);
        thisCar.set("licenseplateno", props.licenseplateno);
        thisCar.set("lotno", lotnoPointer);
        thisCar.set("bookings", bookingPointer);

        const result = await thisCar.save();
        console.log("Car created", result);

    } catch (error) {
        console.error("Error while creating Car: ", error);
    }
}

// Create person without associating them to a booking
async function createPersonWithoutBooking(props) {         
    try {
        const Person = Parse.Object.extend("Person");
        const thisPerson = new Person();

        thisPerson.set("phonenumber", props.phonenumber);
        thisPerson.set("address", props.address);
        thisPerson.set("driverlicenseno", props.driverlicenseno);
        thisPerson.set("fullname", props.fullname);
        thisPerson.set("bookings", null);
        const result = await thisPerson.save();
        console.log("Person created", result);
    } catch (error) {
        console.error("Error while creating Person: ", error)
    }
}

// Create a new booking and associate it with a existing car and person 
async function createBookingWithExistingPersonAndExistingCar(props) {    
    try {
        // Finding person objectid
        const personquery = new Parse.Query("Person")
        personquery.equalTo("fullname", "Elton John")
        const carquery = new Parse.Query("Car")
        carquery.equalTo("licenseplateno", "ak047")

        try {
        let temp = await personquery.find();
        var personobjectid = JSON.parse(JSON.stringify(temp))
        console.log("Person object id" + personobjectid[0].objectId)
        var personPointer = {
            __type: "Pointer",
            className: "Person",
            objectId: personobjectid[0].objectId,
        };
        // Finding car objectid
        

        let temp1 = await carquery.find();
        var carobjectid = JSON.parse(JSON.stringify(temp1))
        console.log("Car object id:" + carobjectid[0].objectId)
        var carPointer = {
            __type: "Pointer",
            className: "Car",
            objectId: carobjectid[0].objectId,
        };
        } catch (error) {
            console.error("Here is one " + error)
        }
        // Creating new booking object
        const Booking = Parse.Object.extend("Booking");
        const thisBooking = new Booking();
        
        // Setting properties
        thisBooking.set("bookingid", "8");
        thisBooking.set("pickupdate", new Date());
        thisBooking.set("dropoffdate", new Date());
        thisBooking.set("dropofflocation", "Nordhavn");
        thisBooking.set("pickuplocation", "Hellerup");
        thisBooking.set("status", "Delivered");
        thisBooking.set("fullname", personPointer);
        thisBooking.set("licenseplateno", carPointer);

        try {
            const result = await thisBooking.save();
        console.log("Booking created", result);
        
        // Finding newly created booking objectid
        const bookingquery = new Parse.Query("Booking")
        bookingquery.equalTo("bookingid", "8")
        let temp2 = await bookingquery.find();
        var bookingobjectid = JSON.parse(JSON.stringify(temp2))
        console.log("Booking object id" + bookingobjectid[0].objectId)
        var bookingPointer = {
            __type: "Pointer",
            className: "Booking",
            objectId: bookingobjectid[0].objectId,
        };

        } catch (error) {
            
        }
        
    } catch (error) {
        console.error("Error while creating Booking: ", error);
    }
        const updatePersonQuery = new Parse.Query("Person");
        const personQuery = new Parse.Query("Person");

        const updateCarQuery = new Parse.Query("Car");
        const carQuery = new Parse.Query("Car");

     try {
        
            // Updating person booking pointer to newly created booking
        personQuery.equalTo("fullname", "Elton John")
        let temp1 = await personQuery.find();
        var personobjectid = JSON.parse(JSON.stringify(temp1))
        console.log("Person object id " + personobjectid[0].objectId)
        const personObject  = await updatePersonQuery.get(personobjectid[0].objectId)
        personObject.set("bookings", bookingPointer);


        // Updating car booking pointer to newly created booking
        carQuery.equalTo("licenseplateno", "ak047");
        let temp2 = await carQuery.find();
        var carobjectid = JSON.parse(JSON.stringify(temp2))
        console.log("Car object id " + carobjectid[0].objectId)
        const carObject = await updateCarQuery.get(carobjectid[0].objectId)
        carObject.set("bookings", bookingPointer)

        try {
        const updatedPerson = await personObject.save();
        console.log("Updated person" + updatedPerson)
        console.log(updatedPerson.get("bookings"));

        const updatedCar = await carObject.save();
        console.log("Updated car" + updatedCar)
        console.log(updatedCar.get("bookings"));
        
        } catch (error) {
            
        }
        } catch (error) {
            console.error("Error whilst updating" + error)
        }
}


// Create a booking and associates a new person and an existing car with it 
async function createBookingWithPersonAndExistingCar() {    
    
    // Create person without associating them to a booking
    try {
        const Person = Parse.Object.extend("Person");
        const thisPerson = new Person();

        thisPerson.set("phonenumber", "99887766");
        thisPerson.set("address", "Jagtvej 122");
        thisPerson.set("driverlicenseno", "55321");
        thisPerson.set("fullname", "Georg Jensen");
        
        const result = await thisPerson.save();
        console.log("Person created", result);
    } catch (error) {
        console.error("Error while creating Person: ", error)
    }
    
    try {
        // Finding person objectid
        const personquery = new Parse.Query("Person")
        personquery.equalTo("fullname", "Georg Jensen")
        const carquery = new Parse.Query("Car")
        carquery.equalTo("licenseplateno", "cc093")

        try {
        let temp = await personquery.find();
        var personobjectid = JSON.parse(JSON.stringify(temp))
        console.log("Person object id" + personobjectid[0].objectId)
        var personPointer = {
            __type: "Pointer",
            className: "Person",
            objectId: personobjectid[0].objectId,
        };
        // Finding car objectid
        

        let temp1 = await carquery.find();
        var carobjectid = JSON.parse(JSON.stringify(temp1))
        console.log("Car object id:" + carobjectid[0].objectId)
        var carPointer = {
            __type: "Pointer",
            className: "Car",
            objectId: carobjectid[0].objectId,
        };
        } catch (error) {
            console.error("Here is one" + error)
        }
        // Creating new booking object
        const Booking = Parse.Object.extend("Booking");
        const thisBooking = new Booking();
        
        // Setting properties
        thisBooking.set("bookingid", "6");
        thisBooking.set("pickupdate", new Date());
        thisBooking.set("dropoffdate", new Date());
        thisBooking.set("dropofflocation", "Nordhavn");
        thisBooking.set("pickuplocation", "Nordhavn");
        thisBooking.set("status", "Delivered");
        thisBooking.set("fullname", personPointer);
        thisBooking.set("licenseplateno", carPointer);

        try {
            const result = await thisBooking.save();
        console.log("Booking created", result);
        
        // Finding newly created booking objectid
        const bookingquery = new Parse.Query("Booking")
        bookingquery.equalTo("bookingid", "6")
        let temp2 = await bookingquery.find();
        var bookingobjectid = JSON.parse(JSON.stringify(temp2))
        console.log("Booking object id" + bookingobjectid[0].objectId)
        var bookingPointer = {
            __type: "Pointer",
            className: "Booking",
            objectId: bookingobjectid[0].objectId,
        };

        } catch (error) {
            
        }
        
    } catch (error) {
        console.error("Error while creating Booking:1 ", error);
    }
        const updatePersonQuery = new Parse.Query("Person");
        const personQuery = new Parse.Query("Person");

        const updateCarQuery = new Parse.Query("Car");
        const carQuery = new Parse.Query("Car");

     try {
        
            // Updating person booking pointer to newly created booking
        personQuery.equalTo("fullname", "Georg Jensen")
        let temp1 = await personQuery.find();
        var personobjectid = JSON.parse(JSON.stringify(temp1))
        console.log("Person object id " + personobjectid[0].objectId)
        const personObject  = await updatePersonQuery.get(personobjectid[0].objectId)
        personObject.set("bookings", bookingPointer);


        // Updating car booking pointer to newly created booking
        carQuery.equalTo("licenseplateno", "cc093");
        let temp2 = await carQuery.find();
        var carobjectid = JSON.parse(JSON.stringify(temp2))
        console.log("Car object id " + carobjectid[0].objectId)
        const carObject = await updateCarQuery.get(carobjectid[0].objectId)
        carObject.set("bookings", bookingPointer)

        try {
        const updatedPerson = await personObject.save();
        console.log("Updated person" + updatedPerson)
        console.log(updatedPerson.get("bookings"));

        const updatedCar = await carObject.save();
        console.log("Updated car" + updatedCar)
        console.log(updatedCar.get("bookings"));
        
        } catch (error) {
            
        }
        } catch (error) {
            console.error("Error whilst updating" + error)
        }
}


/* getAll* api calls are read operations, retrieving all objects of a given class.  
*/
/**
 * @param 
 * @returns list of all cars mapped
 */
  export async function getAllCars() {
    try {
    let query = new Parse.Query("Car");
    
    query.include("lotno");
    query.include("bookings")
    
    // Run the query to retrieve all objects on Cars class, with their respective attributes
    let queryResult = await query.find();
    console.log(queryResult);
    // Mapping all rows to a map
    const carList = queryResult.map((car) => {return {carGroup: car.get("group"), carMake: car.get("make"), carModel: car.get("model"), carLicenseplateno: car.get("licenseplateno"),
    carStatus: car.get("status"), carFueltype: car.get("fueltype"), carNoofdoors: car.get("noofdoors"), carColor: car.get("color"),
    carParkingLotno: car.get("lotno").get("lotno"), carBooking: car.get("bookings").get("bookingid")}});    
    console.log("Cars retrieved" + carList);
    return carList;
    } catch (error) {
        console.log("Error retrieving cars" + error);   
    }
  }

  /**
 * @param 
 * @returns list of all persons 
 */
  export async function getAllPersons() {
    try {
    let query = new Parse.Query("Person");
    let queryResult = await query.find();
    console.log(queryResult);
    // Mapping all rows to a map
    const personList = queryResult.map((person) => {return {personPhonenumber: person.get("phonenumber"), personAddress: person.get("address"), personDriverlicensenumber: person.get("driverlicenseno"),
    personPersonid: person.get("personid"), personFullname: person.get("fullname")}});
    console.log("Persons retrieved" + personList);
    return personList;
    } catch (error) {
        console.log("Error while retrieving persons" + error);
    }
  }

  
  /**
 * @param 
 * @returns list of all bookings mapped
 */
  export async function getSpecificBooking(props) {
    try {
    let query = new Parse.Query("Booking");
    // Run the query to retrieve all objects of Booking class, and their respective attibutes
    query.include("licenseplateno")
    query.include("fullname")
    query.include("address")
    query.include("phonenumber")
    query.include("group")
    query.equalTo("bookingid", props)
    
    
    let queryResult = await query.find();
    
    console.log(queryResult);
    // Mapping all rows to the map
    const booking = queryResult.map((booking) => {return {bookingid: booking.get("bookingid"), bookingPickupdate: booking.get("pickupdate"),
    bookingPickuplocation: booking.get("pickuplocation"), bookingDropoffdate: booking.get("dropoffdate"), bookingDropofflocation: booking.get("dropofflocation"),
    bookingStatus: booking.get("status"), bookingLicenseplateno: booking.get("licenseplateno").get("licenseplateno"), bookingFullname: booking.get("fullname").get("fullname"),
    bookingaddress: booking.get("fullname").get("address"), bookingcargroup: booking.get("licenseplateno").get("group"),
    bookingphonenumber: booking.get("fullname").get("phonenumber")}});
    console.log("Booking retrieved" + booking);
    return booking;
    } catch (error) {
        console.log("Error while retrieving bookings" + error);
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
    let query = new Parse.Query("Parkinglot");
    
    let queryResult = await query.find();
    console.log(queryResult);
    // Mapping all parkinglots to the map 
    const parkinglotList = queryResult.map((parkinglot) => {return {parkinglotLocation: parkinglot.get("location"), parkinglotLotno: parkinglot.get("lotno"),
    parkinglotLicenseplateno: parkinglot.get("licenseplateno"), parkinglotRegion: parkinglot.get("region"), parkinglotLotnoid: parkinglot.get("lotnoid")}});
    console.log("Parkinglots retrieved" + parkinglotList);
    return parkinglotList;
    } catch (error) {
        console.log("Error while retrieving parkinglots" + error);
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
      pickupdate: booking.get("pickupdate"), dropoffdate: booking.get("dropoffdate"), status: booking.get("status")
     }});
      console.log("Booking info retrieved" + allBookingInfoList);
      return allBookingInfoList;
    } catch (error) {
      console.log("Error while retrieving essential booking info" + error);
    }
  }

/* update* api calls are update operations, updating a specified object of a given class.  
*/

// Update the booking for a given person 
async function updatePersonBooking() {
    const updatePersonQuery = new Parse.Query("Person");
    const bookingQuery = new Parse.Query("Booking")
    const personQuery = new Parse.Query("Person")
        
    try {
        // Finding newly created booking objectid
        bookingQuery.equalTo("bookingid", "5")
        let temp = await bookingQuery.find();
        var bookingobjectid = JSON.parse(JSON.stringify(temp))
        console.log("Booking object id " + bookingobjectid[0].objectId)
        var bookingPointer = {
            __type: "Pointer",
            className: "Booking",
            objectId: bookingobjectid[0].objectId,
        };
        
        personQuery.equalTo("fullname", "Donald Duck")
        let temp1 = await personQuery.find();
        var personobjectid = JSON.parse(JSON.stringify(temp1))
        console.log("Person object id " + personobjectid[0].objectId)
        const personObject  = await updatePersonQuery.get(personobjectid[0].objectId)
        personObject.set("bookings", bookingPointer);

        try {
        const updatedPerson = await personObject.save();
        console.log("Updated person" + updatedPerson)
        console.log(updatedPerson.get("bookings"));
        } catch (error) {
            console.error("trouble1" + error)
        }

        
    } catch (error) {
        console.error("trouble" + error)
    }
}

// Update the booking for a given car
async function updateCarBooking(props) {
    const updateCarQuery = new Parse.Query("Car");
    const bookingquery = new Parse.Query("Booking")
    const carquery = new Parse.Query("Car")
        
    try {
        // Finding newly created booking objectid
        bookingquery.equalTo("bookingid", "5")
        let temp = await bookingquery.find();
        var bookingobjectid = JSON.parse(JSON.stringify(temp))
        console.log("Booking object id " + bookingobjectid[0].objectId)
        var bookingPointer = {
            __type: "Pointer",
            className: "Booking",
            objectId: bookingobjectid[0].objectId,
        };

        carquery.equalTo("licenseplateno", "cc093")
        let temp1 = await carquery.find();
        var carobjectid = JSON.parse(JSON.stringify(temp1))
        console.log("Car object id " + carobjectid[0].objectId)
        
        
        const carObject  = await updateCarQuery.get(carobjectid[0].objectId)
        
        carObject.set("bookings", bookingPointer);
        try {
        const updatedCar = await carObject.save();
        console.log("Updated car" + updatedCar)
        console.log(updatedCar.get("bookings"));
        } catch (error) {
            console.error("trouble1" + error)
        }

        
    } catch (error) {
        console.error("trouble" + error)
    }
}