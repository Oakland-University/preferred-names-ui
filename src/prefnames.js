import React from 'react';
import PropTypes from 'prop-types';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemText,
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import PersonIcon from 'material-ui-icons/Person';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 480
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});

function PrefNames(props) {
  const { classes } = props;

  // Mock JSON
  var mockJson = [
    {
      "prefFirstName":"Mike",
      "firstName":"Michael",
      "lastName":"Scott",
      "dateModified":"January 04, 2018"
    },
    {
      "prefFirstName":"Andy",
      "firstName":"Anderson",
      "lastName":"Bernard",
      "dateModified":"January 02, 2018"
    },
    {
      "prefFirstName":"Pam",
      "firstName":"Pamela",
      "lastName":"Beesly",
      "dateModified":"January 02, 2018"
    },
    {
      "prefFirstName":"Jim",
      "firstName":"James",
      "lastName":"Halpert",
      "dateModified":"January 01, 2018"
    }
  ]

  function renderPerson(person, index) {
    return (
      <ListItem key={index}>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={<span><strong>{person.prefFirstName}</strong></span>}
          secondary={<span>Entered on {person.dateModified} by <strong>{person.firstName} {person.lastName}</strong></span>}
        />
      </ListItem>
    )
  }

  return (
    <List className={classes.root} subheader={<li />}>
      <li className={classes.listSection}>
        {mockJson.map((person, index) => (
          <ul key={index} className={classes.ul}>
            {renderPerson(person, index)}
          </ul>
        ))}
      </li>
    </List>
  );
}

PrefNames.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrefNames);
