import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputDataComponent } from './input-data/input-data.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'input', component: InputDataComponent },
  { path: 'show', component: ShowDataComponent },
  { path: 'edit', component: EditDataComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    InputDataComponent,
    ShowDataComponent,
    EditDataComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
