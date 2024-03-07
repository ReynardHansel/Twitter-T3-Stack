import { useSession } from "next-auth/react"


export function HeartButton(){
  //* useSession works
  
  const session = useSession()  
  // console.log(session)
    return (
      <h1>HeartButton here</h1>
    )
  }