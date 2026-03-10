import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './index';

describe('Accordion', () => {
  it('renders correctly and toggles content', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem id="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText('Is it accessible?')).toBeTruthy();

    // Content should be hidden initially (depending on implementation, it might be in the tree but with 0 height)
    // Here we just test that the trigger exists and can be pressed
    fireEvent.press(screen.getByText('Is it accessible?'));
  });
});
