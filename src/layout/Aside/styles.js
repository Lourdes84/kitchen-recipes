import styled from 'styled-components'

export const AsideWrapper = styled.aside`
    width: 250px;
    

    @media (max-width: 1840px) {
        width: 100%;
    }

    @media (min-width: 1840px) {
        min-width: 300px;
    }
`

export const Block = styled.div`
    margin-bottom: 25px;
`

export const Title = styled.div`
    text-transform: uppercase;
    font-weight: 600;
    width: 100%;
    height: ${(props) => props.tall ? '200px' : '50px'};
    display: flex;
    flex-direction: ${(props) => props.tall ? 'column' : 'row'};
    justify-content: ${(props) => props.tall ? 'center' : 'flex-start'};
    gap: 20px;
    align-items: center;
    background-color: ${props => props.theme.palette.primary.light};
    border: 1px solid ${props => props.theme.palette.primary.main};
    box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.5), 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    padding: 15px;
`

export const ImageWrapper = styled.div`
    margin: ${(props) => props.small ? '20px 0' : '20px auto'};
    width: ${(props) => props.small ? '100px' : '150px'};
    height: ${(props) => props.small ? '100px' : '98px'};
    border: 2px solid ${props => props.theme.palette.primary.main};
    border-radius: ${(props) => props.small && '50%'};
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
    }
`

export const PostWrapper = styled.div`
    display: ${(props) => props.profileWrapper ? "block" : "flex"};
    margin-top: ${(props) => props.profileWrapper && "30px"};
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    padding-right: ${(props) => props.profileWrapper ? "0px" : "40px"};

    @media (max-width: 1840px) {
        ${(props) => props.profileWrapper && `
            display: flex;
            align-items: flex-start;
        `}
        flex-direction: column;
        padding-right: 0px;
    }
`

export const TitleNewsletter = styled.p`
    text-align: center;
`

export const StyledInput = styled.input`
    width: 180px;
    height: 30px;
    padding-left: 5px;
`
export const ErrorText = styled.span`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    text-transform: none;
    color: red;
`

export const StyledButton = styled.button`
    height: 40px;
    padding: 0px 20px;
    border: none;
    text-transform: uppercase;
    background-color: ${props => props.theme.palette.primary.main};
    box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
    transition: .3s ease-in-out;
    cursor: pointer;

    &:hover {
        box-shadow: none;
    }
`