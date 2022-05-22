import _prisma from '_prisma';
import { SERVER_MESSAGE } from '@libs/server/constants';
import { withHandler, withSession } from '@middlewares';

export default withHandler({
  public: {
    POST: withSession(async (req, res) => {
      const { uid, pwd } = req.body;

      const findedUser = await _prisma.user.findUnique({
        where: { uid },
      });

      if (!findedUser) {
        return res.status(400).json({ message: SERVER_MESSAGE.LOGIN_ID_ERROR });
      }

      if (findedUser && findedUser.pwd !== pwd) {
        return res.status(400).json({ message: SERVER_MESSAGE.LOGIN_PW_ERROR });
      }

      req.session.user = findedUser;
      await req.session.save();

      res.json({ user: findedUser });
    }),
  },
});
