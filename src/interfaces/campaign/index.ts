import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CampaignInterface {
  id?: string;
  name: string;
  type: string;
  organization_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {};
}

export interface CampaignGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  type?: string;
  organization_id?: string;
  user_id?: string;
}
