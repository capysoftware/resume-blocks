import DashboardHeading from "@/components/page-heading";
import PersonalInfoEditForm from "./personal-info-edit-form";
import { User2Icon } from "lucide-react";

export default function EditPersonalInfoPage() {
  return (
    <>
      <DashboardHeading icon={User2Icon} title="Edit Personal Info" />
      <PersonalInfoEditForm />
    </>
  );
}
