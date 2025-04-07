import { ErrorMessage as ErrorMessageHook } from '@hookform/error-message';
import { FormHelperText } from '@mui/material';
import { FieldErrors } from 'react-hook-form';

type Props = {
  errors: FieldErrors;
  name: string;
};

const FieldErrorMessage = ({ errors, name }: Props) => (
  <ErrorMessageHook
    errors={errors}
    name={name}
    render={({ messages, message }) => {
      if (messages) {
        return Object.entries(messages).map(([type, message]) => (
          <FormHelperText key={type} error>
            {message?.toString()}
          </FormHelperText>
        ));
      }

      if (message) {
        return <FormHelperText error>{message}</FormHelperText>;
      }

      return null;
    }}
  />
);

export default FieldErrorMessage;
