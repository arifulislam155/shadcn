import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <main className="h-full flex justify-center items-center flex-col">
      <div>Chai Page</div>
      <Button variant="chai" size="sm">
        Shadcn Button
      </Button>
    </main>
  );
};

export default page;
