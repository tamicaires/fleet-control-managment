import { randomUUID } from 'crypto';

interface UserSchema {
  email: string;
  password: string;
  name: string;
  role: string;
}

export class User {
  props: UserSchema;
  _id: string;

  constructor(props: UserSchema, id?: string) {
    this.props = props;
    this._id = id || randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get email(): string {
    return this.props.email;
  }

  set email(email: string) {
    this.props.email = email;
  }

  get password(): string {
    return this.props.password;
  }

  set password(password: string) {
    this.props.password = password;
  }

  get role(): string {
    return this.props.role;
  }

  set role(role: string) {
    this.props.role = role;
  }
}
