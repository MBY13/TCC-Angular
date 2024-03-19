import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../notas-list/notas-list.component';
import { IntegracoesComponent } from '../../integracoes/integracoes.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MAT_DATE_LOCALE, MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { DashboardService } from 'app/dashboard/dashboard.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CardIntegracaoComponent } from 'app/integracoes/card-integracao/card-integracao/card-integracao.component';
import { IntegracoesService } from 'app/integracoes/integracoes.service';
import { MatTableModule } from '@angular/material/table';
import { NotasListService } from 'app/notas-list/notas-list.service';
import { CriarCadastroComponent } from 'app/criar-cadastro/criar-cadastro.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { CriarCadastroService } from 'app/criar-cadastro/criar-cadastro.service';
import { LoginComponent } from 'app/login/login.component';
import { RecuperarSenhaComponent } from 'app/recuperar-senha/recuperar-senha.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    IntegracoesComponent,
    CardIntegracaoComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    LoginComponent,
    RecuperarSenhaComponent,
    CriarCadastroComponent,
  ],
  providers: [DashboardService, IntegracoesService,NotasListService,CriarCadastroService] 
})

export class AdminLayoutModule {}
