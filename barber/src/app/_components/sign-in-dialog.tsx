import { DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog"
import Image from "next/image"
import { Button } from "./ui/button"
import { signIn } from "next-auth/react"

const SigInDialog = () => {
  const handleLoginWithGoogleClick = () => signIn("google")
  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça login na plataforma</DialogTitle>
        <DialogDescription>
          Conecte-se usando sua conta do Google.
        </DialogDescription>
      </DialogHeader>

      <Button
        variant="outline"
        className="gap-1 font-bold"
        onClick={handleLoginWithGoogleClick}
      >
        <Image
          src="/google.svg"
          width={18}
          height={18}
          alt="Fazer login com o Google"
        />
        Google
      </Button>
    </>
  )
}

export default SigInDialog
