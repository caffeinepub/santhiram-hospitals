import { useMutation, useQuery } from "@tanstack/react-query";
import type { Department, Doctor, Stats, Testimonial } from "../backend";
import { useActor } from "./useActor";

export function useGetDoctors() {
  const { actor, isFetching } = useActor();
  return useQuery<Doctor[]>({
    queryKey: ["doctors"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllDoctors();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetDepartments() {
  const { actor, isFetching } = useActor();
  return useQuery<Department[]>({
    queryKey: ["departments"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllDepartments();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetTestimonials() {
  const { actor, isFetching } = useActor();
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllTestimonials();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetStats() {
  const { actor, isFetching } = useActor();
  return useQuery<Stats>({
    queryKey: ["stats"],
    queryFn: async () => {
      if (!actor) {
        return {
          beds: BigInt(500),
          patients: BigInt(50000),
          doctors: BigInt(100),
          years: BigInt(15),
        };
      }
      return actor.getStats();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useBookAppointment() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      email: string;
      department: string;
      preferredDate: Date;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      const ts = BigInt(data.preferredDate.getTime());
      return actor.bookAppointment(
        data.name,
        data.phone,
        data.email,
        data.department,
        ts,
        data.message,
      );
    },
  });
}

export function useSubmitContact() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContactForm(
        data.name,
        data.phone,
        data.email,
        data.message,
      );
    },
  });
}
