import { NgModule } from "@angular/core";
import { SharedModule } from "../shared.module";
import { CdkStepperModule } from "@angular/cdk/stepper";
import { TrialInitiationComponent } from "./trial-initiation.component";

import { VerticalStepperModule } from "../vertical-stepper/vertical-stepper.module";
import { FormFieldModule } from "@bitwarden/components";

@NgModule({
  imports: [SharedModule, CdkStepperModule, VerticalStepperModule, FormFieldModule],
  declarations: [TrialInitiationComponent],
  exports: [TrialInitiationComponent],
})
export class TrialInitiationModule {}
