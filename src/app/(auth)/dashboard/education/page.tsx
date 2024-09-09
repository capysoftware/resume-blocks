"use client";

import DashboardHeading from "@/components/page-heading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { GraduationCapIcon } from "lucide-react";
import EducationForm from "./education-form";

export default function EducationPage() {
  return (
    <>
      <DashboardHeading icon={GraduationCapIcon} title="Education" />
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full xl:w-fit" size="lg">
            Add Education
          </Button>
        </DialogTrigger>
        <DialogContent>
          <EducationForm />
        </DialogContent>
      </Dialog>
      <div className="space-y-2 mt-6">
        <EducationItem />
      </div>
    </>
  );
}

function EducationItem() {
  return (
    <Card>
      <CardHeader className="border-b flex justify-between md:flex-row">
        <div className="flex flex-col gap-2">
          <CardTitle>University of California, Los Angeles</CardTitle>
          <CardDescription>
            Bachelor of Science in Computer Science
          </CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <span>2021-2022</span>
        </div>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>
        <div className="grid grid-cols-2 gap-2 w-full md:w-fit ml-auto">
          <Button className="w-full md:w-fit">Edit</Button>
          <Button variant="destructive" className="w-full md:w-fit">
            Delete
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
