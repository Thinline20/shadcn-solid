import { As } from "@kobalte/core"
import {
	Button,
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	TextFieldInput,
	TextFieldLabel,
	TextFieldRoot,
} from "~/components"

export const SheetDemo = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<As component={Button} variant="outline">
					Open
				</As>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Edit profile</SheetTitle>
					<SheetDescription>
						Make changes to your profile here. Click save when
						you're done.
					</SheetDescription>
				</SheetHeader>
				<div class="grid gap-4 py-4">
					<TextFieldRoot class="grid! grid-cols-4! items-center! gap-4!">
						<TextFieldLabel class="text-right">Name</TextFieldLabel>
						<TextFieldInput class="col-span-3" />
					</TextFieldRoot>
					<TextFieldRoot class="grid! grid-cols-4! items-center! gap-4!">
						<TextFieldLabel class="text-right">
							UserName
						</TextFieldLabel>
						<TextFieldInput class="col-span-3" />
					</TextFieldRoot>
				</div>
				<SheetFooter>
					<Button type="submit">Save changes</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}