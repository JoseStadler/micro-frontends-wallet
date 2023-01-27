import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { WalletModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(WalletModule)
  .catch((err) => console.error(err));
