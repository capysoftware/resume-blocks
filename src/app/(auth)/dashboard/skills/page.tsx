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
import { Trash2Icon, WrenchIcon } from "lucide-react";
import SkillForm from "./skill-form";

export default function SkillsPage() {
  return (
    <>
      <DashboardHeading icon={WrenchIcon} title="Skills" />
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full xl:w-fit" size="lg">
            Add Skill
          </Button>
        </DialogTrigger>
        <DialogContent>
          <SkillForm />
        </DialogContent>
      </Dialog>
      <ul className="space-y-2 mt-6">
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
      </ul>
    </>
  );
}

function SkillItem() {
  return (
    <li className="border p-4 rounded-md">
      <span>Javascript</span>
      <Button variant="ghost" className="ml-4" size="icon">
        <Trash2Icon className="size-4" />
      </Button>
    </li>
  );
}
