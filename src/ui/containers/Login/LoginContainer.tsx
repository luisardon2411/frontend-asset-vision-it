import { useFormik } from 'formik';
import * as Yup from 'yup';
import LoginPage from '../../pages/login/LoginPage'


const SignUpSchema = Yup.object().shape({
  username: Yup.string()
  .required('El nombre de usuario es requerido'),
  password: Yup.string()
  .required('La contraseña es requerida'),
})

const LoginContainer = () => {

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: SignUpSchema,
    onSubmit: () => {}
  })
  return (
    <LoginPage formik={ formik } />
  )
}

export default LoginContainer