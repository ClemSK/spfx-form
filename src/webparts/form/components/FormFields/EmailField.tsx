import * as React from 'react';
import { IFieldProps } from '.';

export const EmailField: React.FC<IFieldProps> = ({
  id,
  label,
  email,
  value,
}) => {
  return (
    <div>
      <label htmlFor="email">
        Email
        <abbr title="required" aria-label="required">
          *
        </abbr>
      </label>
      <input
        type="email"
        id="email"
        value={email}
        name="email"
        placeholder="Your email"
        // required
      />
    </div>
  );
};
