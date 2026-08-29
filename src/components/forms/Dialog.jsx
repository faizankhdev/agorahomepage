import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export function DialogDemo({child}) {
  return (
    <Dialog>
      <form>
        <DialogTrigger render={child}/>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader className="text-center">
            <DialogTitle className="text-center text-2xl">Welcome to Agora</DialogTitle>
            <DialogDescription className="text-lg">
              Sign in or create an account
            </DialogDescription>
            <Button type="submit" className="cursor-pointer bg-white text-black border border-gray-400 rounded-2xl h-10 hover:bg-gray-200"><Image width={20} height={20} src="/googleIcon.svg" alt="Not"/>Continue with Google</Button>
            <FieldGroup>
            <Field>
              <Label htmlFor="name-1" className="mt-6 text-[15px]">Email Address</Label>
              <Input id="name-1" name="name" defaultValue="Example@gmail.com" className="rounded-xl h-10" />
               <Button type="submit" className="cursor-pointer bg-white text-black border border-gray-400 rounded-2xl h-10 hover:bg-gray-200">Continue</Button>
            </Field>
          </FieldGroup>
          </DialogHeader>
        </DialogContent>
      </form>
    </Dialog>
  )
}
