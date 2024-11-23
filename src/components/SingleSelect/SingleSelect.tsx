import React from "react";
import StyledSelect, { ReactSelectProps } from "../StyledSelect/StyledSelect";

const SingleSelect = <T,>({ options, onChange, classNamePrefix, ...props }: ReactSelectProps<T>) => {
  return (
    <StyledSelect
      classNamePrefix={classNamePrefix ?? "custom-react-select"}
      {...props}
      isMulti={false}
      options={options}
      onChange={onChange}
    />
  );
};

export default SingleSelect;
