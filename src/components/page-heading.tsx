interface DashboardHeadingProps {
  icon: React.ElementType;
  title: string;
}

export default function DashboardHeading({
  icon: Icon,
  title,
}: DashboardHeadingProps) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <Icon className="size-10" />
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
}
