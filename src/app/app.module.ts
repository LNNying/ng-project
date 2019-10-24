/**
 * 声明注册组件
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { NavberComponent } from './component/navber/navber.component';
import { LeftMenuComponent } from './component/left-menu/left-menu.component';
import { ContentComponent } from './component/content/content.component';
import { FooterComponent} from './component/footer/footer.component';
import { RightComponent } from './component/right/right.component';
import { StarComponent } from './component/star/star.component';
// 路由
// const appRoutes: Routes = [
//   {
//     path: '',
//     redirectTo: '/deshborad',
//     pathMatch: 'full'
//   },
//   {
//     path: 'desdbord',
//     component: HomeComponent
//   },
//   {
//     path: 'detail/:id',
//     component: CardComponent
//   }
// ];

/**
 * <a routerLink="/deeshborad" routerLinkActive="active">
 *  this.router.navigate(['/detail', this.selectedHero.id])
 */

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    NavberComponent,
    LeftMenuComponent,
    ContentComponent,
    FooterComponent,
    RightComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // #路由
    // RouterModule.forRoot(appRoutes, {useHash: true}),
    // 双向绑定的
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
