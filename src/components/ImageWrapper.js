import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.surface[2],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      height: '100% !important',
      width: 'initial !important',
      borderRadius: 'inherit',
    },
  },
}));

const ImageWrapper = ({
  content,
  className,
  alt,
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <img src={content} alt={alt} />
    </div>
  );
};

ImageWrapper.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
};

ImageWrapper.defaultProps = {
  className: '',
  alt: 'product',
};

export default ImageWrapper;
