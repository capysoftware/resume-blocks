"use client";

import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { z } from "zod";

const personalInfoFormSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1).optional(),
  address: z.string().min(1).optional(),
  website: z.string().url().min(1).optional(),
  professionalSummary: z.string().min(1).optional(),
});

type PersonalInfoFormSchema = z.infer<typeof personalInfoFormSchema>;

export default function PersonalInfoEditForm() {
  return (
    <Card>
      <CardHeader />
      <CardContent>
        <AutoForm
          formSchema={personalInfoFormSchema}
          fieldConfig={{
            professionalSummary: {
              fieldType: "textarea",
            },
          }}
        >
          <AutoFormSubmit className="w-full">Save Changes</AutoFormSubmit>
        </AutoForm>
      </CardContent>
      <CardFooter />
    </Card>
  );
}
