import { environment } from 'src/environments/environment';
import { UserRole } from '../shared/auth.roles';
const adminRoot = environment.adminRoot;

export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IMenuItem[];
  roles?: UserRole[];
}

const data: IMenuItem[] = [
  {
    icon: 'iconsminds-home',
    label: 'menu.dashboard',
    to: `${adminRoot}/dashboards/dashboard`,
    // roles: [UserRole.Editor],
  },
  {
    icon: 'simple-icon-globe',
    label: 'menu.web',
    to: `${adminRoot}/web`,
    // roles: [UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-globe',
        label: 'menu.domain',
        to: `${adminRoot}/web/domain`,
      },
      {
        icon: 'iconsminds-letter-open',
        label: 'menu.certificates',
        to: `${adminRoot}/web/certificates`,
      },
      {
        icon: 'simple-icon-globe',
        label: 'menu.subdomains',
        to: `${adminRoot}/web/subdomains`,
      },
      {
        icon: 'simple-icon-globe',
        label: 'menu.similarDomains',
        to: `${adminRoot}/web/similarDomains`,
      },
      {
        icon: 'iconsminds-security-bug',
        label: 'menu.vulnerabilities',
        to: `${adminRoot}/web/vulnerabilities`,
      },
      {
        icon: 'iconsminds-hipster-men',
        label: 'menu.darkweb',
        to: `${adminRoot}/web/darkweb`,
      },
      {
        icon: 'simple-icon-target',
        label: 'menu.pentest',
        to: `${adminRoot}/web/pentest`,
      },
    ],
  },
  {
    icon: 'iconsminds-server-2',
    label: 'menu.servers',
    to: `${adminRoot}/servers`,
     // roles: [UserRole.Editor],
    subs: [
      {
        icon: 'iconsminds-check',
        label: 'menu.inventory',
        to: `${adminRoot}/servers/inventory`,
      },
      {
        icon: 'iconsminds-firewall',
        label: 'menu.vulnerabilities',
        to: `${adminRoot}/servers/vulnerabilities`,
      },
      {
        icon: 'iconsminds-folder-close',
        label: 'menu.blacklists',
        to: `${adminRoot}/servers/blacklists`,
      },
      {
        icon: 'simple-icon-fire',
        label: 'menu.darkweb',
        to: `${adminRoot}/servers/darkweb`,
      },
      {
        icon: 'simple-icon-notebook',
        label: 'menu.pentest',
        to: `${adminRoot}/servers/pentest`,
      },
    ],
  },
  {
    icon: 'iconsminds-mail-inbox',
    label: 'menu.mail',
    to: `${adminRoot}/mail`,
    // roles: [UserRole.Editor],
    subs: [
      {
        icon: 'iconsminds-check',
        label: 'menu.inventory',
        to: `${adminRoot}/mail/inventory`,
      },
      {
        icon: 'iconsminds-statistic',
        label: 'menu.signatures',
        to: `${adminRoot}/mail/signatures`,
      },
      {
        icon: 'iconsminds-scale',
        label: 'menu.abuses',
        to: `${adminRoot}/mail/abuses`,
      },
      {
        icon: 'iconsminds-folder-close',
        label: 'menu.blacklists',
        to: `${adminRoot}/mail/blacklists`,
      },
      {
        icon: 'iconsminds-lock-2',
        label: 'menu.passwords',
        to: `${adminRoot}/mail/passwords`,
      },
      {
        icon: 'iconsminds-scale',
        label: 'menu.addMail',
        to: `${adminRoot}/mail/addMail`,
      },
    ],
  },
  {
    icon: 'iconsminds-letter-open',
    label: 'menu.certificates',
    to: `${adminRoot}/certificates/certificates`,
    // roles: [UserRole.Editor],
  },
  {
    icon: 'iconsminds-type-pass',
    label: 'menu.passwords',
    to: `${adminRoot}/passwords/passwords`,
    // roles: [UserRole.Editor],
  },
  {
    icon: 'simple-icon-people',
    label: 'menu.socialmedia',
    to: `${adminRoot}/social`,
    // roles: [UserRole.Editor],
    subs: [
      {
        icon: 'iconsminds-king-2',
        label: 'menu.abuses',
        to: `${adminRoot}/social/abuses`,
      },
    ],
  },
  {
    icon: 'iconsminds-filter-2',
    label: 'menu.leaks',
    to: `${adminRoot}/leaks`,
    // roles: [UserRole.Editor],
    subs: [
      {
        icon: 'iconsminds-box-with-folders',
        label: 'menu.documents',
        to: `${adminRoot}/leaks/documents`,
      },
      {
        icon: 'iconsminds-coding',
        label: 'menu.code',
        to: `${adminRoot}/leaks/code`,
      },
      {
        icon: 'iconsminds-books',
        label: 'menu.addRepo',
        to: `${adminRoot}/leaks/addRepo`,
      },
    ],
  },
  {
    icon: 'simple-icon-eye',
    label: 'menu.darkweb',
    to: `${adminRoot}/darkweb/darkweb`,
    // roles: [UserRole.Editor],
  },
  {
    icon: 'simple-icon-link',
    label: 'menu.supplyChain',
    to: `${adminRoot}/supplyChain`,
    // roles: [UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.providerAlerts',
        to: `${adminRoot}/supplyChain/providerAlerts`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.providerList',
        to: `${adminRoot}/supplyChain/providerList`,
      },
      {
        icon: 'iconsminds-add-user',
        label: 'menu.addProvider',
        to: `${adminRoot}/supplyChain/addProvider`,
      },
    ],
  },
  {
    icon: 'iconsminds-conference',
    label: 'menu.competitors',
    to: `${adminRoot}/competitors`,
    // roles: [UserRole.Editor],
    subs: [
      {
        icon: 'iconsminds-down-2',
        label: 'menu.selectors',
        to: `${adminRoot}/competitors/selectors`,
      },
    ],
  },
  {
    icon: 'iconsminds-link-2',
    label: 'menu.blockchain',
    to: `${adminRoot}/blockchain`,
    // roles: [UserRole.Editor],
    subs: [
      {
        icon: 'iconsminds-compass-1',
        label: 'menu.explorer',
        to: `${adminRoot}/blockchain/explorer`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.smartContractsAuditory',
        to: `${adminRoot}/blockchain/auditory`,
      }
    ],
  },
  {
    icon: 'iconsminds-wrench',
    label: 'menu.tools',
    to: `${adminRoot}/tools`,
    // roles: [UserRole.Editor],
    subs: [
      {
        icon: 'iconsminds-communication-tower-2',
        label: 'menu.webAuditory',
        to: `${adminRoot}/tools/webAuditory`,
      },
      {
        icon: 'iconsminds-geo2',
        label: 'menu.ipAuditory',
        to: `${adminRoot}/tools/ipAuditory`,
      },
      {
        icon: 'consminds-diploma-2',
        label: 'menu.smartContractsAuditory',
        to: `${adminRoot}/tools/contract`,
      }
    ],
  },
  {
    icon: 'iconsminds-rss',
    label: 'menu.feed',
    to: `${adminRoot}/feed`,
    // roles: [UserRole.Editor],
    subs: [
      {
        icon: 'iconsminds-rss',
        label: 'menu.nist',
        to: `${adminRoot}/feed/nist`,
      },
      {
        icon: 'iconsminds-rss',
        label: 'menu.incibe',
        to: `${adminRoot}/feed/incibe`,
      },
      {
        icon: 'iconsminds-rss',
        label: 'menu.ccncert',
        to: `${adminRoot}/feed/ccncert`,
      },
      {
        icon: 'iconsminds-rss',
        label: 'menu.other',
        to: `${adminRoot}/feed/other`,
      }
    ],
  },
  {
    icon: 'iconsminds-support',
    label: 'menu.help',
    to: `${adminRoot}/help`,
    // roles: [UserRole.Editor],
    subs: [
      {
        icon: 'iconsminds-mail-love',
        label: 'menu.mail',
        to: `${adminRoot}/help/mail`,
      },
      {
        icon: 'simple-icon-earphones-alt',
        label: 'menu.contactForm',
        to: `${adminRoot}/help/contactForm`,
      }
    ],
  },
];
export default data;
