import * as yup from 'yup';

export const teamMemberValidationSchema = yup.object().shape({
  name: yup.string().required(),
  role: yup.string().required(),
  company_id: yup.string().nullable().required(),
});
