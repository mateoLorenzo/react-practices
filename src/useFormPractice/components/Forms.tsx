import { useForm } from "../hooks/useForm";

export const Forms = () => {
  const { form, email, password, errors, onChange, onSaveForm } = useForm({
    email: "",
    password: "",
  });

  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={({ target }) => onChange(target.value, "email")}
        style={
          errors.email
            ? { color: "red", borderColor: "red", outline: "none" }
            : {}
        }
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={({ target }) => onChange(target.value, "password")}
        style={
          errors.password
            ? { color: "red", borderColor: "red", outline: "none" }
            : {}
        }
      />
      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
      <button onClick={onSaveForm}>Save</button>
    </>
  );
};
