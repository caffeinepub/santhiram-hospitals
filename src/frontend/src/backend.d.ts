import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Stats {
    beds: bigint;
    patients: bigint;
    doctors: bigint;
    years: bigint;
}
export interface Doctor {
    name: string;
    experience: string;
    specialty: string;
    qualification: string;
}
export interface Department {
    name: string;
    description: string;
}
export interface Appointment {
    name: string;
    email: string;
    message: string;
    preferredDate: bigint;
    timestamp: bigint;
    phone: string;
    department: string;
}
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface Testimonial {
    message: string;
    patientName: string;
    rating: bigint;
}
export interface backendInterface {
    addDepartment(name: string, description: string): Promise<void>;
    addDoctor(name: string, specialty: string, qualification: string, experience: string): Promise<void>;
    addTestimonial(patientName: string, message: string, rating: bigint): Promise<void>;
    bookAppointment(name: string, phone: string, email: string, department: string, preferredDate: bigint, message: string): Promise<string>;
    getAllAppointments(): Promise<Array<Appointment>>;
    getAllContacts(): Promise<Array<ContactSubmission>>;
    getAllDepartments(): Promise<Array<Department>>;
    getAllDoctors(): Promise<Array<Doctor>>;
    getAllTestimonials(): Promise<Array<Testimonial>>;
    getStats(): Promise<Stats>;
    submitContactForm(name: string, phone: string, email: string, message: string): Promise<string>;
    updateStats(beds: bigint, doctors: bigint, years: bigint, patients: bigint): Promise<void>;
}
