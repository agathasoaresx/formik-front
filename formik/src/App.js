
import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required('Password is required'),
});

function App() {
  return (
    <div className="App">
      <Formik
      validationSchema={schema}
      initialValues={{ firstName: '', lastName: '', email: '', password: '', }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
        <Form>
          <div className='form-control'>
              <Field type="firstName" name="firstName" />
              <Field type="lastName" name="lastName" />
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
      </Form>
      )}
      </Formik>
    </div>
  );
}

export default App;
