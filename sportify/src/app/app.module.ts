import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Needed
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// Pages
import { CoachMenuComponent } from './pages/coach-menu/coach-menu.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LandingMenuComponent } from './pages/landing-menu/landing-menu.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { PlayerMatchesComponent } from './pages/player-matches/player-matches.component';
import { MyCoachComponent } from './pages/my-coach/my-coach.component';
import { MyExercisesComponent } from './pages/my-exercises/my-exercises.component';
import { MyGamesComponent } from './pages/my-games/my-games.component';
import { MyPlayersComponent } from './pages/my-players/my-players.component';
import { MySettingsComponent } from './pages/my-settings/my-settings.component';
import { MyTeamsComponent } from './pages/my-teams/my-teams.component';
import { MyTrainingsComponent } from './pages/my-trainings/my-trainings.component';
import { PlayerMenuComponent } from './pages/player-menu/player-menu.component';
import { PlayerSettingsComponent } from './pages/player-settings/player-settings.component';
import { RegisterComponent } from './pages/register/register.component';
import { PlayersTrainingsComponent } from './pages/players-trainings/players-trainings.component';

@NgModule({
  declarations: [
    AppComponent,
    CoachMenuComponent,
    FooterComponent,
    LandingMenuComponent,
    LandingPageComponent,
    LoginComponent,
    PlayerMatchesComponent,
    MyCoachComponent,
    MyExercisesComponent,
    MyGamesComponent,
    MyPlayersComponent,
    MySettingsComponent,
    MyTeamsComponent,
    MyTrainingsComponent,
    PlayerMenuComponent,
    PlayerSettingsComponent,
    RegisterComponent,
    PlayersTrainingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
