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

import { winnerValidationSchema } from 'validationSchema/winners';
import { UserInterface } from 'interfaces/user';
import { LotteryGameInterface } from 'interfaces/lottery-game';
import { WinnerInterface } from 'interfaces/winner';

function WinnerCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: WinnerInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.winner.create({ data: values as RoqTypes.winner });
      resetForm();
      router.push('/winners');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<WinnerInterface>({
    initialValues: {
      winning_amount: 0,
      winning_date: new Date(new Date().toDateString()),
      user_id: (router.query.user_id as string) ?? null,
      game_id: (router.query.game_id as string) ?? null,
    },
    validationSchema: winnerValidationSchema,
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
              label: 'Winners',
              link: '/winners',
            },
            {
              label: 'Create Winner',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Winner
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Winning Amount"
            formControlProps={{
              id: 'winning_amount',
              isInvalid: !!formik.errors?.winning_amount,
            }}
            name="winning_amount"
            error={formik.errors?.winning_amount}
            value={formik.values?.winning_amount}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('winning_amount', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <FormControl id="winning_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Winning Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.winning_date ? new Date(formik.values?.winning_date) : null}
              onChange={(value: Date) => formik.setFieldValue('winning_date', value)}
            />
          </FormControl>
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <AsyncSelect<LotteryGameInterface>
            formik={formik}
            name={'game_id'}
            label={'Select Lottery Game'}
            placeholder={'Select Lottery Game'}
            fetcher={() => roqClient.lottery_game.findManyWithCount({})}
            labelField={'name'}
          />
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
              onClick={() => router.push('/winners')}
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
    entity: 'winner',
    operation: AccessOperationEnum.CREATE,
  }),
)(WinnerCreatePage);
