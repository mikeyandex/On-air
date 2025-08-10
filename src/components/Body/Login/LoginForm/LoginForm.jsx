import React, { useState } from 'react'
import { Form, Field } from 'react-final-form'
import { requiredField, maxValue, composeValidators } from '../../../../utils/validators'
import classes from './LoginForm.module.css'


const LoginForm = (props) => {
  
  const [formValues, setFormValues] = useState({// Параметры собраны в массив
    email: '',
    password: '',
    qaptcha: ''
  })

  const logoutMe = () => {
    props.logoutMe()
  }

  const handleChange = (name) => (event) => {//Ф-ия обработки
    setFormValues({
      ...formValues, //деструктуризаци массива параметров 
      [name]: event.target.value //опрос содержимого полей ввода (onChange)
    })
  }
      

  const onSubmit = (values) => {
    props.loginMe(values.email, values.password, values.rememberMe, values.captcha)
  }

  return (
    <div className={classes.form}>
      <h2 className={classes.heading}>LOGIN</h2>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            noValidate>
            {['email', 'password', 'captcha'].map((field, index) => (
              <Field
                key={index}
                name={field}
                validate={composeValidators(requiredField, maxValue(255))}
              >
                {({ input, meta}) => (
                  <div className={classes.cont}>
                    <input
                      {...input}
                      required
                      value={formValues[field]}
                      className={meta.error && meta.touched ? classes.inputInvalid : classes.input}
                      onChange={(event) => {
                        input.onChange(event)//внутренняя логика
                        handleChange(field)(event)//моя логика с именем параметра
                      }}
                       placeholder={field === 'email' ? 'Введите ваш email' : field === 'password' ? 'Введите ваш пароль' : 'Введите капчу'}
                    />
                    {meta.error && meta.touched && <span className={classes.span}>{meta.error}</span>}
                  </div>
                )}
              </Field>
            ))}

            <img className={classes.captcha} src={props.captchaURL} />

            <Field
              name="rememberMe"
              type={'checkbox'}>
              {({ input }) => (
                <div className={classes.labelcheck}>
                  <input {...input}
                    required />
                  <label className={classes.label}>Remember me</label>
                </div>
              )}
            </Field>

            <button
              className={classes.button}
              type="submit">Login</button>
            <button
              className={classes.button}
              type="button" onClick={logoutMe}>Logout</button>

          </form>
        )}
      />
    </div>
  )
}

export default LoginForm
