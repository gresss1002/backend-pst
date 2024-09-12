import User, { IUser } from '../models/userModel';

export const findUserByGoogleId = async (googleId: string) => {
  try {
    const user = await User.findOne({ googleId });
    return user;
  } catch (error) {
    throw new Error(`Error finding user by Google ID: ${(error as Error).message}`);
  }
};

export const findOrCreateUser = async (googleId: string, email: string, name: string) => {
  let user = await User.findOne({ googleId });
  if (!user) {
    user = new User({ googleId, email, name });
    await user.save();
  }
  return user;
};

export const updateUserRole = async (userId: string, newRole: "Konsumen" | "Admin" | "Konsultan") => {
  try {
    const user = await User.findByIdAndUpdate(userId, { role: newRole }, { new: true });
    return user;
  } catch (error) {
    throw new Error(`Error updating user role: ${(error as Error).message}`);
  }
};


export const updateUserDetails = async (userId: string, updateData: Partial<typeof User>) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
    return updatedUser;
  } catch (error) {
    throw new Error(`Error updating user details: ${(error as Error).message}`);
  }
};

export const getAllKonsultanUsers = async (): Promise<IUser[]> => {
  try {
      return await User.find({ role: 'Konsultan' }).exec();
  } catch (error) {
      throw new Error(`Error fetching all Konsultan users: ${(error as Error).message}`);
  }
};

export const getAllKonsumenUsers = async (): Promise<IUser[]> => {
  try {
    return await User.find({ role: 'Konsumen' }).exec();
  } catch (error) {
    throw new Error(`Error fetching all consumer users: ${(error as Error).message}`);
  }
};