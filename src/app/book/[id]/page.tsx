import { getBookById } from "@/books/helpers/book-calls-api";
import { Metadata } from "next";

interface Props{
    params: { id: string };
  
}

export async function generateMetadata({params}: Props):Promise<Metadata> {
    const book = await getBookById(params.id);
    return {
      title: `${book.id} - ${book.title}`,
      description: `Pagina del book ${book.author}`
    }
  }


  export default async function BookDetailPage ({ params }:Props) {
    const book = await getBookById(params.id);

    const isActive = (book.status === true) ? 'bg-green-500/20' : 'bg-slate-100 text-slate-500'
  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
    <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
      <div className="mt-2 mb-8 w-full">
        <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
          Id: {book.id} - {book.title}
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-4 px-2 w-full">

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Author</p>
            <div className="flex justify-center">
                <span>{ book.author }</span>
            </div>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
          <p className="text-sm text-gray-600">In stock</p>
          <div className="flex justify-center">
            <span>{ book.stock.quantity }</span>
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
          <p className="text-sm text-gray-600">Status</p>
          <div className="flex justify-center">
            <div className="w-max">
                <div
                    className={`
                    relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap
                    ${isActive}
                    `}>
                    <span className="">{ (book.status)? 'Active': 'Inactive'}</span>
                </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  </div>
  )
}
