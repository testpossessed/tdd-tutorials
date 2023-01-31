import { RouteRecordPublic } from "vue-router";
import router from "../../src/router";

describe("Routing Configuration", () => {
  let routes: RouteRecordPublic[];

  beforeAll(async () => {
    routes = router.getRoutes();
  });

  it("Should have correct title for default route", async () => {
    const defaultRoute = routes.find((r: RouteRecordPublic) => r.path === "");
    expect(defaultRoute?.meta.title).toBe("Kwizzer");
  });
});
