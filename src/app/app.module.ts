import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'app/app.component';
import { NavbarComponent } from 'app/components/navbar/navbar.component';
import { AboutComponent } from 'app/components/about/about.component';
import { ResultsComponent } from 'app/components/results/results.component';
import { SimulationsComponent } from 'app/components/simulations/simulations.component';
import { DatasetComponent } from 'app/components/dataset/dataset.component';
import { ServicesModule } from 'app/services/services.module';
import { HttpClientModule } from '@angular/common/http';
import { LoadingModule } from 'ngx-loading';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';

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
    SimulationsComponent,
    DatasetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    HttpClientModule,
    ServicesModule,
    NgxDatatableModule,
    AngularMultiSelectModule,
    LoadingModule.forRoot({
      backdropBackgroundColour: 'rgba(198,198,198,0.3)',
      primaryColour: '#00BCD4',
      secondaryColour: '#00BCD4',
      tertiaryColour: '#00BCD4'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
