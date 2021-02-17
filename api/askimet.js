import { AkismetClient } from 'akismet-api';

const { ASKIMET_KEY } = process.env;
export const askiClient = new AkismetClient({ key: ASKIMET_KEY, blog: 'https://haegepoorters.be' });