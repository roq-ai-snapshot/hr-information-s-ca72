
    interface AppConfigInterface {
      ownerRoles: string[],
      customerRoles: string[],
      tenantRoles: string[],
      tenantName: string,
      applicationName: string
      addOns: string[]
      ownerAbilities: string[],
      customerAbilities: string[],
      getQuoteUrl: string
    }
    export const appConfig: AppConfigInterface = {"ownerRoles":["Business Owner"],"customerRoles":["Guest"],"tenantRoles":["Business Owner","HR Manager","Payroll Administrator","Employee","Accountant"],"tenantName":"Company","applicationName":"HR Information System","addOns":["file upload","chat","notifications","file"],"customerAbilities":["Read user information","Read company information","Read employee information","Read vacation details"],"ownerAbilities":["Manage company information","Manage employee data","Manage vacation requests","Manage payroll information"],"getQuoteUrl":"https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/4f7ecc58-d89a-4b5e-b7a5-b32a14e7ce72"}
  