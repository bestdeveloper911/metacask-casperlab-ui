import React from 'react';

import AccordionItem from '../Widgets/AccordionItem';
import { generalFAQ } from '../../constants/faq';

const General = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {generalFAQ.map((item) => (
        <AccordionItem
          key={item.key}
          title={item.title}
          isExpanded={expanded === item.key}
          handleChange={handleChange(item.key)}
        >
          {item.description}
        </AccordionItem>
      ))}
    </div>
  );
};

export default General;
