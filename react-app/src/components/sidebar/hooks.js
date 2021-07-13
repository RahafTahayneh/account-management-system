import { Dashboard, AccountBox, Settings} from '@material-ui/icons';
import {routes} from "../../router/routes";

export const useDashboardTabs = () => [
    {
        Icon: Dashboard,
        text: 'Dashboard',
        route: routes.dashboard
    },
    {
        Icon: AccountBox ,
        text: 'Profile',
        route: routes.profile
    },
    {
        Icon: Settings,
        text: 'Settings',
        route: routes.settings
    },

]