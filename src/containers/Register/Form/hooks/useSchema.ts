/**
 * @module useFormSchema
 * @category Hooks
 *
 */
import { byteLength } from 'base64-js';
import { useIntl } from 'react-intl';
import * as yup from 'yup';

import { key as keyCode } from '@components/Fields/Common/Code/types';
import { key as keyColor } from '@components/Fields/Common/Color/types';
import { key as keyDescription } from '@components/Fields/Common/Description/types';
import { key as keyEnable } from '@components/Fields/Common/Enable/types';
import { key as keyName } from '@components/Fields/Common/Name/types';
import {
  FieldValue as FieldImageValue,
  key as keyImage,
} from '@containers/Store/Category/Form/Fields/Image/types';
import { key as keyIncludeInMenu } from '@containers/Store/Category/Form/Fields/IncludeInMenu/types';
import {
  FieldValue as FieldParentValue,
  key as keyParent,
} from '@containers/Store/Category/Form/Fields/Parent/types';

import { getMimeTypeFromBase64 } from '@helpers/image.helper';
import {
  FIELD_MAX_LENGTH,
  STORE_IMAGE_FILE_SIZE,
  STORE_IMAGE_SUPPORTED_FORMATS,
} from '@utils/constants';

import useColorFieldSchema from '@components/Fields/Common/Color/hooks/useColorFieldSchema';

import appMessages from '@app/messages';
import messagesCode from '@components/Fields/Common/Code/messages';
import messagesName from '@components/Fields/Common/Name/messages';
import messages from '@containers/Store/Category/Form/Fields/Image/messages';

/**
 * Category Form schema
 *
 * @category Hooks
 *
 */
const useFormSchema = () => {
  const intl = useIntl();
  const { schemaColor } = useColorFieldSchema();

  return yup.object().shape({
    [keyImage]: yup
      .mixed<FieldImageValue>()
      .label(intl.formatMessage(appMessages.image))
      .test(
        'fileSize',
        intl.formatMessage(messages.validationFileSizeTooLarge),
        (value) => {
          if (value?.newImage && value.newImage?.base64) {
            const fileSize = byteLength(value.newImage?.base64);
            return STORE_IMAGE_FILE_SIZE > fileSize;
          }

          return true;
        },
      )
      .test(
        'fileType',
        intl.formatMessage(messages.validationNotSupported),
        (value) => {
          if (value?.newImage && value.newImage?.base64) {
            const fileExt = getMimeTypeFromBase64(value.newImage?.base64);
            return STORE_IMAGE_SUPPORTED_FORMATS.includes(fileExt);
          }
          return true;
        },
      ),
    [keyParent]: yup
      .mixed<FieldParentValue>()
      .label(intl.formatMessage(appMessages.parentCategory)),
    [keyEnable]: yup
      .boolean()
      .label(intl.formatMessage(appMessages.enable))
      .required(),
    [keyIncludeInMenu]: yup
      .boolean()
      .label(intl.formatMessage(appMessages.includeInMenu))
      .required(),
    [keyName]: yup
      .string()
      .label(intl.formatMessage(appMessages.name))
      .max(
        FIELD_MAX_LENGTH,
        intl.formatMessage(messagesName.validationMax, {
          length: FIELD_MAX_LENGTH,
        }),
      )
      .required(),
    [keyDescription]: yup
      .string()
      .label(intl.formatMessage(appMessages.description)),
    [keyCode]: yup
      .string()
      .label(intl.formatMessage(appMessages.code))
      .max(
        FIELD_MAX_LENGTH,
        intl.formatMessage(messagesCode.validationMax, {
          length: FIELD_MAX_LENGTH,
        }),
      ),

    [keyColor]: schemaColor,
  });
};

export default useFormSchema;
