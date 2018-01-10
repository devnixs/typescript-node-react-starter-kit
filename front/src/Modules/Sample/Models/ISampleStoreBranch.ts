import { IAsyncData } from 'src/Core/Models';
import { IItem } from './IItem';

export interface ISampleStoreBranch {
  sample: {
    items: IItem[];
    text: IAsyncData<string>;
  };
}
