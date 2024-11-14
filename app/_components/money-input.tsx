import { ForwardedRef, forwardRef } from "react";
import { Input, InputProps } from "./ui/input";
import { NumericFormat, NumericFormatProps } from "react-number-format";

export const MoneyInput = forwardRef(
  (
    props: NumericFormatProps<InputProps>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <NumericFormat
        {...props}
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        allowNegative={false}
        customInput={Input}
        getInputRef={ref}
      />
    );
  },
);

MoneyInput.displayName = "MoneyInput";