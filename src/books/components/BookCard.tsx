"use client"
import Link from "next/link"
import { SimpleBook } from "../interfaces/SimpleBook";
interface Props {
    book: SimpleBook;
    deleteBookAction: (id: number,) => Promise<SimpleBook|void>
    changeBookStatus: (id: number, newStatus: boolean) => Promise<SimpleBook|void>
}


export const BookCard = ({book, deleteBookAction, changeBookStatus}: Props) => {
    const {id, title, author, status} = book;
    const isActive = (status === true) 
        ? 'bg-green-500/20' 
        : 'bg-slate-100 text-slate-500'
  return (
    <div className="mx-auto right-0 mt-2 w-80">
        <div className="flex flex-col rounded-3xl overflow-hidden shadow-lg">
            <div className={`flex flex-col items-center justify-centertext-center p-6 bg-white border-b`}>
                <p className="pt-2 text-lg font-semibold text-gray-900 capitalize">{title}</p>
                <p className="pt-2 text-md font-semibold text-gray-600 capitalize">{author}</p>
                <div
                    className={`relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap ${isActive}`}>
                    <span className="">{ (status)? 'Active': 'Inactive'}</span>
                </div>
            
                <div className="mt-5">
                    <Link
                        href={`/book/${id}`}
                        className="bg-slate-200 border rounded-full py-2 px-4 text-xs font-semibold text-gray-900 hover:bg-slate-400"
                    >
                    See detail
                    </Link>
                </div>
            </div>

            <div className="border-b">
                <div className="py-2 flex justify-around bg-gray-200">
                <button 
                    className="bg-red-400 hover:bg-red-500 px-5 py-2 text-xs leading-5 rounded-md font-semibold text-white"
                    onClick={ () => deleteBookAction(id) }
                    >
                 Delete Book
                </button>
                <button 
                    className="bg-sky-400 hover:bg-sky-500 px-5 py-2 text-xs leading-5 rounded-md font-semibold text-white"
                    onClick={ () => changeBookStatus(id, !status ) }
                >Change status
                </button>

                </div>
            </div>
        </div>
    </div>
  )
}
