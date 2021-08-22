import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from './favourite/favourite.component';
import { RecentSearchComponent } from './recent-search/recent-search.component';
import { HomeComponent } from './header/home/home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


const routes: Routes = [
  { path: 'favourite', component: FavouriteComponent},
 // { path: 'today', component: TodayComponent},
 { path: 'home', component: HomeComponent},
  { path: 'recent-search', component:  RecentSearchComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'search/:city',component:SearchBarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
