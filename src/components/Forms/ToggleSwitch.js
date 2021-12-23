import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const AntSwitch = withStyles((theme) => ({
  root: {
    width: (props) => (props.kind === 'small' ? 40 : 48),
    height: (props) => (props.kind === 'small' ? 20 : 24),
    borderRadius: 20,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 3,
    color: theme.palette.primary.main,
    '&$checked': {
      transform: 'translateX(calc(100% + 2px))',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: (props) => ({
    width: props.kind === 'small' ? 13 : 17,
    height: props.kind === 'small' ? 13 : 17,
    boxShadow: 'none',
  }),
  track: {
    borderColor: (props) => (props.kind === 'small' ? theme.palette.surface[2] : theme.palette.surface[1]),
    borderRadius: 20,
    opacity: 1,
    backgroundColor: (props) => (props.kind === 'small' ? theme.palette.surface[2] : theme.palette.surface[1]),
  },
  checked: {},
}))(Switch);

const ToggleSwitch = ({
  size,
  handleCheck,
  value,
}) => {
  const handleChecking = (event) => {
    handleCheck(event.target.checked);
  };

  return (
    <AntSwitch
      checked={value}
      kind={size}
      onChange={handleChecking}
    />
  );
};

ToggleSwitch.propTypes = {
  size: PropTypes.oneOf(['small', 'medium']),
  handleCheck: PropTypes.func,
  value: PropTypes.bool,
};

ToggleSwitch.defaultProps = {
  size: 'medium',
  handleCheck: () => {},
  value: true,
};

export default ToggleSwitch;
