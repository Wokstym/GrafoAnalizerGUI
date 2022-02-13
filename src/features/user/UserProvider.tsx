import React, { Dispatch, SetStateAction, useState } from 'react';
import { UserBasicDto } from './types';

export const UserContext = React.createContext<UserContextType>({
  user: undefined,
  setUser: undefined,
});

interface UserContextType {
  user: UserBasicDto | undefined;
  setUser: Dispatch<SetStateAction<UserBasicDto | undefined>> | undefined;
}

export function UserProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<UserBasicDto | undefined>(undefined);

  const memoized = React.useMemo(() => ({ user, setUser }), [user]);

  return (
    <UserContext.Provider value={memoized}>{children}</UserContext.Provider>
  );
}
