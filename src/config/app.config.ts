interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Marketing Manager'],
  tenantName: 'Organization',
  applicationName: 'PLR BRASIL',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
