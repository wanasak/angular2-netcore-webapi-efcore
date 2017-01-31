import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentModule } from './student/student.module';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// Services
import { ConfigService } from './shared/config.service';

import { StudentFilterPipe } from './shared/pipe/studentFilter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        StudentFilterPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        ReactiveFormsModule,
        routing,
        StudentModule
    ],
    providers: [
        ConfigService,
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
