import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import getTax from './helper/calTax.js';

class PaySlip extends Component {
  render() {
    const { firstName,
      lastName,
      startdate,
      enddate,
      salary,
      superrate
    } = this.props;

    if(isNaN(salary)){
      alert('Enter salary proper number');
      return false;
    }

    if(isNaN(superrate)){
      alert('Enter superrate proper number');
      return false;
    }
    
    const grossIncome = Math.round(salary/12);
    const incomeTax  = getTax(salary);
    const netIncome = parseInt(grossIncome-incomeTax);
    const superAmount = Math.round(grossIncome * (superrate) / 100);

    return (
      <div >
        <List component="nav">
          <ListItem button>
            <ListItemText primary= {`Name: ${firstName} ${lastName}`}/>
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary= {`Pay-Period: ${startdate} to ${enddate}`} />
          </ListItem>
          <ListItem button>
            <ListItemText primary= {`Gross Income: ${grossIncome}`} />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText primary={`Income Tax: ${incomeTax}`} />
          </ListItem>
          <ListItem button>
            <ListItemText primary= {`Net Income: ${netIncome}`}/>
          </ListItem>
          <ListItem button>
            <ListItemText primary={`Super Amount: ${superAmount}`} />
          </ListItem>
        </List>
      </div>
    );
  }
}

PaySlip.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  startdate: PropTypes.string.isRequired,
  enddate: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  superrate: PropTypes.string.isRequired,
};

export default PaySlip;
