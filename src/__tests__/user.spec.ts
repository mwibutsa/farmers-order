import supertest from 'supertest';

import * as statusCodes from '@constants/statusCodes';
import app from '../app';

const request = supertest(app);
describe('TEST USER ACCOUNT', () => {
  beforeAll(async () => {});
  describe('USER LOGIN TEST CASES', () => {
    it('Should handle invalid credentials', async () => {
      const { body, status } = await request.post('/api/v1/user/login').send({
        email: 'fmwibutsa@gmail.com',
        password: 'Password@2',
      });
      expect(status).toBe(statusCodes.HTTP_OK);
    });
  });
});
