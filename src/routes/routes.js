//  Desc: Routes configuration file
import config from '~/config';

// Layouts
import SidebarLayout from '~/Layouts/SideBarLayout/SideBarLayout';

// Page
import Home from '~/pages/Home';
import AllProduct from '~/pages/AllProduct';
import Outerwear from '~/pages/Outerwear';
import TopProduct from '~/pages/TopProduct';
import BottomProduct from '~/pages/BottomProduct';
import Accessories from '~/pages/Accessories';
import Sale from '~/pages/Sale';

// Routes public
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },

    {
        path: config.routes.allProduct,
        component: AllProduct,
        layout: SidebarLayout,
    },
    {
        path: config.routes.Outerwear,
        component: Outerwear,
    },
    {
        path: config.routes.topProduct,
        component: TopProduct,
    },
    {
        path: config.routes.bottomProduct,
        component: BottomProduct,
    },

    {
        path: config.routes.accessories,
        component: Accessories,
    },
    {
        path: config.routes.sale,
        component: Sale,
    },
];

// Routes private
const privateRoutes = [];

export { publicRoutes, privateRoutes };
