import { SignIn } from "@clerk/nextjs"

const SigninPage = () => {
  return (
    <SignIn afterSignOutUrl='/'/>
  )
}

export default SigninPage