import { newUserAction } from "@/action/new-user.action";
import {
  contactFormSchema,
  ContactFormValues,
} from "@/validations/contact-form-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
      age: 0,
    },
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsLoading(true);

    const { data, message } = await newUserAction(values);

    console.log(data, message);

    setIsLoading(false);
  };

  return {
    form,
    isLoading,
    onSubmit,
  };
};
