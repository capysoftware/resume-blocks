import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { z } from "zod";

const skillFormSchema = z.object({
  name: z.string().min(1),
});

export default function SkillForm() {
  return (
    <AutoForm formSchema={skillFormSchema}>
      <AutoFormSubmit className="w-full">Add Skill</AutoFormSubmit>
    </AutoForm>
  );
}
