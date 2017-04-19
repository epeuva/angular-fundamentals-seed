/* Compile in the platform */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/* import our app module */
import { AppModule } from './app/app.module';

//Attention!! Not a decorator, a function.
platformBrowserDynamic().bootstrapModule(AppModule);
