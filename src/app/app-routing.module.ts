import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'message', pathMatch: 'full' },
  { path: 'sign-in', loadChildren: './pages/sign-in/sign-in.module#SignInPageModule' },
  { path: 'sign-up', loadChildren: './pages/sign-up/sign-up.module#SignUpPageModule' },
  { path: 'message', loadChildren: './pages/message/message.module#MessagePageModule' },
  { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
