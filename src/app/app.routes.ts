import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Customers } from './pages/customers/customers';
import { CleaningServices } from './pages/cleaning-services/cleaning-services';
import { Jobs } from './pages/jobs/jobs';
import { Calender } from './pages/calender/calender';
import { Invoices } from './pages/invoices/invoices';
import { Payments } from './pages/payments/payments';
import { Reports } from './pages/reports/reports';
import { Taxes } from './pages/taxes/taxes';
import { Settings } from './pages/settings/settings';

export const routes: Routes = [
    // Route that directs opening page to dashboard
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    // Route that directs sidebar link to dashboard component
    {
        path: 'dashboard',
        component: Dashboard
    },
    // Route that directs sidebar link to customers component
    {
        path: 'customers',
        component: Customers
    },
    // Route that directs sidebar link to cleaning services component
    {
        path: 'cleaning-services',
        component: CleaningServices
    },
    // Route that directs sidebar link to Jobs component
    {
        path: 'jobs',
        component: Jobs
    },
    // Route that directs sidebar link to Calender component
    {
        path: 'calender',
        component: Calender
    },
    // Route that directs sidebar link to Invoices component
    {
        path: 'invoices',
        component: Invoices
    },
    // Route that directs sidebar link to Payments component
    {
        path: 'payments',
        component: Payments
    },
    // Route that directs sidebar link to Reports component
    {
        path: 'reports',
        component: Reports
    },
    //Route that directs sidebar link to Taxes component
    {
        path: 'taxes',
        component: Taxes
    },
    // Route that directs sidebar link to settings component
    {
        path: 'settings',
        component: Settings
    }
];
