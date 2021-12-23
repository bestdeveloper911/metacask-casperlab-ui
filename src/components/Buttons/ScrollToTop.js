import React, { useEffect, useState } from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  moveUpButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'fixed',
    right: 20,
    bottom: 20,
    minWidth: '40px',
    height: '40px',
    borderRadius: '5px',
    background: '#e9ecef',
    '& svg': {
      color: '#929CA5',
    },
    '&:hover': {
      background: '#e9ecef',
    },
  },
}));

export default function ScrollToTop() {
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bg-pink bottom-3 right-3  cursor-pointer">
      {isVisible && (
        <div
          onClick={scrollToTop}
          className={classes.moveUpButton}
        >
          <ExpandLessIcon />
        </div>
      )}
    </div>
  );
}
