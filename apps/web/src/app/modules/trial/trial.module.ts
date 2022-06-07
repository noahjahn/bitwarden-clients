import { NgModule } from "@angular/core";
import { SharedModule } from "../shared.module";
import { CdkStepperModule } from "@angular/cdk/stepper";
import { TrialComponent } from "./trial.component";

import { VerticalStepperModule } from "./vertical-stepper/vertical-stepper.module";

@NgModule({
  imports: [SharedModule, CdkStepperModule, VerticalStepperModule],
  declarations: [TrialComponent],
  exports: [TrialComponent],
})
export class TrialModule {}
