import React from "react";
import { useHistory } from "react-router-dom";

import { ReactInputEvent } from "../../types";

type submitCallback<values> = (user: values) => void | Promise<void>;
type TReturnValuesForm<values> = ReturnType<
  () => [
    values,
    (
      e: ReactInputEvent | null,
      type: keyof values,
      value?: string,
      removeOfArrValues?: boolean,
    ) => void,
    submitCallback<values>,
  ]
>;

export const useValuesForm = <values>(
  values: values,
  cb: submitCallback<values>,
): TReturnValuesForm<values> => {
  const [formValues, setValues] = React.useState<values>(values);
  const history = useHistory();

  const onInputHandler = (
    e: ReactInputEvent | null,
    type: keyof values,
    value?: string,
    removeOfArrValues?: boolean,
  ) => {
    if (Array.isArray(formValues[type]) && removeOfArrValues) {
      // @ts-ignore
      const findForRemoveItemOnIdx = formValues[type].findIndex((val) => val === value);
      // @ts-ignore
      const newArr = [...formValues[type]];

      newArr.splice(findForRemoveItemOnIdx, 1);

      setValues({ ...formValues, [type]: newArr });
    } else if (Array.isArray(formValues[type])) {
      // @ts-ignore
      setValues({ ...formValues, [type]: [...formValues[type], value] });
    } else {
      setValues({ ...formValues, [type]: e!.target.value });
    }
  };

  const onSubmitHandler = async () => {
    await cb({ ...formValues });
    history.push("/");
  };

  return [formValues, onInputHandler, onSubmitHandler];
};
