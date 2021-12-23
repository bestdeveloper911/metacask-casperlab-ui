import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import Caption from '../Typography/Caption';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 100,
    '& .MuiSelect-icon': {
      width: 32,
      height: 31,
      border: (props) => props.iconBorder && `2px solid ${theme.palette.surface[2]}`,
      borderRadius: '50%',
      padding: 5,
      right: 7,
      top: 'calc(50% - 16px)',
      color: theme.palette.text.secondary,
      fontWeight: 'bolder',
    },
  },
  label: {
    marginBottom: 10,
  },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: theme.shape.borderRadius,
    position: 'relative',
    backgroundColor: 'transparent',
    border: `2px solid ${theme.palette.surface[2]}`,
    fontSize: 15,
    padding: '11px 26px 14px 15px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: theme.shape.borderRadius,
      background: 'transparent',
    },
  },
}))(InputBase);

const SelectField = ({
  className,
  label,
  iconBorder,
  options,
  value,
}) => {
  const classes = useStyles({ iconBorder });

  return (
    <FormControl className={className}>
      {Boolean(label) && (
        <Caption className={classes.label}>
          {label}
        </Caption>
      )}
      <Select
        className={classes.root}
        value={value}
        onChange={() => {}}
        input={<BootstrapInput />}
        IconComponent={KeyboardArrowDownIcon}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options?.map((option) => (
          <MenuItem
            key={option.key}
            value={option.key}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  iconBorder: PropTypes.bool,
  options: PropTypes.array,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

SelectField.defaultProps = {
  className: '',
  label: '',
  iconBorder: true,
  options: [],
  value: '',
};

export default SelectField;
