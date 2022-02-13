import { Box, Button, styled } from '@mui/material';
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useMeQuery } from '../../user/api';
import { useUser } from '../../user/useUser';

export const LoginButton = styled(Button)(() => ({
  textTransform: 'none',
  backgroundColor: '#60a4ec',
  color: 'white',
  ':hover': {
    backgroundColor: '#4293e8',
  },
}));

export default function LoginTwitter(): JSX.Element {
  const { data: userData, isSuccess } = useMeQuery();
  const user = useUser();

  useEffect(() => {
    if (isSuccess) {
      user?.setUser?.(userData);
    }
  }, [userData, isSuccess, user]);

  return user.user ? (
    <Redirect to={{ pathname: '/' }} />
  ) : (
    <Box padding="50px">
      <LoginButton
        onClick={() => {
          window.location.href =
            'http://localhost:8080/oauth2/authorization/twitter';
        }}
      >
        <TwitterIcon style={{ marginRight: '10px' }} /> Log in via twitter
      </LoginButton>
    </Box>
  );
}
