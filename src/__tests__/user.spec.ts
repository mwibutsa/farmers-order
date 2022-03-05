import supertest from 'supertest';
import { connectDb, disconnectDb } from '@helpers/testUtils';
import { testUser } from '@helpers/testUtils/testData';
import { UserModel } from '@models';

import * as statusCodes from '@constants/statusCodes';
import app from '../app';

const request = supertest(app);
describe('TEST USER ACCOUNT', () => {
  beforeAll(async () => {
    await connectDb();
  });

  afterAll(async () => {
    await disconnectDb();
  });

  describe('USER LOGIN TEST CASES', () => {
    beforeEach(async () => {
      await UserModel.create({ ...testUser });
    });

    afterEach(async () => {
      await UserModel.deleteMany();
    });

    it('Should handle invalid credentials', async () => {
      const { body, status } = await request.post('/api/v1/user/login').send({
        email: testUser.email,
        password: 'Wrong password',
      });
      expect(status).toBe(statusCodes.HTTP_BAD_REQUEST);
      expect(body.message).toBe('Invalid user credentials');
    });

    it('Should handle login', async () => {
      const { body, status } = await request.post('/api/v1/user/login').send({
        email: testUser.email,
        password: testUser.password,
      });
      expect(status).toBe(statusCodes.HTTP_OK);
      expect(body).toHaveProperty('token');
    });

    it('Should handle password validation during login', async () => {
      const { body, status } = await request.post('/api/v1/user/login').send({
        email: testUser.email,
        password: '',
      });
      expect(status).toBe(statusCodes.HTTP_BAD_REQUEST);
      expect(body.message).toBe('Validation failed');
    });
  });

  describe('USER SIGN UP TEST CASES', () => {
    afterEach(async () => {
      await UserModel.deleteMany();
    });

    it('Should be able to create user account', async () => {
      const { body, status } = await request.post('/api/v1/user/sign-up').send(testUser);
      expect(status).toBe(statusCodes.HTTP_CREATED);
      expect(body.data.email).toBe(testUser.email);
    });

    it('Should handle duplicate account creation', async () => {
      await UserModel.create({ ...testUser });
      const { body, status } = await request.post('/api/v1/user/sign-up').send(testUser);
      expect(status).toBe(statusCodes.HTTP_CONFLICT);
      expect(body.message).toBe('User with the same email/phone number exists');
    });
  });
});
