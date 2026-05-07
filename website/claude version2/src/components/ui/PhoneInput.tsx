import { Controller, Control, FieldErrors } from 'react-hook-form';
import Select from './Select';
import Input from './Input';
import { countryCodes } from '../../lib/analytics';
import { VendorInquiryInput } from '../../lib/validators';

type Props = {
  control: Control<VendorInquiryInput>;
  errors: FieldErrors<VendorInquiryInput>;
  ids?: { code: string; phone: string };
};

export default function PhoneInput({ control, errors, ids = { code: 'countryCode', phone: 'phoneLocal' } }: Props) {
  const phoneInvalid = !!errors.phoneLocal || !!errors.countryCode;
  return (
    <div className="flex gap-2">
      <Controller
        name="countryCode"
        control={control}
        defaultValue="+1"
        render={({ field }) => (
          <Select id={ids.code} {...field} className="w-32 shrink-0" invalid={!!errors.countryCode} aria-label="Country code">
            {countryCodes.map((c) => (
              <option key={c.code} value={c.code}>
                {c.label}
              </option>
            ))}
          </Select>
        )}
      />
      <Controller
        name="phoneLocal"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            id={ids.phone}
            type="tel"
            inputMode="numeric"
            placeholder="5551234567"
            invalid={phoneInvalid}
            {...field}
          />
        )}
      />
    </div>
  );
}
