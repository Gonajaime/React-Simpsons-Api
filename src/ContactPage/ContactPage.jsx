
import { useForm } from "react-hook-form";
import ErrorMessage from "../components/ErrorMessage";


export default function ContactPage() {


  const {register,handleSubmit,formState: { errors },} = useForm();
console.log(errors);
  const submit = (data) => {
    console.log(data);
  };

  return (
    <div>
      Soy contact

      <form onSubmit={handleSubmit(submit)}>
        <label>
          <input type="text" {...register("name", { required: true })} />
        </label>
        <span>
        <ErrorMessage errors={errors} name="name"></ErrorMessage>
        </span>
        <label>
          <input type="text" {...register("surname", { required: true, minLength: 3 })}/>
          <ErrorMessage errors={errors} name="surname"></ErrorMessage>
        </label>
        <label>
          <input
            type="number"
            {...register("age", { required: true, min: 18 })}
          />
          <ErrorMessage errors={errors} name="age"></ErrorMessage>
        </label>

        <button>Enviar</button>
      </form>
    </div>
  );
}
