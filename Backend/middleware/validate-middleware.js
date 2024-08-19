import { response } from "../service/response.js";

export const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    console.log(err);

    return res.send(response(false, 400, err.errors[0].message));
  }
};
