import { sinabro } from "@/apis/instance/instace";
import { authorization } from "@/apis/token";
import type {
  GetFaqListRes,
  GetFaqDetailRes,
  PostFaqReq,
  PutFaqReq,
} from "@/types/faq/remote";

export const postFaq = async (faqData: PostFaqReq) => {
  const { data } = await sinabro.post(`/questions`, faqData, authorization());
  return data;
};

export const getFaqList = async () => {
  const { data } = await sinabro.get<GetFaqListRes>("/questions");
  return data;
};

export const getFaqDetail = async (id: number) => {
  const { data } = await sinabro.get<GetFaqDetailRes>(`/questions/${id}`);
  return data;
};

export const deleteFaq = async (id: number) => {
  const { data } = await sinabro.delete(`/questions/${id}`, authorization());
  return data;
};

export const putEditFaq = async (id: number, faqData: PutFaqReq) => {
  const { data } = await sinabro.put(
    `/questions/${id}`,
    faqData,
    authorization()
  );
  return data;
};
