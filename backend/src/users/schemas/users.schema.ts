import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { USER_ROLES } from '../constants/user.roles';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'modified_at' } })
export class User {
  _id: any;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: false })
  isAdmin: boolean;

  @Prop({ required: true, enum: USER_ROLES })
  role: string;

  @Prop()
  created_at: Date;

  @Prop()
  modified_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
