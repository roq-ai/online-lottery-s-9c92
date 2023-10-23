import * as yup from 'yup';

export const ticketValidationSchema = yup.object().shape({
  number: yup.string().required(),
  purchase_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
  game_id: yup.string().nullable().required(),
});
