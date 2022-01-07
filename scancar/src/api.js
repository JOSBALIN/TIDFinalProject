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
        // Create a new car object
        const Car = Parse.Object.extend("Car");
        const thisCar = new Car();

        const lotquery = new Parse.Query("Parkinglot")
        lotquery.equalTo("lotno", props.lotno)

        // Find the requested parkinglot and retrieve its object id and create a lotno pointer
        let temp = await lotquery.find();
        var lotnobjectid = JSON.parse(JSON.stringify(temp))
        console.log(lotnobjectid[0].objectId)
        var lotnoPointer = {
            __type: "Pointer",
            className: "Parkinglot",
            objectId: lotnobjectid[0].objectId,
        };

        // Set properties of new car object
        thisCar.set("status", props.status);
        thisCar.set("fueltype", props.fueltype);
        thisCar.set("color", props.color);
        thisCar.set("make", props.make);
        thisCar.set("model", props.model);
        thisCar.set("group", props.group);
        thisCar.set("noofdoors", props.noofdoors);
        thisCar.set("licenseplateno", props.licenseplateno);
        thisCar.set("lotno", lotnoPointer);

        // Save changes and push to server
        const result = await thisCar.save();
        console.log("Car created", result);

    } catch (error) {
        console.error("Error while creating Car: ", error);
    }
}

// Creates a car and associates it with a existing booking
async function createCarWithBooking(props) {         
    try {
        // Creating a new car object
        const Car = Parse.Object.extend("Car");
        const thisCar = new Car();

        // Find the requested parkinglot and retrieve its object id and create a lotno pointer
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
        
        // Find the requested booking with and retriece its object id and create a booking pointer
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

        // Set properties of new car object
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
        // Creating a new person object
        const Person = Parse.Object.extend("Person");
        const thisPerson = new Person();

        // Setting new person object properties with a bookings value of null
        thisPerson.set("phonenumber", props.phonenumber);
        thisPerson.set("address", props.address);
        thisPerson.set("driverlicenseno", props.driverlicenseno);
        thisPerson.set("fullname", props.fullname);
        thisPerson.set("bookings", null);

        // Saving changes
        const result = await thisPerson.save();
        console.log("Person created", result);
    } catch (error) {
        console.error("Error while creating Person: ", error)
    }
}

// Create a new booking and associate it with a existing car and person 
async function createBookingWithExistingPersonAndExistingCar(props) {    
    try {
        // Quering specific person and retrieving its object id and create a person pointer variable
        const personquery = new Parse.Query("Person")
        personquery.equalTo("fullname", props.fullname)
        const carquery = new Parse.Query("Car")
        carquery.equalTo("licenseplateno", props.licenseplateno)
        
        try {
          let temp = await personquery.find();
          var personobjectid = JSON.parse(JSON.stringify(temp))
          console.log("Person object id" + personobjectid[0].objectId)
          var personPointer = {
            __type: "Pointer",
            className: "Person",
            objectId: personobjectid[0].objectId,
          };
          
          // Quering specific car and retrieving its object id and create a car pointer variable
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
        thisBooking.set("bookingid", props.newbookingid);
        thisBooking.set("pickupdate", props.newpickupdatetime);
        thisBooking.set("dropoffdate", props.newdropoffdatetime);
        thisBooking.set("dropofflocation", props.newdropofflocation);
        thisBooking.set("pickuplocation", props.newpickuplocation);
        thisBooking.set("status", props.newstatus);
        thisBooking.set("fullname", personPointer);
        thisBooking.set("licenseplateno", carPointer);

        try {
        
          const result = await thisBooking.save();
          console.log("Booking created", result);
        
        // Finding newly created booking objectid
        const bookingquery = new Parse.Query("Booking")
        bookingquery.equalTo("bookingid", props.newbookingid)
        let temp2 = await bookingquery.find();
        var bookingobjectid = JSON.parse(JSON.stringify(temp2))
        console.log("Booking object id " + bookingobjectid[0].objectId)
        var bookingPointer = {
            __type: "Pointer",
            className: "Booking",
            objectId: bookingobjectid[0].objectId,
        };

        } catch (error) {
            console.error("Problem finding new booking object " + error)
        }
        
    } catch (error) {
        console.error("Error while creating Booking: " + error);
    }
        const updatePersonQuery = new Parse.Query("Person");
        const personQuery = new Parse.Query("Person");

        const updateCarQuery = new Parse.Query("Car");
        const carQuery = new Parse.Query("Car");

     try {
        
        // Updating person booking pointer to newly created booking and finding person and car objects again
        personQuery.equalTo("fullname", props.fullname )
        let temp1 = await personQuery.find();
        var personobjectid = JSON.parse(JSON.stringify(temp1))
        console.log("Person object id " + personobjectid[0].objectId)
        const personObject  = await updatePersonQuery.get(personobjectid[0].objectId)
        personObject.set("bookings", bookingPointer);


        // Updating car booking pointer to newly created booking
        carQuery.equalTo("licenseplateno", props.licenseplateno);
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
            console.error("Problems while finding person and car objects" + error)
        }
        } catch (error) {
            console.error("Error whilst updating " + error)
        }
}


// Create a new person and new booking, then associate new person with new booking and existin car with new booking
// then update the new person's and existing car's booking pointer to the newly created booking
export async function createBookingWithPersonAndExistingCar(props) {    
    
    // Create new person object without associating them to a booking
    try {
        const Person = Parse.Object.extend("Person");
        const thisPerson = new Person();
        // set properties of new person
        thisPerson.set("phonenumber", props.phonenumber);
        thisPerson.set("address", props.address);
        thisPerson.set("driverlicenseno", props.driverlicenseno);
        thisPerson.set("fullname", props.fullname);
        // complete and save new person object
        const result = await thisPerson.save();
        console.log("Person created", result);
    } catch (error) {
        console.error("Error while creating Person: ", error)
    }
    
    try {
        // Creating queries for the newly created person object and existing car
        const personquery = new Parse.Query("Person")
        personquery.equalTo("fullname", props.fullname)
        const carquery = new Parse.Query("Car")
        carquery.equalTo("licenseplateno", props.licenseplateno)

        try {

        // Finding person objectid and defining pointer
        let temp = await personquery.find();
        var personobjectid = JSON.parse(JSON.stringify(temp))
        console.log("Person object id" + personobjectid[0].objectId)
        var personPointer = {
            __type: "Pointer",
            className: "Person",
            objectId: personobjectid[0].objectId,
        };

        // Finding car objectid and defining pointer
        let temp1 = await carquery.find();
        var carobjectid = JSON.parse(JSON.stringify(temp1))
        console.log("Car object id:" + carobjectid[0].objectId)
        var carPointer = {
            __type: "Pointer",
            className: "Car",
            objectId: carobjectid[0].objectId,
        };
        } catch (error) {
            console.error("Error finding car or person" + error)
        }
        // Creating new booking object
        const Booking = Parse.Object.extend("Booking");
        const thisBooking = new Booking();
        
        // Setting properties of new booking object
        thisBooking.set("bookingid", props.newbookingid);
        thisBooking.set("pickupdate", props.newpickupdatetime);
        thisBooking.set("dropoffdate", props.newdropoffdatetime);
        thisBooking.set("dropofflocation", props.newdropofflocation);
        thisBooking.set("pickuplocation", props.newpickuplocation);
        thisBooking.set("status", props.newstatus);
        thisBooking.set("fullname", personPointer);
        thisBooking.set("licenseplateno", carPointer);

        try {
            const result = await thisBooking.save();
        console.log("Booking created", result);
        
        // Finding newly created booking objectid
        const bookingquery = new Parse.Query("Booking")
        bookingquery.equalTo("bookingid", props.newbookingid)
        let temp2 = await bookingquery.find();
        var bookingobjectid = JSON.parse(JSON.stringify(temp2))
        console.log("Booking object id" + bookingobjectid[0].objectId)
        var bookingPointer = {
            __type: "Pointer",
            className: "Booking",
            objectId: bookingobjectid[0].objectId,
        };

        } catch (error) {
            console.error("Problem finding booking object " + error)
        }
        
    } catch (error) {
        console.error("Error while creating Booking ", error);
    }   
        // Creating new queries for the person and car class again after setting properties for newly created booking
        const updatePersonQuery = new Parse.Query("Person");
        const personQuery = new Parse.Query("Person");

        const updateCarQuery = new Parse.Query("Car");
        const carQuery = new Parse.Query("Car");

     try {
        
        // Updating person booking pointer to newly created booking pointer
        personQuery.equalTo("fullname", props.fullname)
        let temp1 = await personQuery.find();
        var personobjectid = JSON.parse(JSON.stringify(temp1))
        console.log("Person object id " + personobjectid[0].objectId)
        const personObject  = await updatePersonQuery.get(personobjectid[0].objectId)
        personObject.set("bookings", bookingPointer);


        // Updating car booking pointer to newly created booking pointer
        carQuery.equalTo("licenseplateno", props.licenseplateno);
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
 * @abstract read function for retrieving all existing objects of the car class
 */
  export async function getAllCars() {
    try {
    // Creating new query for the car class, include pointer keys to retrieve associated information
    let query = new Parse.Query("Car");
    query.include("lotno");
    query.include("bookings")
    let queryResult = await query.find();
    
    // Run the query to retrieve all objects on Cars class, with their respective attributes
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
 * @abstract read function for retrieving all persons in the database and their asdociated data
 */
  export async function getAllPersons() {
    try {
    // Creating new query for the person class, include pointer key to retrieve associated information
    let query = new Parse.Query("Person");
    query.include("bookings")
    let queryResult = await query.find();
    console.log(queryResult);
    // Mapping all rows to a map
    const personList = queryResult.map((person) => {return {
    phonenumber: person.get("phonenumber"),
    address: person.get("address"),
    driverlicenseno: person.get("driverlicenseno"),
    bookings: person.get("bookings").get("bookingid"),
    personFullname: person.get("fullname")
    }});
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
    // Creating new booking query
    let query = new Parse.Query("Booking");

    // Run the query to retrieve all attributes of the specified booking object and related class information
    query.equalTo("bookingid", props)
    query.include("licenseplateno")
    query.include("fullname")
    query.include("address")
    query.include("phonenumber")
    query.include("group")
    let queryResult = await query.find();
    console.log(queryResult);

    // Mapping all info to a map
    const booking = queryResult.map((booking) => {return {
    bookingid: booking.get("bookingid"),
    bookingPickupdate: booking.get("pickupdate"),
    bookingPickuplocation: booking.get("pickuplocation"),
    bookingDropoffdate: booking.get("dropoffdate"),
    bookingDropofflocation: booking.get("dropofflocation"),
    bookingStatus: booking.get("status"),
    bookingLicenseplateno: booking.get("licenseplateno").get("licenseplateno"), 
    bookingFullname: booking.get("fullname").get("fullname"),
    bookingaddress: booking.get("fullname").get("address"),
    bookingphonenumber: booking.get("fullname").get("phonenumber"),
    bookingcargroup: booking.get("licenseplateno").get("group")
    }});
    console.log("Booking retrieved " + booking);
    return booking;
    } catch (error) {
        console.log("Error while retrieving bookings " + error);
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
    const parkinglotList = queryResult.map((parkinglot) => {return {
    parkinglotLocation: parkinglot.get("location"),
    parkinglotLotno: parkinglot.get("lotno"),
    parkinglotLicenseplateno: parkinglot.get("licenseplateno"),
    parkinglotLotnoid: parkinglot.get("lotnoid")
    }});
    console.log("Parkinglots retrieved " + parkinglotList);
    return parkinglotList;
    } catch (error) {
        console.log("Error while retrieving parkinglots " + error);
    }
  }

  export async function getAllBookingInfo() {
    let query = new Parse.Query("Booking");
    try {
      query.include("licenseplateno")
      query.include("driverlicenseno")
      query.include("address")
      query.include("phonenumber")
      query.include("fullname")
      query.include("group")
      
      let queryResult = await query.find();
      
      const allBookingInfoList = queryResult.map((booking) => {return {
      licenseplateno: booking.get("licenseplateno").get("licenseplateno"),
      driverlicenseno: booking.get("fullname").get("driverlicenseno"),
      address: booking.get("fullname").get("address"), 
      phonenumber: booking.get("fullname").get("phonenumber"),
      fullname: booking.get("fullname").get("fullname"),
      cargroup: booking.get("licenseplateno").get("group"), 
      location: booking.get("pickuplocation"),
      bookingid: booking.get("bookingid"),
      pickupdate: booking.get("pickupdate"),
      dropoffdate: booking.get("dropoffdate"),
      status: booking.get("status")
     }});
      console.log("Booking info retrieved " + allBookingInfoList);
      return allBookingInfoList;
    } catch (error) {
      console.log("Error while retrieving essential booking info " + error);
    }
  }

/* update* api calls are update operations, updating a specified object of a given class.  
*/

// Update the booking for a given existing person 
async function updatePersonBooking(props) {
    const updatePersonQuery = new Parse.Query("Person");
    const bookingQuery = new Parse.Query("Booking")
    const personQuery = new Parse.Query("Person")
        
    try {
        // Finding newly created booking objectid
        bookingQuery.equalTo("bookingid", props.bookingid)
        let temp = await bookingQuery.find();
        var bookingobjectid = JSON.parse(JSON.stringify(temp))
        console.log("Booking object id " + bookingobjectid[0].objectId)
        var bookingPointer = {
            __type: "Pointer",
            className: "Booking",
            objectId: bookingobjectid[0].objectId,
        };
        
        personQuery.equalTo("fullname", props.fullname)
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
            console.error("Error finding person object " + error)
        }
    } catch (error) {
        console.error("troError updating booking for person " + error)
    }
}

// Update the booking for a existing given car
async function updateCarBooking(props) {
    const updateCarQuery = new Parse.Query("Car");
    const carquery = new Parse.Query("Car")
    const updateBookingQuery = new Parse.Query("Booking");
    const bookingquery = new Parse.Query("Booking")
        
    try {
        // Finding newly created booking objectid
        bookingquery.equalTo("bookingid", props.bookingid)
        let temp = await bookingquery.find();
        var bookingobjectid = JSON.parse(JSON.stringify(temp))
        console.log("Booking object id " + bookingobjectid[0].objectId)
        var bookingPointer = {
            __type: "Pointer",
            className: "Booking",
            objectId: bookingobjectid[0].objectId,
        };
        
        carquery.equalTo("licenseplateno", props.licenseplateno)
        let temp1 = await carquery.find();
        var carobjectid = JSON.parse(JSON.stringify(temp1))
        console.log("Car object id " + carobjectid[0].objectId)
        const carObject  = await updateCarQuery.get(carobjectid[0].objectId)
        var carPointer = {
            __type: "Pointer",
            className: "Car",
            objectId: carobjectid[0].objectId,
        };
        bookingquery.equalTo("bookingid", props.bookingid)
        let temp2 = await bookingquery.find();
        var bookingobjectid = JSON.parse(JSON.stringify(temp2))
        console.log("Booking object id " + bookingobjectid[0].objectId)
        const bookingObject  = await updateBookingQuery.get(bookingobjectid[0].objectId)
        
        bookingObject.set("licenseplateno", carPointer)
        carObject.set("bookings", bookingPointer);
        
        try {
        const updatedCar = await carObject.save();
        const updatedBooking = await bookingObject.save();
        console.log("Updated car" + updatedCar)
        console.log(updatedCar.get("bookings"));
        console.log("Updated booking" + updatedBooking)
        console.log(updatedBooking.get("licenseplateno"));
        } catch (error) {
            console.error("problem " + error)
        }

        
    } catch (error) {
        console.error("problem " + error)
    }
}