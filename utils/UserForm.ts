import { z } from "zod";

export const Step1FormSchema = z.object({
  fullname: z.string().min(1, "Full Name is required"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  phoneNumber: z.string().min(10, "Phone Number must be at least 10 digits"),
});

export const Step2FormSchema = z.object({
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  zipcode: z.string().min(5, "Zipcode must be at least 5 digit"),
});

export const Step3FormSchema = z
  .object({
    username: z.string().min(4, "Username must be at least 4 characters"),
    password: z.string().min(6, "Password must be 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// Types
export type Step1FormData = z.infer<typeof Step1FormSchema>;
export type Step2FormData = z.infer<typeof Step2FormSchema>;
export type Step3FormData = z.infer<typeof Step3FormSchema>;

export type Step1FormErrors = Partial<Record<keyof Step1FormData, string[]>>;
export type Step2FormErrors = Partial<Record<keyof Step2FormData, string[]>>;
export type Step3FormErrors = Partial<Record<keyof Step3FormData, string[]>>;
