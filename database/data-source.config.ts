import { appConfig } from 'src/config/app.config';
import { DataSource } from 'typeorm';

const dataSource = new DataSource(appConfig.typeorm)

export default dataSource;