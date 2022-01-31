import React from "react";

type Props = {
  id: string;
  label: string;
  value?: number;
  min?: number;
  max?: number;
  onChange: (nextValue: number) => void;
};

const NumericField = (props: Props) => {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type="number"
        min={props.min}
        max={props.max}
        value={props.value ? props.value.toFixed(2) : undefined}
        onChange={(e) => {
          if (e.target instanceof HTMLInputElement) {
            props.onChange(parseFloat(e.target.value));
          }
        }}
      />
    </>
  );
};

export default NumericField;
