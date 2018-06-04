import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './style/style.js';
import PaySlip from './PaySlip';

//Main Class Component
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      lastname: '',
      salary: '0',
      startdate: '',
      enddate: '',
      superrate: '',
      showPaySlip: false,
    };

    this.generatePaySlip = this.generatePaySlip.bind(this);
  }

  //handle on change function for the input feilds
  handleChange = (fieldName) => ({target: { value }}) => {
    this.setState({
      [fieldName]: value,
    });
  }

  //Function for Generating the Payslip
  generatePaySlip() {
    this.setState({showPaySlip:true});
  }

  render() {
    const { classes } = this.props;
    const { name,lastname,salary,startdate,enddate,superrate,showPaySlip} = this.state;
    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            required
            id="name"
            label="First Name"
            className={classes.textField}
            value={name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            id="lastname"
            label="Last Name"
            defaultValue="foo"
            className={classes.textField}
            value={lastname}
            onChange={this.handleChange('lastname')}
            margin="normal"
          />
          <TextField
            id="usd"
            label="Currency"
            defaultValue="foo"
            className={classes.textField}
            value="USD"
            margin="normal"
          />
          <TextField
            id="salary"
            label="Salary"
            value={salary}
            pattern="[0-9]*"
            inputMode="numeric"
            className={classes.textField}
            onChange={this.handleChange('salary')}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="date"
            label="Start Date"
            value={startdate}
            type="date"
            className={classes.textField}
            onChange={this.handleChange('startdate')}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="date"
            label="End Date"
            value={enddate}
            type="date"
            className={classes.textField}
            onChange={this.handleChange('enddate')}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="superrate"
            label="Super Rate"
            value={superrate}
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            className={classes.textField}
            onChange={this.handleChange('superrate') }
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <Button
            variant="raised"
            color="primary"
            className={classes.button}
            onClick={ this.generatePaySlip }>
            Generate Payslip
          </Button>
        </form>
        { showPaySlip && <PaySlip
            firstName={name}
            lastName={lastname}
            salary={salary}
            superrate={superrate}
            startdate={startdate}
            enddate={enddate}
            />
        }
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
