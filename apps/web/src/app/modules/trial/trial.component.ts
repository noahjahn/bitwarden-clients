import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { first } from "rxjs";

@Component({
  selector: "app-trial",
  templateUrl: "trial.component.html",
})
export class TrialComponent implements OnInit {
  layout = "";

  constructor(router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(first()).subscribe((qParams) => {
      if (qParams.layout != null) {
        this.layout = qParams.layout;
      }
    });
  }
}
