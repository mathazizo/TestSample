import { Routes } from '@angular/router';
import { CardsComponent } from './card/card.component';


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			
			{
				path: 'card',
				component: CardsComponent
			}
					]
	}
];
