import { UserSchema } from '../../users/schemas/user/user.schema';

export const userProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection) => connection.model('Users', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
