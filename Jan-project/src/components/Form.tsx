import { useForm } from 'react-hook-form';

const Form = () => {

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    reset,
    getValues
  } = useForm();

  return (
    <div>Form</div>
  )
}

export default Form
