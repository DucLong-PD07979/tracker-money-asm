import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';

import { CLIENT_ID_GOOGLE, CLIENT_SECRET_GOOGLE, CLIENT_URL, IS_PRODUCTION } from './environment';
import { checkEmailIsAlreadyExists, generateAccessToken, generateRrefreshToken } from '@/services/authServices';
import UserModel from '@/models/userModel';
import IUser from '@/models/guard/userGuard';

if (!CLIENT_ID_GOOGLE || !CLIENT_SECRET_GOOGLE || !CLIENT_URL) {
  throw new Error('CLIENT_ID and CLIENT_SECRET must be defined in environment variables');
}

passport.use(
  new GoogleStrategy(
    {
      clientID: CLIENT_ID_GOOGLE,
      clientSecret: CLIENT_SECRET_GOOGLE,
      callbackURL: IS_PRODUCTION
        ? CLIENT_URL + '/api/v1/auth/google/callback'
        : 'http://localhost:3000/api/v1/auth/google/callback',
      passReqToCallback: true
    },
    async function (_request: any, _accessToken: any, _refreshToken: any, profile: any, done: any) {
      try {
        const userData: IUser[] = await UserModel.find().lean();
        // console.log(profile);

        const checkIsEmail = checkEmailIsAlreadyExists(profile.email, userData);

        if (!checkIsEmail) {
          const newUser = new UserModel({
            username: profile.displayName,
            email: profile.email,
            provider: profile.provider,
            avatar: profile.picture,
            emailVerify: profile.email_verified
          });
          await newUser.save();
          userData.push(newUser.toObject());
        }

        if (profile.verified) {
          const userAccount = userData.find((userInfor: IUser) => userInfor.email === profile.email);
          if (userAccount) {
            const accessToken = generateAccessToken(userAccount);
            const refreshToken = generateRrefreshToken(userAccount);
            done(null, { accessToken, refreshToken });
          } else {
            done(null, false, { message: 'User not found' });
          }
        } else {
          done(null, false, { message: 'Email not verified' });
        }
      } catch (error) {
        done(error, null);
      }
    }
  )
);

// hai phương thức dưới chỉ sử dụng cho session của passport khi dùng jwt sẽ không cần
passport.serializeUser(function (user, done) {
  // done(null, user);
});

passport.deserializeUser(function (user: any, done) {
  console.log(`thoong tin người dùng từ hàm deserializeUser`);
  console.log(user);
  // done(null, user);
});

export default passport;
