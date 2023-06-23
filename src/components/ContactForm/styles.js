import styled from 'styled-components'
import { ErrorMessage, Field } from 'formik'

export const ContactWrapper = styled.div`
    max-width: 1100px;
    display: flex;
    gap: 30px;

    @media (max-width: 1350px) {
        flex-direction: column;
        align-items: center;
    }
`

export const ImageWrapper = styled.div`
    flex: 50%;
`
export const FormWrapper = styled.div`
    flex: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 20px 0;
`
export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 20px;
    border-bottom: 2px dotted #FDC257;

    @media (max-width: 1350px) {
        margin-bottom: 20px;
    }
`

export const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 15px;
`
export const StyledInput = styled(Field)` 
    height: ${props => props.inputMessage ? '100px' : '40px'};
    border: 1px solid #FDC257;
    background-color: #FEF7EA;
`

export const StyledErrorMessage = styled(ErrorMessage)`
    color: red;
`

export const StyledSpan = styled.span`
    text-align: right;
    font-size: 12px;
`

export const StyledButton = styled.button`
    height: 40px;
    border-radius: 15px;
    padding: 0px 20px;
    border: none;
    text-transform: uppercase;
    background-color: #FDC257;
    box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
    transition: .3s ease-in-out;
    cursor: pointer;

    &:hover {
        box-shadow: none;
    }
`

