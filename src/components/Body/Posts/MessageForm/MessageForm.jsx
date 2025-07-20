import { Form, Field } from 'react-final-form'
import { requiredField, maxValue, composeValidators } from '../../../../utils/validators'
import { FORM_ERROR } from 'final-form'
import classes from './MessageForm.module.css'

const MessageForm = (props) => {

  const handleChange = (event) => {
    let text = event.target.value
    props.onMessageChange(text)
  }

  const onSubmit = (values) => {
    props.onAddMessage()
    return (
      <Form onSubmit={onSubmit}>
        {values.messageField = ''}
      </Form>
    )
  }

 return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="messageField"
            component={'textarea'}
            validate={composeValidators(requiredField, maxValue(10))} >
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

export default MessageForm