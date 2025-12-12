import { makeRequest } from "../../../../globals/utils/http";

const login = async (email: string, password: string) => {
  const res = await makeRequest("POST", "/login", { email, password });
  return res.json ?? null;
};

export default login;
