import React from 'react';
import Dropzone from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import Tiny from '../Typography/Tiny';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  dropzone: {
    width: '100%',
    height: 184,
    background: theme.palette.surface[1],
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  icon: {
    color: theme.palette.text.secondary,
    marginBottom: 8,
  },
}));

const UploadFile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Dropzone
        name="file"
        accept="image/*"
        className={classes.dropzone}
        onDrop={() => {}}
      >
        <CloudUploadIcon className={classes.icon} />
        <Tiny>
          PNG, GIF, WEBP, MP4 or MP3, Max 1Gb
        </Tiny>
      </Dropzone>
    </div>
  );
};

export default UploadFile;
