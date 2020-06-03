import {
  required,
  confirmed,
  length,
  email,
  min,
  numeric,
} from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';

extend('required', {
  ...required,
  message: 'Dit veld is verplicht in te vullen',
});

extend('email', {
  ...email,
  message: 'Dit veld bevat een onjuist email formaat',
});

extend('confirmed', {
  ...confirmed,
  message: 'This field confirmation does not match',
});

extend('length', {
  ...length,
  message: 'This field must have 2 options',
});

extend('min', {
  ...min,
  message: 'Dit veld moet minimum 3 karakters bevatten',
});

extend('numeric', {
  ...numeric,
  message: 'Het moet een getal zijn',
});
