import React, { useMemo, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useHistory } from 'react-router-dom';
import GraphWrapper from '../../graph/GraphWrapper';
import { useUser } from '../../user/useUser';

export default function TwitterGraph(): JSX.Element {
  const [fieldValue, setFieldValue] = useState('');
  const [graphNames, setGraphNames] = useState<string[]>([]);
  const user = useUser();
  const history = useHistory();

  const graph = useMemo(
    () =>
      graphNames.length > 0 ? (
        <Box width="100%" height="1000px">
          {' '}
          <GraphWrapper names={graphNames} />
        </Box>
      ) : null,
    [graphNames]
  );

  return (
    <Box padding="50px" height="100%">
      <div>Logged in: {user?.user?.nameAndSurname}</div> <br />
      <Button
        onClick={() => {
          history.push('/logout');
        }}
      >
        Logout
      </Button>
      <br />
      <TextField
        label="Names seperated by coma"
        value={fieldValue}
        sx={{ width: '500px', marginTop: '20px' }}
        onChange={(event) => setFieldValue(event.target.value)}
      />
      <Button
        onClick={() => {
          setGraphNames(fieldValue.split(','));
        }}
      >
        Send
      </Button>
      {graph}
    </Box>
  );
}
