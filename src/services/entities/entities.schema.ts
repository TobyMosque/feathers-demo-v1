export default {
  description: 'Entity',
  definition: {
    type: 'object',
    required: ['username', 'password'],
    properties: {
      id: { type: 'number', description: 'Id' },
      username: { type: 'string', description: 'Username' },
      password: { type: 'string', description: 'Password' },
    },
  },
};
