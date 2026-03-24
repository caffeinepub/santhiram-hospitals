import Text "mo:core/Text";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Order "mo:core/Order";

actor {
  type Appointment = {
    name : Text;
    phone : Text;
    email : Text;
    department : Text;
    preferredDate : Int;
    message : Text;
    timestamp : Int;
  };

  module Appointment {
    public func compare(appointment1 : Appointment, appointment2 : Appointment) : Order.Order {
      Int.compare(appointment1.timestamp, appointment2.timestamp);
    };
  };

  type ContactSubmission = {
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  module ContactSubmission {
    public func compare(contact1 : ContactSubmission, contact2 : ContactSubmission) : Order.Order {
      Int.compare(contact1.timestamp, contact2.timestamp);
    };
  };

  type Department = {
    name : Text;
    description : Text;
  };

  module Department {
    public func compare(department1 : Department, department2 : Department) : Order.Order {
      Text.compare(department1.name, department2.name);
    };
  };

  type Doctor = {
    name : Text;
    specialty : Text;
    qualification : Text;
    experience : Text;
  };

  module Doctor {
    public func compare(doctor1 : Doctor, doctor2 : Doctor) : Order.Order {
      Text.compare(doctor1.name, doctor2.name);
    };
  };

  type Testimonial = {
    patientName : Text;
    message : Text;
    rating : Nat;
  };

  module Testimonial {
    public func compare(testimonial1 : Testimonial, testimonial2 : Testimonial) : Order.Order {
      Text.compare(testimonial1.patientName, testimonial2.patientName);
    };
  };

  type Stats = {
    beds : Nat;
    doctors : Nat;
    years : Nat;
    patients : Nat;
  };

  let appointments = Map.empty<Text, Appointment>();
  let contacts = Map.empty<Text, ContactSubmission>();
  let departments = Map.empty<Text, Department>();
  let doctors = Map.empty<Text, Doctor>();
  let testimonials = Map.empty<Text, Testimonial>();

  var stats : Stats = {
    beds = 0;
    doctors = 0;
    years = 0;
    patients = 0;
  };

  // Appointment Booking
  public shared ({ caller }) func bookAppointment(name : Text, phone : Text, email : Text, department : Text, preferredDate : Int, message : Text) : async Text {
    let appointmentId = name.concat(Time.now().toText());
    let appointment : Appointment = {
      name;
      phone;
      email;
      department;
      preferredDate;
      message;
      timestamp = Time.now();
    };
    appointments.add(appointmentId, appointment);
    appointmentId;
  };

  // Get all appointments (admin)
  public query ({ caller }) func getAllAppointments() : async [Appointment] {
    appointments.values().toArray().sort();
  };

  // Contact Form Submission
  public shared ({ caller }) func submitContactForm(name : Text, phone : Text, email : Text, message : Text) : async Text {
    let contactId = name.concat(Time.now().toText());
    let contact : ContactSubmission = {
      name;
      phone;
      email;
      message;
      timestamp = Time.now();
    };
    contacts.add(contactId, contact);
    contactId;
  };

  // Get all contact submissions (admin)
  public query ({ caller }) func getAllContacts() : async [ContactSubmission] {
    contacts.values().toArray().sort();
  };

  // Departments Management
  public shared ({ caller }) func addDepartment(name : Text, description : Text) : async () {
    let department : Department = { name; description };
    departments.add(name, department);
  };

  public query ({ caller }) func getAllDepartments() : async [Department] {
    departments.values().toArray().sort();
  };

  // Doctor Profiles Management
  public shared ({ caller }) func addDoctor(name : Text, specialty : Text, qualification : Text, experience : Text) : async () {
    let doctor : Doctor = {
      name;
      specialty;
      qualification;
      experience;
    };
    doctors.add(name, doctor);
  };

  public query ({ caller }) func getAllDoctors() : async [Doctor] {
    doctors.values().toArray().sort();
  };

  // Testimonials Management
  public shared ({ caller }) func addTestimonial(patientName : Text, message : Text, rating : Nat) : async () {
    if (rating < 1 or rating > 5) {
      Runtime.trap("Rating must be between 1 and 5");
    };
    let testimonial : Testimonial = {
      patientName;
      message;
      rating;
    };
    testimonials.add(patientName, testimonial);
  };

  public query ({ caller }) func getAllTestimonials() : async [Testimonial] {
    testimonials.values().toArray().sort();
  };

  // Stats Management
  public shared ({ caller }) func updateStats(beds : Nat, doctors : Nat, years : Nat, patients : Nat) : async () {
    stats := {
      beds;
      doctors;
      years;
      patients;
    };
  };

  public query ({ caller }) func getStats() : async Stats {
    stats;
  };
};
