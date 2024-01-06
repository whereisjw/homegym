import client from "@/app/libs/server/client";
import withHandler from "@/app/libs/server/withHandler";

async function handler(req, res) {
  const { phone, email } = req.body;

  /*   const user = await client.user.upsert({
    where: {
      ...(phone ? { phone: Number(phone) } : { email: email }),
    },
    create: {
      name: "Anonymous",
      ...(phone ? { phone: Number(phone) } : { email: email }),
    },
    update: {},
  }); */

  const token = await client.token.create({
    data: {
      payload: "12349",
      user: {
        connectOrCreate: {
          where: {
            ...(phone ? { phone: Number(phone) } : { email: email }),
          },
          create: {
            name: "Anonymous",
            ...(phone ? { phone: Number(phone) } : { email: email }),
          },
        },
      },
    },
  });
  console.log(token);
  return res.status(200).end();
}

export default withHandler("POST", handler);

/* 
폰번호 > 유저? 
토큰 -- 유저 #5489 랜덤넘버

---> sms --->폰넘버 (twillo)

----> $42394823904   ---> Token? ---user ----> log the user in
*/
