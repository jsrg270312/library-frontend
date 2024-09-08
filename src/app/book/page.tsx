import { BookGrid } from '@/books/components/BookGrid'
import { NewBook } from '@/books/components/NewBook';
import { getAllBooks } from '@/books/helpers/book-calls-api';
import React from 'react'

export default async function BookPage () {
  const books = await getAllBooks()
  return (
    <div className="flex flex-col">
    <span className="text-4xl my-2">List of books</span>
    <div className='my-2'>
      <NewBook/>
    </div>
    <BookGrid
        books={books}
    />
</div>
  )
}
