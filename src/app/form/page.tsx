"use client"

import { Ribbon } from 'lucide-react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";



// Import necessary modules and components

const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });
  
  export default function MyPage() {
    return (
      <div className="bg-slate-600 h-screen w-screen flex flex-col">
        {/* Black box at the top */}
        <div className="bg-black w-4/5 h-96 px-20 pb-20 pt-16 mx-auto">
          <Ribbon className='mx-auto w-20 h-20' />
          <h1 className="text-5xl font-bold text-white">Let’s talk about your</h1>
          <h1 className="text-5xl font-bold text-white mt-5">Dream Wedding</h1>
        </div>
  
        {/* Section below the black box */}
        <div className="flex-grow bg-white p-8">
          <ProfileForm />
        </div>
      </div>
    );
  }
  
  export function ProfileForm() {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
      },
    });
  
    // Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values);
    }
  
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
  }
  