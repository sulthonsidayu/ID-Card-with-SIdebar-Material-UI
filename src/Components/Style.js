import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: '#618833',
        padding: theme.spacing(5, 0, 5),
        color: '#fff'
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    Formku : {
        padding: theme.spacing(5, 0, 5),
        marginLeft: theme.spacing(35),
    },
}));

export default useStyles