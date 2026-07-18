import { IPaginate } from "../interfaces/paginate.interface";

export function paginate<T>(
  data: T[],
  total: number,
  page: number,
  limit: number,
): IPaginate<T> {
  return {
    data,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      hasNextPage: page * limit < total,
      hasPreviousPage: page > 1,
    },
  };
}
