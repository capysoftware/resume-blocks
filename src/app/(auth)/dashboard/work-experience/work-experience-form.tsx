import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { DependencyType } from "@/components/ui/auto-form/types";
import { z } from "zod";

const workExperienceFormSchema = z.object({
  companyName: z.string().min(1),
  position: z.string().min(1),
  isCurrentJob: z.boolean().optional().describe("Is this your current job?"),
  startDate: z.date(),
  endDate: z.date().optional(),
  description: z.string().min(1),
});

export default function WorkExperienceForm() {
  return (
    <AutoForm
      formSchema={workExperienceFormSchema}
      dependencies={[
        {
          sourceField: "isCurrentJob",
          type: DependencyType.HIDES,
          targetField: "endDate",
          when: (isCurrentJob) => isCurrentJob === true,
        },
      ]}
    >
      <AutoFormSubmit className="w-full">Add Work Experience</AutoFormSubmit>
    </AutoForm>
  );
}
