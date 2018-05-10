import React, {Component} from 'react'
import PropTypes from 'prop-types'
import List, {
  ListItem,
  ListItemAvatar,
  ListItemText,
} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import PersonIcon from '@material-ui/icons/Person'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    maxHeight: 480,
    overflow: 'auto',
  }
})

// Retrieve the list of preferred names as JSON.
const getPersonList = async (url, token) => {
  try {
    let response = await fetch(url, {
      credentials: 'include',
      headers: { Authorization: 'Bearer ' + token }
    })

    let personList = await response.json()
    return personList

  } catch (err) {
    console.error(err)
    return null
  }
}

class PrefNames extends Component {

  state = {
    personList: null
  }

  async componentDidMount() {
    let personList = await getPersonList(
      '/preferrednames/api/v1/getPersonList',
      this.props.token
    )
    this.setState({personList})
  }

  renderListItemText(person) {
    return (
      <ListItemText
        primary={<span><strong>{person.prefFirstName}</strong></span>}
        secondary={<span>Entered on {person.dateModified} by <strong>{person.firstName} {person.lastName}</strong></span>}
      />
    )
  }

  render() {
    const { classes } = this.props
    if (this.state.personList === null) {
      return (
        <div>An error occurred retrieving preferred name records.</div>
      )
    }else if (this.state.personList.length === 0) {
      return (
        <div>No students have entered a preferred name.</div>
      )
    }else{
      return (
        <List className={classes.root}>
          {this.state.personList.map((person, index) => (
            <ListItem className={classes.listItem} key={index}>
              <ListItemAvatar>
                <Avatar>
                <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              {this.renderListItemText(person)}
            </ListItem>
          ))}
        </List>
      )
    }
  }
}

PrefNames.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PrefNames)
