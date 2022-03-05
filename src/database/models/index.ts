import DBConnection from '@dbConfig';

DBConnection.connect();

export { default as UserModel } from './User';
export { default as StoreModel } from './Store';
export { default as OrderModel } from './Order';
