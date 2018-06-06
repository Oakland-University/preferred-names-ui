import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import PersonIcon from '@material-ui/icons/Person'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    maxHeight: 480,
    overflow: 'auto'
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

class PrefNames extends React.Component {
  state = {
    personList: null
  }

  async componentDidMount() {
    let personList = await getPersonList(
      '/preferrednames/api/v1/getPersonList',
      this.props.token
    )
    this.setState({ personList })
  }

  renderListItemText(person) {
    return (
      <ListItemText
        primary={
          <span>
            <strong>{person.prefFirstName}</strong>
          </span>
        }
        secondary={
          <span>
            Entered on {person.dateModified} by{' '}
            <strong>
              {person.firstName} {person.lastName}
            </strong>
          </span>
        }
      />
    )
  }

  render() {
    const { classes } = this.props
    if (this.state.personList === null) {
      return <div>An error occurred retrieving preferred name records.</div>
    } else if (this.state.personList.length === 0) {
      return <div>No students have entered a preferred name.</div>
    } else {
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
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PrefNames)
