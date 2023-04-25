import { Format } from "@prisma/client";

import { notFoundError } from "../../errors/not-found-error";
import formatRepository from "../../repositories/format-repository";

async function getFormats(): Promise<GetManyFormatsResult> {
  const formats = await formatRepository.findAll();
  if (!formats) throw notFoundError();

  return formats.map(
    ({ created_at, updated_at, ...formatWithoutTimestamps }) =>
      formatWithoutTimestamps
  );
}

export type FormatWithoutTimestamps = Omit<Format, "created_at" | "updated_at">;
export type GetManyFormatsResult = FormatWithoutTimestamps[];

const formatsService = {
  getFormats,
};

export default formatsService;
