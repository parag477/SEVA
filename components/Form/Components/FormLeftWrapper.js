import styled from 'styled-components';
import { FormState } from '../Form';
import { useContext } from 'react';

const FormLeftWrapper = () => {
  const Handler = useContext(FormState);

  return (
    <FormLeft>
      <FormInput>
        <label>Campaign Title</label>
        <Input onChange={Handler.FormHandler} value={Handler.form.campaignTitle} placeholder='Campaign Title' name='campaignTitle'>
        </Input>
      </FormInput>
      <FormInput>
        <label>Story</label>
        <TextArea onChange={Handler.FormHandler} value={Handler.form.story} name="story" placeholder='Describe Your Story'>
        </TextArea>
      </FormInput>
    </FormLeft>
  )
}

const FormLeft = styled.div`
  width:48%;
`

const FormInput = styled.div`
  display:flex ;
  flex-direction:column;
  font-family:'poppins';
  font-weight: bold;
  margin-top:10px ;
`
const Input = styled.input`
  background-color:${(props) => props.theme.bgDiv} ;
  color:${(props) => props.theme.color} ;
  font-size: 16px;
line-height: 28px;
padding: 8px 16px;
width: 100%;
min-height: 44px;
border: unset;
border-radius: 4px;
outline-color: rgb(84 105 212 / 0.5);
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
            rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
            rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
            rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, 
            rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
            rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
            rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  

`

const TextArea = styled.textarea`
  background-color:${(props) => props.theme.bgDiv} ;
  color:${(props) => props.theme.color} ;
  font-size: 16px;
line-height: 28px;
padding: 8px 16px;
width: 100%;
min-height: 44px;
border: unset;
border-radius: 4px;
outline-color: rgb(84 105 212 / 0.5);
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
            rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
            rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
            rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, 
            rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
            rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
            rgba(0, 0, 0, 0) 0px 0px 0px 0px;
`

export default FormLeftWrapper;