import React from 'react';
import Classnames from 'classnames';
import {useHistory} from 'react-router-dom'
import {ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 3),
        color: '#fff',
        borderLeft: props => `solid 5px ${props.selected ? theme.palette.secondary.main : 'transparent'}`,
    },
    icon: {
        fontSize: '2rem',
        cursor: 'pointer',
        color: '#fff'
    },
    selected: {
        color: theme.palette.secondary.main,

    }
}));

const Tab = ({text, route, Icon}) => {
    const history = useHistory();
    const [selected, setSelected] = React.useState(route.getPath() === history.location.pathname);
    const classes = useStyles({selected});

    React.useEffect(() => {
        let mounted = true;

        history.listen((location) => {
            if (mounted) {
                setSelected(route.getPath() === location.pathname);
            }
        });

        return () => {
            mounted = false;
        };
    }, []);

    const onItemClick = React.useCallback(() => {
        history.push(route.getPath());
        setSelected(route.getPath()===history.location.pathname)
    }, [route, history]);
    return (
        <ListItem button onClick={onItemClick} className={classes.listItem} selected={selected}>
            <ListItemIcon><Icon className={Classnames(classes.icon, {[classes.selected]: selected})}/> </ListItemIcon>
            <ListItemText primary={text}/>
        </ListItem>
    );
}

export default Tab;