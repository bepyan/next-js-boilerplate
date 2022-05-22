import _prisma from '_prisma';
import { SERVER_MESSAGE } from '@libs/server/constants';
import { checkUndefinedRequest } from '@libs/server/validator';
import { withHandler, withSession } from '@middlewares';

export default withHandler({
  public: {
    POST: withSession(async (req, res) => {
      const { name, pwd, uid } = req.body;
      if (checkUndefinedRequest(res, [name, pwd, uid])) return;

      const findedUser = await _prisma.user.findUnique({
        where: { uid },
      });

      if (findedUser) {
        return res.status(400).json({
          message: SERVER_MESSAGE.REGISTER_ID_DUPLICATED,
        });
      }

      const createdUser = await _prisma.user.create({
        data: {
          uid,
          name,
          pwd,
        },
      });

      req.session.user = createdUser;
      await req.session.save();

      res.json({});
    }),
  },
});
