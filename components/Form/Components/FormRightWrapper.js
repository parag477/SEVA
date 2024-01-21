import styled from 'styled-components';
import { FormState } from '../Form';
import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import {TailSpin} from 'react-loader-spinner'
import {create as IPFSHTTPClient} from 'ipfs-http-client';

const client = IPFSHTTPClient({
  host:'ipfs.infura.io',
  port:5001,
  protocol: 'https',
  // headers: {
  //   authorization: auth
  // }
})

const FormRightWrapper = () => {
  const Handler = useContext(FormState);

  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const uploadFiles = async (e) => {
    e.preventDefault();
    setUploadLoading(true);

    if(Handler.form.story !== "") {
      try {
        const added = await client.add(Handler.form.story);
        Handler.setStoryUrl(added.path)
      } catch (error) {
        toast.warn(`Error Uploading Story`);
      }
    }


      if(Handler.image !== null) {
          try {
              const added = await client.add(Handler.image);
              Handler.setImageUrl(added.path)
          } catch (error) {
            toast.warn(`Error Uploading Image`);
          }
      }

      setUploadLoading(false);
      setUploaded(true);
      Handler.setUploaded(true);
      toast.success("Files Uploaded Sucessfully")
}

return (
  <FormRight>
    <FormInput>
      <FormRow>
        <RowFirstInput>
          <label>Required Amount</label>
          <Input onChange={Handler.FormHandler} value={Handler.form.requiredAmount} name="requiredAmount" type={'number'} placeholder='Required Amount'></Input>
        </RowFirstInput>
        <RowSecondInput>
          <label>Choose Category</label>
          <Select onChange={Handler.FormHandler} value={Handler.form.category} name="category">
            <option>Education</option>
            <option>Health</option>
            <option>Animal</option>
          </Select>
        </RowSecondInput>
      </FormRow>
    </FormInput>
    {/* Image */}
    <FormInput>
      <label>Select Image</label>
      <Image alt="dapp" onChange={Handler.ImageHandler} type={'file'} accept='image/*'>
      </Image>
    </FormInput>
    {uploadLoading == true ? <Button><TailSpin color='#fff' height={20} /></Button> :
      uploaded == false ? 
      <Button onClick={uploadFiles}>
        Upload Files to IPFS
      </Button>
      : <Button style={{cursor: "no-drop"}}>Files uploaded Sucessfully</Button>
    }
    <Button onClick={Handler.startCampaign}>
      Start Campaign
    </Button>
  </FormRight>
)
}

const FormRight = styled.div`
  width:45%;
`

const FormInput = styled.div`
  display:flex ;
  flex-direction:column;
  font-family:'poppins';
  margin-top:10px ;
`

const FormRow = styled.div`
  display: flex;
  justify-content:space-between;
  width:100% ;
`

const Input = styled.input`
  padding:15px;
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

const RowFirstInput = styled.div`
  display:flex ;
  flex-direction:column ;
  width:45% ;
`

const RowSecondInput = styled.div`
  display:flex ;
  flex-direction:column ;
  width:45% ;
`

const Select = styled.select`
  padding:15px;
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

const Image = styled.input`
  background-color:${(props) => props.theme.bgDiv} ;
  color:${(props) => props.theme.color} ;
  font-size: 16px;
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

  &::-webkit-file-upload-button {
    padding: 15px ;
    background-color: ${(props) => props.theme.bgSubDiv} ;
    color: ${(props) => props.theme.color} ;
    outline:none ;
    border:none ;
    font-weight:bold ;
  }  
`

const Button = styled.button`
  display: flex;
  justify-content:center;
  width:100% ;
  padding:15px ;
  margin-top:30px ;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  border-radius: 6px;
  border: none;

  background: #6E6D70;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
  color: #DFDEDF;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`

export default FormRightWrapper