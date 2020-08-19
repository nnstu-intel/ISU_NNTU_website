import { NgModule } from '@angular/core';

import {MainComponent} from './pages/main/main.component';
import {AbiturientComponent} from './pages/abiturient/abiturient.component';
import {DetailsPartnersComponent} from './modules/details-partners/details-partners.component';
import {NewsPageComponent} from './pages/news-page/news-page.component';
import {RouterModule, Routes} from '@angular/router';
import {GrantspComponent} from './pages/grantsp/grantsp.component';
import {ProjectsPComponent} from './pages/projects-p/projects-p.component';
import {KafPComponent} from './pages/kaf-p/kaf-p.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'abiturient', component: AbiturientComponent},
  { path: 'news', component: NewsPageComponent},
  { path: 'grants', component: GrantspComponent},
  { path: 'projects', component: ProjectsPComponent},
  { path: 'kaf', component: KafPComponent},
  { path: 'details/partners', component: DetailsPartnersComponent},
  { path: '**', component: MainComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
