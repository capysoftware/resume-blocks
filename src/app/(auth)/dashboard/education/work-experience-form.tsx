import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { z } from "zod";

const workExperienceFormSchema = z.object({
  companyName: z.string().min(1),
  position: z.string().min(1),
  startDate: z.date(),
  endDate: z.date().optional(),
  description: z.string().min(1),
});

export default function WorkExperienceForm() {
  return (
    <AutoForm formSchema={workExperienceFormSchema}>
      <AutoFormSubmit className="w-full">Add Work Experience</AutoFormSubmit>
    </AutoForm>
  );
}
