'use client';

import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from '../helpers/useForm';
import { createBook } from '../helpers/book-calls-api';

export const NewBook = () => {

  const router = useRouter();
  
  const initialForm = {
    quantity: 0,
    author: '',
    title: ''
  }

  const {formState, onInputChange, onResetForm} = useForm(initialForm)


  const onSubmit = async( e: FormEvent ) => {
    e.preventDefault();
    if ( formState.author.trim().length === 0 ) return;
    await createBook(formState); 
    onResetForm();
    router.refresh();
  }



  return (
    <form onSubmit={ onSubmit } className='flex w-full'>
      <input type="text"
        onChange={ onInputChange }
        value={ formState.author }
        className="w-3/12 ml-2 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="Author"
        name='author'
        />
      <input type="text"
        onChange={ onInputChange }
        value={ formState.title }
        className="w-3/12 -ml-10 ml-3 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="Title" 
        name='title'
        />
      <input type="number"
        onChange={ onInputChange }
        value={ formState.quantity }
        className="w-3/12 -ml-10 ml-3 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="In Stock" 
        name='quantity'
        />
    
      <button type='submit' className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
        Create new book
      </button>

      <span className='flex flex-1'></span>

    </form>
  )
}