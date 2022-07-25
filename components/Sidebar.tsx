import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVerticalIcon from '@mui/icons-material/MoreVert';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
const StyledContainer = styled.div``;
const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: white;

`;
const StyledSearch = styled.div``;
const StyledSidebarButton = styled.button``;
const StyledUserAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`
const Sidebar = () => {
    return (
        <StyledContainer>
            <StyledHeader>
                <Tooltip title="User Email" placement='right'>
                    <StyledUserAvatar />
                </Tooltip>
                <div>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVerticalIcon />
                    </IconButton>
                    <IconButton>
                        <LogoutIcon />
                    </IconButton>
                </div>

            </StyledHeader>

            <StyledSearch>

            </StyledSearch>

            <StyledSidebarButton>
                Hi
            </StyledSidebarButton>

        </StyledContainer>
    )
}

export default Sidebar;