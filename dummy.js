import express from "express";

const router = express.Router();

const delay = (time) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });

router.get("/blueprintSetting", (req, res, nex) => {
  res.status(200).json([
    {
      id: 1,
      main: "서명 모듈 테스트용입니다.",
      sub: "최근 수정일 2021.12.06 16:28",
      disable: true,
      favorite: true,
    },
    {
      id: 2,
      main: "코로나19 자가 문진",
      sub: "최근 수정일 2021.12.06 16:28",
      disable: false,
    },
    {
      id: 3,
      main: "경춘자 라면세상 서비스 평가",
      sub: "최근 수정일 2021.12.06 16:28",
      disable: true,
    },
  ]);
});

router.get("/responseGroup/:id", async (req, res, next) => {
  await delay(2000);
  res.status(200).json([
    {
      id: 1,
      main: "공용 URL",
      sub: "수집중",
      disable: true,
    },
    {
      id: 2,
      main: "그룹 URL(1)",
      sub: "수집중",
      disable: false,
    },
  ]);
});

router.post("/setting", async (req, res, next) => {
  await delay(2000);
  console.log(req.body);
  res.status(200).json({
    ok: true,
    message: "성공했습니다.",
    data: [
      {
        id: 1,
        main: "응답자 A",
        sub: "응답완료 시간 2021.12.06 16:28",
        disable: true,
      },
      {
        id: 2,
        main: "응답자 B",
        sub: "응답완료 시간 2021.12.07 16:28",
        disable: false,
      },
      {
        id: 3,
        main: "응답자 C",
        sub: "응답완료 시간 2021.12.12 16:28",
        disable: true,
      },
    ],
  });
});

router.post("/responseSetting", async (req, res, next) => {
  await delay(2000);
  console.log(req.body);
  res.status(200).json({
    ok: true,
    message: "성공했습니다.",
    response: [
      ["Response ID", "1140398398"],
      ["Response ID", "1140398398"],
      ["Response ID", "1140398398"],
    ],
  });
});

router.post("/condition", async (req, res, next) => {
  await delay(2000);
  res.status(200).json({
    ok: true,
  });
});

router.get("questions", async (req, res, next) => {
  console.log(req);
  res.status(200).json({
    ok: true,
    questions: [
      {
        id: 1,
        main: "매직 마우스의 감도는 어떠신가요?",

        disable: true,
      },
      {
        id: 2,
        main: "매직 마우스의 가격에 대해서 어떻게 생각하시나요?매직 마우스의 감도는 어떠신가요?",
        disable: true,
      },
      {
        id: 3,
        main: "매직 마우스를 어디서 구매하셨나요?",
        disable: false,
      },
      {
        id: 4,
        main: "매직 마우스를 주변 사람들에게 추천하실 의향이 있으신가요?",
        disable: true,
      },
      {
        id: 5,
        main: "매직 마우스 대신에 추천하실 다른 마우스가 있으신가요?",
        disable: true,
      },
    ],
  });
});

router.post("/detailCondition", async (req, res, next) => {
  await delay(2000);
  res.status(200).json({
    ok: true,
  });
});

router.post("/test", async (req, res, next) => {
  await delay(2000);
  res.status(200).json({
    ok: true,
    response: [
      ["Response ID", "1140398398"],
      ["Response ID", "1140398398"],
      ["Response ID", "1140398398"],
    ],
  });
});

router.post('/delayEvent', async (req, res, next) => {
  await delay(2000)
  res.status(200).json({
    ok: true
  })
})

export default router;
