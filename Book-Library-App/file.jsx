import { Form, Formik, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

const Register = () => {

    return (
    <body className="bg-gray-800 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-cyan-600 font-bold text-2xl">Register</h1>
       

        <Formik
        initialValues={{firstName:'', lastName:'',userName:'',email:'',password:''}}
        validationSchema={Yup.object({
            firstName: Yup.string()
            .required('First Name is required'),
            lastName: Yup.string()
            .required('Last Name is required.'),
            userName: Yup.string()
            .max(12, 'User Name must be 12 characters or less.')
            .required('User Name is required.'),
            email: Yup.string()
            .email('Invalid email address')
            .required('Email is required.'),
            password: Yup.string()
            .min(6, 'Password must be at least 6 characters long.')
            .required('Password is required.')
        })}
       onSubmit={values=>{
        alert(JSON.stringify(values, null, 2));
       }}
       >

        <Form>
            <div>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text"/>
            <ErrorMessage className="text-red-600" name = "firstName" />
            </div>

            <div>
                <label htmlFor ="lastName">Last Name</label>
                <Field name="lastName" type="text"/>
                <ErrorMessage className="text-red-600" name="lastName" />
            </div>

            <div>
                <label htmlFor ="userName">User Name</label>
                <Field name="userName" type="text"/>
                <ErrorMessage className="text-red-600" name="userName" />
            </div>

            <div>
                <label htmlFor = "email">Email Address</label>
                <Field name="email" type="email"/>
                <ErrorMessage className="text-red-600" name="email" />
            </div>

            <div>
                <label htmlFor = "password">Password</label>
                <Field name="password" type="password"/>
                <ErrorMessage className="text-red-600" name="password" />
            </div>

            <button type="submit">Register</button>
        </Form>

       </Formik>
    </body> 
    );
};
export default Register;