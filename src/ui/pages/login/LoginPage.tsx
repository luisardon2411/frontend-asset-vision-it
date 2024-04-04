import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import loginPresentation from '../../../assets/login-presentation.svg';
import { FormikProps } from "formik";

const slogans = [
  "Inventario inteligente, gestión simplificada.",
  "Tecnología al día, inventario en orden.",
  "Control total de TI, a un inventario de distancia.",
  "Visión precisa en la gestión de tus activos de TI."
];

const LoginPage: React.FC<{ formik: FormikProps<{ username: string; password: string; }> }> = ({ formik }) => {

  const [currentSlogan, setCurrentSlogan] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlogan((prevCurrentSlogan) => (prevCurrentSlogan + 1) % slogans.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="h-full w-full xs:flex xs:flex-col font-Lato">
      { /** Container */}
      <div className="h-full flex flex-row-reverse">
        <div className="xs:w-full lg:w-[60%] flex flex-col justify-center items-center lg:gap-0 xs:gap-2">
          {/** Logo */}
          <motion.img
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, type: 'spring', damping: 10, stiffness: 100 }}
            src="/logo-transparente.png" alt="logo" className="xs:h-32 lg:h-44" />
          
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSlogan}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, type: 'spring', damping: 10, stiffness: 100 }}
              className="text-gray-600 text-lg xs:text-sm md:text-md lg:text-lg">
              {slogans[currentSlogan]}
            </motion.p>
          </AnimatePresence>
          {/** Form */}
          <motion.form
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, type: 'spring', damping: 10, stiffness: 100, delay: 0.2 }}
            onSubmit={formik.handleSubmit}
            className="xs:mt-2 flex flex-col gap-4 w-1/2 xl:p-10 xl:mt-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="text-gray-600 font-bold">Nombre de usuario</label>
              <input
                id="username"
                type="text"
                className={`rounded-lg p-2 border-2 border-gray-200 focus:outline-none focus:border-blue-500
                hover:border-blue-200
                ${formik.touched.username && formik.errors.username ? 'border-red-500' : ''}`}
                {...formik.getFieldProps('username')}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-red-500 text-sm">{formik.errors.username}</div>
              ) : null }
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-gray-600 font-bold">Contraseña</label>
              <input
                id="password"
                type="password"
                className={`rounded-lg p-2 border-2 border-gray-200 focus:outline-none focus:border-blue-500
                hover:border-blue-200
                ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">{formik.errors.password}</div>
              ) : null}
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-200 text-white font-bold rounded-lg p-2">
              Iniciar sesión
            </button>
          </motion.form>
        </div>
        {/** Image */}
        <div className="xs:hidden lg:flex-1 lg:flex items-center justify-center bg-gradient-to-br from-sky-600 via-blue-300 to-sky-200">
          <motion.img 
            initial={{ opacity: 0  }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, type: 'spring', damping: 10, stiffness: 100, delay: 0.2 }}
          src={loginPresentation} alt="image-isometric" className="object-contain h-2/3 w-2/3" />
        </div>
      </div>
    </div>
  )
}

export default LoginPage