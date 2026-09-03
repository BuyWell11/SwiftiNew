import type { AddressDTO } from '@shared/api/types/AddressDTO';
import type { CustomSelectOption } from '@shared/types/CustomSelectOption';

export type AddressesFormValues = {
  city: CustomSelectOption | null;
  time: number;
  from: AddressDTO | null;
  to: AddressDTO | null;
  fromText: string;
  toText: string;
  fromOptions: AddressDTO[];
  toOptions: AddressDTO[];
  myPosition: AddressDTO | null;
  agree: boolean;
};
