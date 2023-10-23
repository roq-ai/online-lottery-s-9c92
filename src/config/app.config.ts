interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Game Administrator'],
  tenantName: 'Company',
  applicationName: 'Online Lottery System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read lottery game information',
    'Purchase lottery tickets',
    'Check winning status',
    'Update personal information',
  ],
  ownerAbilities: [
    'Manage user',
    'Manage company',
    'Manage lottery_game',
    'Manage ticket',
    'Manage winner',
    'Manage team_member',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/64b302a9-4ea9-41c4-a75e-6173a1663ade',
};
