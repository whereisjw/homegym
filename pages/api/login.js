import client from "@/app/libs/server/client";
import withHandler from "@/app/libs/server/withHandler";

async function handler(req, res) {
  console.log(req.body);
  return res.status(200).end();
}

export default withHandler("POST", handler);
