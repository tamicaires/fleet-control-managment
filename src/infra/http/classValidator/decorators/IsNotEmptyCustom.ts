import {
  isNotEmpty,
  registerDecorator,
  ValidationArguments, 
  ValidationOptions
} from 'class-validator';
import { ExceptionMessage } from '../data/exceptionMessage';

export function IsNotEmptyCustom(validationOptions?: ValidationOptions) {
  return function (object: NonNullable<unknown>, propertyName: string) {
    registerDecorator({
      name: 'IsNotEmptyCustom',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {

        validate(value: string) {
          return isNotEmpty(value)
        },
        defaultMessage(validationArguments: ValidationArguments){
          return ExceptionMessage.IsNotEmpty(validationArguments.property);
        }
      },
    });
  };
}