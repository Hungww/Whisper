import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import config from '../config/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJson = JSON.parse(readFileSync(path.join(__dirname, '../../package.json'), 'utf8'));
const { version } = packageJson;

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Whisper API documentation',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/hagopj13/node-express-boilerplate/blob/master/LICENSE',
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
    },
  ],
};

export default swaggerDef;
