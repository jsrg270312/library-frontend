import { BookResponse } from "../interfaces/BookResponse";
import { NewBook } from "../interfaces/NewBook";
import { SimpleBook } from "../interfaces/SimpleBook";

export const getAllBooks = async (): Promise<SimpleBook[]> => {
  const books: BookResponse[] = await fetch(`http://localhost:3001/books`, {
    cache: "no-cache",
  }).then((res) => res.json());
  const simpleBooks = books.map((book) => ({
    id: book.id,
    title: book.title,
    author: book.author,
    status: book.status,
  }));
  return simpleBooks;
};

export const deleteBook = async (id: number): Promise<void> => {
  await fetch(`http://localhost:3001/books/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const createBook = async (book: NewBook): Promise<BookResponse> => {
  book.quantity = Number(book.quantity);
  const newBook = await fetch(`http://localhost:3001/books`, {
    method: "POST",
    body: JSON.stringify(book),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return newBook;
};

export const getBookById = async (id: string): Promise<BookResponse> => {
  const response = await fetch(`http://localhost:3001/books/${id}`, {
    cache: "no-cache",
  }).then((res) => res.json());
  return response as BookResponse;
};

export const updateBook = async (
  id: number,
  newStatus: boolean
): Promise<BookResponse> => {
  const newBook = await fetch(`http://localhost:3001/books/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ status: newStatus }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return newBook;
};
