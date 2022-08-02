import React from 'react';
import { useForm } from 'react-hook-form';
import "./styles.css"

const Validation = () => {
  const {register, watch, handleSubmit, formState:{errors}}= useForm();
    console.log(watch("email"));

    const onSubmit = (data) =>{
      console.log(data);
    }
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} >
      <label>Email</label>
      <input 
      name = "email"
      type= "email"
      {...register('email', {required:true, pattern:/^\S+@\S+$/i})}
      />  
      {errors.email && <p>This email field is required</p>}
      <label>Name</label>
      <input
      name="name"
      type="name"
      {...register('name', {required:true, maxLength:10})}
      />
      {errors.name && errors.name.type ==="required" && <p>This field is requried</p>}
      {errors.name && errors.name.type ==="maxLength" && <p>name maxLength 10 PLZ Check u input name</p>}
      <label>password</label>
      <input 
      name ="password"
      type="password"
      {...register('password', {required:true, minLength:2})}
      />
      {errors.password && errors.password.type ==="minLength" && <p>pass 2 min char</p>}

      <label>Password Confirm</label>
      <input
      name="password_confirm"
      type="password"
      {...register('password_confirm', {required:true, pattern:/^\S+@\S+$/i})}
      />

      <input type ="submit" value ="SUBMIT" />
    </form>
    <div>
      
    </div>
    </>
  );
};

export default Validation;