import { useState } from "react";
import { NewBook } from "../interfaces/NewBook";

export const useForm = (initialForm: NewBook) => {
  const [formState, setFormState] = useState(initialForm);
  const onInputChange = ({ target }: any) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    formState,
    onInputChange,
    onResetForm,
  };
};
