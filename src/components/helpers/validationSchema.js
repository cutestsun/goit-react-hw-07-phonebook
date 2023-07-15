import * as yup from 'yup';
import 'yup-phone-lite';

export const validationSchema = yup.object({
  name: yup.string().min(2).max(32).required('This field is required'),
  number: yup
    .string()
    .phone(
      null,
      `Please enter a valid phone number in an international format. Example: +380 50-123-4567`
    )
    .required('This field is required'),
});
