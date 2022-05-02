import * as React from 'react';
import { IFieldProps } from '.';

export const MessageField: React.FC<IFieldProps> = ({
  id,
  label,
  message,
  value,
}) => {
  return (
    <div>
      <label htmlFor="message">
        Message
        <abbr title="required" aria-label="required">
          *
        </abbr>
      </label>
      <textarea
        id="message"
        value={message}
        name="message"
        placeholder="Your message"
        // required
      />
    </div>
  );
};
