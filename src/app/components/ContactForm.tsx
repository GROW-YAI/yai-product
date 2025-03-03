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
                backgroundColor: '#3C5652',
                padding: 4
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    maxWidth: 1000,
                    width: '100%',
                    backgroundColor: '#F5F1EB',
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
                        backgroundColor: '#1A3C34',
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
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#3C5652' }}>
                        Visit Our Store
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#3C5652' }}>
                    Oxford Street in Osu, Accra, Ghana
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#3C5652', mt: 1 }}>
                        <strong>Mail:</strong> stylesphere@mysite.com <br />
                        <strong>Tel:</strong> 123-456-7890
                    </Typography>

                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#3C5652', mt: 3 }}>
                        Write Us
                    </Typography>

                    <TextField
                        label="First Name *"
                        name="firstName"
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: 'white'
                            }
                        }}
                    />
                    <TextField
                        label="Last Name *"
                        name="lastName"
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: 'white'
                            }
                        }}
                    />
                    <TextField
                        label="Email *"
                        name="email"
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: 'white'
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
                                backgroundColor: 'white'
                            }
                        }}
                    />
                   <Button
      variant="contained"
      type="submit"
      sx={{
        bgcolor: "#3C5652",
        color: "#FFF",
        "&:hover": { bgcolor: "#2A4A44" },
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
