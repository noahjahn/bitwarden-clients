import { Component, Input } from "@angular/core";
import { CdkStepper } from "@angular/cdk/stepper";

@Component({
  selector: "app-vertical-stepper",
  templateUrl: "vertical-stepper.component.html",
  providers: [{ provide: CdkStepper, useExisting: VerticalStepperComponent }],
})
export class VerticalStepperComponent extends CdkStepper {
  @Input()
  activeClass = "active";

  isNextButtonHidden() {
    return !(this.steps.length === this.selectedIndex + 1);
  }

  isFinalStepDisabled() {
    let completedSteps = 0;
    this.steps.forEach((s) => {
      if (s.completed) {
        completedSteps++;
      }
    });
    if (completedSteps >= this.steps.length - 1) {
      return false;
    }
    return true;
  }

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
    console.log(this.selected);
  }
}
