import React from "react";
import StyledSelect, { ReactSelectProps } from "../StyledSelect/StyledSelect";

const MultiSelect = <T,>({ options, onChange, classNamePrefix, ...props }: ReactSelectProps<T, true>) => {
  return (
    <StyledSelect
      classNamePrefix={classNamePrefix ?? "custom-react-select"}
      {...props}
      isMulti={true}
      options={options}
      onChange={onChange}
    />
  );
};

export default MultiSelect;
