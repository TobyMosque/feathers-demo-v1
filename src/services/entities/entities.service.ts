// Initializes the `entities` service on path `/entities`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Entities } from './entities.class';
import hooks from './entities.hooks';
import { EntityModel } from './entities.model';
import schema from './entities.schema';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'entities': Entities & ServiceAddons<EntityModel>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate')
  };

  const handler = new Entities(options, app);
  app.use('/entities', Object.assign(handler, { docs: schema }));

  // Get our initialized service so that we can register hooks
  const service = app.service('entities');

  service.hooks(hooks);
}
