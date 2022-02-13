import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../user/useUser';
import { useLogoutMutation } from '../../user/api';

export default function Logout(): JSX.Element {
  const user = useUser();
  const [logout, result] = useLogoutMutation();
  const history = useHistory();

  useEffect(() => {
    if (result.isSuccess) {
      user?.setUser?.(undefined);
      history.push('/login');
    } else if (!result.isLoading) {
      logout();
    }
  }, [result, user, history, logout]);

  return <div />;
}
