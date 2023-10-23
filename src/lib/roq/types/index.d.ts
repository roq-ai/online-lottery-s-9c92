/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model lottery_game
 *
 */
export type lottery_game = $Result.DefaultSelection<Prisma.$lottery_gamePayload>;
/**
 * Model team_member
 *
 */
export type team_member = $Result.DefaultSelection<Prisma.$team_memberPayload>;
/**
 * Model ticket
 *
 */
export type ticket = $Result.DefaultSelection<Prisma.$ticketPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;
/**
 * Model winner
 *
 */
export type winner = $Result.DefaultSelection<Prisma.$winnerPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.lottery_game`: Exposes CRUD operations for the **lottery_game** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Lottery_games
   * const lottery_games = await prisma.lottery_game.findMany()
   * ```
   */
  get lottery_game(): Prisma.lottery_gameDelegate<ExtArgs>;

  /**
   * `prisma.team_member`: Exposes CRUD operations for the **team_member** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Team_members
   * const team_members = await prisma.team_member.findMany()
   * ```
   */
  get team_member(): Prisma.team_memberDelegate<ExtArgs>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **ticket** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tickets
   * const tickets = await prisma.ticket.findMany()
   * ```
   */
  get ticket(): Prisma.ticketDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.winner`: Exposes CRUD operations for the **winner** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Winners
   * const winners = await prisma.winner.findMany()
   * ```
   */
  get winner(): Prisma.winnerDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    company: 'company';
    lottery_game: 'lottery_game';
    team_member: 'team_member';
    ticket: 'ticket';
    user: 'user';
    winner: 'winner';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'company' | 'lottery_game' | 'team_member' | 'ticket' | 'user' | 'winner';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      lottery_game: {
        payload: Prisma.$lottery_gamePayload<ExtArgs>;
        fields: Prisma.lottery_gameFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.lottery_gameFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lottery_gamePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.lottery_gameFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lottery_gamePayload>;
          };
          findFirst: {
            args: Prisma.lottery_gameFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lottery_gamePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.lottery_gameFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lottery_gamePayload>;
          };
          findMany: {
            args: Prisma.lottery_gameFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lottery_gamePayload>[];
          };
          create: {
            args: Prisma.lottery_gameCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lottery_gamePayload>;
          };
          createMany: {
            args: Prisma.lottery_gameCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.lottery_gameDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lottery_gamePayload>;
          };
          update: {
            args: Prisma.lottery_gameUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lottery_gamePayload>;
          };
          deleteMany: {
            args: Prisma.lottery_gameDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.lottery_gameUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.lottery_gameUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lottery_gamePayload>;
          };
          aggregate: {
            args: Prisma.Lottery_gameAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLottery_game>;
          };
          groupBy: {
            args: Prisma.lottery_gameGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Lottery_gameGroupByOutputType>[];
          };
          count: {
            args: Prisma.lottery_gameCountArgs<ExtArgs>;
            result: $Utils.Optional<Lottery_gameCountAggregateOutputType> | number;
          };
        };
      };
      team_member: {
        payload: Prisma.$team_memberPayload<ExtArgs>;
        fields: Prisma.team_memberFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.team_memberFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.team_memberFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          findFirst: {
            args: Prisma.team_memberFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.team_memberFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          findMany: {
            args: Prisma.team_memberFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>[];
          };
          create: {
            args: Prisma.team_memberCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          createMany: {
            args: Prisma.team_memberCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.team_memberDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          update: {
            args: Prisma.team_memberUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          deleteMany: {
            args: Prisma.team_memberDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.team_memberUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.team_memberUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          aggregate: {
            args: Prisma.Team_memberAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTeam_member>;
          };
          groupBy: {
            args: Prisma.team_memberGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Team_memberGroupByOutputType>[];
          };
          count: {
            args: Prisma.team_memberCountArgs<ExtArgs>;
            result: $Utils.Optional<Team_memberCountAggregateOutputType> | number;
          };
        };
      };
      ticket: {
        payload: Prisma.$ticketPayload<ExtArgs>;
        fields: Prisma.ticketFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ticketFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ticketFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>;
          };
          findFirst: {
            args: Prisma.ticketFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ticketFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>;
          };
          findMany: {
            args: Prisma.ticketFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>[];
          };
          create: {
            args: Prisma.ticketCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>;
          };
          createMany: {
            args: Prisma.ticketCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.ticketDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>;
          };
          update: {
            args: Prisma.ticketUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>;
          };
          deleteMany: {
            args: Prisma.ticketDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.ticketUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.ticketUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>;
          };
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTicket>;
          };
          groupBy: {
            args: Prisma.ticketGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TicketGroupByOutputType>[];
          };
          count: {
            args: Prisma.ticketCountArgs<ExtArgs>;
            result: $Utils.Optional<TicketCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      winner: {
        payload: Prisma.$winnerPayload<ExtArgs>;
        fields: Prisma.winnerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.winnerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$winnerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.winnerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$winnerPayload>;
          };
          findFirst: {
            args: Prisma.winnerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$winnerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.winnerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$winnerPayload>;
          };
          findMany: {
            args: Prisma.winnerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$winnerPayload>[];
          };
          create: {
            args: Prisma.winnerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$winnerPayload>;
          };
          createMany: {
            args: Prisma.winnerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.winnerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$winnerPayload>;
          };
          update: {
            args: Prisma.winnerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$winnerPayload>;
          };
          deleteMany: {
            args: Prisma.winnerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.winnerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.winnerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$winnerPayload>;
          };
          aggregate: {
            args: Prisma.WinnerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateWinner>;
          };
          groupBy: {
            args: Prisma.winnerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<WinnerGroupByOutputType>[];
          };
          count: {
            args: Prisma.winnerCountArgs<ExtArgs>;
            result: $Utils.Optional<WinnerCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    team_member: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_member?: boolean | CompanyCountOutputTypeCountTeam_memberArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountTeam_memberArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: team_memberWhereInput;
  };

  /**
   * Count Type Lottery_gameCountOutputType
   */

  export type Lottery_gameCountOutputType = {
    ticket: number;
    winner: number;
  };

  export type Lottery_gameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | Lottery_gameCountOutputTypeCountTicketArgs;
    winner?: boolean | Lottery_gameCountOutputTypeCountWinnerArgs;
  };

  // Custom InputTypes

  /**
   * Lottery_gameCountOutputType without action
   */
  export type Lottery_gameCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Lottery_gameCountOutputType
     */
    select?: Lottery_gameCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * Lottery_gameCountOutputType without action
   */
  export type Lottery_gameCountOutputTypeCountTicketArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ticketWhereInput;
  };

  /**
   * Lottery_gameCountOutputType without action
   */
  export type Lottery_gameCountOutputTypeCountWinnerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: winnerWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    company: number;
    ticket: number;
    winner: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
    ticket?: boolean | UserCountOutputTypeCountTicketArgs;
    winner?: boolean | UserCountOutputTypeCountWinnerArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWinnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: winnerWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      team_member?: boolean | company$team_memberArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    team_member?: boolean | company$team_memberArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      team_member: Prisma.$team_memberPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    team_member<T extends company$team_memberArgs<ExtArgs> = {}>(
      args?: Subset<T, company$team_memberArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.team_member
   */
  export type company$team_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    where?: team_memberWhereInput;
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    cursor?: team_memberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model lottery_game
   */

  export type AggregateLottery_game = {
    _count: Lottery_gameCountAggregateOutputType | null;
    _avg: Lottery_gameAvgAggregateOutputType | null;
    _sum: Lottery_gameSumAggregateOutputType | null;
    _min: Lottery_gameMinAggregateOutputType | null;
    _max: Lottery_gameMaxAggregateOutputType | null;
  };

  export type Lottery_gameAvgAggregateOutputType = {
    prize_amount: number | null;
  };

  export type Lottery_gameSumAggregateOutputType = {
    prize_amount: number | null;
  };

  export type Lottery_gameMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    prize_amount: number | null;
    draw_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Lottery_gameMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    prize_amount: number | null;
    draw_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Lottery_gameCountAggregateOutputType = {
    id: number;
    name: number;
    prize_amount: number;
    draw_date: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Lottery_gameAvgAggregateInputType = {
    prize_amount?: true;
  };

  export type Lottery_gameSumAggregateInputType = {
    prize_amount?: true;
  };

  export type Lottery_gameMinAggregateInputType = {
    id?: true;
    name?: true;
    prize_amount?: true;
    draw_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Lottery_gameMaxAggregateInputType = {
    id?: true;
    name?: true;
    prize_amount?: true;
    draw_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Lottery_gameCountAggregateInputType = {
    id?: true;
    name?: true;
    prize_amount?: true;
    draw_date?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Lottery_gameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lottery_game to aggregate.
     */
    where?: lottery_gameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lottery_games to fetch.
     */
    orderBy?: lottery_gameOrderByWithRelationInput | lottery_gameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: lottery_gameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lottery_games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lottery_games.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned lottery_games
     **/
    _count?: true | Lottery_gameCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Lottery_gameAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Lottery_gameSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Lottery_gameMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Lottery_gameMaxAggregateInputType;
  };

  export type GetLottery_gameAggregateType<T extends Lottery_gameAggregateArgs> = {
    [P in keyof T & keyof AggregateLottery_game]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLottery_game[P]>
      : GetScalarType<T[P], AggregateLottery_game[P]>;
  };

  export type lottery_gameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lottery_gameWhereInput;
    orderBy?: lottery_gameOrderByWithAggregationInput | lottery_gameOrderByWithAggregationInput[];
    by: Lottery_gameScalarFieldEnum[] | Lottery_gameScalarFieldEnum;
    having?: lottery_gameScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Lottery_gameCountAggregateInputType | true;
    _avg?: Lottery_gameAvgAggregateInputType;
    _sum?: Lottery_gameSumAggregateInputType;
    _min?: Lottery_gameMinAggregateInputType;
    _max?: Lottery_gameMaxAggregateInputType;
  };

  export type Lottery_gameGroupByOutputType = {
    id: string;
    name: string;
    prize_amount: number;
    draw_date: Date;
    created_at: Date;
    updated_at: Date;
    _count: Lottery_gameCountAggregateOutputType | null;
    _avg: Lottery_gameAvgAggregateOutputType | null;
    _sum: Lottery_gameSumAggregateOutputType | null;
    _min: Lottery_gameMinAggregateOutputType | null;
    _max: Lottery_gameMaxAggregateOutputType | null;
  };

  type GetLottery_gameGroupByPayload<T extends lottery_gameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Lottery_gameGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Lottery_gameGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Lottery_gameGroupByOutputType[P]>
          : GetScalarType<T[P], Lottery_gameGroupByOutputType[P]>;
      }
    >
  >;

  export type lottery_gameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        prize_amount?: boolean;
        draw_date?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        ticket?: boolean | lottery_game$ticketArgs<ExtArgs>;
        winner?: boolean | lottery_game$winnerArgs<ExtArgs>;
        _count?: boolean | Lottery_gameCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['lottery_game']
    >;

  export type lottery_gameSelectScalar = {
    id?: boolean;
    name?: boolean;
    prize_amount?: boolean;
    draw_date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type lottery_gameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | lottery_game$ticketArgs<ExtArgs>;
    winner?: boolean | lottery_game$winnerArgs<ExtArgs>;
    _count?: boolean | Lottery_gameCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $lottery_gamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'lottery_game';
    objects: {
      ticket: Prisma.$ticketPayload<ExtArgs>[];
      winner: Prisma.$winnerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        prize_amount: number;
        draw_date: Date;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['lottery_game']
    >;
    composites: {};
  };

  type lottery_gameGetPayload<S extends boolean | null | undefined | lottery_gameDefaultArgs> = $Result.GetResult<
    Prisma.$lottery_gamePayload,
    S
  >;

  type lottery_gameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    lottery_gameFindManyArgs,
    'select' | 'include'
  > & {
    select?: Lottery_gameCountAggregateInputType | true;
  };

  export interface lottery_gameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lottery_game']; meta: { name: 'lottery_game' } };
    /**
     * Find zero or one Lottery_game that matches the filter.
     * @param {lottery_gameFindUniqueArgs} args - Arguments to find a Lottery_game
     * @example
     * // Get one Lottery_game
     * const lottery_game = await prisma.lottery_game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends lottery_gameFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, lottery_gameFindUniqueArgs<ExtArgs>>,
    ): Prisma__lottery_gameClient<
      $Result.GetResult<Prisma.$lottery_gamePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Lottery_game that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {lottery_gameFindUniqueOrThrowArgs} args - Arguments to find a Lottery_game
     * @example
     * // Get one Lottery_game
     * const lottery_game = await prisma.lottery_game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends lottery_gameFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, lottery_gameFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__lottery_gameClient<
      $Result.GetResult<Prisma.$lottery_gamePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Lottery_game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lottery_gameFindFirstArgs} args - Arguments to find a Lottery_game
     * @example
     * // Get one Lottery_game
     * const lottery_game = await prisma.lottery_game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends lottery_gameFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, lottery_gameFindFirstArgs<ExtArgs>>,
    ): Prisma__lottery_gameClient<
      $Result.GetResult<Prisma.$lottery_gamePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Lottery_game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lottery_gameFindFirstOrThrowArgs} args - Arguments to find a Lottery_game
     * @example
     * // Get one Lottery_game
     * const lottery_game = await prisma.lottery_game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends lottery_gameFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, lottery_gameFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__lottery_gameClient<
      $Result.GetResult<Prisma.$lottery_gamePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Lottery_games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lottery_gameFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lottery_games
     * const lottery_games = await prisma.lottery_game.findMany()
     *
     * // Get first 10 Lottery_games
     * const lottery_games = await prisma.lottery_game.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const lottery_gameWithIdOnly = await prisma.lottery_game.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends lottery_gameFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, lottery_gameFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lottery_gamePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Lottery_game.
     * @param {lottery_gameCreateArgs} args - Arguments to create a Lottery_game.
     * @example
     * // Create one Lottery_game
     * const Lottery_game = await prisma.lottery_game.create({
     *   data: {
     *     // ... data to create a Lottery_game
     *   }
     * })
     *
     **/
    create<T extends lottery_gameCreateArgs<ExtArgs>>(
      args: SelectSubset<T, lottery_gameCreateArgs<ExtArgs>>,
    ): Prisma__lottery_gameClient<$Result.GetResult<Prisma.$lottery_gamePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Lottery_games.
     *     @param {lottery_gameCreateManyArgs} args - Arguments to create many Lottery_games.
     *     @example
     *     // Create many Lottery_games
     *     const lottery_game = await prisma.lottery_game.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends lottery_gameCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, lottery_gameCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Lottery_game.
     * @param {lottery_gameDeleteArgs} args - Arguments to delete one Lottery_game.
     * @example
     * // Delete one Lottery_game
     * const Lottery_game = await prisma.lottery_game.delete({
     *   where: {
     *     // ... filter to delete one Lottery_game
     *   }
     * })
     *
     **/
    delete<T extends lottery_gameDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, lottery_gameDeleteArgs<ExtArgs>>,
    ): Prisma__lottery_gameClient<$Result.GetResult<Prisma.$lottery_gamePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Lottery_game.
     * @param {lottery_gameUpdateArgs} args - Arguments to update one Lottery_game.
     * @example
     * // Update one Lottery_game
     * const lottery_game = await prisma.lottery_game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends lottery_gameUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, lottery_gameUpdateArgs<ExtArgs>>,
    ): Prisma__lottery_gameClient<$Result.GetResult<Prisma.$lottery_gamePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Lottery_games.
     * @param {lottery_gameDeleteManyArgs} args - Arguments to filter Lottery_games to delete.
     * @example
     * // Delete a few Lottery_games
     * const { count } = await prisma.lottery_game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends lottery_gameDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, lottery_gameDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Lottery_games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lottery_gameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lottery_games
     * const lottery_game = await prisma.lottery_game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends lottery_gameUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, lottery_gameUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Lottery_game.
     * @param {lottery_gameUpsertArgs} args - Arguments to update or create a Lottery_game.
     * @example
     * // Update or create a Lottery_game
     * const lottery_game = await prisma.lottery_game.upsert({
     *   create: {
     *     // ... data to create a Lottery_game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lottery_game we want to update
     *   }
     * })
     **/
    upsert<T extends lottery_gameUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, lottery_gameUpsertArgs<ExtArgs>>,
    ): Prisma__lottery_gameClient<$Result.GetResult<Prisma.$lottery_gamePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Lottery_games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lottery_gameCountArgs} args - Arguments to filter Lottery_games to count.
     * @example
     * // Count the number of Lottery_games
     * const count = await prisma.lottery_game.count({
     *   where: {
     *     // ... the filter for the Lottery_games we want to count
     *   }
     * })
     **/
    count<T extends lottery_gameCountArgs>(
      args?: Subset<T, lottery_gameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lottery_gameCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Lottery_game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lottery_gameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Lottery_gameAggregateArgs>(
      args: Subset<T, Lottery_gameAggregateArgs>,
    ): Prisma.PrismaPromise<GetLottery_gameAggregateType<T>>;

    /**
     * Group by Lottery_game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lottery_gameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends lottery_gameGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lottery_gameGroupByArgs['orderBy'] }
        : { orderBy?: lottery_gameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, lottery_gameGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetLottery_gameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the lottery_game model
     */
    readonly fields: lottery_gameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lottery_game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lottery_gameClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ticket<T extends lottery_game$ticketArgs<ExtArgs> = {}>(
      args?: Subset<T, lottery_game$ticketArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'findMany'> | Null>;

    winner<T extends lottery_game$winnerArgs<ExtArgs> = {}>(
      args?: Subset<T, lottery_game$winnerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$winnerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the lottery_game model
   */
  interface lottery_gameFieldRefs {
    readonly id: FieldRef<'lottery_game', 'String'>;
    readonly name: FieldRef<'lottery_game', 'String'>;
    readonly prize_amount: FieldRef<'lottery_game', 'Int'>;
    readonly draw_date: FieldRef<'lottery_game', 'DateTime'>;
    readonly created_at: FieldRef<'lottery_game', 'DateTime'>;
    readonly updated_at: FieldRef<'lottery_game', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * lottery_game findUnique
   */
  export type lottery_gameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lottery_game
     */
    select?: lottery_gameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lottery_gameInclude<ExtArgs> | null;
    /**
     * Filter, which lottery_game to fetch.
     */
    where: lottery_gameWhereUniqueInput;
  };

  /**
   * lottery_game findUniqueOrThrow
   */
  export type lottery_gameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lottery_game
     */
    select?: lottery_gameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lottery_gameInclude<ExtArgs> | null;
    /**
     * Filter, which lottery_game to fetch.
     */
    where: lottery_gameWhereUniqueInput;
  };

  /**
   * lottery_game findFirst
   */
  export type lottery_gameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lottery_game
     */
    select?: lottery_gameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lottery_gameInclude<ExtArgs> | null;
    /**
     * Filter, which lottery_game to fetch.
     */
    where?: lottery_gameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lottery_games to fetch.
     */
    orderBy?: lottery_gameOrderByWithRelationInput | lottery_gameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for lottery_games.
     */
    cursor?: lottery_gameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lottery_games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lottery_games.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of lottery_games.
     */
    distinct?: Lottery_gameScalarFieldEnum | Lottery_gameScalarFieldEnum[];
  };

  /**
   * lottery_game findFirstOrThrow
   */
  export type lottery_gameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lottery_game
     */
    select?: lottery_gameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lottery_gameInclude<ExtArgs> | null;
    /**
     * Filter, which lottery_game to fetch.
     */
    where?: lottery_gameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lottery_games to fetch.
     */
    orderBy?: lottery_gameOrderByWithRelationInput | lottery_gameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for lottery_games.
     */
    cursor?: lottery_gameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lottery_games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lottery_games.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of lottery_games.
     */
    distinct?: Lottery_gameScalarFieldEnum | Lottery_gameScalarFieldEnum[];
  };

  /**
   * lottery_game findMany
   */
  export type lottery_gameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lottery_game
     */
    select?: lottery_gameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lottery_gameInclude<ExtArgs> | null;
    /**
     * Filter, which lottery_games to fetch.
     */
    where?: lottery_gameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lottery_games to fetch.
     */
    orderBy?: lottery_gameOrderByWithRelationInput | lottery_gameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing lottery_games.
     */
    cursor?: lottery_gameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lottery_games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lottery_games.
     */
    skip?: number;
    distinct?: Lottery_gameScalarFieldEnum | Lottery_gameScalarFieldEnum[];
  };

  /**
   * lottery_game create
   */
  export type lottery_gameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lottery_game
     */
    select?: lottery_gameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lottery_gameInclude<ExtArgs> | null;
    /**
     * The data needed to create a lottery_game.
     */
    data: XOR<lottery_gameCreateInput, lottery_gameUncheckedCreateInput>;
  };

  /**
   * lottery_game createMany
   */
  export type lottery_gameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lottery_games.
     */
    data: lottery_gameCreateManyInput | lottery_gameCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * lottery_game update
   */
  export type lottery_gameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lottery_game
     */
    select?: lottery_gameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lottery_gameInclude<ExtArgs> | null;
    /**
     * The data needed to update a lottery_game.
     */
    data: XOR<lottery_gameUpdateInput, lottery_gameUncheckedUpdateInput>;
    /**
     * Choose, which lottery_game to update.
     */
    where: lottery_gameWhereUniqueInput;
  };

  /**
   * lottery_game updateMany
   */
  export type lottery_gameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lottery_games.
     */
    data: XOR<lottery_gameUpdateManyMutationInput, lottery_gameUncheckedUpdateManyInput>;
    /**
     * Filter which lottery_games to update
     */
    where?: lottery_gameWhereInput;
  };

  /**
   * lottery_game upsert
   */
  export type lottery_gameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lottery_game
     */
    select?: lottery_gameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lottery_gameInclude<ExtArgs> | null;
    /**
     * The filter to search for the lottery_game to update in case it exists.
     */
    where: lottery_gameWhereUniqueInput;
    /**
     * In case the lottery_game found by the `where` argument doesn't exist, create a new lottery_game with this data.
     */
    create: XOR<lottery_gameCreateInput, lottery_gameUncheckedCreateInput>;
    /**
     * In case the lottery_game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lottery_gameUpdateInput, lottery_gameUncheckedUpdateInput>;
  };

  /**
   * lottery_game delete
   */
  export type lottery_gameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lottery_game
     */
    select?: lottery_gameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lottery_gameInclude<ExtArgs> | null;
    /**
     * Filter which lottery_game to delete.
     */
    where: lottery_gameWhereUniqueInput;
  };

  /**
   * lottery_game deleteMany
   */
  export type lottery_gameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lottery_games to delete
     */
    where?: lottery_gameWhereInput;
  };

  /**
   * lottery_game.ticket
   */
  export type lottery_game$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    where?: ticketWhereInput;
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[];
    cursor?: ticketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[];
  };

  /**
   * lottery_game.winner
   */
  export type lottery_game$winnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the winner
     */
    select?: winnerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: winnerInclude<ExtArgs> | null;
    where?: winnerWhereInput;
    orderBy?: winnerOrderByWithRelationInput | winnerOrderByWithRelationInput[];
    cursor?: winnerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[];
  };

  /**
   * lottery_game without action
   */
  export type lottery_gameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lottery_game
     */
    select?: lottery_gameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lottery_gameInclude<ExtArgs> | null;
  };

  /**
   * Model team_member
   */

  export type AggregateTeam_member = {
    _count: Team_memberCountAggregateOutputType | null;
    _min: Team_memberMinAggregateOutputType | null;
    _max: Team_memberMaxAggregateOutputType | null;
  };

  export type Team_memberMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    role: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Team_memberMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    role: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Team_memberCountAggregateOutputType = {
    id: number;
    name: number;
    role: number;
    company_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Team_memberMinAggregateInputType = {
    id?: true;
    name?: true;
    role?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Team_memberMaxAggregateInputType = {
    id?: true;
    name?: true;
    role?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Team_memberCountAggregateInputType = {
    id?: true;
    name?: true;
    role?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Team_memberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_member to aggregate.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned team_members
     **/
    _count?: true | Team_memberCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Team_memberMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Team_memberMaxAggregateInputType;
  };

  export type GetTeam_memberAggregateType<T extends Team_memberAggregateArgs> = {
    [P in keyof T & keyof AggregateTeam_member]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam_member[P]>
      : GetScalarType<T[P], AggregateTeam_member[P]>;
  };

  export type team_memberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_memberWhereInput;
    orderBy?: team_memberOrderByWithAggregationInput | team_memberOrderByWithAggregationInput[];
    by: Team_memberScalarFieldEnum[] | Team_memberScalarFieldEnum;
    having?: team_memberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Team_memberCountAggregateInputType | true;
    _min?: Team_memberMinAggregateInputType;
    _max?: Team_memberMaxAggregateInputType;
  };

  export type Team_memberGroupByOutputType = {
    id: string;
    name: string;
    role: string;
    company_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Team_memberCountAggregateOutputType | null;
    _min: Team_memberMinAggregateOutputType | null;
    _max: Team_memberMaxAggregateOutputType | null;
  };

  type GetTeam_memberGroupByPayload<T extends team_memberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Team_memberGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Team_memberGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Team_memberGroupByOutputType[P]>
          : GetScalarType<T[P], Team_memberGroupByOutputType[P]>;
      }
    >
  >;

  export type team_memberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        role?: boolean;
        company_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        company?: boolean | companyDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['team_member']
    >;

  export type team_memberSelectScalar = {
    id?: boolean;
    name?: boolean;
    role?: boolean;
    company_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type team_memberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
  };

  export type $team_memberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'team_member';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        role: string;
        company_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['team_member']
    >;
    composites: {};
  };

  type team_memberGetPayload<S extends boolean | null | undefined | team_memberDefaultArgs> = $Result.GetResult<
    Prisma.$team_memberPayload,
    S
  >;

  type team_memberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    team_memberFindManyArgs,
    'select' | 'include'
  > & {
    select?: Team_memberCountAggregateInputType | true;
  };

  export interface team_memberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team_member']; meta: { name: 'team_member' } };
    /**
     * Find zero or one Team_member that matches the filter.
     * @param {team_memberFindUniqueArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends team_memberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberFindUniqueArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Team_member that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {team_memberFindUniqueOrThrowArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends team_memberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Team_member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberFindFirstArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends team_memberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindFirstArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Team_member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberFindFirstOrThrowArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends team_memberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Team_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Team_members
     * const team_members = await prisma.team_member.findMany()
     *
     * // Get first 10 Team_members
     * const team_members = await prisma.team_member.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const team_memberWithIdOnly = await prisma.team_member.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends team_memberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Team_member.
     * @param {team_memberCreateArgs} args - Arguments to create a Team_member.
     * @example
     * // Create one Team_member
     * const Team_member = await prisma.team_member.create({
     *   data: {
     *     // ... data to create a Team_member
     *   }
     * })
     *
     **/
    create<T extends team_memberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberCreateArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Team_members.
     *     @param {team_memberCreateManyArgs} args - Arguments to create many Team_members.
     *     @example
     *     // Create many Team_members
     *     const team_member = await prisma.team_member.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends team_memberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Team_member.
     * @param {team_memberDeleteArgs} args - Arguments to delete one Team_member.
     * @example
     * // Delete one Team_member
     * const Team_member = await prisma.team_member.delete({
     *   where: {
     *     // ... filter to delete one Team_member
     *   }
     * })
     *
     **/
    delete<T extends team_memberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberDeleteArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Team_member.
     * @param {team_memberUpdateArgs} args - Arguments to update one Team_member.
     * @example
     * // Update one Team_member
     * const team_member = await prisma.team_member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends team_memberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberUpdateArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Team_members.
     * @param {team_memberDeleteManyArgs} args - Arguments to filter Team_members to delete.
     * @example
     * // Delete a few Team_members
     * const { count } = await prisma.team_member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends team_memberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Team_members
     * const team_member = await prisma.team_member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends team_memberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Team_member.
     * @param {team_memberUpsertArgs} args - Arguments to update or create a Team_member.
     * @example
     * // Update or create a Team_member
     * const team_member = await prisma.team_member.upsert({
     *   create: {
     *     // ... data to create a Team_member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team_member we want to update
     *   }
     * })
     **/
    upsert<T extends team_memberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberUpsertArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberCountArgs} args - Arguments to filter Team_members to count.
     * @example
     * // Count the number of Team_members
     * const count = await prisma.team_member.count({
     *   where: {
     *     // ... the filter for the Team_members we want to count
     *   }
     * })
     **/
    count<T extends team_memberCountArgs>(
      args?: Subset<T, team_memberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Team_memberCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Team_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Team_memberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Team_memberAggregateArgs>(
      args: Subset<T, Team_memberAggregateArgs>,
    ): Prisma.PrismaPromise<GetTeam_memberAggregateType<T>>;

    /**
     * Group by Team_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends team_memberGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: team_memberGroupByArgs['orderBy'] }
        : { orderBy?: team_memberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, team_memberGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTeam_memberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the team_member model
     */
    readonly fields: team_memberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team_member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__team_memberClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the team_member model
   */
  interface team_memberFieldRefs {
    readonly id: FieldRef<'team_member', 'String'>;
    readonly name: FieldRef<'team_member', 'String'>;
    readonly role: FieldRef<'team_member', 'String'>;
    readonly company_id: FieldRef<'team_member', 'String'>;
    readonly created_at: FieldRef<'team_member', 'DateTime'>;
    readonly updated_at: FieldRef<'team_member', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * team_member findUnique
   */
  export type team_memberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member findUniqueOrThrow
   */
  export type team_memberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member findFirst
   */
  export type team_memberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for team_members.
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of team_members.
     */
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * team_member findFirstOrThrow
   */
  export type team_memberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for team_members.
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of team_members.
     */
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * team_member findMany
   */
  export type team_memberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_members to fetch.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing team_members.
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * team_member create
   */
  export type team_memberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * The data needed to create a team_member.
     */
    data: XOR<team_memberCreateInput, team_memberUncheckedCreateInput>;
  };

  /**
   * team_member createMany
   */
  export type team_memberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many team_members.
     */
    data: team_memberCreateManyInput | team_memberCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * team_member update
   */
  export type team_memberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * The data needed to update a team_member.
     */
    data: XOR<team_memberUpdateInput, team_memberUncheckedUpdateInput>;
    /**
     * Choose, which team_member to update.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member updateMany
   */
  export type team_memberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update team_members.
     */
    data: XOR<team_memberUpdateManyMutationInput, team_memberUncheckedUpdateManyInput>;
    /**
     * Filter which team_members to update
     */
    where?: team_memberWhereInput;
  };

  /**
   * team_member upsert
   */
  export type team_memberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * The filter to search for the team_member to update in case it exists.
     */
    where: team_memberWhereUniqueInput;
    /**
     * In case the team_member found by the `where` argument doesn't exist, create a new team_member with this data.
     */
    create: XOR<team_memberCreateInput, team_memberUncheckedCreateInput>;
    /**
     * In case the team_member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<team_memberUpdateInput, team_memberUncheckedUpdateInput>;
  };

  /**
   * team_member delete
   */
  export type team_memberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter which team_member to delete.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member deleteMany
   */
  export type team_memberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_members to delete
     */
    where?: team_memberWhereInput;
  };

  /**
   * team_member without action
   */
  export type team_memberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
  };

  /**
   * Model ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null;
    _min: TicketMinAggregateOutputType | null;
    _max: TicketMaxAggregateOutputType | null;
  };

  export type TicketMinAggregateOutputType = {
    id: string | null;
    number: string | null;
    purchase_date: Date | null;
    user_id: string | null;
    game_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TicketMaxAggregateOutputType = {
    id: string | null;
    number: string | null;
    purchase_date: Date | null;
    user_id: string | null;
    game_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TicketCountAggregateOutputType = {
    id: number;
    number: number;
    purchase_date: number;
    user_id: number;
    game_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TicketMinAggregateInputType = {
    id?: true;
    number?: true;
    purchase_date?: true;
    user_id?: true;
    game_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TicketMaxAggregateInputType = {
    id?: true;
    number?: true;
    purchase_date?: true;
    user_id?: true;
    game_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TicketCountAggregateInputType = {
    id?: true;
    number?: true;
    purchase_date?: true;
    user_id?: true;
    game_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket to aggregate.
     */
    where?: ticketWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ticketWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tickets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tickets
     **/
    _count?: true | TicketCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TicketMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TicketMaxAggregateInputType;
  };

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
    [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>;
  };

  export type ticketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput;
    orderBy?: ticketOrderByWithAggregationInput | ticketOrderByWithAggregationInput[];
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum;
    having?: ticketScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TicketCountAggregateInputType | true;
    _min?: TicketMinAggregateInputType;
    _max?: TicketMaxAggregateInputType;
  };

  export type TicketGroupByOutputType = {
    id: string;
    number: string;
    purchase_date: Date;
    user_id: string;
    game_id: string;
    created_at: Date;
    updated_at: Date;
    _count: TicketCountAggregateOutputType | null;
    _min: TicketMinAggregateOutputType | null;
    _max: TicketMaxAggregateOutputType | null;
  };

  type GetTicketGroupByPayload<T extends ticketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TicketGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
          : GetScalarType<T[P], TicketGroupByOutputType[P]>;
      }
    >
  >;

  export type ticketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      number?: boolean;
      purchase_date?: boolean;
      user_id?: boolean;
      game_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      lottery_game?: boolean | lottery_gameDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['ticket']
  >;

  export type ticketSelectScalar = {
    id?: boolean;
    number?: boolean;
    purchase_date?: boolean;
    user_id?: boolean;
    game_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type ticketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lottery_game?: boolean | lottery_gameDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $ticketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'ticket';
    objects: {
      lottery_game: Prisma.$lottery_gamePayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        number: string;
        purchase_date: Date;
        user_id: string;
        game_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['ticket']
    >;
    composites: {};
  };

  type ticketGetPayload<S extends boolean | null | undefined | ticketDefaultArgs> = $Result.GetResult<
    Prisma.$ticketPayload,
    S
  >;

  type ticketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    ticketFindManyArgs,
    'select' | 'include'
  > & {
    select?: TicketCountAggregateInputType | true;
  };

  export interface ticketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ticket']; meta: { name: 'ticket' } };
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {ticketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends ticketFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ticketFindUniqueArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Ticket that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {ticketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends ticketFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ticketFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends ticketFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ticketFindFirstArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends ticketFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ticketFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     *
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends ticketFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ticketFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Ticket.
     * @param {ticketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     *
     **/
    create<T extends ticketCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ticketCreateArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Tickets.
     *     @param {ticketCreateManyArgs} args - Arguments to create many Tickets.
     *     @example
     *     // Create many Tickets
     *     const ticket = await prisma.ticket.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends ticketCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ticketCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Ticket.
     * @param {ticketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     *
     **/
    delete<T extends ticketDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ticketDeleteArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Ticket.
     * @param {ticketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends ticketUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ticketUpdateArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Tickets.
     * @param {ticketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends ticketDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ticketDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends ticketUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ticketUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Ticket.
     * @param {ticketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     **/
    upsert<T extends ticketUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ticketUpsertArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
     **/
    count<T extends ticketCountArgs>(
      args?: Subset<T, ticketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TicketAggregateArgs>(
      args: Subset<T, TicketAggregateArgs>,
    ): Prisma.PrismaPromise<GetTicketAggregateType<T>>;

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ticketGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticketGroupByArgs['orderBy'] }
        : { orderBy?: ticketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, ticketGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ticket model
     */
    readonly fields: ticketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticketClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    lottery_game<T extends lottery_gameDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, lottery_gameDefaultArgs<ExtArgs>>,
    ): Prisma__lottery_gameClient<
      $Result.GetResult<Prisma.$lottery_gamePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ticket model
   */
  interface ticketFieldRefs {
    readonly id: FieldRef<'ticket', 'String'>;
    readonly number: FieldRef<'ticket', 'String'>;
    readonly purchase_date: FieldRef<'ticket', 'DateTime'>;
    readonly user_id: FieldRef<'ticket', 'String'>;
    readonly game_id: FieldRef<'ticket', 'String'>;
    readonly created_at: FieldRef<'ticket', 'DateTime'>;
    readonly updated_at: FieldRef<'ticket', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * ticket findUnique
   */
  export type ticketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * Filter, which ticket to fetch.
     */
    where: ticketWhereUniqueInput;
  };

  /**
   * ticket findUniqueOrThrow
   */
  export type ticketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * Filter, which ticket to fetch.
     */
    where: ticketWhereUniqueInput;
  };

  /**
   * ticket findFirst
   */
  export type ticketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * Filter, which ticket to fetch.
     */
    where?: ticketWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tickets.
     */
    cursor?: ticketWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tickets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[];
  };

  /**
   * ticket findFirstOrThrow
   */
  export type ticketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * Filter, which ticket to fetch.
     */
    where?: ticketWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tickets.
     */
    cursor?: ticketWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tickets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[];
  };

  /**
   * ticket findMany
   */
  export type ticketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tickets.
     */
    cursor?: ticketWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tickets.
     */
    skip?: number;
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[];
  };

  /**
   * ticket create
   */
  export type ticketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * The data needed to create a ticket.
     */
    data: XOR<ticketCreateInput, ticketUncheckedCreateInput>;
  };

  /**
   * ticket createMany
   */
  export type ticketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tickets.
     */
    data: ticketCreateManyInput | ticketCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ticket update
   */
  export type ticketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * The data needed to update a ticket.
     */
    data: XOR<ticketUpdateInput, ticketUncheckedUpdateInput>;
    /**
     * Choose, which ticket to update.
     */
    where: ticketWhereUniqueInput;
  };

  /**
   * ticket updateMany
   */
  export type ticketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tickets.
     */
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyInput>;
    /**
     * Filter which tickets to update
     */
    where?: ticketWhereInput;
  };

  /**
   * ticket upsert
   */
  export type ticketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * The filter to search for the ticket to update in case it exists.
     */
    where: ticketWhereUniqueInput;
    /**
     * In case the ticket found by the `where` argument doesn't exist, create a new ticket with this data.
     */
    create: XOR<ticketCreateInput, ticketUncheckedCreateInput>;
    /**
     * In case the ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticketUpdateInput, ticketUncheckedUpdateInput>;
  };

  /**
   * ticket delete
   */
  export type ticketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * Filter which ticket to delete.
     */
    where: ticketWhereUniqueInput;
  };

  /**
   * ticket deleteMany
   */
  export type ticketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tickets to delete
     */
    where?: ticketWhereInput;
  };

  /**
   * ticket without action
   */
  export type ticketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | user$companyArgs<ExtArgs>;
      ticket?: boolean | user$ticketArgs<ExtArgs>;
      winner?: boolean | user$winnerArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | user$companyArgs<ExtArgs>;
    ticket?: boolean | user$ticketArgs<ExtArgs>;
    winner?: boolean | user$winnerArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>[];
      ticket: Prisma.$ticketPayload<ExtArgs>[];
      winner: Prisma.$winnerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    ticket<T extends user$ticketArgs<ExtArgs> = {}>(
      args?: Subset<T, user$ticketArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'findMany'> | Null>;

    winner<T extends user$winnerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$winnerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$winnerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user.ticket
   */
  export type user$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    where?: ticketWhereInput;
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[];
    cursor?: ticketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[];
  };

  /**
   * user.winner
   */
  export type user$winnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the winner
     */
    select?: winnerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: winnerInclude<ExtArgs> | null;
    where?: winnerWhereInput;
    orderBy?: winnerOrderByWithRelationInput | winnerOrderByWithRelationInput[];
    cursor?: winnerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Model winner
   */

  export type AggregateWinner = {
    _count: WinnerCountAggregateOutputType | null;
    _avg: WinnerAvgAggregateOutputType | null;
    _sum: WinnerSumAggregateOutputType | null;
    _min: WinnerMinAggregateOutputType | null;
    _max: WinnerMaxAggregateOutputType | null;
  };

  export type WinnerAvgAggregateOutputType = {
    winning_amount: number | null;
  };

  export type WinnerSumAggregateOutputType = {
    winning_amount: number | null;
  };

  export type WinnerMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    game_id: string | null;
    winning_amount: number | null;
    winning_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type WinnerMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    game_id: string | null;
    winning_amount: number | null;
    winning_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type WinnerCountAggregateOutputType = {
    id: number;
    user_id: number;
    game_id: number;
    winning_amount: number;
    winning_date: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type WinnerAvgAggregateInputType = {
    winning_amount?: true;
  };

  export type WinnerSumAggregateInputType = {
    winning_amount?: true;
  };

  export type WinnerMinAggregateInputType = {
    id?: true;
    user_id?: true;
    game_id?: true;
    winning_amount?: true;
    winning_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type WinnerMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    game_id?: true;
    winning_amount?: true;
    winning_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type WinnerCountAggregateInputType = {
    id?: true;
    user_id?: true;
    game_id?: true;
    winning_amount?: true;
    winning_date?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type WinnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which winner to aggregate.
     */
    where?: winnerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of winners to fetch.
     */
    orderBy?: winnerOrderByWithRelationInput | winnerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: winnerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` winners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` winners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned winners
     **/
    _count?: true | WinnerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: WinnerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: WinnerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: WinnerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: WinnerMaxAggregateInputType;
  };

  export type GetWinnerAggregateType<T extends WinnerAggregateArgs> = {
    [P in keyof T & keyof AggregateWinner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWinner[P]>
      : GetScalarType<T[P], AggregateWinner[P]>;
  };

  export type winnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: winnerWhereInput;
    orderBy?: winnerOrderByWithAggregationInput | winnerOrderByWithAggregationInput[];
    by: WinnerScalarFieldEnum[] | WinnerScalarFieldEnum;
    having?: winnerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WinnerCountAggregateInputType | true;
    _avg?: WinnerAvgAggregateInputType;
    _sum?: WinnerSumAggregateInputType;
    _min?: WinnerMinAggregateInputType;
    _max?: WinnerMaxAggregateInputType;
  };

  export type WinnerGroupByOutputType = {
    id: string;
    user_id: string;
    game_id: string;
    winning_amount: number;
    winning_date: Date;
    created_at: Date;
    updated_at: Date;
    _count: WinnerCountAggregateOutputType | null;
    _avg: WinnerAvgAggregateOutputType | null;
    _sum: WinnerSumAggregateOutputType | null;
    _min: WinnerMinAggregateOutputType | null;
    _max: WinnerMaxAggregateOutputType | null;
  };

  type GetWinnerGroupByPayload<T extends winnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WinnerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof WinnerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], WinnerGroupByOutputType[P]>
          : GetScalarType<T[P], WinnerGroupByOutputType[P]>;
      }
    >
  >;

  export type winnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      game_id?: boolean;
      winning_amount?: boolean;
      winning_date?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      lottery_game?: boolean | lottery_gameDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['winner']
  >;

  export type winnerSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    game_id?: boolean;
    winning_amount?: boolean;
    winning_date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type winnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lottery_game?: boolean | lottery_gameDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $winnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'winner';
    objects: {
      lottery_game: Prisma.$lottery_gamePayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        game_id: string;
        winning_amount: number;
        winning_date: Date;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['winner']
    >;
    composites: {};
  };

  type winnerGetPayload<S extends boolean | null | undefined | winnerDefaultArgs> = $Result.GetResult<
    Prisma.$winnerPayload,
    S
  >;

  type winnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    winnerFindManyArgs,
    'select' | 'include'
  > & {
    select?: WinnerCountAggregateInputType | true;
  };

  export interface winnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['winner']; meta: { name: 'winner' } };
    /**
     * Find zero or one Winner that matches the filter.
     * @param {winnerFindUniqueArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends winnerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, winnerFindUniqueArgs<ExtArgs>>,
    ): Prisma__winnerClient<$Result.GetResult<Prisma.$winnerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Winner that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {winnerFindUniqueOrThrowArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends winnerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, winnerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__winnerClient<$Result.GetResult<Prisma.$winnerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Winner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {winnerFindFirstArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends winnerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, winnerFindFirstArgs<ExtArgs>>,
    ): Prisma__winnerClient<$Result.GetResult<Prisma.$winnerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Winner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {winnerFindFirstOrThrowArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends winnerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, winnerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__winnerClient<$Result.GetResult<Prisma.$winnerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Winners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {winnerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Winners
     * const winners = await prisma.winner.findMany()
     *
     * // Get first 10 Winners
     * const winners = await prisma.winner.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const winnerWithIdOnly = await prisma.winner.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends winnerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, winnerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$winnerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Winner.
     * @param {winnerCreateArgs} args - Arguments to create a Winner.
     * @example
     * // Create one Winner
     * const Winner = await prisma.winner.create({
     *   data: {
     *     // ... data to create a Winner
     *   }
     * })
     *
     **/
    create<T extends winnerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, winnerCreateArgs<ExtArgs>>,
    ): Prisma__winnerClient<$Result.GetResult<Prisma.$winnerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Winners.
     *     @param {winnerCreateManyArgs} args - Arguments to create many Winners.
     *     @example
     *     // Create many Winners
     *     const winner = await prisma.winner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends winnerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, winnerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Winner.
     * @param {winnerDeleteArgs} args - Arguments to delete one Winner.
     * @example
     * // Delete one Winner
     * const Winner = await prisma.winner.delete({
     *   where: {
     *     // ... filter to delete one Winner
     *   }
     * })
     *
     **/
    delete<T extends winnerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, winnerDeleteArgs<ExtArgs>>,
    ): Prisma__winnerClient<$Result.GetResult<Prisma.$winnerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Winner.
     * @param {winnerUpdateArgs} args - Arguments to update one Winner.
     * @example
     * // Update one Winner
     * const winner = await prisma.winner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends winnerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, winnerUpdateArgs<ExtArgs>>,
    ): Prisma__winnerClient<$Result.GetResult<Prisma.$winnerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Winners.
     * @param {winnerDeleteManyArgs} args - Arguments to filter Winners to delete.
     * @example
     * // Delete a few Winners
     * const { count } = await prisma.winner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends winnerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, winnerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Winners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {winnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Winners
     * const winner = await prisma.winner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends winnerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, winnerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Winner.
     * @param {winnerUpsertArgs} args - Arguments to update or create a Winner.
     * @example
     * // Update or create a Winner
     * const winner = await prisma.winner.upsert({
     *   create: {
     *     // ... data to create a Winner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Winner we want to update
     *   }
     * })
     **/
    upsert<T extends winnerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, winnerUpsertArgs<ExtArgs>>,
    ): Prisma__winnerClient<$Result.GetResult<Prisma.$winnerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Winners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {winnerCountArgs} args - Arguments to filter Winners to count.
     * @example
     * // Count the number of Winners
     * const count = await prisma.winner.count({
     *   where: {
     *     // ... the filter for the Winners we want to count
     *   }
     * })
     **/
    count<T extends winnerCountArgs>(
      args?: Subset<T, winnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WinnerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Winner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends WinnerAggregateArgs>(
      args: Subset<T, WinnerAggregateArgs>,
    ): Prisma.PrismaPromise<GetWinnerAggregateType<T>>;

    /**
     * Group by Winner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {winnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends winnerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: winnerGroupByArgs['orderBy'] }
        : { orderBy?: winnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, winnerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetWinnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the winner model
     */
    readonly fields: winnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for winner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__winnerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    lottery_game<T extends lottery_gameDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, lottery_gameDefaultArgs<ExtArgs>>,
    ): Prisma__lottery_gameClient<
      $Result.GetResult<Prisma.$lottery_gamePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the winner model
   */
  interface winnerFieldRefs {
    readonly id: FieldRef<'winner', 'String'>;
    readonly user_id: FieldRef<'winner', 'String'>;
    readonly game_id: FieldRef<'winner', 'String'>;
    readonly winning_amount: FieldRef<'winner', 'Int'>;
    readonly winning_date: FieldRef<'winner', 'DateTime'>;
    readonly created_at: FieldRef<'winner', 'DateTime'>;
    readonly updated_at: FieldRef<'winner', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * winner findUnique
   */
  export type winnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the winner
     */
    select?: winnerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: winnerInclude<ExtArgs> | null;
    /**
     * Filter, which winner to fetch.
     */
    where: winnerWhereUniqueInput;
  };

  /**
   * winner findUniqueOrThrow
   */
  export type winnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the winner
     */
    select?: winnerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: winnerInclude<ExtArgs> | null;
    /**
     * Filter, which winner to fetch.
     */
    where: winnerWhereUniqueInput;
  };

  /**
   * winner findFirst
   */
  export type winnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the winner
     */
    select?: winnerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: winnerInclude<ExtArgs> | null;
    /**
     * Filter, which winner to fetch.
     */
    where?: winnerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of winners to fetch.
     */
    orderBy?: winnerOrderByWithRelationInput | winnerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for winners.
     */
    cursor?: winnerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` winners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` winners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of winners.
     */
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[];
  };

  /**
   * winner findFirstOrThrow
   */
  export type winnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the winner
     */
    select?: winnerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: winnerInclude<ExtArgs> | null;
    /**
     * Filter, which winner to fetch.
     */
    where?: winnerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of winners to fetch.
     */
    orderBy?: winnerOrderByWithRelationInput | winnerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for winners.
     */
    cursor?: winnerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` winners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` winners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of winners.
     */
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[];
  };

  /**
   * winner findMany
   */
  export type winnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the winner
     */
    select?: winnerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: winnerInclude<ExtArgs> | null;
    /**
     * Filter, which winners to fetch.
     */
    where?: winnerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of winners to fetch.
     */
    orderBy?: winnerOrderByWithRelationInput | winnerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing winners.
     */
    cursor?: winnerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` winners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` winners.
     */
    skip?: number;
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[];
  };

  /**
   * winner create
   */
  export type winnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the winner
     */
    select?: winnerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: winnerInclude<ExtArgs> | null;
    /**
     * The data needed to create a winner.
     */
    data: XOR<winnerCreateInput, winnerUncheckedCreateInput>;
  };

  /**
   * winner createMany
   */
  export type winnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many winners.
     */
    data: winnerCreateManyInput | winnerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * winner update
   */
  export type winnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the winner
     */
    select?: winnerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: winnerInclude<ExtArgs> | null;
    /**
     * The data needed to update a winner.
     */
    data: XOR<winnerUpdateInput, winnerUncheckedUpdateInput>;
    /**
     * Choose, which winner to update.
     */
    where: winnerWhereUniqueInput;
  };

  /**
   * winner updateMany
   */
  export type winnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update winners.
     */
    data: XOR<winnerUpdateManyMutationInput, winnerUncheckedUpdateManyInput>;
    /**
     * Filter which winners to update
     */
    where?: winnerWhereInput;
  };

  /**
   * winner upsert
   */
  export type winnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the winner
     */
    select?: winnerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: winnerInclude<ExtArgs> | null;
    /**
     * The filter to search for the winner to update in case it exists.
     */
    where: winnerWhereUniqueInput;
    /**
     * In case the winner found by the `where` argument doesn't exist, create a new winner with this data.
     */
    create: XOR<winnerCreateInput, winnerUncheckedCreateInput>;
    /**
     * In case the winner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<winnerUpdateInput, winnerUncheckedUpdateInput>;
  };

  /**
   * winner delete
   */
  export type winnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the winner
     */
    select?: winnerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: winnerInclude<ExtArgs> | null;
    /**
     * Filter which winner to delete.
     */
    where: winnerWhereUniqueInput;
  };

  /**
   * winner deleteMany
   */
  export type winnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which winners to delete
     */
    where?: winnerWhereInput;
  };

  /**
   * winner without action
   */
  export type winnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the winner
     */
    select?: winnerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: winnerInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const Lottery_gameScalarFieldEnum: {
    id: 'id';
    name: 'name';
    prize_amount: 'prize_amount';
    draw_date: 'draw_date';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Lottery_gameScalarFieldEnum =
    (typeof Lottery_gameScalarFieldEnum)[keyof typeof Lottery_gameScalarFieldEnum];

  export const Team_memberScalarFieldEnum: {
    id: 'id';
    name: 'name';
    role: 'role';
    company_id: 'company_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Team_memberScalarFieldEnum = (typeof Team_memberScalarFieldEnum)[keyof typeof Team_memberScalarFieldEnum];

  export const TicketScalarFieldEnum: {
    id: 'id';
    number: 'number';
    purchase_date: 'purchase_date';
    user_id: 'user_id';
    game_id: 'game_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const WinnerScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    game_id: 'game_id';
    winning_amount: 'winning_amount';
    winning_date: 'winning_date';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type WinnerScalarFieldEnum = (typeof WinnerScalarFieldEnum)[keyof typeof WinnerScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    team_member?: Team_memberListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    team_member?: team_memberOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      team_member?: Team_memberListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type lottery_gameWhereInput = {
    AND?: lottery_gameWhereInput | lottery_gameWhereInput[];
    OR?: lottery_gameWhereInput[];
    NOT?: lottery_gameWhereInput | lottery_gameWhereInput[];
    id?: UuidFilter<'lottery_game'> | string;
    name?: StringFilter<'lottery_game'> | string;
    prize_amount?: IntFilter<'lottery_game'> | number;
    draw_date?: DateTimeFilter<'lottery_game'> | Date | string;
    created_at?: DateTimeFilter<'lottery_game'> | Date | string;
    updated_at?: DateTimeFilter<'lottery_game'> | Date | string;
    ticket?: TicketListRelationFilter;
    winner?: WinnerListRelationFilter;
  };

  export type lottery_gameOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    prize_amount?: SortOrder;
    draw_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    ticket?: ticketOrderByRelationAggregateInput;
    winner?: winnerOrderByRelationAggregateInput;
  };

  export type lottery_gameWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: lottery_gameWhereInput | lottery_gameWhereInput[];
      OR?: lottery_gameWhereInput[];
      NOT?: lottery_gameWhereInput | lottery_gameWhereInput[];
      name?: StringFilter<'lottery_game'> | string;
      prize_amount?: IntFilter<'lottery_game'> | number;
      draw_date?: DateTimeFilter<'lottery_game'> | Date | string;
      created_at?: DateTimeFilter<'lottery_game'> | Date | string;
      updated_at?: DateTimeFilter<'lottery_game'> | Date | string;
      ticket?: TicketListRelationFilter;
      winner?: WinnerListRelationFilter;
    },
    'id'
  >;

  export type lottery_gameOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    prize_amount?: SortOrder;
    draw_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: lottery_gameCountOrderByAggregateInput;
    _avg?: lottery_gameAvgOrderByAggregateInput;
    _max?: lottery_gameMaxOrderByAggregateInput;
    _min?: lottery_gameMinOrderByAggregateInput;
    _sum?: lottery_gameSumOrderByAggregateInput;
  };

  export type lottery_gameScalarWhereWithAggregatesInput = {
    AND?: lottery_gameScalarWhereWithAggregatesInput | lottery_gameScalarWhereWithAggregatesInput[];
    OR?: lottery_gameScalarWhereWithAggregatesInput[];
    NOT?: lottery_gameScalarWhereWithAggregatesInput | lottery_gameScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'lottery_game'> | string;
    name?: StringWithAggregatesFilter<'lottery_game'> | string;
    prize_amount?: IntWithAggregatesFilter<'lottery_game'> | number;
    draw_date?: DateTimeWithAggregatesFilter<'lottery_game'> | Date | string;
    created_at?: DateTimeWithAggregatesFilter<'lottery_game'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'lottery_game'> | Date | string;
  };

  export type team_memberWhereInput = {
    AND?: team_memberWhereInput | team_memberWhereInput[];
    OR?: team_memberWhereInput[];
    NOT?: team_memberWhereInput | team_memberWhereInput[];
    id?: UuidFilter<'team_member'> | string;
    name?: StringFilter<'team_member'> | string;
    role?: StringFilter<'team_member'> | string;
    company_id?: UuidFilter<'team_member'> | string;
    created_at?: DateTimeFilter<'team_member'> | Date | string;
    updated_at?: DateTimeFilter<'team_member'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
  };

  export type team_memberOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    role?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
  };

  export type team_memberWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: team_memberWhereInput | team_memberWhereInput[];
      OR?: team_memberWhereInput[];
      NOT?: team_memberWhereInput | team_memberWhereInput[];
      name?: StringFilter<'team_member'> | string;
      role?: StringFilter<'team_member'> | string;
      company_id?: UuidFilter<'team_member'> | string;
      created_at?: DateTimeFilter<'team_member'> | Date | string;
      updated_at?: DateTimeFilter<'team_member'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
    },
    'id'
  >;

  export type team_memberOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    role?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: team_memberCountOrderByAggregateInput;
    _max?: team_memberMaxOrderByAggregateInput;
    _min?: team_memberMinOrderByAggregateInput;
  };

  export type team_memberScalarWhereWithAggregatesInput = {
    AND?: team_memberScalarWhereWithAggregatesInput | team_memberScalarWhereWithAggregatesInput[];
    OR?: team_memberScalarWhereWithAggregatesInput[];
    NOT?: team_memberScalarWhereWithAggregatesInput | team_memberScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'team_member'> | string;
    name?: StringWithAggregatesFilter<'team_member'> | string;
    role?: StringWithAggregatesFilter<'team_member'> | string;
    company_id?: UuidWithAggregatesFilter<'team_member'> | string;
    created_at?: DateTimeWithAggregatesFilter<'team_member'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'team_member'> | Date | string;
  };

  export type ticketWhereInput = {
    AND?: ticketWhereInput | ticketWhereInput[];
    OR?: ticketWhereInput[];
    NOT?: ticketWhereInput | ticketWhereInput[];
    id?: UuidFilter<'ticket'> | string;
    number?: StringFilter<'ticket'> | string;
    purchase_date?: DateTimeFilter<'ticket'> | Date | string;
    user_id?: UuidFilter<'ticket'> | string;
    game_id?: UuidFilter<'ticket'> | string;
    created_at?: DateTimeFilter<'ticket'> | Date | string;
    updated_at?: DateTimeFilter<'ticket'> | Date | string;
    lottery_game?: XOR<Lottery_gameRelationFilter, lottery_gameWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type ticketOrderByWithRelationInput = {
    id?: SortOrder;
    number?: SortOrder;
    purchase_date?: SortOrder;
    user_id?: SortOrder;
    game_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    lottery_game?: lottery_gameOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type ticketWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ticketWhereInput | ticketWhereInput[];
      OR?: ticketWhereInput[];
      NOT?: ticketWhereInput | ticketWhereInput[];
      number?: StringFilter<'ticket'> | string;
      purchase_date?: DateTimeFilter<'ticket'> | Date | string;
      user_id?: UuidFilter<'ticket'> | string;
      game_id?: UuidFilter<'ticket'> | string;
      created_at?: DateTimeFilter<'ticket'> | Date | string;
      updated_at?: DateTimeFilter<'ticket'> | Date | string;
      lottery_game?: XOR<Lottery_gameRelationFilter, lottery_gameWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type ticketOrderByWithAggregationInput = {
    id?: SortOrder;
    number?: SortOrder;
    purchase_date?: SortOrder;
    user_id?: SortOrder;
    game_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: ticketCountOrderByAggregateInput;
    _max?: ticketMaxOrderByAggregateInput;
    _min?: ticketMinOrderByAggregateInput;
  };

  export type ticketScalarWhereWithAggregatesInput = {
    AND?: ticketScalarWhereWithAggregatesInput | ticketScalarWhereWithAggregatesInput[];
    OR?: ticketScalarWhereWithAggregatesInput[];
    NOT?: ticketScalarWhereWithAggregatesInput | ticketScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'ticket'> | string;
    number?: StringWithAggregatesFilter<'ticket'> | string;
    purchase_date?: DateTimeWithAggregatesFilter<'ticket'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'ticket'> | string;
    game_id?: UuidWithAggregatesFilter<'ticket'> | string;
    created_at?: DateTimeWithAggregatesFilter<'ticket'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'ticket'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    company?: CompanyListRelationFilter;
    ticket?: TicketListRelationFilter;
    winner?: WinnerListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByRelationAggregateInput;
    ticket?: ticketOrderByRelationAggregateInput;
    winner?: winnerOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      company?: CompanyListRelationFilter;
      ticket?: TicketListRelationFilter;
      winner?: WinnerListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type winnerWhereInput = {
    AND?: winnerWhereInput | winnerWhereInput[];
    OR?: winnerWhereInput[];
    NOT?: winnerWhereInput | winnerWhereInput[];
    id?: UuidFilter<'winner'> | string;
    user_id?: UuidFilter<'winner'> | string;
    game_id?: UuidFilter<'winner'> | string;
    winning_amount?: IntFilter<'winner'> | number;
    winning_date?: DateTimeFilter<'winner'> | Date | string;
    created_at?: DateTimeFilter<'winner'> | Date | string;
    updated_at?: DateTimeFilter<'winner'> | Date | string;
    lottery_game?: XOR<Lottery_gameRelationFilter, lottery_gameWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type winnerOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    game_id?: SortOrder;
    winning_amount?: SortOrder;
    winning_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    lottery_game?: lottery_gameOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type winnerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: winnerWhereInput | winnerWhereInput[];
      OR?: winnerWhereInput[];
      NOT?: winnerWhereInput | winnerWhereInput[];
      user_id?: UuidFilter<'winner'> | string;
      game_id?: UuidFilter<'winner'> | string;
      winning_amount?: IntFilter<'winner'> | number;
      winning_date?: DateTimeFilter<'winner'> | Date | string;
      created_at?: DateTimeFilter<'winner'> | Date | string;
      updated_at?: DateTimeFilter<'winner'> | Date | string;
      lottery_game?: XOR<Lottery_gameRelationFilter, lottery_gameWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type winnerOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    game_id?: SortOrder;
    winning_amount?: SortOrder;
    winning_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: winnerCountOrderByAggregateInput;
    _avg?: winnerAvgOrderByAggregateInput;
    _max?: winnerMaxOrderByAggregateInput;
    _min?: winnerMinOrderByAggregateInput;
    _sum?: winnerSumOrderByAggregateInput;
  };

  export type winnerScalarWhereWithAggregatesInput = {
    AND?: winnerScalarWhereWithAggregatesInput | winnerScalarWhereWithAggregatesInput[];
    OR?: winnerScalarWhereWithAggregatesInput[];
    NOT?: winnerScalarWhereWithAggregatesInput | winnerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'winner'> | string;
    user_id?: UuidWithAggregatesFilter<'winner'> | string;
    game_id?: UuidWithAggregatesFilter<'winner'> | string;
    winning_amount?: IntWithAggregatesFilter<'winner'> | number;
    winning_date?: DateTimeWithAggregatesFilter<'winner'> | Date | string;
    created_at?: DateTimeWithAggregatesFilter<'winner'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'winner'> | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    team_member?: team_memberCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    team_member?: team_memberUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    team_member?: team_memberUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    team_member?: team_memberUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type lottery_gameCreateInput = {
    id?: string;
    name: string;
    prize_amount: number;
    draw_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    ticket?: ticketCreateNestedManyWithoutLottery_gameInput;
    winner?: winnerCreateNestedManyWithoutLottery_gameInput;
  };

  export type lottery_gameUncheckedCreateInput = {
    id?: string;
    name: string;
    prize_amount: number;
    draw_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    ticket?: ticketUncheckedCreateNestedManyWithoutLottery_gameInput;
    winner?: winnerUncheckedCreateNestedManyWithoutLottery_gameInput;
  };

  export type lottery_gameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    prize_amount?: IntFieldUpdateOperationsInput | number;
    draw_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    ticket?: ticketUpdateManyWithoutLottery_gameNestedInput;
    winner?: winnerUpdateManyWithoutLottery_gameNestedInput;
  };

  export type lottery_gameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    prize_amount?: IntFieldUpdateOperationsInput | number;
    draw_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    ticket?: ticketUncheckedUpdateManyWithoutLottery_gameNestedInput;
    winner?: winnerUncheckedUpdateManyWithoutLottery_gameNestedInput;
  };

  export type lottery_gameCreateManyInput = {
    id?: string;
    name: string;
    prize_amount: number;
    draw_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type lottery_gameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    prize_amount?: IntFieldUpdateOperationsInput | number;
    draw_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type lottery_gameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    prize_amount?: IntFieldUpdateOperationsInput | number;
    draw_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberCreateInput = {
    id?: string;
    name: string;
    role: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutTeam_memberInput;
  };

  export type team_memberUncheckedCreateInput = {
    id?: string;
    name: string;
    role: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutTeam_memberNestedInput;
  };

  export type team_memberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberCreateManyInput = {
    id?: string;
    name: string;
    role: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ticketCreateInput = {
    id?: string;
    number: string;
    purchase_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    lottery_game: lottery_gameCreateNestedOneWithoutTicketInput;
    user: userCreateNestedOneWithoutTicketInput;
  };

  export type ticketUncheckedCreateInput = {
    id?: string;
    number: string;
    purchase_date: Date | string;
    user_id: string;
    game_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ticketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    number?: StringFieldUpdateOperationsInput | string;
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    lottery_game?: lottery_gameUpdateOneRequiredWithoutTicketNestedInput;
    user?: userUpdateOneRequiredWithoutTicketNestedInput;
  };

  export type ticketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    number?: StringFieldUpdateOperationsInput | string;
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    game_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ticketCreateManyInput = {
    id?: string;
    number: string;
    purchase_date: Date | string;
    user_id: string;
    game_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ticketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    number?: StringFieldUpdateOperationsInput | string;
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ticketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    number?: StringFieldUpdateOperationsInput | string;
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    game_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    ticket?: ticketCreateNestedManyWithoutUserInput;
    winner?: winnerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    ticket?: ticketUncheckedCreateNestedManyWithoutUserInput;
    winner?: winnerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    ticket?: ticketUpdateManyWithoutUserNestedInput;
    winner?: winnerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    ticket?: ticketUncheckedUpdateManyWithoutUserNestedInput;
    winner?: winnerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type winnerCreateInput = {
    id?: string;
    winning_amount: number;
    winning_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    lottery_game: lottery_gameCreateNestedOneWithoutWinnerInput;
    user: userCreateNestedOneWithoutWinnerInput;
  };

  export type winnerUncheckedCreateInput = {
    id?: string;
    user_id: string;
    game_id: string;
    winning_amount: number;
    winning_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type winnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    winning_amount?: IntFieldUpdateOperationsInput | number;
    winning_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    lottery_game?: lottery_gameUpdateOneRequiredWithoutWinnerNestedInput;
    user?: userUpdateOneRequiredWithoutWinnerNestedInput;
  };

  export type winnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    game_id?: StringFieldUpdateOperationsInput | string;
    winning_amount?: IntFieldUpdateOperationsInput | number;
    winning_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type winnerCreateManyInput = {
    id?: string;
    user_id: string;
    game_id: string;
    winning_amount: number;
    winning_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type winnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    winning_amount?: IntFieldUpdateOperationsInput | number;
    winning_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type winnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    game_id?: StringFieldUpdateOperationsInput | string;
    winning_amount?: IntFieldUpdateOperationsInput | number;
    winning_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type Team_memberListRelationFilter = {
    every?: team_memberWhereInput;
    some?: team_memberWhereInput;
    none?: team_memberWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type team_memberOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type TicketListRelationFilter = {
    every?: ticketWhereInput;
    some?: ticketWhereInput;
    none?: ticketWhereInput;
  };

  export type WinnerListRelationFilter = {
    every?: winnerWhereInput;
    some?: winnerWhereInput;
    none?: winnerWhereInput;
  };

  export type ticketOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type winnerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type lottery_gameCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    prize_amount?: SortOrder;
    draw_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type lottery_gameAvgOrderByAggregateInput = {
    prize_amount?: SortOrder;
  };

  export type lottery_gameMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    prize_amount?: SortOrder;
    draw_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type lottery_gameMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    prize_amount?: SortOrder;
    draw_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type lottery_gameSumOrderByAggregateInput = {
    prize_amount?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type team_memberCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    role?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type team_memberMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    role?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type team_memberMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    role?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type Lottery_gameRelationFilter = {
    is?: lottery_gameWhereInput;
    isNot?: lottery_gameWhereInput;
  };

  export type ticketCountOrderByAggregateInput = {
    id?: SortOrder;
    number?: SortOrder;
    purchase_date?: SortOrder;
    user_id?: SortOrder;
    game_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ticketMaxOrderByAggregateInput = {
    id?: SortOrder;
    number?: SortOrder;
    purchase_date?: SortOrder;
    user_id?: SortOrder;
    game_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ticketMinOrderByAggregateInput = {
    id?: SortOrder;
    number?: SortOrder;
    purchase_date?: SortOrder;
    user_id?: SortOrder;
    game_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type winnerCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    game_id?: SortOrder;
    winning_amount?: SortOrder;
    winning_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type winnerAvgOrderByAggregateInput = {
    winning_amount?: SortOrder;
  };

  export type winnerMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    game_id?: SortOrder;
    winning_amount?: SortOrder;
    winning_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type winnerMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    game_id?: SortOrder;
    winning_amount?: SortOrder;
    winning_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type winnerSumOrderByAggregateInput = {
    winning_amount?: SortOrder;
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type team_memberCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<team_memberCreateWithoutCompanyInput, team_memberUncheckedCreateWithoutCompanyInput>
      | team_memberCreateWithoutCompanyInput[]
      | team_memberUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutCompanyInput | team_memberCreateOrConnectWithoutCompanyInput[];
    createMany?: team_memberCreateManyCompanyInputEnvelope;
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
  };

  export type team_memberUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<team_memberCreateWithoutCompanyInput, team_memberUncheckedCreateWithoutCompanyInput>
      | team_memberCreateWithoutCompanyInput[]
      | team_memberUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutCompanyInput | team_memberCreateOrConnectWithoutCompanyInput[];
    createMany?: team_memberCreateManyCompanyInputEnvelope;
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type team_memberUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<team_memberCreateWithoutCompanyInput, team_memberUncheckedCreateWithoutCompanyInput>
      | team_memberCreateWithoutCompanyInput[]
      | team_memberUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutCompanyInput | team_memberCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | team_memberUpsertWithWhereUniqueWithoutCompanyInput
      | team_memberUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: team_memberCreateManyCompanyInputEnvelope;
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    update?:
      | team_memberUpdateWithWhereUniqueWithoutCompanyInput
      | team_memberUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | team_memberUpdateManyWithWhereWithoutCompanyInput
      | team_memberUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
  };

  export type team_memberUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<team_memberCreateWithoutCompanyInput, team_memberUncheckedCreateWithoutCompanyInput>
      | team_memberCreateWithoutCompanyInput[]
      | team_memberUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutCompanyInput | team_memberCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | team_memberUpsertWithWhereUniqueWithoutCompanyInput
      | team_memberUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: team_memberCreateManyCompanyInputEnvelope;
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    update?:
      | team_memberUpdateWithWhereUniqueWithoutCompanyInput
      | team_memberUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | team_memberUpdateManyWithWhereWithoutCompanyInput
      | team_memberUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
  };

  export type ticketCreateNestedManyWithoutLottery_gameInput = {
    create?:
      | XOR<ticketCreateWithoutLottery_gameInput, ticketUncheckedCreateWithoutLottery_gameInput>
      | ticketCreateWithoutLottery_gameInput[]
      | ticketUncheckedCreateWithoutLottery_gameInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutLottery_gameInput | ticketCreateOrConnectWithoutLottery_gameInput[];
    createMany?: ticketCreateManyLottery_gameInputEnvelope;
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
  };

  export type winnerCreateNestedManyWithoutLottery_gameInput = {
    create?:
      | XOR<winnerCreateWithoutLottery_gameInput, winnerUncheckedCreateWithoutLottery_gameInput>
      | winnerCreateWithoutLottery_gameInput[]
      | winnerUncheckedCreateWithoutLottery_gameInput[];
    connectOrCreate?: winnerCreateOrConnectWithoutLottery_gameInput | winnerCreateOrConnectWithoutLottery_gameInput[];
    createMany?: winnerCreateManyLottery_gameInputEnvelope;
    connect?: winnerWhereUniqueInput | winnerWhereUniqueInput[];
  };

  export type ticketUncheckedCreateNestedManyWithoutLottery_gameInput = {
    create?:
      | XOR<ticketCreateWithoutLottery_gameInput, ticketUncheckedCreateWithoutLottery_gameInput>
      | ticketCreateWithoutLottery_gameInput[]
      | ticketUncheckedCreateWithoutLottery_gameInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutLottery_gameInput | ticketCreateOrConnectWithoutLottery_gameInput[];
    createMany?: ticketCreateManyLottery_gameInputEnvelope;
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
  };

  export type winnerUncheckedCreateNestedManyWithoutLottery_gameInput = {
    create?:
      | XOR<winnerCreateWithoutLottery_gameInput, winnerUncheckedCreateWithoutLottery_gameInput>
      | winnerCreateWithoutLottery_gameInput[]
      | winnerUncheckedCreateWithoutLottery_gameInput[];
    connectOrCreate?: winnerCreateOrConnectWithoutLottery_gameInput | winnerCreateOrConnectWithoutLottery_gameInput[];
    createMany?: winnerCreateManyLottery_gameInputEnvelope;
    connect?: winnerWhereUniqueInput | winnerWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type ticketUpdateManyWithoutLottery_gameNestedInput = {
    create?:
      | XOR<ticketCreateWithoutLottery_gameInput, ticketUncheckedCreateWithoutLottery_gameInput>
      | ticketCreateWithoutLottery_gameInput[]
      | ticketUncheckedCreateWithoutLottery_gameInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutLottery_gameInput | ticketCreateOrConnectWithoutLottery_gameInput[];
    upsert?:
      | ticketUpsertWithWhereUniqueWithoutLottery_gameInput
      | ticketUpsertWithWhereUniqueWithoutLottery_gameInput[];
    createMany?: ticketCreateManyLottery_gameInputEnvelope;
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    update?:
      | ticketUpdateWithWhereUniqueWithoutLottery_gameInput
      | ticketUpdateWithWhereUniqueWithoutLottery_gameInput[];
    updateMany?:
      | ticketUpdateManyWithWhereWithoutLottery_gameInput
      | ticketUpdateManyWithWhereWithoutLottery_gameInput[];
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[];
  };

  export type winnerUpdateManyWithoutLottery_gameNestedInput = {
    create?:
      | XOR<winnerCreateWithoutLottery_gameInput, winnerUncheckedCreateWithoutLottery_gameInput>
      | winnerCreateWithoutLottery_gameInput[]
      | winnerUncheckedCreateWithoutLottery_gameInput[];
    connectOrCreate?: winnerCreateOrConnectWithoutLottery_gameInput | winnerCreateOrConnectWithoutLottery_gameInput[];
    upsert?:
      | winnerUpsertWithWhereUniqueWithoutLottery_gameInput
      | winnerUpsertWithWhereUniqueWithoutLottery_gameInput[];
    createMany?: winnerCreateManyLottery_gameInputEnvelope;
    set?: winnerWhereUniqueInput | winnerWhereUniqueInput[];
    disconnect?: winnerWhereUniqueInput | winnerWhereUniqueInput[];
    delete?: winnerWhereUniqueInput | winnerWhereUniqueInput[];
    connect?: winnerWhereUniqueInput | winnerWhereUniqueInput[];
    update?:
      | winnerUpdateWithWhereUniqueWithoutLottery_gameInput
      | winnerUpdateWithWhereUniqueWithoutLottery_gameInput[];
    updateMany?:
      | winnerUpdateManyWithWhereWithoutLottery_gameInput
      | winnerUpdateManyWithWhereWithoutLottery_gameInput[];
    deleteMany?: winnerScalarWhereInput | winnerScalarWhereInput[];
  };

  export type ticketUncheckedUpdateManyWithoutLottery_gameNestedInput = {
    create?:
      | XOR<ticketCreateWithoutLottery_gameInput, ticketUncheckedCreateWithoutLottery_gameInput>
      | ticketCreateWithoutLottery_gameInput[]
      | ticketUncheckedCreateWithoutLottery_gameInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutLottery_gameInput | ticketCreateOrConnectWithoutLottery_gameInput[];
    upsert?:
      | ticketUpsertWithWhereUniqueWithoutLottery_gameInput
      | ticketUpsertWithWhereUniqueWithoutLottery_gameInput[];
    createMany?: ticketCreateManyLottery_gameInputEnvelope;
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    update?:
      | ticketUpdateWithWhereUniqueWithoutLottery_gameInput
      | ticketUpdateWithWhereUniqueWithoutLottery_gameInput[];
    updateMany?:
      | ticketUpdateManyWithWhereWithoutLottery_gameInput
      | ticketUpdateManyWithWhereWithoutLottery_gameInput[];
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[];
  };

  export type winnerUncheckedUpdateManyWithoutLottery_gameNestedInput = {
    create?:
      | XOR<winnerCreateWithoutLottery_gameInput, winnerUncheckedCreateWithoutLottery_gameInput>
      | winnerCreateWithoutLottery_gameInput[]
      | winnerUncheckedCreateWithoutLottery_gameInput[];
    connectOrCreate?: winnerCreateOrConnectWithoutLottery_gameInput | winnerCreateOrConnectWithoutLottery_gameInput[];
    upsert?:
      | winnerUpsertWithWhereUniqueWithoutLottery_gameInput
      | winnerUpsertWithWhereUniqueWithoutLottery_gameInput[];
    createMany?: winnerCreateManyLottery_gameInputEnvelope;
    set?: winnerWhereUniqueInput | winnerWhereUniqueInput[];
    disconnect?: winnerWhereUniqueInput | winnerWhereUniqueInput[];
    delete?: winnerWhereUniqueInput | winnerWhereUniqueInput[];
    connect?: winnerWhereUniqueInput | winnerWhereUniqueInput[];
    update?:
      | winnerUpdateWithWhereUniqueWithoutLottery_gameInput
      | winnerUpdateWithWhereUniqueWithoutLottery_gameInput[];
    updateMany?:
      | winnerUpdateManyWithWhereWithoutLottery_gameInput
      | winnerUpdateManyWithWhereWithoutLottery_gameInput[];
    deleteMany?: winnerScalarWhereInput | winnerScalarWhereInput[];
  };

  export type companyCreateNestedOneWithoutTeam_memberInput = {
    create?: XOR<companyCreateWithoutTeam_memberInput, companyUncheckedCreateWithoutTeam_memberInput>;
    connectOrCreate?: companyCreateOrConnectWithoutTeam_memberInput;
    connect?: companyWhereUniqueInput;
  };

  export type companyUpdateOneRequiredWithoutTeam_memberNestedInput = {
    create?: XOR<companyCreateWithoutTeam_memberInput, companyUncheckedCreateWithoutTeam_memberInput>;
    connectOrCreate?: companyCreateOrConnectWithoutTeam_memberInput;
    upsert?: companyUpsertWithoutTeam_memberInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutTeam_memberInput, companyUpdateWithoutTeam_memberInput>,
      companyUncheckedUpdateWithoutTeam_memberInput
    >;
  };

  export type lottery_gameCreateNestedOneWithoutTicketInput = {
    create?: XOR<lottery_gameCreateWithoutTicketInput, lottery_gameUncheckedCreateWithoutTicketInput>;
    connectOrCreate?: lottery_gameCreateOrConnectWithoutTicketInput;
    connect?: lottery_gameWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutTicketInput = {
    create?: XOR<userCreateWithoutTicketInput, userUncheckedCreateWithoutTicketInput>;
    connectOrCreate?: userCreateOrConnectWithoutTicketInput;
    connect?: userWhereUniqueInput;
  };

  export type lottery_gameUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<lottery_gameCreateWithoutTicketInput, lottery_gameUncheckedCreateWithoutTicketInput>;
    connectOrCreate?: lottery_gameCreateOrConnectWithoutTicketInput;
    upsert?: lottery_gameUpsertWithoutTicketInput;
    connect?: lottery_gameWhereUniqueInput;
    update?: XOR<
      XOR<lottery_gameUpdateToOneWithWhereWithoutTicketInput, lottery_gameUpdateWithoutTicketInput>,
      lottery_gameUncheckedUpdateWithoutTicketInput
    >;
  };

  export type userUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<userCreateWithoutTicketInput, userUncheckedCreateWithoutTicketInput>;
    connectOrCreate?: userCreateOrConnectWithoutTicketInput;
    upsert?: userUpsertWithoutTicketInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutTicketInput, userUpdateWithoutTicketInput>,
      userUncheckedUpdateWithoutTicketInput
    >;
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type ticketCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput>
      | ticketCreateWithoutUserInput[]
      | ticketUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutUserInput | ticketCreateOrConnectWithoutUserInput[];
    createMany?: ticketCreateManyUserInputEnvelope;
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
  };

  export type winnerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<winnerCreateWithoutUserInput, winnerUncheckedCreateWithoutUserInput>
      | winnerCreateWithoutUserInput[]
      | winnerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: winnerCreateOrConnectWithoutUserInput | winnerCreateOrConnectWithoutUserInput[];
    createMany?: winnerCreateManyUserInputEnvelope;
    connect?: winnerWhereUniqueInput | winnerWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type ticketUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput>
      | ticketCreateWithoutUserInput[]
      | ticketUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutUserInput | ticketCreateOrConnectWithoutUserInput[];
    createMany?: ticketCreateManyUserInputEnvelope;
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
  };

  export type winnerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<winnerCreateWithoutUserInput, winnerUncheckedCreateWithoutUserInput>
      | winnerCreateWithoutUserInput[]
      | winnerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: winnerCreateOrConnectWithoutUserInput | winnerCreateOrConnectWithoutUserInput[];
    createMany?: winnerCreateManyUserInputEnvelope;
    connect?: winnerWhereUniqueInput | winnerWhereUniqueInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type ticketUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput>
      | ticketCreateWithoutUserInput[]
      | ticketUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutUserInput | ticketCreateOrConnectWithoutUserInput[];
    upsert?: ticketUpsertWithWhereUniqueWithoutUserInput | ticketUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ticketCreateManyUserInputEnvelope;
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    update?: ticketUpdateWithWhereUniqueWithoutUserInput | ticketUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: ticketUpdateManyWithWhereWithoutUserInput | ticketUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[];
  };

  export type winnerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<winnerCreateWithoutUserInput, winnerUncheckedCreateWithoutUserInput>
      | winnerCreateWithoutUserInput[]
      | winnerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: winnerCreateOrConnectWithoutUserInput | winnerCreateOrConnectWithoutUserInput[];
    upsert?: winnerUpsertWithWhereUniqueWithoutUserInput | winnerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: winnerCreateManyUserInputEnvelope;
    set?: winnerWhereUniqueInput | winnerWhereUniqueInput[];
    disconnect?: winnerWhereUniqueInput | winnerWhereUniqueInput[];
    delete?: winnerWhereUniqueInput | winnerWhereUniqueInput[];
    connect?: winnerWhereUniqueInput | winnerWhereUniqueInput[];
    update?: winnerUpdateWithWhereUniqueWithoutUserInput | winnerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: winnerUpdateManyWithWhereWithoutUserInput | winnerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: winnerScalarWhereInput | winnerScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type ticketUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput>
      | ticketCreateWithoutUserInput[]
      | ticketUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutUserInput | ticketCreateOrConnectWithoutUserInput[];
    upsert?: ticketUpsertWithWhereUniqueWithoutUserInput | ticketUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ticketCreateManyUserInputEnvelope;
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    update?: ticketUpdateWithWhereUniqueWithoutUserInput | ticketUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: ticketUpdateManyWithWhereWithoutUserInput | ticketUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[];
  };

  export type winnerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<winnerCreateWithoutUserInput, winnerUncheckedCreateWithoutUserInput>
      | winnerCreateWithoutUserInput[]
      | winnerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: winnerCreateOrConnectWithoutUserInput | winnerCreateOrConnectWithoutUserInput[];
    upsert?: winnerUpsertWithWhereUniqueWithoutUserInput | winnerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: winnerCreateManyUserInputEnvelope;
    set?: winnerWhereUniqueInput | winnerWhereUniqueInput[];
    disconnect?: winnerWhereUniqueInput | winnerWhereUniqueInput[];
    delete?: winnerWhereUniqueInput | winnerWhereUniqueInput[];
    connect?: winnerWhereUniqueInput | winnerWhereUniqueInput[];
    update?: winnerUpdateWithWhereUniqueWithoutUserInput | winnerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: winnerUpdateManyWithWhereWithoutUserInput | winnerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: winnerScalarWhereInput | winnerScalarWhereInput[];
  };

  export type lottery_gameCreateNestedOneWithoutWinnerInput = {
    create?: XOR<lottery_gameCreateWithoutWinnerInput, lottery_gameUncheckedCreateWithoutWinnerInput>;
    connectOrCreate?: lottery_gameCreateOrConnectWithoutWinnerInput;
    connect?: lottery_gameWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutWinnerInput = {
    create?: XOR<userCreateWithoutWinnerInput, userUncheckedCreateWithoutWinnerInput>;
    connectOrCreate?: userCreateOrConnectWithoutWinnerInput;
    connect?: userWhereUniqueInput;
  };

  export type lottery_gameUpdateOneRequiredWithoutWinnerNestedInput = {
    create?: XOR<lottery_gameCreateWithoutWinnerInput, lottery_gameUncheckedCreateWithoutWinnerInput>;
    connectOrCreate?: lottery_gameCreateOrConnectWithoutWinnerInput;
    upsert?: lottery_gameUpsertWithoutWinnerInput;
    connect?: lottery_gameWhereUniqueInput;
    update?: XOR<
      XOR<lottery_gameUpdateToOneWithWhereWithoutWinnerInput, lottery_gameUpdateWithoutWinnerInput>,
      lottery_gameUncheckedUpdateWithoutWinnerInput
    >;
  };

  export type userUpdateOneRequiredWithoutWinnerNestedInput = {
    create?: XOR<userCreateWithoutWinnerInput, userUncheckedCreateWithoutWinnerInput>;
    connectOrCreate?: userCreateOrConnectWithoutWinnerInput;
    upsert?: userUpsertWithoutWinnerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutWinnerInput, userUpdateWithoutWinnerInput>,
      userUncheckedUpdateWithoutWinnerInput
    >;
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    ticket?: ticketCreateNestedManyWithoutUserInput;
    winner?: winnerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    ticket?: ticketUncheckedCreateNestedManyWithoutUserInput;
    winner?: winnerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type team_memberCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    role: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberUncheckedCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    role: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberCreateOrConnectWithoutCompanyInput = {
    where: team_memberWhereUniqueInput;
    create: XOR<team_memberCreateWithoutCompanyInput, team_memberUncheckedCreateWithoutCompanyInput>;
  };

  export type team_memberCreateManyCompanyInputEnvelope = {
    data: team_memberCreateManyCompanyInput | team_memberCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    ticket?: ticketUpdateManyWithoutUserNestedInput;
    winner?: winnerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    ticket?: ticketUncheckedUpdateManyWithoutUserNestedInput;
    winner?: winnerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type team_memberUpsertWithWhereUniqueWithoutCompanyInput = {
    where: team_memberWhereUniqueInput;
    update: XOR<team_memberUpdateWithoutCompanyInput, team_memberUncheckedUpdateWithoutCompanyInput>;
    create: XOR<team_memberCreateWithoutCompanyInput, team_memberUncheckedCreateWithoutCompanyInput>;
  };

  export type team_memberUpdateWithWhereUniqueWithoutCompanyInput = {
    where: team_memberWhereUniqueInput;
    data: XOR<team_memberUpdateWithoutCompanyInput, team_memberUncheckedUpdateWithoutCompanyInput>;
  };

  export type team_memberUpdateManyWithWhereWithoutCompanyInput = {
    where: team_memberScalarWhereInput;
    data: XOR<team_memberUpdateManyMutationInput, team_memberUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type team_memberScalarWhereInput = {
    AND?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
    OR?: team_memberScalarWhereInput[];
    NOT?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
    id?: UuidFilter<'team_member'> | string;
    name?: StringFilter<'team_member'> | string;
    role?: StringFilter<'team_member'> | string;
    company_id?: UuidFilter<'team_member'> | string;
    created_at?: DateTimeFilter<'team_member'> | Date | string;
    updated_at?: DateTimeFilter<'team_member'> | Date | string;
  };

  export type ticketCreateWithoutLottery_gameInput = {
    id?: string;
    number: string;
    purchase_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutTicketInput;
  };

  export type ticketUncheckedCreateWithoutLottery_gameInput = {
    id?: string;
    number: string;
    purchase_date: Date | string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ticketCreateOrConnectWithoutLottery_gameInput = {
    where: ticketWhereUniqueInput;
    create: XOR<ticketCreateWithoutLottery_gameInput, ticketUncheckedCreateWithoutLottery_gameInput>;
  };

  export type ticketCreateManyLottery_gameInputEnvelope = {
    data: ticketCreateManyLottery_gameInput | ticketCreateManyLottery_gameInput[];
    skipDuplicates?: boolean;
  };

  export type winnerCreateWithoutLottery_gameInput = {
    id?: string;
    winning_amount: number;
    winning_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutWinnerInput;
  };

  export type winnerUncheckedCreateWithoutLottery_gameInput = {
    id?: string;
    user_id: string;
    winning_amount: number;
    winning_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type winnerCreateOrConnectWithoutLottery_gameInput = {
    where: winnerWhereUniqueInput;
    create: XOR<winnerCreateWithoutLottery_gameInput, winnerUncheckedCreateWithoutLottery_gameInput>;
  };

  export type winnerCreateManyLottery_gameInputEnvelope = {
    data: winnerCreateManyLottery_gameInput | winnerCreateManyLottery_gameInput[];
    skipDuplicates?: boolean;
  };

  export type ticketUpsertWithWhereUniqueWithoutLottery_gameInput = {
    where: ticketWhereUniqueInput;
    update: XOR<ticketUpdateWithoutLottery_gameInput, ticketUncheckedUpdateWithoutLottery_gameInput>;
    create: XOR<ticketCreateWithoutLottery_gameInput, ticketUncheckedCreateWithoutLottery_gameInput>;
  };

  export type ticketUpdateWithWhereUniqueWithoutLottery_gameInput = {
    where: ticketWhereUniqueInput;
    data: XOR<ticketUpdateWithoutLottery_gameInput, ticketUncheckedUpdateWithoutLottery_gameInput>;
  };

  export type ticketUpdateManyWithWhereWithoutLottery_gameInput = {
    where: ticketScalarWhereInput;
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyWithoutLottery_gameInput>;
  };

  export type ticketScalarWhereInput = {
    AND?: ticketScalarWhereInput | ticketScalarWhereInput[];
    OR?: ticketScalarWhereInput[];
    NOT?: ticketScalarWhereInput | ticketScalarWhereInput[];
    id?: UuidFilter<'ticket'> | string;
    number?: StringFilter<'ticket'> | string;
    purchase_date?: DateTimeFilter<'ticket'> | Date | string;
    user_id?: UuidFilter<'ticket'> | string;
    game_id?: UuidFilter<'ticket'> | string;
    created_at?: DateTimeFilter<'ticket'> | Date | string;
    updated_at?: DateTimeFilter<'ticket'> | Date | string;
  };

  export type winnerUpsertWithWhereUniqueWithoutLottery_gameInput = {
    where: winnerWhereUniqueInput;
    update: XOR<winnerUpdateWithoutLottery_gameInput, winnerUncheckedUpdateWithoutLottery_gameInput>;
    create: XOR<winnerCreateWithoutLottery_gameInput, winnerUncheckedCreateWithoutLottery_gameInput>;
  };

  export type winnerUpdateWithWhereUniqueWithoutLottery_gameInput = {
    where: winnerWhereUniqueInput;
    data: XOR<winnerUpdateWithoutLottery_gameInput, winnerUncheckedUpdateWithoutLottery_gameInput>;
  };

  export type winnerUpdateManyWithWhereWithoutLottery_gameInput = {
    where: winnerScalarWhereInput;
    data: XOR<winnerUpdateManyMutationInput, winnerUncheckedUpdateManyWithoutLottery_gameInput>;
  };

  export type winnerScalarWhereInput = {
    AND?: winnerScalarWhereInput | winnerScalarWhereInput[];
    OR?: winnerScalarWhereInput[];
    NOT?: winnerScalarWhereInput | winnerScalarWhereInput[];
    id?: UuidFilter<'winner'> | string;
    user_id?: UuidFilter<'winner'> | string;
    game_id?: UuidFilter<'winner'> | string;
    winning_amount?: IntFilter<'winner'> | number;
    winning_date?: DateTimeFilter<'winner'> | Date | string;
    created_at?: DateTimeFilter<'winner'> | Date | string;
    updated_at?: DateTimeFilter<'winner'> | Date | string;
  };

  export type companyCreateWithoutTeam_memberInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutTeam_memberInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutTeam_memberInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutTeam_memberInput, companyUncheckedCreateWithoutTeam_memberInput>;
  };

  export type companyUpsertWithoutTeam_memberInput = {
    update: XOR<companyUpdateWithoutTeam_memberInput, companyUncheckedUpdateWithoutTeam_memberInput>;
    create: XOR<companyCreateWithoutTeam_memberInput, companyUncheckedCreateWithoutTeam_memberInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutTeam_memberInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutTeam_memberInput, companyUncheckedUpdateWithoutTeam_memberInput>;
  };

  export type companyUpdateWithoutTeam_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutTeam_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type lottery_gameCreateWithoutTicketInput = {
    id?: string;
    name: string;
    prize_amount: number;
    draw_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    winner?: winnerCreateNestedManyWithoutLottery_gameInput;
  };

  export type lottery_gameUncheckedCreateWithoutTicketInput = {
    id?: string;
    name: string;
    prize_amount: number;
    draw_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    winner?: winnerUncheckedCreateNestedManyWithoutLottery_gameInput;
  };

  export type lottery_gameCreateOrConnectWithoutTicketInput = {
    where: lottery_gameWhereUniqueInput;
    create: XOR<lottery_gameCreateWithoutTicketInput, lottery_gameUncheckedCreateWithoutTicketInput>;
  };

  export type userCreateWithoutTicketInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    winner?: winnerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutTicketInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    winner?: winnerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutTicketInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTicketInput, userUncheckedCreateWithoutTicketInput>;
  };

  export type lottery_gameUpsertWithoutTicketInput = {
    update: XOR<lottery_gameUpdateWithoutTicketInput, lottery_gameUncheckedUpdateWithoutTicketInput>;
    create: XOR<lottery_gameCreateWithoutTicketInput, lottery_gameUncheckedCreateWithoutTicketInput>;
    where?: lottery_gameWhereInput;
  };

  export type lottery_gameUpdateToOneWithWhereWithoutTicketInput = {
    where?: lottery_gameWhereInput;
    data: XOR<lottery_gameUpdateWithoutTicketInput, lottery_gameUncheckedUpdateWithoutTicketInput>;
  };

  export type lottery_gameUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    prize_amount?: IntFieldUpdateOperationsInput | number;
    draw_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    winner?: winnerUpdateManyWithoutLottery_gameNestedInput;
  };

  export type lottery_gameUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    prize_amount?: IntFieldUpdateOperationsInput | number;
    draw_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    winner?: winnerUncheckedUpdateManyWithoutLottery_gameNestedInput;
  };

  export type userUpsertWithoutTicketInput = {
    update: XOR<userUpdateWithoutTicketInput, userUncheckedUpdateWithoutTicketInput>;
    create: XOR<userCreateWithoutTicketInput, userUncheckedCreateWithoutTicketInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutTicketInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutTicketInput, userUncheckedUpdateWithoutTicketInput>;
  };

  export type userUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    winner?: winnerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    winner?: winnerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    team_member?: team_memberCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    team_member?: team_memberUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ticketCreateWithoutUserInput = {
    id?: string;
    number: string;
    purchase_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    lottery_game: lottery_gameCreateNestedOneWithoutTicketInput;
  };

  export type ticketUncheckedCreateWithoutUserInput = {
    id?: string;
    number: string;
    purchase_date: Date | string;
    game_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ticketCreateOrConnectWithoutUserInput = {
    where: ticketWhereUniqueInput;
    create: XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput>;
  };

  export type ticketCreateManyUserInputEnvelope = {
    data: ticketCreateManyUserInput | ticketCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type winnerCreateWithoutUserInput = {
    id?: string;
    winning_amount: number;
    winning_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    lottery_game: lottery_gameCreateNestedOneWithoutWinnerInput;
  };

  export type winnerUncheckedCreateWithoutUserInput = {
    id?: string;
    game_id: string;
    winning_amount: number;
    winning_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type winnerCreateOrConnectWithoutUserInput = {
    where: winnerWhereUniqueInput;
    create: XOR<winnerCreateWithoutUserInput, winnerUncheckedCreateWithoutUserInput>;
  };

  export type winnerCreateManyUserInputEnvelope = {
    data: winnerCreateManyUserInput | winnerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type ticketUpsertWithWhereUniqueWithoutUserInput = {
    where: ticketWhereUniqueInput;
    update: XOR<ticketUpdateWithoutUserInput, ticketUncheckedUpdateWithoutUserInput>;
    create: XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput>;
  };

  export type ticketUpdateWithWhereUniqueWithoutUserInput = {
    where: ticketWhereUniqueInput;
    data: XOR<ticketUpdateWithoutUserInput, ticketUncheckedUpdateWithoutUserInput>;
  };

  export type ticketUpdateManyWithWhereWithoutUserInput = {
    where: ticketScalarWhereInput;
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyWithoutUserInput>;
  };

  export type winnerUpsertWithWhereUniqueWithoutUserInput = {
    where: winnerWhereUniqueInput;
    update: XOR<winnerUpdateWithoutUserInput, winnerUncheckedUpdateWithoutUserInput>;
    create: XOR<winnerCreateWithoutUserInput, winnerUncheckedCreateWithoutUserInput>;
  };

  export type winnerUpdateWithWhereUniqueWithoutUserInput = {
    where: winnerWhereUniqueInput;
    data: XOR<winnerUpdateWithoutUserInput, winnerUncheckedUpdateWithoutUserInput>;
  };

  export type winnerUpdateManyWithWhereWithoutUserInput = {
    where: winnerScalarWhereInput;
    data: XOR<winnerUpdateManyMutationInput, winnerUncheckedUpdateManyWithoutUserInput>;
  };

  export type lottery_gameCreateWithoutWinnerInput = {
    id?: string;
    name: string;
    prize_amount: number;
    draw_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    ticket?: ticketCreateNestedManyWithoutLottery_gameInput;
  };

  export type lottery_gameUncheckedCreateWithoutWinnerInput = {
    id?: string;
    name: string;
    prize_amount: number;
    draw_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    ticket?: ticketUncheckedCreateNestedManyWithoutLottery_gameInput;
  };

  export type lottery_gameCreateOrConnectWithoutWinnerInput = {
    where: lottery_gameWhereUniqueInput;
    create: XOR<lottery_gameCreateWithoutWinnerInput, lottery_gameUncheckedCreateWithoutWinnerInput>;
  };

  export type userCreateWithoutWinnerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    ticket?: ticketCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutWinnerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    ticket?: ticketUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutWinnerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutWinnerInput, userUncheckedCreateWithoutWinnerInput>;
  };

  export type lottery_gameUpsertWithoutWinnerInput = {
    update: XOR<lottery_gameUpdateWithoutWinnerInput, lottery_gameUncheckedUpdateWithoutWinnerInput>;
    create: XOR<lottery_gameCreateWithoutWinnerInput, lottery_gameUncheckedCreateWithoutWinnerInput>;
    where?: lottery_gameWhereInput;
  };

  export type lottery_gameUpdateToOneWithWhereWithoutWinnerInput = {
    where?: lottery_gameWhereInput;
    data: XOR<lottery_gameUpdateWithoutWinnerInput, lottery_gameUncheckedUpdateWithoutWinnerInput>;
  };

  export type lottery_gameUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    prize_amount?: IntFieldUpdateOperationsInput | number;
    draw_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    ticket?: ticketUpdateManyWithoutLottery_gameNestedInput;
  };

  export type lottery_gameUncheckedUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    prize_amount?: IntFieldUpdateOperationsInput | number;
    draw_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    ticket?: ticketUncheckedUpdateManyWithoutLottery_gameNestedInput;
  };

  export type userUpsertWithoutWinnerInput = {
    update: XOR<userUpdateWithoutWinnerInput, userUncheckedUpdateWithoutWinnerInput>;
    create: XOR<userCreateWithoutWinnerInput, userUncheckedCreateWithoutWinnerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutWinnerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutWinnerInput, userUncheckedUpdateWithoutWinnerInput>;
  };

  export type userUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    ticket?: ticketUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    ticket?: ticketUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type team_memberCreateManyCompanyInput = {
    id?: string;
    name: string;
    role: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ticketCreateManyLottery_gameInput = {
    id?: string;
    number: string;
    purchase_date: Date | string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type winnerCreateManyLottery_gameInput = {
    id?: string;
    user_id: string;
    winning_amount: number;
    winning_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ticketUpdateWithoutLottery_gameInput = {
    id?: StringFieldUpdateOperationsInput | string;
    number?: StringFieldUpdateOperationsInput | string;
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutTicketNestedInput;
  };

  export type ticketUncheckedUpdateWithoutLottery_gameInput = {
    id?: StringFieldUpdateOperationsInput | string;
    number?: StringFieldUpdateOperationsInput | string;
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ticketUncheckedUpdateManyWithoutLottery_gameInput = {
    id?: StringFieldUpdateOperationsInput | string;
    number?: StringFieldUpdateOperationsInput | string;
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type winnerUpdateWithoutLottery_gameInput = {
    id?: StringFieldUpdateOperationsInput | string;
    winning_amount?: IntFieldUpdateOperationsInput | number;
    winning_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutWinnerNestedInput;
  };

  export type winnerUncheckedUpdateWithoutLottery_gameInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    winning_amount?: IntFieldUpdateOperationsInput | number;
    winning_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type winnerUncheckedUpdateManyWithoutLottery_gameInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    winning_amount?: IntFieldUpdateOperationsInput | number;
    winning_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type ticketCreateManyUserInput = {
    id?: string;
    number: string;
    purchase_date: Date | string;
    game_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type winnerCreateManyUserInput = {
    id?: string;
    game_id: string;
    winning_amount: number;
    winning_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    team_member?: team_memberUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    team_member?: team_memberUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type ticketUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    number?: StringFieldUpdateOperationsInput | string;
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    lottery_game?: lottery_gameUpdateOneRequiredWithoutTicketNestedInput;
  };

  export type ticketUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    number?: StringFieldUpdateOperationsInput | string;
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ticketUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    number?: StringFieldUpdateOperationsInput | string;
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type winnerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    winning_amount?: IntFieldUpdateOperationsInput | number;
    winning_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    lottery_game?: lottery_gameUpdateOneRequiredWithoutWinnerNestedInput;
  };

  export type winnerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    game_id?: StringFieldUpdateOperationsInput | string;
    winning_amount?: IntFieldUpdateOperationsInput | number;
    winning_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type winnerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    game_id?: StringFieldUpdateOperationsInput | string;
    winning_amount?: IntFieldUpdateOperationsInput | number;
    winning_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use Lottery_gameCountOutputTypeDefaultArgs instead
   */
  export type Lottery_gameCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Lottery_gameCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use lottery_gameDefaultArgs instead
   */
  export type lottery_gameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    lottery_gameDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use team_memberDefaultArgs instead
   */
  export type team_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    team_memberDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ticketDefaultArgs instead
   */
  export type ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ticketDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use winnerDefaultArgs instead
   */
  export type winnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    winnerDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
