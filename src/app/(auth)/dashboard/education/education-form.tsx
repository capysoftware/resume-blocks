import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { z } from "zod";

const educationFormSchema = z.object({
  schoolName: z.string().min(1),
  degree: z.string().min(1),
  startDate: z.date(),
  endDate: z.date().optional(),
});

export default function EducationForm() {
  return (
    <AutoForm formSchema={educationFormSchema}>
      <AutoFormSubmit className="w-full">Add Education</AutoFormSubmit>
    </AutoForm>
  );
}
