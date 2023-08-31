import { FilterQuery, SortOrder } from 'mongoose';

export type Sort =
  | string
  | { [key: string]: SortOrder | { $meta: any } }
  | [string, SortOrder][]
  | undefined
  | null;

export class LoopbackFilterDto<T> {
  /**
   * The matching criteria
   */
  where?: FilterQuery<T>;
  /**
   * To include/exclude fields
   */
  fields?: Object | string | string[];
  /**
   * Sorting order for matched entities. Each item should be formatted as
   * `fieldName ASC` or `fieldName DESC`.
   * For example: `['f1 ASC', 'f2 DESC', 'f3 ASC']`.
   *
   * We might want to use `Order` in the future. Keep it as `string[]` for now
   * for compatibility with LoopBack 3.x.
   */
  order?: Sort;
  /**
   * Maximum number of entities
   */
  limit?: number;
  /**
   * Skip N number of entities
   */
  skip?: number;
  /**
   * Offset N number of entities. An alias for `skip`
   */
  offset?: number;
  /**
   * To include related objects
   */
  include?: unknown;
}