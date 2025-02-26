//  Desc: Routes configuration file
import config from '~/config';

// Layouts
import { EmptyLayout } from '~/Layouts';

// Page
import Home from '~/pages/Home';
import AllProduct from '~/pages/AllProduct';

// Routes public
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },

    {
        path: config.routes.allProduct,
        component: AllProduct,
        layout: EmptyLayout,
    },
];

// Routes private
const privateRoutes = [];

export { publicRoutes, privateRoutes };
