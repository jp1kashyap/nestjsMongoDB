import mongoose from 'mongoose';

export const databaseProivders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: () =>
      mongoose.connect(
        'mongodb+srv://jamuna:Jamuna1Supertal@cluster0.g8vve.mongodb.net/user_service?retryWrites=true&w=majority',
      ),
  },
];
