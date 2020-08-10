import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MyTeamsComponent } from './pages/my-teams/my-teams.component';
import { MyPlayersComponent } from './pages/my-players/my-players.component';
import { MyTrainingsComponent } from './pages/my-trainings/my-trainings.component';
import { MyExercisesComponent } from './pages/my-exercises/my-exercises.component';
import { MySettingsComponent } from './pages/my-settings/my-settings.component';
import { MyGamesComponent } from './pages/my-games/my-games.component';
import { PlayersTrainingsComponent } from './pages/players-trainings/players-trainings.component';
import { PlayerMatchesComponent } from './pages/player-matches/player-matches.component';
import { MyCoachComponent } from './pages/my-coach/my-coach.component';
import { PlayerSettingsComponent } from './pages/player-settings/player-settings.component';


const routes: Routes = [
  // home routes
  {path:'home',component: LandingPageComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  // coach routes
  {path:'coach/teams',component: MyTeamsComponent},
  {path:'coach/players',component: MyPlayersComponent},
  {path:'coach/trainings',component: MyTrainingsComponent},
  {path:'coach/exercises',component: MyExercisesComponent},
  {path:'coach/games',component: MyGamesComponent},
  {path:'coach/settings',component: MySettingsComponent},
  // player routes
  {path:'player/trainings',component: PlayersTrainingsComponent},
  {path:'player/games',component: PlayerMatchesComponent},
  {path:'player/coach',component: MyCoachComponent},
  {path:'player/settigs',component: PlayerSettingsComponent},
  {path:'**',redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
