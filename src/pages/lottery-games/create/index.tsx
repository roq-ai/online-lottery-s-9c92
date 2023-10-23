import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { lotteryGameValidationSchema } from 'validationSchema/lottery-games';
import { LotteryGameInterface } from 'interfaces/lottery-game';

function LotteryGameCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: LotteryGameInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.lottery_game.create({ data: values as RoqTypes.lottery_game });
      resetForm();
      router.push('/lottery-games');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<LotteryGameInterface>({
    initialValues: {
      name: '',
      prize_amount: 0,
      draw_date: new Date(new Date().toDateString()),
    },
    validationSchema: lotteryGameValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Lottery Games',
              link: '/lottery-games',
            },
            {
              label: 'Create Lottery Game',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Lottery Game
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.name}
            label={'Name'}
            props={{
              name: 'name',
              placeholder: 'Name',
              value: formik.values?.name,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Prize Amount"
            formControlProps={{
              id: 'prize_amount',
              isInvalid: !!formik.errors?.prize_amount,
            }}
            name="prize_amount"
            error={formik.errors?.prize_amount}
            value={formik.values?.prize_amount}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('prize_amount', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <FormControl id="draw_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Draw Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.draw_date ? new Date(formik.values?.draw_date) : null}
              onChange={(value: Date) => formik.setFieldValue('draw_date', value)}
            />
          </FormControl>

          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/lottery-games')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'lottery_game',
    operation: AccessOperationEnum.CREATE,
  }),
)(LotteryGameCreatePage);
