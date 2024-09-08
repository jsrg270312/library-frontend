import { useState } from "react";
import { NewBook } from "../interfaces/NewBook";
interface Target {
  target: {
    name: string;
    value: string;
  };
}
export const useForm = (initialForm: NewBook) => {
  const [formState, setFormState] = useState(initialForm);
  const onInputChange = ({ target }: Target) => {
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
