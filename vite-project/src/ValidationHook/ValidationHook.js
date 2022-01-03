import React from 'react'
import { useForm } from 'react-hook-form'

function ValidationHook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('age', { pattern: /\d+/ })} />
      {errors.age && <p> pLEASE ENTER NUMBER FOR AGE </p>}
      <input type="submit" />
    </form>
  )
}

export default ValidationHook
