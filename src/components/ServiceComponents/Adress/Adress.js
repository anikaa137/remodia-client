import React from 'react';
import { useForm } from 'react-hook-form';

const Adress = () => {

  const handleBlur = e => {
    console.log(e.target.name, e.target.value);
}

  const { register, handleSubmit, formState: { errors } } = useForm();
  const  onSubmit = data => console.log(data);
  console.log(errors);

    return (
        <div>
 <form  onSubmit={handleSubmit( onSubmit)}>
      <input type="text" onChange={handleBlur} placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" onChange={handleBlur} placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" onChange={handleBlur} placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <input type="submit" />
    </form>
        </div>
    );
};

export default Adress;