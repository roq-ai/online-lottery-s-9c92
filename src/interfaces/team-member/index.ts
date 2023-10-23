import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface TeamMemberInterface {
  id?: string;
  name: string;
  role: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface TeamMemberGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  role?: string;
  company_id?: string;
}
