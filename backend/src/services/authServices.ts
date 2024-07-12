import { TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/configs/environment';
import IUser from '@/models/guard/userGuard';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const blackListTokens: any = [];
const ROLES = ['ADMIN', 'STUDEN', 'TEACHER'];

const checkEmailIsAlreadyExists = (email: string, userData: IUser[]) => {
  let check = false;
  if (!email.trim()) {
    return check;
  }

  const findEmailUser = userData.find((user: IUser) => {
    return user.email === email;
  });

  if (findEmailUser) {
    check = true;
    return check;
  }
};

const checkIsNameAlreadExists = (name: string, userData: IUser[]) => {
  let check = false;
  if (!name.trim()) {
    return check;
  }

  const findNameUser = userData.find((user) => {
    return user.name === name;
  });

  if (findNameUser) {
    check = true;
    return check;
  }
};

const hashPassword = async (password: string) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

const checkIsPasswordComfir = async (pass: string, email: string, userData: IUser[]) => {
  let isOk = false;
  const userFind = userData.find((user: any) => {
    if (user.email === email) {
      return user;
    }
  });

  if (userFind) {
    // const hash = bcrypt.hashSync(userFind.password, 10);
    const hash = 'sss';
    const match = await bcrypt.compareSync(pass, hash);

    if (match) {
      isOk = true;
    }
  }

  return isOk;
};

const generateAccessToken = (data: any) => {
  const tokenLifeTime = Math.floor(Date.now() / 1000) + 60 * 2;
  const token = jwt.sign(
    {
      exp: tokenLifeTime,
      userData: data
    },
    TOKEN_KEY!
  );
  return token;
};

const generateRrefreshToken = (data: any) => {
  const TWENTY_DAYS_IN_SECONDS = 20 * 24 * 60 * 60;
  const expirationUnixTimestamp = Math.floor((new Date().getTime() + TWENTY_DAYS_IN_SECONDS * 1000) / 1000);

  const tokenRefresh = jwt.sign(
    {
      exp: expirationUnixTimestamp,
      userData: data
    },
    REFRESH_TOKEN_KEY!
  );
  return tokenRefresh;
};

const getVerifyToken = (token: string, keytoken: string) => {
  return new Promise((res, rej) => {
    jwt.verify(token, keytoken, function (err, decoded) {
      if (err) {
        rej(err);
      } else {
        res(decoded);
      }
    });
  });
};

const addTokenToBlackList = (token: string) => {
  blackListTokens.push(token);
  return blackListTokens;
};

const checkTokenAlreadyExistInBlackList = (token: string) => {
  return blackListTokens.includes(token);
};

export {
  checkEmailIsAlreadyExists,
  checkIsNameAlreadExists,
  hashPassword,
  generateAccessToken,
  generateRrefreshToken,
  checkIsPasswordComfir,
  getVerifyToken,
  blackListTokens,
  ROLES
};
