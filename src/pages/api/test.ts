import { withHandler } from '@middlewares';

export default withHandler({
  public: {
    GET: (req, res) => {
      res.status(200).json({ ok: true, message: 'HELLO WORLD' });
    },
  },
});
