
import { AppBar, Toolbar, styled } from '@mui/material';
import { Menu }  from '@mui/icons-material';
import { Typography } from '@mui/material';
const StyledHeader = styled(AppBar)`
    background: #000;
    height: 70px;
`;

const MenuIcon = styled(Menu)`
    color: #fff;
`;

const Image = styled('img')({
    height: 55,
    //margin: 'auto',
    paddingLeft: 20,
    paddingRight: 550
})


const Header = () => {

    const url = 'https://kurzgesagt.org/wp-content/themes/kurzgesagt/library/images/logo.gif';

    return (
        <StyledHeader position='static'>
            <Toolbar>
                
                <MenuIcon />
                
                <Image src={url} alt="logo" />
                <Typography variant="h3" component="h3">
                    In A NutShell
                </Typography>
            </Toolbar>
            
        </StyledHeader>
    )
}

export default Header;