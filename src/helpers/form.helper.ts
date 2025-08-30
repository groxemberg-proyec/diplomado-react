import z from 'zod';
import type { ActionState } from '../interfaces';
import { errorHelper } from './error.helper';

export const createInitialState = <T>(): ActionState<T> => {
  return {
    errors: {},
    message: '',
  };
};

export const handleZodError = <T>(error: unknown, rawData: Partial<T>): ActionState<T> => {
  if (error instanceof z.ZodError) {
    const fieldErrors: Partial<Record<keyof T, string>> = {};
    error.issues.forEach((issue) => {
      const field = issue.path[0] as keyof T;
      fieldErrors[field] = issue.message;
    });
    console.error('Zod validation error:', fieldErrors);
    return {
      errors: fieldErrors,
      message: 'Por favor corrige los errores en el formulario',
      formData: rawData,
    };
  }

  return {
    errors: {},
    message: errorHelper(error),
    formData: rawData,
  };
};
