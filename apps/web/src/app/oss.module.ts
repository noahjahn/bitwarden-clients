import { NgModule } from "@angular/core";

import { LooseComponentsModule } from "./modules/loose-components.module";
import { OrganizationManageModule } from "./modules/organizations/manage/organization-manage.module";
import { OrganizationUserModule } from "./modules/organizations/users/organization-user.module";
import { PipesModule } from "./modules/pipes/pipes.module";
import { TrialModule } from "./modules/trial/trial.module";
import { SharedModule } from "./modules/shared.module";
import { VaultFilterModule } from "./modules/vault-filter/vault-filter.module";
import { OrganizationBadgeModule } from "./modules/vault/modules/organization-badge/organization-badge.module";

@NgModule({
  imports: [
    SharedModule,
    LooseComponentsModule,
    TrialModule,
    VaultFilterModule,
    OrganizationBadgeModule,
    PipesModule,
    OrganizationManageModule,
    OrganizationUserModule,
  ],
  exports: [
    LooseComponentsModule,
    TrialModule,
    VaultFilterModule,
    OrganizationBadgeModule,
    PipesModule,
  ],
  bootstrap: [],
})
export class OssModule {}
