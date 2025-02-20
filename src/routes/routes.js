//  Desc: Routes configuration file
import config from '~/config';

// Layouts

// Pages
import Bai1 from '~/pages/Bai1';
import Bai2 from '~/pages/Bai2';
import Bai3 from '~/pages/Bai3';
import Bai4 from '~/pages/Bai4';
import Bai5 from '~/pages/Bai5';

// Routes public
const publicRoutes = [
    {
        path: config.routes.bai1,
        component: Bai1,
    },
    {
        path: config.routes.bai2,
        component: Bai2,
    },
    {
        path: config.routes.bai3,
        component: Bai3,
    },
    {
        path: config.routes.bai4,
        component: Bai4,
    },
    {
        path: config.routes.bai5,
        component: Bai5,
    },
];

// Routes private
const privateRoutes = [];

export { publicRoutes, privateRoutes };
