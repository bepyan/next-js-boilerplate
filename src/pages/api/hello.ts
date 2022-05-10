import { withHandler } from '@libs/server';

export default withHandler({
  public: {
    GET: (req, res) => {
      res.status(200).json({ message: 'HELLO WORLD' });
    },
  },
});
