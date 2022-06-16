import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { JslibModule } from "@bitwarden/angular/jslib.module";

import { ImportComponent } from "./import.component";
import { ImportersRoutingModule } from "./importers-routing.module";

@NgModule({
  imports: [CommonModule, JslibModule, FormsModule, ReactiveFormsModule, ImportersRoutingModule],
  declarations: [ImportComponent],
})
export class ImportersModule {}
