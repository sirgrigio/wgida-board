import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ResultsComponent } from './components/results/results.component';
import { SimulationsComponent } from './components/simulations/simulations.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent, data: { title: 'Wgida/About' } },
  { path: 'results', component: ResultsComponent, data: { title: 'Wgida/Results' } },
  { path: 'simulations', component: SimulationsComponent, data: { title: 'Wgida/Simulations' } },
  { path: '**', redirectTo: 'about' },
  { path: '', redirectTo: 'about', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ResultsComponent,
    SimulationsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
