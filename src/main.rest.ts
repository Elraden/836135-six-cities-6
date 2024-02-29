import { Logger, PinoLogger } from './shared/libs/logger/index.js';
import { Container } from 'inversify';
import 'reflect-metadata';

import { RestApplication } from './rest/index.js';
import { Config, RestConfig, RestSchema } from './shared/libs/config/index.js';
import { Component } from './types/index.js';

async function bootstrap() {
  const container = new Container();
  container.bind<RestApplication>(Component.RestApplication).to(RestApplication);
  container.bind<Logger>(Component.Logger).to(PinoLogger);
  container.bind<Config<RestSchema>>(Component.Config).to(RestConfig);


  const application = container.get<RestApplication>(Component.RestApplication);
  await application.init();
}

bootstrap();