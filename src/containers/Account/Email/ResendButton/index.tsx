'use client';

import { Button, ButtonProps, Typography } from '@mui/material';
import { differenceInSeconds, fromUnixTime } from 'date-fns';
import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import useResendEmail from '@/containers/Account/Email/hooks/useResendEmail';
import { convertToTime } from '@/helpers/time.helper';
import useAppDispatch from '@/hooks/useAppDispatch';
import { resetAccountFields, selectAccountState } from '@/rtk/account/slice';
import { EMAIL_RESEND_COOLDOWN } from '@/utils/constants';

type Props = {
  isVerified?: boolean;
  ButtonProps?: Partial<ButtonProps>;
};

const AccountResendEmailButton = ({
  isVerified = false,
  ButtonProps,
}: Props) => {
  const dispatch = useAppDispatch();
  const { resendEmail, isPending } = useResendEmail();
  const [canResendEmail, setCanResendEmail] = useState(false);
  const { emailResendDate } = useSelector(selectAccountState);
  const [cooldownTimer, setCooldownTimer] = useState(EMAIL_RESEND_COOLDOWN);

  const subtractCooldownTime = () => {
    setCooldownTimer((prevCooldownTimer) => prevCooldownTimer - 1);
  };

  useEffect(() => {
    if (emailResendDate && emailResendDate.unix) {
      const diff = differenceInSeconds(
        new Date(),
        fromUnixTime(emailResendDate.unix),
      );
      const showResend = diff > EMAIL_RESEND_COOLDOWN;
      setCanResendEmail(showResend);
      if (!showResend) setCooldownTimer(EMAIL_RESEND_COOLDOWN - diff);
      return;
    }
    setCanResendEmail(true);
  }, [emailResendDate]);

  useEffect(() => {
    let timeout = null as ReturnType<typeof setTimeout> | null;
    if (!canResendEmail) {
      if (cooldownTimer > 0) {
        timeout = setTimeout(() => subtractCooldownTime(), 1000);
      }

      if (cooldownTimer === 0) {
        setCooldownTimer(EMAIL_RESEND_COOLDOWN);
        dispatch(resetAccountFields(['emailResendDate']));
      }
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [canResendEmail, cooldownTimer, dispatch]);

  if (!isVerified) {
    if (!canResendEmail) {
      return (
        <Typography variant="body2">
          {`Resend email in ${convertToTime(cooldownTimer)}`}
        </Typography>
      );
    }

    if (canResendEmail) {
      return (
        <Button
          variant="outlined"
          loading={isPending}
          disabled={isPending}
          onClick={() => resendEmail()}
          {...ButtonProps}
        >
          {isPending ? 'Sending Verification' : 'Send Verification'}
        </Button>
      );
    }
  }

  return null;
};

export default memo(AccountResendEmailButton);
