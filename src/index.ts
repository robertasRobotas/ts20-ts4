type ProductType = {
  title: string;
  price: number;
};

const addProductToChart = ({ title, price }: ProductType) => {
  console.log(title);
  console.log(price);
};

addProductToChart({ price: 2323, title: "IPhone" });

type UserType = {
  id: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  nickName: string;
  age: number;
};

//============OMIT==========================

type UserUpdatedType = Omit<UserType, "id" | "email" | "password">;

let user: UserUpdatedType = {
  name: "xxx",
  surname: "xxx",
  nickName: "xxx",
  age: 20,
};

//=============TRACK_TYPES===========================

type UserUniquePropertiesType = {
  id: UserType["id"];
  email: UserType["email"];
};

const userUniqueProps = {
  id: "yyy",
  email: "rob@gmail.com",
};

//==============KEYS=========================

type UserKeys = keyof UserUpdatedType;

const userKey: UserKeys = "nickName";

//==============OVERRIDE================

type User2Type = {
  id: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  nickName: string;
  age: number;
};

type UserStringifiedType = {
  [key in keyof User2Type]: string;
};

// const userDetails: UserStringifiedType = {
//   email: '23432',
// };

//===========PICK==========

type UserTitleType = Pick<User2Type, "name" | "surname"> & {
  middleName: string;
};

const userTitle: UserTitleType = {
  name: "Vytautas",
  surname: "Antanavicius",
  middleName: "Von",
};

//===========Partial=============

type UserUpdateDetailType = Partial<User2Type>;

const userDetails: UserUpdateDetailType = {
  name: "Tadas",
  nickName: "tadas123",
};

user = { ...user, ...userDetails };

/////1

//////2

/////333
