import React, { useState, useContext, useEffect } from 'react';
import swal from 'sweetalert2';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Navbar, ContentContainer } from '../components';
import { ApiContext } from '../providers';

import makeClasses from '../styles';

const PasswordReset: React.FC = () => {
  const classes = makeClasses();
  const history = useHistory();
  const [email, setEmail] = useState('');

  const {
    fetchAPI,
    data,
  } = useContext(ApiContext);

  useEffect(() => {
    if (data) {
      if (data?.data) {
        setTimeout(() => {
          history.push(`/changepassword/${data?.data?.hash}`)
        }, 500);
      } else {
        swal({
          type: 'error',
          title: 'Error',
          text: data.message,
        });
      }
    }
  }, [data])

  const onChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setEmail(e.target.value)
  }
  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await fetchAPI('POST', `auth/passwordreset`, {
      email
    })
  }
  return (
    <>
      <Container component="main" className={classes.Content}>
        <Navbar name="My profile" />
      </Container>
      <Container component="main" className={classes.Content}>
        <ContentContainer>
          <form autoComplete="off" onSubmit={onSubmit}>
            <Box className={classes.fields}>
              <Typography>Email</Typography>
              <TextField required type="email" variant="outlined" className={classes.inputField} onChange={onChange} />
            </Box>
            <Box className={classes.fields}>
              <Button variant="contained" type="submit" className={classes.toolbarBtn}>Submit</Button>
            </Box>
          </form>
        </ContentContainer>
      </Container>
    </>
  );
};

export default PasswordReset;
