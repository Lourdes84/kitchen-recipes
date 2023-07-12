import { useState } from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import {Block, Title, TitleNewsletter, StyledInput, ErrorText, StyledButton} from './../styles'

const Newsletter = () => {
    const [ email, setEmail ] = useState("")
    const [ showErrorMessage, setShowErrorMessage ] = useState(false)
    const [ textButton, setTextButton ] = useState("Suscribirse")

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      }
      
    const handleSubmit = () => {
        if(validateEmail(email)){
            setShowErrorMessage(false)
            setTextButton("Suscrito!")
        } else {
            setShowErrorMessage(true)
        }
    }

    return (
        <Block>
            <Title tall>
                <TitleNewsletter>Suscríbite al Newsletter</TitleNewsletter>
                <StyledInput
                    type="email" 
                    placeholder="E-mail" 
                    onChange={handleChange}/>
                   
                    {showErrorMessage && (
                        <ErrorText>
                            <AiOutlineExclamationCircle />
                            Introduce un e-mail válido
                        </ErrorText>
                    )} 
                <StyledButton type="submit" onClick={handleSubmit}>{textButton}</StyledButton>
            </Title>
        </Block>
    )
}

export default Newsletter