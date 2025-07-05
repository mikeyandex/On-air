import React from 'react'
import { Form, Field } from 'react-final-form'
import { requiredField, maxValue, composeValidators } from '../../../../utils/validators'
import classes from './PostForm.module.css'


const PostForm = (props) => {

  const onSubmit = (values) => {
    props.createPost()
    return (
      <Form onSubmit={onSubmit}>
        {values.profileField = ''}
      </Form>
    )
  }

  const handleChange = (event) => {
    let text = event.target.value
    props.addPostText(text)
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="profileField"
            component={'textarea'}
            validate={composeValidators(requiredField, maxValue(10))}
          >
            {({ input, meta }) => (
              <div className={classes.cont}>
                <input {...input}
                  required
                  value={props.textAreaValue}
                  className={meta.error && meta.touched ? classes.inputInvalid : classes.input}
                  onChange={(event) => {
                    input.onChange(event) // вызов внутренней логики
                    handleChange(event) // моя логика
                  }}
                  placeholder='создать пост'
                />
                {meta.error && meta.touched && <span className={classes.span}>{meta.error}</span>}
              </div>
            )}
          </Field>
        </form>
      )}
    />
  )
}

export default PostForm