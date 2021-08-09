import { makeStyles } from '@material-ui/core/styles';

const makeClasses = makeStyles((theme: any) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      width: '90%',
      margin: 'auto'
    },
    toolbarFlex: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    toolbarBtn: {
      background: '#092653',
      color: '#FFFFFF',
      borderRadius: 20,
      padding: '8px 30px'
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    socialIcon: {
      color: '#444444'
    },
    socialIcons: {
      justifyContent: 'center',
      '& > *': {
        margin: theme.spacing(2),
      },
    },
    formControl: {
      margin: theme.spacing(1),
      width: 150,
      background: '#444444',
      border: '1px solid #ced4da',
    },
    gridItem: {
      '& > :nth-child(2)': {
        borderLeft: `1px solid #444444`,
        borderRight: `1px solid #444444`,
      },
      '& > :nth-child(4)': {
        borderTop: `1px solid #444444`,
        borderBottom: `1px solid #444444`,
        padding: '24px 30%'
      },
    },
    footerTypo: {
      '& > *': {
        margin: theme.spacing(2),
      },
    },
    appstoreIcons: {
      justifyContent: 'space-evenly',
      margin: 'auto',
      width: '40%'
    },
    img: {
      marginLeft: '10%',
    },
    typography: {
      color: 'white'
    },
    link: {
      fontWeight: '600'
    },
    footerInfo: {
      color: 'white',
      fontWeight: '300',
      fontSize: 14
    },
    navbar: {
      justifyContent: 'space-between'
    },
    navbarTypo: {
      padding: '10px 20px',
      background: '#19828A',
      borderRadius: 8,
      color: 'white'
    },
    navbarPage: {
      fontWeight: '500',
      fontSize: 18
    },
    Container: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '50px',
      marginTop: 0,
    },
    innerContainer: {
      flex: 1,
      maxWidth: '100%',
      backgroundColor: '#ffffff',
      boxShadow: `0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)`,
      borderRadius: '8px',
      padding: '30px 20px',
      width: '100%'
    },
    Content: {
      padding: theme.spacing(8, 0, 6),
      width: "95%",
      maxWidth: "100%"
    },
    inputField: {
      width: '30%'
    },
    fields: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    resetPassword: {
      width: '100%',
      justifyContent: 'space-between',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    resetPasswordBtn: {
      background: '#092653',
      color: '#FFFFFF',
      borderRadius: 20,
      padding: '8px 30px',
      margin: theme.spacing(2),
    },
    resetPasswordFields: {
      width: '100%'
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      background: '#121212',
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
  }));

  export default makeClasses