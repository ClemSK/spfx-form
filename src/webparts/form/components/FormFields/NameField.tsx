import * as React from 'react';
import { IFieldProps } from '.';

export const NameField: React.FC<IFieldProps> = ({
  id,
  label,
  name,
  value,
  //   handleChange,
}) => {
  return (
    <div>
      <label htmlFor="name">
        Name
        <abbr title="required" aria-label="required">
          *
        </abbr>
      </label>
      <input
        type="name"
        id="name"
        value={name}
        name="name"
        placeholder="Your name"
        // required
        // onChange={handleChange}
      />
    </div>
  );
};
