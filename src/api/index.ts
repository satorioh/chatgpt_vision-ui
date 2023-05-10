import request from "@/axios";
import type { QueryType, AnswerType } from "./types";

export const getAnswer = (data: QueryType): Promise<IResponse<AnswerType>> => {
  return request.post({ url: "/get-answer", data });
};
