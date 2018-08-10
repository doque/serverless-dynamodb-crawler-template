import { insert } from '../utils';

export default function handler(event, context, callback) {
  insert({ data: { name: 'foobar', baz: true } })
    .then(() =>
      callback(null, {
        statusCode: 200,
        body: 'OK'
      })
    )
    .catch(err => callback(err));
}
