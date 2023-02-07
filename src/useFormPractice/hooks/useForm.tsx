import { useState } from "react";

const getFormErrors = (
  form: object,
  value: "DEFAULT_VALUE" | "INCOMPLETE_FIELDS"
): object => {
  let initialErrorObject = {};
  const formKeys = Object.keys(form);
  formKeys.forEach((formKey, index) => {
    const formKeyValue = Object.values(form)[index];
    const errorFormKeyValue =
      value === "DEFAULT_VALUE" ? false : !Boolean(formKeyValue.length);
    initialErrorObject = {
      ...initialErrorObject,
      [formKey]: errorFormKeyValue,
    };
  });
  return initialErrorObject;
};

// <T extends Object> Means whatever I will receive, it will be an object
export const useForm = <T extends Object>(initialForm: T) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<T>(
    getFormErrors(initialForm, "DEFAULT_VALUE") as T
  );

  const onSaveForm = () => {
    const errorsFromForm = getFormErrors(form, "INCOMPLETE_FIELDS");
    const errorsFormKeys = Object.values(errorsFromForm);
    setErrors(errorsFromForm as T);

    if (!errorsFormKeys.includes(true)) return alert("Success!");
  };

  // keyof T means field value has to be in T
  const onChange = (value: string, field: keyof T) => {
    const newState = {
      ...form,
      [field]: value,
    };
    setForm(newState);
    setErrors(getFormErrors(newState, "INCOMPLETE_FIELDS") as T);
  };

  return {
    ...form,
    form: form,
    onChange,
    onSaveForm,
    errors,
  };
};
