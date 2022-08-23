import { environment } from 'src/environments/environment';
import { UserRole } from '../shared/auth.roles';
const adminMenuRoot = environment.adminMenuRoot;

export interface IAdminMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IAdminMenuItem[];
  roles?: UserRole[];
}
// iconsminds-suitcase d-block
const data: IAdminMenuItem[] = [
  {
    icon: 'iconsminds-male-female d-block',
    label: 'User List',
    to: `${adminMenuRoot}/user`,
     // roles: [UserRole.Editor],
  },
  {
    icon: 'iconsminds-suitcase d-block',
    label: 'Company List',
    to: `${adminMenuRoot}/company`,
    // roles: [UserRole.Editor],
  },
];
export default data;
