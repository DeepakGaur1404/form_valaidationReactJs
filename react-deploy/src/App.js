import logo from './logo.svg';
import './App.css';
import { Formik } from 'formik';
import * as Yup from "yup";


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchemaSignup = Yup.object({
  first_name: Yup.string()
    .required("First name is required")
    .min(3, " First name length must be greater than 3 characters")
    .max(10, "First name length must be smaller than 10 characters"),
  last_name: Yup.string()
    .required("Last name is required")
    .min(3, "Last name length must be greater than 3 character")
    .max(10, "Last name length must be smaller than 10 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    // .min(10,"Must be of 10 digits")
    // .max(10,"Must be of 10 digits")
    .required("Phone Number is required"),
  company_name: Yup.string()
    .required("Organization name is required")
    .min(3, "Organization name length must be greater than 3 character"),
});

function App() {
  return (
    <div className="App">
      <div className="flex items-center justify-center flex-col p-4 sm:p-8  w-[40%] border-2 rounded-md">

        <div className="flex flex-col justify-between items-center h-full w-full mt-2 sm:mt-10">
          <p className="text-poppins text-base lg:text-2xl">
            Contact Details
          </p>
        </div>
        <div>
          <Formik

            initialValues={{ first_name: '', last_name: '', email: '', phone: '', company_name: '' }}

            validationSchema={validationSchemaSignup}


            onSubmit={(values, { setSubmitting }) => {

              // setTimeout(() => {

              //     alert(JSON.stringify(values, null, 2));

              setSubmitting(false);

              // }, 400);
              // navigate("/done");
              console.log(values);


            }}

          >

            {({

              values,

              errors,

              touched,

              handleChange,

              handleBlur,

              handleSubmit,

              isSubmitting,
              isValid

              /* and other goodies */

            }) => (
              <form className="text-poppins mt-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-4 mt-6">
                    <input type="text" name="first_name" id="first_name" className="block pt-2.5 pb-1 px-0 w-full text-base xl:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#7948F6] peer" placeholder=" "
                      onChange={handleChange}

                      onBlur={handleBlur}

                      value={values.first_name}
                    />
                    <label className="peer-focus:font-medium absolute text-base xl:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-[0.65] left-3 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#7948F6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.65] peer-focus:-translate-y-6">First name</label>
                    {errors.first_name && touched.first_name && <p style={{ color: "red" }}> {errors.first_name}</p>}
                  </div>
                  <div className="relative z-0 w-full mb-4 mt-6">
                    <input type="text" name="last_name" id="last_name" className="block pt-2.5 pb-1 px-0 w-full text-base xl:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#7948F6] peer" placeholder=" "
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.last_name}
                    />
                    <label className="peer-focus:font-medium absolute text-base xl:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-[0.65] left-3 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#7948F6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.65] peer-focus:-translate-y-6">Last name</label>
                    {errors.last_name && touched.last_name && <p style={{ color: "red" }}> {errors.last_name}</p>}
                  </div>
                </div>
                <div className="relative z-0 w-full mb-4 mt-6">
                  <input type="email" name="email" id="email" className="block pt-2.5 pb-1 px-0 w-full text-base xl:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#7948F6] peer" placeholder=" "
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <label className="peer-focus:font-medium absolute text-base xl:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-[0.65] left-3 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#7948F6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.65] peer-focus:-translate-y-6">Email address</label>
                  {errors.email && touched.email && <p style={{ color: "red" }}> {errors.email}</p>}
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-4 mt-6">
                    <input type="tel" name="phone" id="phone" className="block pt-2.5 pb-1 px-0 w-full text-base xl:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#7948F6] peer" placeholder=" "
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    />
                    <label className="peer-focus:font-medium absolute text-base xl:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-[0.65] left-3 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#7948F6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.65] peer-focus:-translate-y-6">Phone number</label>
                    {errors.phone && touched.phone && <p style={{ color: "red" }}> {errors.phone}</p>}
                  </div>
                  <div className="relative z-0 w-full mb-4 mt-6">
                    <input type="text" name="company_name" id="company_name" className="block pt-2.5 pb-1 px-0 w-full text-base xl:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#7948F6] peer" placeholder=" "
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.company_name}
                    />
                    <label className="peer-focus:font-medium absolute text-base xl:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-[0.65] left-3 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#7948F6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.65] peer-focus:-translate-y-6">Company Name</label>
                    {errors.company_name && touched.company_name && <p style={{ color: "red" }}> {errors.company_name}</p>}
                  </div>
                </div>
                <div className="mb-4 xl:mb-0 mt-4 xl:mt-10 w-full flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Previous
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    disabled={isSubmitting && !isValid} type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default App;
