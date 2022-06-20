import { NgModule } from "@angular/core";
import { SharedModule } from "../shared.module";

import { VerticalStepperComponent } from "./vertical-stepper.component";
import { VerticalStepComponent } from "./vertical-step.component";

@NgModule({
  imports: [SharedModule],
  declarations: [VerticalStepperComponent, VerticalStepComponent],
  exports: [VerticalStepperComponent, VerticalStepComponent],
})
export class VerticalStepperModule {}
