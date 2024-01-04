import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'card',
        loadChildren: () =>
          import('../card/card.module').then((m) => m.CardPageModule),
      },
      {
        path: 'favorite-card',
        loadChildren: () =>
          import('../favorite-card/favorite-card.module').then(
            (m) => m.FavoriteCardPageModule
          ),
      },
      {
        path: 'tab3',
        loadChildren: () =>
          import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
      },

      {
        path: '',
        redirectTo: '/tabs/card',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/card',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
