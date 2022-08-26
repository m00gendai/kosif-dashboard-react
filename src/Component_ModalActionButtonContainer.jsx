import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function Component_ModalActionButtonContainer(props){
    return(
        <div className="component_modalactionbuttoncontainer">
        <Button 
            variant="contained" 
            color="success" 
            onClick={props.confirm}>
                <CheckIcon />
        </Button>
        <Button 
            variant="contained" 
            color="error" 
            onClick={props.deny}>
                <CloseIcon />    
        </Button>
        </div>
    )
}

export default Component_ModalActionButtonContainer