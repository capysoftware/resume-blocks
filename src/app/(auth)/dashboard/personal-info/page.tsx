import { Card } from "@/components/ui/card";
import { User2Icon } from "lucide-react";

export default function PersonalInfoPage() {
  return (
    <>
      <div className="flex items-center gap-4 mb-6">
        <User2Icon className="size-10" />
        <h1 className="text-2xl font-bold">Personal Overview</h1>
      </div>
      <PersonalInfoCard />
    </>
  );
}

function PersonalInfoCard() {
  return (
    <Card className="">
      <div className="space-y-2">
        <PersonalInfoItem label="Full Name" value="John Doe" />
        <PersonalInfoItem label="Email" value="john.doe@example.com" />
        <PersonalInfoItem label="Phone" value="123-456-7890" />
        <PersonalInfoItem label="Address" value="1234 Main St, Anytown, USA" />
        <PersonalInfoItem label="Website" value="https://www.example.com" />
        <PersonalInfoItem
          label="Professional Summary"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget sapien."
        />
      </div>
    </Card>
  );
}

function PersonalInfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b px-6 py-4">
      <div className="flex items-center justify-between gap-6">
        <h2 className="text-lg font-medium">{label}</h2>
        <p>{value}</p>
      </div>
    </div>
  );
}
