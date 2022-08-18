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
    ],
  });
});

export default router;
