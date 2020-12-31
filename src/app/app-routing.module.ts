import { AuthGuard } from "./guards/auth.guard";
import { IntroGuard } from "./guards/intro.guard";
import { AutoLoginGuard } from "./guards/auto-login.guard";
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	/* {
		path: "",
		loadChildren: () =>
			import("./tabs/tabs.module").then((m) => m.TabsPageModule),
	},
	{
		path: "intro",
		loadChildren: () =>
			import("./pages/intro/intro.module").then((m) => m.IntroPageModule),
	},
	{
		path: "login",
		loadChildren: () =>
			import("./pages/login/login.module").then((m) => m.LoginPageModule),
  }, */
	{
		path: "login",
		loadChildren: () =>
			import("./pages/login/login.module").then((m) => m.LoginPageModule),
		canLoad: [IntroGuard, AutoLoginGuard], //check if we should show the introduction or forward to inside
	},
	{
		path: "intro",
		loadChildren: () =>
			import("./pages/intro/intro.module").then((m) => m.IntroPageModule),
	},
	{
		path: "tabs",
		loadChildren: () =>
			import("./tabs/tabs.module").then((m) => m.TabsPageModule),
	},
	{
		path: "",
		redirectTo: "/login",
		pathMatch: "full",
	},
];
@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
