import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { ContactWrapper, ImageWrapper, FormWrapper, HeaderWrapper, FieldWrapper, StyledInput, 
    StyledErrorMessage, StyledSpan, StyledButton } from './styles'

const ContactForm = () => {
    const INITIAL_FORM_STATE = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    const FORM_VALIDATION = Yup.object().shape({
      name: Yup.string()
        .required('*El nombre es obligatorio'),
      email: Yup.string()
        .email('Correo electrónico inválido')
        .required('*El correo electrónico es obligatorio'),
      subject: Yup.string()
        .required('*El asunto es obligatorio'),
      message: Yup.string()
        .max(200, '*El mensaje no puede tener más de 200 caracteres')
    })
  
    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values)
        setSubmitting(false)
    }

    return (

        <ContactWrapper>
            <ImageWrapper>
                <img src="/images/contact.webp" alt="contact" />
            </ImageWrapper>
            <FormWrapper>
                <HeaderWrapper>
                    <h2>Formulario</h2>
                    <p> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, qui, iusto nulla aperiam 
                        dolore voluptatum perspiciatis nihil laboriosam aspernatur ipsum ad debitis corporis soluta mollitia reprehenderit vitae aut facere tenetur!
                    </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, eum!</p>
                </HeaderWrapper>
                <Formik
                    initialValues={ INITIAL_FORM_STATE }
                    validationSchema={ FORM_VALIDATION }
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                    <Form>
                        <FieldWrapper>
                            <label htmlFor="name">Nombre*</label>
                            <StyledInput type="text" name="name" id="name"/>
                            <StyledErrorMessage name="name" component="div" />
                        </FieldWrapper>
                        <FieldWrapper>
                            <label htmlFor="email">Email*</label>
                            <StyledInput type="email" name="email" id="email"/>
                            <StyledErrorMessage name="email" component="div" />
                        </FieldWrapper>
                        <FieldWrapper>
                            <label htmlFor="subject">Asunto*</label>
                            <StyledInput type="text" name="subject" id="subject"/>
                            <StyledErrorMessage name="subject" component="div" />
                        </FieldWrapper>
                        <FieldWrapper>
                            <label htmlFor="message">Mensaje</label>
                            <StyledInput inputMessage type="text" name="message" id="message"/>
                            <StyledErrorMessage name="message" component="div" />
                            <StyledSpan>* El campo es obligatorio</StyledSpan>
                        </FieldWrapper>

                        <StyledButton type="submit" disabled={isSubmitting}>Enviar</StyledButton>
                        
                    </Form>
                    )}
                </Formik>
            </FormWrapper>
        </ContactWrapper>
    )
}


export default ContactForm