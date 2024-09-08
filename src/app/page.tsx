import { redirect } from "next/navigation";

export default function Home() {
  redirect('/book')
  return (
    <>
      <span className='text-5xl'>Hola Mundo</span>
    </>
  )
}
