'use client';
import { Stack, TextField, Button, Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import { speakText } from "../utilis/textToSpeech";

const ContactForm = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); 

    return (
        <Box id="contact-section"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#242424',
                padding: 4
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    maxWidth: 1000,
                    width: '100%',
                    backgroundColor:"#F5F5DC",
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: 3,
                    flexDirection: { xs: 'column', sm: 'row' } 
                }}
            >

                <Box
                    sx={{
                        flex: 1,
                        position: 'relative',
                        display: isSmallScreen ? 'none' : 'flex', 
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#4A001F', 
                        overflow: 'hidden'
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            width: '90%',
                            height: '90%',
                            backgroundImage: "url('/her.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            zIndex: 2
                        }}
                    />
                </Box>

           
                <Stack
                    component="form"
                    spacing={2}
                    sx={{
                        flex: 1,
                        padding: 4,
                        textAlign: 'left'
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#800020' }}>
                        Visit Our Store
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#800020' }}>
                        Oxford Street in Osu, Accra, Ghana
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#800020', mt: 1 }}>
                        <strong>Mail:</strong> stylesphere@mysite.com <br />
                        <strong>Tel:</strong> 123-456-7890
                    </Typography>

                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#800020', mt: 3 }}>
                        Write Us
                    </Typography>

                    <TextField
                        label="First Name *"
                        name="firstName"
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: '#FFF'
                            }
                        }}
                    />
                    <TextField
                        label="Last Name *"
                        name="lastName"
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: '#FFF'
                            }
                        }}
                    />
                    <TextField
                        label="Email *"
                        name="email"
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: '#FFF'
                            }
                        }}
                    />
                    <TextField
                        label="Leave us a message"
                        name="message"
                        multiline
                        rows={4}
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: '#FFF'
                            }
                        }}
                    />
                   <Button
      variant="contained"
      type="submit"
      sx={{
        bgcolor: "#800020", 
        color: "#000000", 
        fontWeight: "bold",
        "&:hover": { bgcolor: "#66001A" }, 
      }}
      onClick={() => speakText("Form submitted successfully")}
      onMouseEnter={() => speakText("Submit button")}
    >
      Submit
    </Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default ContactForm;
