
import { Box, styled } from '@mui/material';

import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import Articles from './components/Articles';


const Container = styled(Box)(({theme}) => ({
  margin: '30px auto 0 auto',
  width: '60%',
  [theme.breakpoints.down('md')]: {
    width: '75%'
  },
  [theme.breakpoints.down('sm')]:
  {
      width: '85%'
  }
}));

function App() {
  return (
      <Box>
        <Header />
        <Container>
          <InfoHeader />
          <Articles> </Articles>
        </Container>
      </Box>
  );
}

export default App;
