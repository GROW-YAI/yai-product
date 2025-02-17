import { Box, Typography, Button, Container, Icon } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import SouthEastIcon from '@mui/icons-material/SouthEast';

export default function NotFound() {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 10 }}>
   
      <Typography variant="h1" color="primary" fontWeight="bold">
        404
      </Typography>

      <Box sx={{ width: '100%', maxWidth: 400, my: 3 }}>
        <Image
          src='/Error.png'
          alt="Not Found"
          layout="responsive"
          width={400}
          height={300}
        />
      </Box>

      <Typography variant="h5" color="textSecondary" gutterBottom>
        Okay, don’t panic.
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        This is just a fire drill,  What do we do when we are lost?
      </Typography>

      <Link href="/" passHref>
        <Button variant="outlined" color="primary">
          Slowly head back home<SouthEastIcon/>
        </Button>
      </Link>
    </Container>
  );
}
