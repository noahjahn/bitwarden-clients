import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { first } from "rxjs";

@Component({
  selector: "app-trial",
  templateUrl: "trial.component.html",
})
export class TrialComponent implements OnInit {
  layout = "";
  email = "";

  constructor(router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(first()).subscribe((qParams) => {
      if (qParams.email != null && qParams.email.indexOf("@") > -1) {
        this.email = qParams.email;
      }
      if (qParams.layout != null) {
        this.layout = qParams.layout;
      }
    });
  }
}
