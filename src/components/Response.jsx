
import { Box, Typography, TextareaAutosize } from '@mui/material';

const textareaStyle ={
    width:'100%',
    padding: 10,
    background:'url(http://i.imgur.com/2cOaJ.png)',
    backgroundAttachment: 'local',
    backgroundRepeat: 'no-repeat',
    paddingLeft: 30,
    paddingTop:10,
    borderColor:'#CCC'
}
const Response = () => {
    return (
        <Box>
            <Typography mt={2} mb={2}>JSON</Typography>
            <TextareaAutosize
                minRows={3}
                maxRows={6}
                style={textareaStyle}
                disabled='disabled'
            />
        </Box>
    )
}
export default Response;