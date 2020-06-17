import { NgModule } from '@angular/core';

import { PanelMenuModule } from 'primeng/components/panelmenu/panelmenu';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { LoaderModule } from '../loader/loader.module';

import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { FavoriteMenuComponent } from './components/favorite-menu/favorite-menu.component';
import { NotificationComponent } from './components/notification/notification.component';
import { PushNotificationComponent } from './components/notification/push-notification.component';
import { HeaderTopAdminComponent } from './components/header-top-admin/header-top-admin.component';
import { HeaderService } from './components/header/shared/header.service';
import { AutoCompleteModule } from 'primeng/primeng';
// import { WebSocketNewService } from 'app/core/services/web-socket-new.service';

@NgModule({
    imports: [SharedModule, HomeRoutingModule, PanelMenuModule, LoaderModule, AutoCompleteModule],
    declarations: [
        HomeComponent,
        HeaderComponent,
        NavigationComponent,
        FooterComponent,
        MenuComponent,
        FavoriteMenuComponent,
        NotificationComponent,
        PushNotificationComponent,
        HeaderTopAdminComponent,
    ],
    providers: [HeaderService],
    exports: [HeaderComponent],
})
export class HomeModule { }
