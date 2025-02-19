import { Box, Typography, Button, Container } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import SouthEastIcon from '@mui/icons-material/SouthEast';

export default function NotFound() {
  return (
    <Container
      maxWidth="md"
      sx={{
        textAlign: 'center',
        mt: 10,
        color: '#C08B80',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h1"
        fontWeight="bold"
        sx={{ color: '#C08B80', fontSize: { xs: '3rem', md: '5rem' } }}
      >
        404
      </Typography>

      <Box sx={{ width: '100%', maxWidth: 400, my: 3 }}>
        <Image
          src="/Error.png"
          alt="Not Found"
          layout="responsive"
          width={400}
          height={300}
          style={{ borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
        />
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
        Okay, don’t panic.
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: '500px', opacity: 0.8 }}>
        This is just a fire drill. What do we do when we are lost?
      </Typography>

      <Link href="/" passHref>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            px: 3,
            py: 1.5,
            backgroundColor: '#C08B80',
            color: 'white',
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '1rem',
            '&:hover': { backgroundColor: '#a06d64' },
            transition: 'all 0.3s ease',
          }}
        >
          Slowly head back home <SouthEastIcon sx={{ ml: 1 }} />
        </Button>
      </Link>
    </Container>
  );
}
