export interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export type RegistrationResponse = Omit<User, 'password>'> & { _id: string };

export type LoginData = {
  email: string;
  password: string;
};
