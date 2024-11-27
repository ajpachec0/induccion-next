"use client";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useContactForm } from "./use-contact-form";

export const ContactoForm = () => {
  const { form, isLoading, onSubmit } = useContactForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese nombre" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese teléfono" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese mensaje" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Edad</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ingrese edad"
                  {...field}
                  type="number"
                  onChange={(e) => {
                    const value = parseInt(e.target.value);

                    console.log(value);
                    form.setValue("age", value);
                  }}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* {JSON.stringify(form.watch(), null, 2)} */}

        <Button type="submit">
          {isLoading ? (
            <Loader2 size={24} className="animate-spin mr-2" />
          ) : null}
          Enviar
        </Button>
      </form>
    </Form>
  );
};
