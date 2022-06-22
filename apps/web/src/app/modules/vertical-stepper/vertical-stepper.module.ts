import { NgModule } from "@angular/core";
import { SharedModule } from "../shared.module";

import { VerticalStepperComponent } from "./vertical-stepper.component";
import { VerticalStep } from "./vertical-step.component";
import { VerticalStepContentComponent } from "./vertical-step-content.component";

@NgModule({
  imports: [SharedModule],
  declarations: [VerticalStepperComponent, VerticalStep, VerticalStepContentComponent],
  exports: [VerticalStepperComponent, VerticalStep],
})
export class VerticalStepperModule {}
