import { useContext } from 'react';
import { UserContext } from './UserProvider';

// custom hook to hide the way we get info about user
export const useUser = () => useContext(UserContext);
