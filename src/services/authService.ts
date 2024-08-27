import User from '../models/userModel';

export const findOrCreateUser = async (googleId: string, email: string, name: string) => {
  let user = await User.findOne({ googleId });
  if (!user) {
    user = new User({ googleId, email, name });
    await user.save();
  }
  return user;
};
