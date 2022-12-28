import { v4 as uuid } from "uuid";
type signInRequestData = {
  email: string;
  password: string;
};

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export async function signInRequest(data: signInRequestData) {
  await delay();

  return {
    token: uuid(),
    user: {
      name: "Júnior Khaled",
      email: "jk@email.com",
      avatar_url: "https://github.com/khalegjr.png",
    },
  };
}

export async function recoverUserInformation() {
  await delay();

  return {
    token: uuid(),
    user: {
      name: "Júnior Khaled",
      email: "jk@email.com",
      avatar_url: "https://github.com/khalegjr.png",
    },
  };
}
