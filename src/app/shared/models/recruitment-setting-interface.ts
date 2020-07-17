import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';
import { CoreLov } from './core-lov.interface';

export interface Parameter {
   valData1 : string;
   valData2 : string;
   createdBy?: string;
   createdAt?: Date;
   updatedBy?: string;
   updatedAt?: Date;
   version?: number;
}