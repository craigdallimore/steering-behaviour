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
  const [isFocussed, setIsFocussed] = React.useState(false);

  // A bit gnarly.
  // The value we show is fixed to two decimal places to make it easier to read.
  // The system will still represent it as the full 3.00000001 under the hood.
  // When the user is typing (and the input has focus) we stop using .toFixed on
  // the value as it interferes with the typing experience.
  const value =
    typeof props.value === "number"
      ? isFocussed
        ? props.value
        : props.value.toFixed(2)
      : undefined;

  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        onFocus={(e) => {
          setIsFocussed(true);
          if (e.target instanceof HTMLInputElement) {
            props.onChange(parseFloat(e.target.value));
          }
        }}
        step="any"
        onBlur={() => setIsFocussed(false)}
        id={props.id}
        type="number"
        min={props.min}
        max={props.max}
        value={value}
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
