import User from '../models/userModel';

export const findOrCreateUser = async (googleId: string, email: string, name: string) => {
  let user = await User.findOne({ googleId });
  if (!user) {
    user = new User({ googleId, email, name });
    await user.save();
  }
  return user;
};

export const updateUserRole = async (userId: string, newRole: "konsumen" | "admin" | "konsultan") => {
  try {
    const user = await User.findByIdAndUpdate(userId, { role: newRole }, { new: true });
    return user;
  } catch (error) {
    throw new Error(`Error updating user role: ${(error as Error).message}`);
  }
};
