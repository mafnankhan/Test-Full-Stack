import React, { useState, useContext, useEffect } from 'react';
import swal from 'sweetalert2';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import { Navbar, ContentContainer } from '../components';
import { ApiContext } from '../providers';

import makeClasses from '../styles';

const ChangePassword: React.FC = () => {
  const { hash }: any = useParams();
  const classes = makeClasses();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newRPassword, setNewRPassword] = useState('');

  const {
    fetchAPI,
    data,
  } = useContext(ApiContext);

  const clearAll = () => {
    setCurrentPassword('');
    setNewPassword('');
    setNewRPassword('');
  }

  useEffect(() => {
    if (data) {
      if (data?.message && !data?.data?.hash) {
        swal({
          type: 'success',
          title: 'Success',
          text: data.message,
        });
      }
    }
  }, [data])

  const onChange = (e: React.ChangeEvent<{ value: unknown }>, field: string) => {
    switch (field){
      case 'currentPassword':
        setCurrentPassword(e.target.value);
        break;
      case 'newPassword':
        setNewPassword(e.target.value);
        break;
      case 'newRPassword':
        setNewRPassword(e.target.value);
        break;
    }
  }
  const validate = () => {
    if (newPassword !== newRPassword){
      swal({
        type: 'error',
        title: 'Error',
        text: 'New Password and Confirm New Password are not same',
      });
      return false;
    } else if (newPassword === currentPassword) {
      swal({
        type: 'error',
        title: 'Error',
        text: 'Current Password and New Password should not be same',
      });
      return false;
    }
    return true;
  }
  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (validate()) {
      await fetchAPI('POST', `auth/changepassword/${hash}`, {
        currentPassword,
        newPassword
      })
    }
  }
  return (
    <>
      <Container component="main" className={classes.Content}>
        <Navbar name="My profile" />
      </Container>
      <Container component="main" className={classes.Content}>
        <ContentContainer>
          <form autoComplete="off" onSubmit={onSubmit}>
            <Box display="flex" className={classes.resetPassword} xs={12}>
              <Box className={classes.fields} xs={12} sm={4} width="100%">
                <Typography>Current Password</Typography>
                <TextField 
                required 
                type="password" 
                variant="outlined" 
                className={classes.resetPasswordFields} 
                inputProps={{
                  minLength: 6,
                }}
                onChange={(e) => onChange(e, 'currentPassword')} />
              </Box>
              <Box className={classes.fields} xs={12} sm={4} width="100%">
                <Typography>New Password</Typography>
                <TextField 
                required 
                type="password" 
                variant="outlined" 
                className={classes.resetPasswordFields}
                inputProps={{
                  minLength: 6,
                }} 
                onChange={(e) => onChange(e, 'newPassword')} />
              </Box>
              <Box className={classes.fields} xs={12} sm={4} width="100%">
                <Typography>Request New Password</Typography>
                <TextField 
                required 
                type="password" 
                variant="outlined" 
                className={classes.resetPasswordFields} 
                inputProps={{
                  minLength: 6,
                }} 
                onChange={(e) => onChange(e, 'newRPassword')} />
              </Box>
            </Box>
            <Box className={classes.fields}>
              <Button variant="contained" type="submit" className={classes.resetPasswordBtn}>Submit</Button>
            </Box>
          </form>
        </ContentContainer>
      </Container>
    </>
  );
};

export default ChangePassword;
