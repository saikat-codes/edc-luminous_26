import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { event } from "@/data/luminous";
import { registrationHref } from "@/lib/registration";

export function RegisterButton({ className }: { className?: string }) {
  const href = registrationHref(event);
  if (href) return <Button asChild className={className}><a href={href}>Register <ArrowUpRight /></a></Button>;
  return (
    <Dialog>
      <DialogTrigger asChild><Button className={className}>Register <ArrowUpRight /></Button></DialogTrigger>
      <DialogContent className="section-light max-w-[calc(100%-2rem)] sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Registration coming soon</DialogTitle>
          <DialogDescription>Registration for LUMINOUS 10.0 has not opened yet. The registration link will be available here when it opens.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}