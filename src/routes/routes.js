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
import Tshirt from '~/pages/TopProduct/Tshirt';
import Shirt from '~/pages/TopProduct/Shirt';
import StyleDress from '~/pages/TopProduct/StyleDress';
import discount10 from '~/pages/Sale/discount10';
import discount20 from '~/pages/Sale/discount20';
import ClearanceSale from '~/pages/Sale/ ClearanceSale';
import Short from '~/pages/BottomProduct/Short';
import Trouser from '~/pages/BottomProduct/Trouser';
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
    {
        path: config.routes.shirt,
        component: Shirt,
    },
    {
        path: config.routes.tshirt,
        component: Tshirt,
    },
    {
        path: config.routes.style,
        component: StyleDress,
    },
    {
        path: config.routes.discount10,
        component: discount10,
    },
    {
        path: config.routes.discount20,
        component: discount20,
    },
    {
        path: config.routes.clearanceSale,
        component: ClearanceSale,
    },
    {
        path: config.routes.short,
        component: Short,
    },
    {
        path: config.routes.trouser,
        component: Trouser,
    }


];

// Routes private
const privateRoutes = [];

export { publicRoutes, privateRoutes };
