import DashboardHeading from "@/components/page-heading";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { User2Icon } from "lucide-react";
import Link from "next/link";

export default function PersonalInfoPage() {
  return (
    <>
      <DashboardHeading icon={User2Icon} title="Personal Overview" />
      <PersonalInfoCard />
      <div className="flex justify-end mt-6">
        <Link
          href="/dashboard/personal-info/edit"
          className={cn(buttonVariants({ size: "lg" }), "w-full")}
        >
          Edit
        </Link>
      </div>
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
