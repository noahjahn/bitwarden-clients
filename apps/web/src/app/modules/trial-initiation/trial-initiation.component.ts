import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { first } from "rxjs";

@Component({
  selector: "app-trial",
  templateUrl: "trial-initiation.component.html",
})
export class TrialInitiationComponent implements OnInit {
  layout = "";
  email = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(first()).subscribe((qParams) => {
      if (qParams.email != null && qParams.email.indexOf("@") > -1) {
        this.email = qParams.email;
      }
      switch (qParams.layout) {
        case "families":
          this.layout = "families";
          break;
        case "enterprise":
        case "enterprise1":
        case "enterprise2":
          this.layout = "enterprise";
          break;
        default:
          this.layout = "teams";
          break;
      }
    });
  }
}
