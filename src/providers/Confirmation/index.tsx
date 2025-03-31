/**
 * @module ConfirmationProvider
 * @category Providers
 *
 */

import { memo, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import type { DialogConfirmationProps } from '@/components/DialogConfirmation/types';
import type { PromiseInfo } from '@/providers/Confirmation/types';

import ConfirmationContext from '@/providers/Confirmation/Context';

import DialogConfirmation from '@/components/DialogConfirmation';

const ConfirmationProvider = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const [props, setProps] =
    useState<
      Partial<
        Omit<
          DialogConfirmationProps,
          'open' | 'onCancel' | 'onClose' | 'onConfirm'
        >
      >
    >();
  const [promiseInfo, setPromiseInfo] = useState<PromiseInfo | null>(null);

  const showConfirmation = useCallback(
    (props?: Omit<DialogConfirmationProps, 'open'>): Promise<boolean> =>
      new Promise((resolve) => {
        if (props) setProps(props);
        setOpen(true);
        setPromiseInfo({ resolve });
      }),
    [],
  );

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setProps(undefined), 300);
  };

  const handleConfirm = () => {
    promiseInfo?.resolve(true);
    handleClose();
  };

  const handleCancel = () => {
    promiseInfo?.resolve(false);
    handleClose();
  };

  const value = useMemo(() => ({ showConfirmation }), [showConfirmation]);

  return (
    <ConfirmationContext.Provider value={value}>
      <>
        <DialogConfirmation
          open={open}
          {...props}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
        {children}
      </>
    </ConfirmationContext.Provider>
  );
};

export default memo(ConfirmationProvider);
