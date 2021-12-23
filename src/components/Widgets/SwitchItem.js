import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import LabelWithComment from './LabelWIthComment';
import ToggleSwitch from '../Forms/ToggleSwitch';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const SwitchItem = ({
  label,
  comment,
  className,
}) => {
  const classes = useStyles();
  const [check, setCheck] = useState(false);

  return (
    <div className={clsx(classes.root, className)}>
      <LabelWithComment comment={comment}>
        {label}
      </LabelWithComment>
      <ToggleSwitch
        value={check}
        handleCheck={setCheck}
      />
    </div>
  );
};

SwitchItem.propTypes = {
  label: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SwitchItem.defaultProps = {
  className: '',
};

export default SwitchItem;
