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
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { ChartModule } from '@kiwigrid/ngx-highcharts';
import * as Highcharts from 'highcharts/js/highcharts.js';
import * as HighchartsHeatmap from 'highcharts/js/modules/heatmap.js';
import * as HighchartsMore from 'highcharts/js/highcharts-more.js';
import * as HighchartsNoData from 'highcharts/js/modules/no-data-to-display.js';
import { HighchartsStatic } from '@kiwigrid/ngx-highcharts/dist/HighchartsService';
import { HeatmapComponent } from 'app/components/results/heatmap/heatmap.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent, data: { title: 'Wgida/About' } },
  { path: 'results', component: ResultsComponent, data: { title: 'Wgida/Results' } },
  { path: 'simulations', component: SimulationsComponent, data: { title: 'Wgida/Simulations' } },
  { path: '**', redirectTo: 'about' },
  { path: '', redirectTo: 'about', pathMatch: 'full' },
];

export function highchartsFactory() {
  HighchartsMore(Highcharts);
  HighchartsHeatmap(Highcharts);
  HighchartsNoData(Highcharts);
  return Highcharts;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ResultsComponent,
    SimulationsComponent,
    DatasetComponent,
    HeatmapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    HttpClientModule,
    ServicesModule,
    NgxDatatableModule,
    AngularMultiSelectModule,
    ChartModule,
    LoadingModule.forRoot({
      backdropBackgroundColour: 'rgba(246,246,246,0.3)',
      primaryColour: '#00BCD4',
      secondaryColour: '#00BCD4',
      tertiaryColour: '#00BCD4'
    }),
  ],
  providers: [{
    provide: HighchartsStatic,
    useFactory: highchartsFactory
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
