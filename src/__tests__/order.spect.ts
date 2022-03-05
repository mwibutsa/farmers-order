import supertest from 'supertest';
import { generateToken } from '@helpers/jwt';
import { connectDb, disconnectDb } from '@helpers/testUtils';
import { testStore, testUser } from '@helpers/testUtils/testData';
import { UserModel, StoreModel } from '@models';
import { UserType } from '@models/User';
import * as statusCodes from '@constants/statusCodes';
import { StoreType } from '../database/models/Store';

import app from '../app';

const request = supertest(app);
describe('TEST MAKE ORDER', () => {
  let user: UserType;
  let token = '';
  let store: StoreType;
  beforeAll(async () => {
    await connectDb();
    user = await UserModel.create({ ...testUser });
    store = await StoreModel.create({ ...testStore, owner: user.id });
    token = generateToken({ id: String(user.id) });
  });

  afterAll(async () => {
    await disconnectDb();
    UserModel.deleteMany();
  });

  it('Should be able to make an order', async () => {
    const landSize = 12;
    const { body, status } = await request.post('/api/v1/orders/create-order').set('x-token', `Bearer ${token}`).send({
      storeId: store.id,
      userId: user.id,
      landSize,
    });

    expect(status).toBe(statusCodes.HTTP_CREATED);
    expect(body.data.seedQuantity).toBe(landSize);
    expect(body.data.fertilizerQuantity).toBe(landSize * 3);
  });

  it('Should only allow authenticated users to make an order', async () => {
    const landSize = 12;
    const { status, body } = await request.post('/api/v1/orders/create-order').send({
      storeId: store.id,
      userId: user.id,
      landSize,
    });

    expect(status).toBe(statusCodes.HTTP_UNAUTHORIZED);
    expect(body.message).toBe('Please login first');
  });

  it('Should require land size to make an order', async () => {
    const { status, body } = await request.post('/api/v1/orders/create-order').set('x-token', `Bearer ${token}`).send({
      storeId: store.id,
      userId: user.id,
    });

    expect(status).toBe(statusCodes.HTTP_BAD_REQUEST);
    expect(body.message).toBe('Validation failed');
  });
});
