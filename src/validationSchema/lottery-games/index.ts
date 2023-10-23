import * as yup from 'yup';

export const lotteryGameValidationSchema = yup.object().shape({
  name: yup.string().required(),
  prize_amount: yup.number().integer().required(),
  draw_date: yup.date().required(),
});
