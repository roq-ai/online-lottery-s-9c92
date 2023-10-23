import * as yup from 'yup';

export const winnerValidationSchema = yup.object().shape({
  winning_amount: yup.number().integer().required(),
  winning_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
  game_id: yup.string().nullable().required(),
});
