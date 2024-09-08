"use client"
import { useRouter } from 'next/navigation';
import { SimpleBook } from '../interfaces/SimpleBook';
import { BookCard } from './BookCard';
import { deleteBook, updateBook } from '../helpers/book-calls-api';

interface Props {
  books: SimpleBook[];
}
export const BookGrid = ({ books }:Props) => {
  const router = useRouter();
  
  const deleteBookAction = async(id: number) => {
    await deleteBook(id);
    router.refresh();
  }
  const changeBookStatus = async(id: number, newStatus: boolean) => {
    await updateBook(id, newStatus);
    router.refresh();
  }

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
       {
            books.map( book => (
              <BookCard
                book={ book }
                deleteBookAction={ deleteBookAction }
                changeBookStatus={ changeBookStatus }
                key={ book.id }
              />
            ))
       }
      </div>
    )
}

