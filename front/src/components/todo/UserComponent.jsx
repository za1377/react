import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createUserApi, retrieveUserApi, updateUserApi } from "../api/UserApiService"
import {ErrorMessage, Field, Form, Formik} from 'formik'


export default function UserComponent() {

    const {id} = useParams()

    const [name, setName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const navigate = useNavigate()

    useEffect( () => retrieveUser(), [id] )

    function retrieveUser() {

        if(id !== -1){
            retrieveUserApi(id).then(
                response => {
                    setName(response.data.name)
                    setBirthDate(response.data.birthDate)
                }
            ).catch(error => console.log(error))
        }
        
    }

    function onSubmit(values) {

        const user = {
            name: values.name,
            birthDate: values.birthDate
        }

        if(id == -1) {
            createUserApi(user).then(
                () => {
                    navigate('/users')
                }
            ).catch(error => console.log(error))
        }else{
            updateUserApi(id, user).then(
                () => {
                    navigate('/users')
                }
            ).catch(error => console.log(error))
        }
        
    }

    function validate(values) {
        let errors = {}

        if(values.name.length < 3) {
            errors.name = "Enter atleast 3 characters"
        }

        if(values.birthDate == null || values.birthDate == '') {
            errors.birthDate = "Enter birth date"
        }

        return errors
    }

    return(
        <div className="container">
            <h1>Enter user detail</h1>
            <Formik initialValues={{name, birthDate}}
                enableReinitialize = {true}
                onSubmit={onSubmit}
                validate={validate}
                //not validate with change
                validateOnChange={false}
                //not validate with tab
                validateOnBlur={false}
            >

                {

                    (props) => (

                        <Form>
                            <ErrorMessage name="name" component="div" className="alert alert-warning" />
                            <ErrorMessage name="birthDate" component="div" className="alert alert-warning" />
                            <fieldset className="form-group">
                                <label>Name</label>
                                <Field type="text" className="form-control" name="name" />
                            </fieldset>

                            <fieldset className="form-group">
                                <label>Birth Date</label>
                                <Field type="date" className="form-control" name="birthDate" />
                            </fieldset>

                            <div className="m-3">
                                <button className="btn btn-success" type="submit">Save</button>
                            </div>

                        </Form>
                    )
                }

            </Formik>
        </div>
    )
}