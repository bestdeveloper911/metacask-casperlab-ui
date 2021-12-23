import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionAction from '@material-ui/core/AccordionActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Body1 from '../Typography/Body1';
import OutlinedButton from '../Buttons/OutlinedButton';

const Accordion = withStyles((theme) => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
}))(MuiAccordion);

const AccordionSummary = withStyles((theme) => ({
  root: {
    minHeight: 96,
    padding: theme.spacing(0, 0, 1),
    '&$expanded': {
      minHeight: 96,
      padding: theme.spacing(0, 0, 1),
    },
  },
  content: {
    '&$expanded': {
      margin: theme.spacing(1.25, 0),
    },
  },
  expanded: {},
  expandIcon: {
    color: theme.palette.text.secondary,
  },
}))(MuiAccordionSummary);

const AccordionDetails = withStyles(() => ({
  root: {
    padding: 0,
  },
}))(MuiAccordionDetails);

const AccordionAction = withStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(3, 0, 4.5),
    '& button': {
      borderColor: theme.palette.text.secondary,
      width: 118,
    },
  },
}))(MuiAccordionAction);

const AccordionItem = ({
  title,
  children,
  isExpanded,
  handleChange,
}) => (
  <Accordion
    square
    expanded={isExpanded}
    onChange={handleChange}
  >
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Body1>{title}</Body1>
    </AccordionSummary>
    <AccordionDetails>
      <Body1 color="secondary">
        {children}
      </Body1>
    </AccordionDetails>
    <AccordionAction>
      <OutlinedButton label="Learn more" />
    </AccordionAction>
  </Accordion>
);

AccordionItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  isExpanded: PropTypes.bool,
  handleChange: PropTypes.func,
};

AccordionItem.defaultProps = {
  title: '',
  isExpanded: false,
  handleChange: () => {},
};

export default AccordionItem;
