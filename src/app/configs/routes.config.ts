/**
 * List of menu code in application
 */
import { Routes } from '@angular/router';
import { JobPortalModule } from 'app/modules/job-portal/job-portal.module';

export const MENU_CODE = {
    userSetting: '',
};

/**
 * Path declaration of feature module.
 * Lazy load => loadChildren
 * If code is empty string then the menu is not from the API
 */

export const MODULE_ROUTES: Routes = [

    {
        path:'',
        loadChildren: () => import('app/modules/job-portal/job-portal.module').then( m => JobPortalModule)
    }

];
