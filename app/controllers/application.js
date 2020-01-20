import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class ApplicationController extends Controller {
  @service
  router;

  queryParams = ["foo"];

  @tracked
  foo = "click";

  @action
  changeParams() {
    if (this.foo === "hello") {
      this.router.transitionTo({ queryParams: { foo: "goodbye" } });
    } else {
        this.router.transitionTo({ queryParams: { foo: "hello" } });
    }
  }
}
