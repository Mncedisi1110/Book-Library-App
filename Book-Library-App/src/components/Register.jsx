import { Form, Formik, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import "./FormStyles.css";

const Register = () => {

    return (
    <body className="bg-gray-900">
        
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

        <Form className="pt-30">
            
           <h1 className="flex justify-center text-cyan-500 text-2xl font-bold pl-15 pb-5">Register</h1>
            <div className="flex justify-center">
            <label className= "text-cyan-600 text-xl font-medium" htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" className="input-field"/>
            <ErrorMessage name = "firstName" />
            </div>

            <div className="flex justify-center pt-6">
                <label className= "text-cyan-600 text-xl font-medium" htmlFor ="lastName">Last Name</label>
                <Field name="lastName" type="text"/>
                <ErrorMessage name="lastName" />
            </div>

            <div className="flex justify-center pt-6">
                <label className= "text-cyan-600 text-xl font-medium" htmlFor ="userName">User Name</label>
                <Field name="userName" type="text"/>
                <ErrorMessage name="userName" />
            </div>

            <div className="flex justify-center pt-6">
                <label className= "text-cyan-600 text-xl font-medium" htmlFor = "email">Email Address</label>
                <Field name="email" type="email"/>
                <ErrorMessage name="email" />
            </div>

            <div className="flex justify-center pt-6">
                <label className= "text-cyan-600 text-xl font-medium" htmlFor = "password">Password</label>
                <Field name="password" type="password"/>
                <ErrorMessage name="password" />
            </div>
             
             <div className="flex justify-center pt-6">
            <button className= "text-white text-xl font-medium rounded py-1 px-4 border-2 bg-orange-600" type="submit">Register</button>
            </div>
        </Form>

       </Formik>
    </body>
    );
};
export default Register;