import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
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

  isStepDisabled(index: number) {
    if (this.selectedIndex !== index) {
      if (this.linear) {
        return this.selectedIndex === index - 1
          ? !this.steps.find((_, i) => i == index - 1)?.completed
          : true;
      }
      let step = this.steps.find((_, i) => i == index);
      return step?.editable && step?.completed;
    }
    return false;
  }

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
