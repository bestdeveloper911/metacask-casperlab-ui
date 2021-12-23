import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Caption from '../Typography/Caption';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.surface[1],
    fontWeight: 500,
    border: `1px solid ${theme.palette.surface[2]}`,
    fontSize: (props) => (props.size === 'small' ? 13 : 14),
    minHeight: (props) => (props.size === 'small' ? 41 : 48),
    borderRadius: theme.shape.borderRadius,
  },
  icon: {
    color: theme.palette.surface[3],
  },
  label: {
    marginBottom: 9,
  },
}));

const InputField = ({
  icon,
  placeholder,
  className,
  wrapperClass,
  label,
  size,
  isMulti,
  row,
  value,
  onChange,
}) => {
  const classes = useStyles({ size });

  return (
    <div className={clsx(classes.wrapper, wrapperClass)}>
      {Boolean(label) && (
        <Caption className={classes.label}>
          {label}
        </Caption>
      )}
      <OutlinedInput
        className={clsx(classes.root, className)}
        value={value}
        onChange={onChange}
        endAdornment={(
          <InputAdornment
            position="end"
            className={classes.icon}
          >
            {icon || null}
          </InputAdornment>
        )}
        rows={row}
        multiline={isMulti}
        placeholder={placeholder}
        notched={false}
      />
    </div>
  );
};

InputField.propTypes = {
  icon: PropTypes.node,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  wrapperClass: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
  isMulti: PropTypes.bool,
  row: PropTypes.number,
};

InputField.defaultProps = {
  icon: <span />,
  placeholder: '',
  className: '',
  wrapperClass: '',
  label: '',
  size: 'medium',
  isMulti: false,
  row: 3,
};

export default InputField;
