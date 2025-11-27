
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model GameRating
 * 
 */
export type GameRating = $Result.DefaultSelection<Prisma.$GameRatingPayload>
/**
 * Model Platform
 * 
 */
export type Platform = $Result.DefaultSelection<Prisma.$PlatformPayload>
/**
 * Model Developers
 * 
 */
export type Developers = $Result.DefaultSelection<Prisma.$DevelopersPayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model Cover
 * 
 */
export type Cover = $Result.DefaultSelection<Prisma.$CoverPayload>
/**
 * Model Screenshot
 * 
 */
export type Screenshot = $Result.DefaultSelection<Prisma.$ScreenshotPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sessions
 * const sessions = await prisma.session.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameRating`: Exposes CRUD operations for the **GameRating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameRatings
    * const gameRatings = await prisma.gameRating.findMany()
    * ```
    */
  get gameRating(): Prisma.GameRatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.platform`: Exposes CRUD operations for the **Platform** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Platforms
    * const platforms = await prisma.platform.findMany()
    * ```
    */
  get platform(): Prisma.PlatformDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.developers`: Exposes CRUD operations for the **Developers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Developers
    * const developers = await prisma.developers.findMany()
    * ```
    */
  get developers(): Prisma.DevelopersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cover`: Exposes CRUD operations for the **Cover** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Covers
    * const covers = await prisma.cover.findMany()
    * ```
    */
  get cover(): Prisma.CoverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.screenshot`: Exposes CRUD operations for the **Screenshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Screenshots
    * const screenshots = await prisma.screenshot.findMany()
    * ```
    */
  get screenshot(): Prisma.ScreenshotDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Session: 'Session',
    User: 'User',
    UserProfile: 'UserProfile',
    Game: 'Game',
    GameRating: 'GameRating',
    Platform: 'Platform',
    Developers: 'Developers',
    Genre: 'Genre',
    Cover: 'Cover',
    Screenshot: 'Screenshot'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "session" | "user" | "userProfile" | "game" | "gameRating" | "platform" | "developers" | "genre" | "cover" | "screenshot"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      GameRating: {
        payload: Prisma.$GameRatingPayload<ExtArgs>
        fields: Prisma.GameRatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameRatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameRatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRatingPayload>
          }
          findFirst: {
            args: Prisma.GameRatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameRatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRatingPayload>
          }
          findMany: {
            args: Prisma.GameRatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRatingPayload>[]
          }
          create: {
            args: Prisma.GameRatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRatingPayload>
          }
          createMany: {
            args: Prisma.GameRatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameRatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRatingPayload>[]
          }
          delete: {
            args: Prisma.GameRatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRatingPayload>
          }
          update: {
            args: Prisma.GameRatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRatingPayload>
          }
          deleteMany: {
            args: Prisma.GameRatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameRatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameRatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRatingPayload>[]
          }
          upsert: {
            args: Prisma.GameRatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRatingPayload>
          }
          aggregate: {
            args: Prisma.GameRatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameRating>
          }
          groupBy: {
            args: Prisma.GameRatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameRatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameRatingCountArgs<ExtArgs>
            result: $Utils.Optional<GameRatingCountAggregateOutputType> | number
          }
        }
      }
      Platform: {
        payload: Prisma.$PlatformPayload<ExtArgs>
        fields: Prisma.PlatformFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatformFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatformFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          findFirst: {
            args: Prisma.PlatformFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatformFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          findMany: {
            args: Prisma.PlatformFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>[]
          }
          create: {
            args: Prisma.PlatformCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          createMany: {
            args: Prisma.PlatformCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlatformCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>[]
          }
          delete: {
            args: Prisma.PlatformDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          update: {
            args: Prisma.PlatformUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          deleteMany: {
            args: Prisma.PlatformDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatformUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlatformUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>[]
          }
          upsert: {
            args: Prisma.PlatformUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          aggregate: {
            args: Prisma.PlatformAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlatform>
          }
          groupBy: {
            args: Prisma.PlatformGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatformGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatformCountArgs<ExtArgs>
            result: $Utils.Optional<PlatformCountAggregateOutputType> | number
          }
        }
      }
      Developers: {
        payload: Prisma.$DevelopersPayload<ExtArgs>
        fields: Prisma.DevelopersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DevelopersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevelopersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DevelopersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevelopersPayload>
          }
          findFirst: {
            args: Prisma.DevelopersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevelopersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DevelopersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevelopersPayload>
          }
          findMany: {
            args: Prisma.DevelopersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevelopersPayload>[]
          }
          create: {
            args: Prisma.DevelopersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevelopersPayload>
          }
          createMany: {
            args: Prisma.DevelopersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DevelopersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevelopersPayload>[]
          }
          delete: {
            args: Prisma.DevelopersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevelopersPayload>
          }
          update: {
            args: Prisma.DevelopersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevelopersPayload>
          }
          deleteMany: {
            args: Prisma.DevelopersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DevelopersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DevelopersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevelopersPayload>[]
          }
          upsert: {
            args: Prisma.DevelopersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevelopersPayload>
          }
          aggregate: {
            args: Prisma.DevelopersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevelopers>
          }
          groupBy: {
            args: Prisma.DevelopersGroupByArgs<ExtArgs>
            result: $Utils.Optional<DevelopersGroupByOutputType>[]
          }
          count: {
            args: Prisma.DevelopersCountArgs<ExtArgs>
            result: $Utils.Optional<DevelopersCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      Cover: {
        payload: Prisma.$CoverPayload<ExtArgs>
        fields: Prisma.CoverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverPayload>
          }
          findFirst: {
            args: Prisma.CoverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverPayload>
          }
          findMany: {
            args: Prisma.CoverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverPayload>[]
          }
          create: {
            args: Prisma.CoverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverPayload>
          }
          createMany: {
            args: Prisma.CoverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverPayload>[]
          }
          delete: {
            args: Prisma.CoverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverPayload>
          }
          update: {
            args: Prisma.CoverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverPayload>
          }
          deleteMany: {
            args: Prisma.CoverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverPayload>[]
          }
          upsert: {
            args: Prisma.CoverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverPayload>
          }
          aggregate: {
            args: Prisma.CoverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCover>
          }
          groupBy: {
            args: Prisma.CoverGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoverGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoverCountArgs<ExtArgs>
            result: $Utils.Optional<CoverCountAggregateOutputType> | number
          }
        }
      }
      Screenshot: {
        payload: Prisma.$ScreenshotPayload<ExtArgs>
        fields: Prisma.ScreenshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScreenshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScreenshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenshotPayload>
          }
          findFirst: {
            args: Prisma.ScreenshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScreenshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenshotPayload>
          }
          findMany: {
            args: Prisma.ScreenshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenshotPayload>[]
          }
          create: {
            args: Prisma.ScreenshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenshotPayload>
          }
          createMany: {
            args: Prisma.ScreenshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScreenshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenshotPayload>[]
          }
          delete: {
            args: Prisma.ScreenshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenshotPayload>
          }
          update: {
            args: Prisma.ScreenshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenshotPayload>
          }
          deleteMany: {
            args: Prisma.ScreenshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScreenshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScreenshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenshotPayload>[]
          }
          upsert: {
            args: Prisma.ScreenshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenshotPayload>
          }
          aggregate: {
            args: Prisma.ScreenshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScreenshot>
          }
          groupBy: {
            args: Prisma.ScreenshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScreenshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScreenshotCountArgs<ExtArgs>
            result: $Utils.Optional<ScreenshotCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    session?: SessionOmit
    user?: UserOmit
    userProfile?: UserProfileOmit
    game?: GameOmit
    gameRating?: GameRatingOmit
    platform?: PlatformOmit
    developers?: DevelopersOmit
    genre?: GenreOmit
    cover?: CoverOmit
    screenshot?: ScreenshotOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserProfileCountOutputType
   */

  export type UserProfileCountOutputType = {
    savedGames: number
  }

  export type UserProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedGames?: boolean | UserProfileCountOutputTypeCountSavedGamesArgs
  }

  // Custom InputTypes
  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileCountOutputType
     */
    select?: UserProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeCountSavedGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    genres: number
    platforms: number
    covers: number
    screenshots: number
    savedByUsers: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | GameCountOutputTypeCountGenresArgs
    platforms?: boolean | GameCountOutputTypeCountPlatformsArgs
    covers?: boolean | GameCountOutputTypeCountCoversArgs
    screenshots?: boolean | GameCountOutputTypeCountScreenshotsArgs
    savedByUsers?: boolean | GameCountOutputTypeCountSavedByUsersArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountPlatformsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountCoversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoverWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountScreenshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreenshotWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountSavedByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
  }


  /**
   * Count Type GameRatingCountOutputType
   */

  export type GameRatingCountOutputType = {
    games: number
  }

  export type GameRatingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | GameRatingCountOutputTypeCountGamesArgs
  }

  // Custom InputTypes
  /**
   * GameRatingCountOutputType without action
   */
  export type GameRatingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRatingCountOutputType
     */
    select?: GameRatingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameRatingCountOutputType without action
   */
  export type GameRatingCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }


  /**
   * Count Type PlatformCountOutputType
   */

  export type PlatformCountOutputType = {
    games: number
  }

  export type PlatformCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | PlatformCountOutputTypeCountGamesArgs
  }

  // Custom InputTypes
  /**
   * PlatformCountOutputType without action
   */
  export type PlatformCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformCountOutputType
     */
    select?: PlatformCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlatformCountOutputType without action
   */
  export type PlatformCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }


  /**
   * Count Type DevelopersCountOutputType
   */

  export type DevelopersCountOutputType = {
    games: number
  }

  export type DevelopersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | DevelopersCountOutputTypeCountGamesArgs
  }

  // Custom InputTypes
  /**
   * DevelopersCountOutputType without action
   */
  export type DevelopersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevelopersCountOutputType
     */
    select?: DevelopersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DevelopersCountOutputType without action
   */
  export type DevelopersCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    games: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | GenreCountOutputTypeCountGamesArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sid: number
    data: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sid: string
    data: string
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sid" | "data" | "expiresAt", ExtArgs["result"]["session"]>

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sid: string
      data: string
      expiresAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sid: FieldRef<"Session", 'String'>
    readonly data: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    is_admin: boolean | null
    fname: string | null
    lname: string | null
    alias: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    is_admin: boolean | null
    fname: string | null
    lname: string | null
    alias: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    is_admin: number
    fname: number
    lname: number
    alias: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    is_admin?: true
    fname?: true
    lname?: true
    alias?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    is_admin?: true
    fname?: true
    lname?: true
    alias?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    is_admin?: true
    fname?: true
    lname?: true
    alias?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    is_admin: boolean
    fname: string
    lname: string
    alias: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    is_admin?: boolean
    fname?: boolean
    lname?: boolean
    alias?: boolean
    password?: boolean
    UserProfile?: boolean | User$UserProfileArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    is_admin?: boolean
    fname?: boolean
    lname?: boolean
    alias?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    is_admin?: boolean
    fname?: boolean
    lname?: boolean
    alias?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    is_admin?: boolean
    fname?: boolean
    lname?: boolean
    alias?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "is_admin" | "fname" | "lname" | "alias" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserProfile?: boolean | User$UserProfileArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      UserProfile: Prisma.$UserProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      is_admin: boolean
      fname: string
      lname: string
      alias: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserProfile<T extends User$UserProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$UserProfileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly is_admin: FieldRef<"User", 'Boolean'>
    readonly fname: FieldRef<"User", 'String'>
    readonly lname: FieldRef<"User", 'String'>
    readonly alias: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.UserProfile
   */
  export type User$UserProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserProfileMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: number
    userId: number
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    savedGames?: boolean | UserProfile$savedGamesArgs<ExtArgs>
    _count?: boolean | UserProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    savedGames?: boolean | UserProfile$savedGamesArgs<ExtArgs>
    _count?: boolean | UserProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      savedGames: Prisma.$GamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    savedGames<T extends UserProfile$savedGamesArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$savedGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'Int'>
    readonly userId: FieldRef<"UserProfile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile.savedGames
   */
  export type UserProfile$savedGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    id: number | null
    igdbId: number | null
    rating: number | null
    aggregatedRating: number | null
    totalRating: number | null
    totalRatingCount: number | null
    ageRatingId: number | null
    developerId: number | null
  }

  export type GameSumAggregateOutputType = {
    id: number | null
    igdbId: number | null
    rating: number | null
    aggregatedRating: number | null
    totalRating: number | null
    totalRatingCount: number | null
    ageRatingId: number | null
    developerId: number | null
  }

  export type GameMinAggregateOutputType = {
    id: number | null
    igdbId: number | null
    name: string | null
    slug: string | null
    summary: string | null
    storyline: string | null
    firstReleaseDate: Date | null
    originalPlatform: string | null
    coverUrl: string | null
    rating: number | null
    aggregatedRating: number | null
    totalRating: number | null
    totalRatingCount: number | null
    ageRatingId: number | null
    developerId: number | null
    url: string | null
  }

  export type GameMaxAggregateOutputType = {
    id: number | null
    igdbId: number | null
    name: string | null
    slug: string | null
    summary: string | null
    storyline: string | null
    firstReleaseDate: Date | null
    originalPlatform: string | null
    coverUrl: string | null
    rating: number | null
    aggregatedRating: number | null
    totalRating: number | null
    totalRatingCount: number | null
    ageRatingId: number | null
    developerId: number | null
    url: string | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    igdbId: number
    name: number
    slug: number
    summary: number
    storyline: number
    firstReleaseDate: number
    originalPlatform: number
    coverUrl: number
    rating: number
    aggregatedRating: number
    totalRating: number
    totalRatingCount: number
    ageRatingId: number
    developerId: number
    url: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    id?: true
    igdbId?: true
    rating?: true
    aggregatedRating?: true
    totalRating?: true
    totalRatingCount?: true
    ageRatingId?: true
    developerId?: true
  }

  export type GameSumAggregateInputType = {
    id?: true
    igdbId?: true
    rating?: true
    aggregatedRating?: true
    totalRating?: true
    totalRatingCount?: true
    ageRatingId?: true
    developerId?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    igdbId?: true
    name?: true
    slug?: true
    summary?: true
    storyline?: true
    firstReleaseDate?: true
    originalPlatform?: true
    coverUrl?: true
    rating?: true
    aggregatedRating?: true
    totalRating?: true
    totalRatingCount?: true
    ageRatingId?: true
    developerId?: true
    url?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    igdbId?: true
    name?: true
    slug?: true
    summary?: true
    storyline?: true
    firstReleaseDate?: true
    originalPlatform?: true
    coverUrl?: true
    rating?: true
    aggregatedRating?: true
    totalRating?: true
    totalRatingCount?: true
    ageRatingId?: true
    developerId?: true
    url?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    igdbId?: true
    name?: true
    slug?: true
    summary?: true
    storyline?: true
    firstReleaseDate?: true
    originalPlatform?: true
    coverUrl?: true
    rating?: true
    aggregatedRating?: true
    totalRating?: true
    totalRatingCount?: true
    ageRatingId?: true
    developerId?: true
    url?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: number
    igdbId: number
    name: string
    slug: string
    summary: string | null
    storyline: string | null
    firstReleaseDate: Date | null
    originalPlatform: string | null
    coverUrl: string | null
    rating: number | null
    aggregatedRating: number | null
    totalRating: number | null
    totalRatingCount: number | null
    ageRatingId: number | null
    developerId: number | null
    url: string | null
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    igdbId?: boolean
    name?: boolean
    slug?: boolean
    summary?: boolean
    storyline?: boolean
    firstReleaseDate?: boolean
    originalPlatform?: boolean
    coverUrl?: boolean
    rating?: boolean
    aggregatedRating?: boolean
    totalRating?: boolean
    totalRatingCount?: boolean
    ageRatingId?: boolean
    developerId?: boolean
    url?: boolean
    genres?: boolean | Game$genresArgs<ExtArgs>
    platforms?: boolean | Game$platformsArgs<ExtArgs>
    covers?: boolean | Game$coversArgs<ExtArgs>
    screenshots?: boolean | Game$screenshotsArgs<ExtArgs>
    developer?: boolean | Game$developerArgs<ExtArgs>
    ageRating?: boolean | Game$ageRatingArgs<ExtArgs>
    savedByUsers?: boolean | Game$savedByUsersArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    igdbId?: boolean
    name?: boolean
    slug?: boolean
    summary?: boolean
    storyline?: boolean
    firstReleaseDate?: boolean
    originalPlatform?: boolean
    coverUrl?: boolean
    rating?: boolean
    aggregatedRating?: boolean
    totalRating?: boolean
    totalRatingCount?: boolean
    ageRatingId?: boolean
    developerId?: boolean
    url?: boolean
    developer?: boolean | Game$developerArgs<ExtArgs>
    ageRating?: boolean | Game$ageRatingArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    igdbId?: boolean
    name?: boolean
    slug?: boolean
    summary?: boolean
    storyline?: boolean
    firstReleaseDate?: boolean
    originalPlatform?: boolean
    coverUrl?: boolean
    rating?: boolean
    aggregatedRating?: boolean
    totalRating?: boolean
    totalRatingCount?: boolean
    ageRatingId?: boolean
    developerId?: boolean
    url?: boolean
    developer?: boolean | Game$developerArgs<ExtArgs>
    ageRating?: boolean | Game$ageRatingArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    igdbId?: boolean
    name?: boolean
    slug?: boolean
    summary?: boolean
    storyline?: boolean
    firstReleaseDate?: boolean
    originalPlatform?: boolean
    coverUrl?: boolean
    rating?: boolean
    aggregatedRating?: boolean
    totalRating?: boolean
    totalRatingCount?: boolean
    ageRatingId?: boolean
    developerId?: boolean
    url?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "igdbId" | "name" | "slug" | "summary" | "storyline" | "firstReleaseDate" | "originalPlatform" | "coverUrl" | "rating" | "aggregatedRating" | "totalRating" | "totalRatingCount" | "ageRatingId" | "developerId" | "url", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | Game$genresArgs<ExtArgs>
    platforms?: boolean | Game$platformsArgs<ExtArgs>
    covers?: boolean | Game$coversArgs<ExtArgs>
    screenshots?: boolean | Game$screenshotsArgs<ExtArgs>
    developer?: boolean | Game$developerArgs<ExtArgs>
    ageRating?: boolean | Game$ageRatingArgs<ExtArgs>
    savedByUsers?: boolean | Game$savedByUsersArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    developer?: boolean | Game$developerArgs<ExtArgs>
    ageRating?: boolean | Game$ageRatingArgs<ExtArgs>
  }
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    developer?: boolean | Game$developerArgs<ExtArgs>
    ageRating?: boolean | Game$ageRatingArgs<ExtArgs>
  }

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      genres: Prisma.$GenrePayload<ExtArgs>[]
      platforms: Prisma.$PlatformPayload<ExtArgs>[]
      covers: Prisma.$CoverPayload<ExtArgs>[]
      screenshots: Prisma.$ScreenshotPayload<ExtArgs>[]
      developer: Prisma.$DevelopersPayload<ExtArgs> | null
      ageRating: Prisma.$GameRatingPayload<ExtArgs> | null
      savedByUsers: Prisma.$UserProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      igdbId: number
      name: string
      slug: string
      summary: string | null
      storyline: string | null
      firstReleaseDate: Date | null
      originalPlatform: string | null
      coverUrl: string | null
      rating: number | null
      aggregatedRating: number | null
      totalRating: number | null
      totalRatingCount: number | null
      ageRatingId: number | null
      developerId: number | null
      url: string | null
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
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
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    genres<T extends Game$genresArgs<ExtArgs> = {}>(args?: Subset<T, Game$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    platforms<T extends Game$platformsArgs<ExtArgs> = {}>(args?: Subset<T, Game$platformsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    covers<T extends Game$coversArgs<ExtArgs> = {}>(args?: Subset<T, Game$coversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    screenshots<T extends Game$screenshotsArgs<ExtArgs> = {}>(args?: Subset<T, Game$screenshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    developer<T extends Game$developerArgs<ExtArgs> = {}>(args?: Subset<T, Game$developerArgs<ExtArgs>>): Prisma__DevelopersClient<$Result.GetResult<Prisma.$DevelopersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ageRating<T extends Game$ageRatingArgs<ExtArgs> = {}>(args?: Subset<T, Game$ageRatingArgs<ExtArgs>>): Prisma__GameRatingClient<$Result.GetResult<Prisma.$GameRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    savedByUsers<T extends Game$savedByUsersArgs<ExtArgs> = {}>(args?: Subset<T, Game$savedByUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'Int'>
    readonly igdbId: FieldRef<"Game", 'Int'>
    readonly name: FieldRef<"Game", 'String'>
    readonly slug: FieldRef<"Game", 'String'>
    readonly summary: FieldRef<"Game", 'String'>
    readonly storyline: FieldRef<"Game", 'String'>
    readonly firstReleaseDate: FieldRef<"Game", 'DateTime'>
    readonly originalPlatform: FieldRef<"Game", 'String'>
    readonly coverUrl: FieldRef<"Game", 'String'>
    readonly rating: FieldRef<"Game", 'Float'>
    readonly aggregatedRating: FieldRef<"Game", 'Float'>
    readonly totalRating: FieldRef<"Game", 'Float'>
    readonly totalRatingCount: FieldRef<"Game", 'Int'>
    readonly ageRatingId: FieldRef<"Game", 'Int'>
    readonly developerId: FieldRef<"Game", 'Int'>
    readonly url: FieldRef<"Game", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.genres
   */
  export type Game$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    cursor?: GenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Game.platforms
   */
  export type Game$platformsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    where?: PlatformWhereInput
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    cursor?: PlatformWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Game.covers
   */
  export type Game$coversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverInclude<ExtArgs> | null
    where?: CoverWhereInput
    orderBy?: CoverOrderByWithRelationInput | CoverOrderByWithRelationInput[]
    cursor?: CoverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoverScalarFieldEnum | CoverScalarFieldEnum[]
  }

  /**
   * Game.screenshots
   */
  export type Game$screenshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotInclude<ExtArgs> | null
    where?: ScreenshotWhereInput
    orderBy?: ScreenshotOrderByWithRelationInput | ScreenshotOrderByWithRelationInput[]
    cursor?: ScreenshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScreenshotScalarFieldEnum | ScreenshotScalarFieldEnum[]
  }

  /**
   * Game.developer
   */
  export type Game$developerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developers
     */
    select?: DevelopersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developers
     */
    omit?: DevelopersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevelopersInclude<ExtArgs> | null
    where?: DevelopersWhereInput
  }

  /**
   * Game.ageRating
   */
  export type Game$ageRatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRating
     */
    select?: GameRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRating
     */
    omit?: GameRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRatingInclude<ExtArgs> | null
    where?: GameRatingWhereInput
  }

  /**
   * Game.savedByUsers
   */
  export type Game$savedByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    cursor?: UserProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model GameRating
   */

  export type AggregateGameRating = {
    _count: GameRatingCountAggregateOutputType | null
    _avg: GameRatingAvgAggregateOutputType | null
    _sum: GameRatingSumAggregateOutputType | null
    _min: GameRatingMinAggregateOutputType | null
    _max: GameRatingMaxAggregateOutputType | null
  }

  export type GameRatingAvgAggregateOutputType = {
    id: number | null
  }

  export type GameRatingSumAggregateOutputType = {
    id: number | null
  }

  export type GameRatingMinAggregateOutputType = {
    id: number | null
    rating: string | null
    description: string | null
  }

  export type GameRatingMaxAggregateOutputType = {
    id: number | null
    rating: string | null
    description: string | null
  }

  export type GameRatingCountAggregateOutputType = {
    id: number
    rating: number
    description: number
    _all: number
  }


  export type GameRatingAvgAggregateInputType = {
    id?: true
  }

  export type GameRatingSumAggregateInputType = {
    id?: true
  }

  export type GameRatingMinAggregateInputType = {
    id?: true
    rating?: true
    description?: true
  }

  export type GameRatingMaxAggregateInputType = {
    id?: true
    rating?: true
    description?: true
  }

  export type GameRatingCountAggregateInputType = {
    id?: true
    rating?: true
    description?: true
    _all?: true
  }

  export type GameRatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameRating to aggregate.
     */
    where?: GameRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRatings to fetch.
     */
    orderBy?: GameRatingOrderByWithRelationInput | GameRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameRatings
    **/
    _count?: true | GameRatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameRatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameRatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameRatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameRatingMaxAggregateInputType
  }

  export type GetGameRatingAggregateType<T extends GameRatingAggregateArgs> = {
        [P in keyof T & keyof AggregateGameRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameRating[P]>
      : GetScalarType<T[P], AggregateGameRating[P]>
  }




  export type GameRatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameRatingWhereInput
    orderBy?: GameRatingOrderByWithAggregationInput | GameRatingOrderByWithAggregationInput[]
    by: GameRatingScalarFieldEnum[] | GameRatingScalarFieldEnum
    having?: GameRatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameRatingCountAggregateInputType | true
    _avg?: GameRatingAvgAggregateInputType
    _sum?: GameRatingSumAggregateInputType
    _min?: GameRatingMinAggregateInputType
    _max?: GameRatingMaxAggregateInputType
  }

  export type GameRatingGroupByOutputType = {
    id: number
    rating: string
    description: string | null
    _count: GameRatingCountAggregateOutputType | null
    _avg: GameRatingAvgAggregateOutputType | null
    _sum: GameRatingSumAggregateOutputType | null
    _min: GameRatingMinAggregateOutputType | null
    _max: GameRatingMaxAggregateOutputType | null
  }

  type GetGameRatingGroupByPayload<T extends GameRatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameRatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameRatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameRatingGroupByOutputType[P]>
            : GetScalarType<T[P], GameRatingGroupByOutputType[P]>
        }
      >
    >


  export type GameRatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    description?: boolean
    games?: boolean | GameRating$gamesArgs<ExtArgs>
    _count?: boolean | GameRatingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameRating"]>

  export type GameRatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    description?: boolean
  }, ExtArgs["result"]["gameRating"]>

  export type GameRatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    description?: boolean
  }, ExtArgs["result"]["gameRating"]>

  export type GameRatingSelectScalar = {
    id?: boolean
    rating?: boolean
    description?: boolean
  }

  export type GameRatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "description", ExtArgs["result"]["gameRating"]>
  export type GameRatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | GameRating$gamesArgs<ExtArgs>
    _count?: boolean | GameRatingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameRatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GameRatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GameRatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameRating"
    objects: {
      games: Prisma.$GamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rating: string
      description: string | null
    }, ExtArgs["result"]["gameRating"]>
    composites: {}
  }

  type GameRatingGetPayload<S extends boolean | null | undefined | GameRatingDefaultArgs> = $Result.GetResult<Prisma.$GameRatingPayload, S>

  type GameRatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameRatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameRatingCountAggregateInputType | true
    }

  export interface GameRatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameRating'], meta: { name: 'GameRating' } }
    /**
     * Find zero or one GameRating that matches the filter.
     * @param {GameRatingFindUniqueArgs} args - Arguments to find a GameRating
     * @example
     * // Get one GameRating
     * const gameRating = await prisma.gameRating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameRatingFindUniqueArgs>(args: SelectSubset<T, GameRatingFindUniqueArgs<ExtArgs>>): Prisma__GameRatingClient<$Result.GetResult<Prisma.$GameRatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameRating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameRatingFindUniqueOrThrowArgs} args - Arguments to find a GameRating
     * @example
     * // Get one GameRating
     * const gameRating = await prisma.gameRating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameRatingFindUniqueOrThrowArgs>(args: SelectSubset<T, GameRatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameRatingClient<$Result.GetResult<Prisma.$GameRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameRating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRatingFindFirstArgs} args - Arguments to find a GameRating
     * @example
     * // Get one GameRating
     * const gameRating = await prisma.gameRating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameRatingFindFirstArgs>(args?: SelectSubset<T, GameRatingFindFirstArgs<ExtArgs>>): Prisma__GameRatingClient<$Result.GetResult<Prisma.$GameRatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameRating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRatingFindFirstOrThrowArgs} args - Arguments to find a GameRating
     * @example
     * // Get one GameRating
     * const gameRating = await prisma.gameRating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameRatingFindFirstOrThrowArgs>(args?: SelectSubset<T, GameRatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameRatingClient<$Result.GetResult<Prisma.$GameRatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameRatings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameRatings
     * const gameRatings = await prisma.gameRating.findMany()
     * 
     * // Get first 10 GameRatings
     * const gameRatings = await prisma.gameRating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameRatingWithIdOnly = await prisma.gameRating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameRatingFindManyArgs>(args?: SelectSubset<T, GameRatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameRating.
     * @param {GameRatingCreateArgs} args - Arguments to create a GameRating.
     * @example
     * // Create one GameRating
     * const GameRating = await prisma.gameRating.create({
     *   data: {
     *     // ... data to create a GameRating
     *   }
     * })
     * 
     */
    create<T extends GameRatingCreateArgs>(args: SelectSubset<T, GameRatingCreateArgs<ExtArgs>>): Prisma__GameRatingClient<$Result.GetResult<Prisma.$GameRatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameRatings.
     * @param {GameRatingCreateManyArgs} args - Arguments to create many GameRatings.
     * @example
     * // Create many GameRatings
     * const gameRating = await prisma.gameRating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameRatingCreateManyArgs>(args?: SelectSubset<T, GameRatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameRatings and returns the data saved in the database.
     * @param {GameRatingCreateManyAndReturnArgs} args - Arguments to create many GameRatings.
     * @example
     * // Create many GameRatings
     * const gameRating = await prisma.gameRating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameRatings and only return the `id`
     * const gameRatingWithIdOnly = await prisma.gameRating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameRatingCreateManyAndReturnArgs>(args?: SelectSubset<T, GameRatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameRating.
     * @param {GameRatingDeleteArgs} args - Arguments to delete one GameRating.
     * @example
     * // Delete one GameRating
     * const GameRating = await prisma.gameRating.delete({
     *   where: {
     *     // ... filter to delete one GameRating
     *   }
     * })
     * 
     */
    delete<T extends GameRatingDeleteArgs>(args: SelectSubset<T, GameRatingDeleteArgs<ExtArgs>>): Prisma__GameRatingClient<$Result.GetResult<Prisma.$GameRatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameRating.
     * @param {GameRatingUpdateArgs} args - Arguments to update one GameRating.
     * @example
     * // Update one GameRating
     * const gameRating = await prisma.gameRating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameRatingUpdateArgs>(args: SelectSubset<T, GameRatingUpdateArgs<ExtArgs>>): Prisma__GameRatingClient<$Result.GetResult<Prisma.$GameRatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameRatings.
     * @param {GameRatingDeleteManyArgs} args - Arguments to filter GameRatings to delete.
     * @example
     * // Delete a few GameRatings
     * const { count } = await prisma.gameRating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameRatingDeleteManyArgs>(args?: SelectSubset<T, GameRatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameRatings
     * const gameRating = await prisma.gameRating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameRatingUpdateManyArgs>(args: SelectSubset<T, GameRatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameRatings and returns the data updated in the database.
     * @param {GameRatingUpdateManyAndReturnArgs} args - Arguments to update many GameRatings.
     * @example
     * // Update many GameRatings
     * const gameRating = await prisma.gameRating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameRatings and only return the `id`
     * const gameRatingWithIdOnly = await prisma.gameRating.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameRatingUpdateManyAndReturnArgs>(args: SelectSubset<T, GameRatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameRating.
     * @param {GameRatingUpsertArgs} args - Arguments to update or create a GameRating.
     * @example
     * // Update or create a GameRating
     * const gameRating = await prisma.gameRating.upsert({
     *   create: {
     *     // ... data to create a GameRating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameRating we want to update
     *   }
     * })
     */
    upsert<T extends GameRatingUpsertArgs>(args: SelectSubset<T, GameRatingUpsertArgs<ExtArgs>>): Prisma__GameRatingClient<$Result.GetResult<Prisma.$GameRatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRatingCountArgs} args - Arguments to filter GameRatings to count.
     * @example
     * // Count the number of GameRatings
     * const count = await prisma.gameRating.count({
     *   where: {
     *     // ... the filter for the GameRatings we want to count
     *   }
     * })
    **/
    count<T extends GameRatingCountArgs>(
      args?: Subset<T, GameRatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameRatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameRatingAggregateArgs>(args: Subset<T, GameRatingAggregateArgs>): Prisma.PrismaPromise<GetGameRatingAggregateType<T>>

    /**
     * Group by GameRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRatingGroupByArgs} args - Group by arguments.
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
      T extends GameRatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameRatingGroupByArgs['orderBy'] }
        : { orderBy?: GameRatingGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameRatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameRating model
   */
  readonly fields: GameRatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameRating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameRatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends GameRating$gamesArgs<ExtArgs> = {}>(args?: Subset<T, GameRating$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameRating model
   */
  interface GameRatingFieldRefs {
    readonly id: FieldRef<"GameRating", 'Int'>
    readonly rating: FieldRef<"GameRating", 'String'>
    readonly description: FieldRef<"GameRating", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GameRating findUnique
   */
  export type GameRatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRating
     */
    select?: GameRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRating
     */
    omit?: GameRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRatingInclude<ExtArgs> | null
    /**
     * Filter, which GameRating to fetch.
     */
    where: GameRatingWhereUniqueInput
  }

  /**
   * GameRating findUniqueOrThrow
   */
  export type GameRatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRating
     */
    select?: GameRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRating
     */
    omit?: GameRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRatingInclude<ExtArgs> | null
    /**
     * Filter, which GameRating to fetch.
     */
    where: GameRatingWhereUniqueInput
  }

  /**
   * GameRating findFirst
   */
  export type GameRatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRating
     */
    select?: GameRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRating
     */
    omit?: GameRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRatingInclude<ExtArgs> | null
    /**
     * Filter, which GameRating to fetch.
     */
    where?: GameRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRatings to fetch.
     */
    orderBy?: GameRatingOrderByWithRelationInput | GameRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameRatings.
     */
    cursor?: GameRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameRatings.
     */
    distinct?: GameRatingScalarFieldEnum | GameRatingScalarFieldEnum[]
  }

  /**
   * GameRating findFirstOrThrow
   */
  export type GameRatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRating
     */
    select?: GameRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRating
     */
    omit?: GameRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRatingInclude<ExtArgs> | null
    /**
     * Filter, which GameRating to fetch.
     */
    where?: GameRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRatings to fetch.
     */
    orderBy?: GameRatingOrderByWithRelationInput | GameRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameRatings.
     */
    cursor?: GameRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameRatings.
     */
    distinct?: GameRatingScalarFieldEnum | GameRatingScalarFieldEnum[]
  }

  /**
   * GameRating findMany
   */
  export type GameRatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRating
     */
    select?: GameRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRating
     */
    omit?: GameRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRatingInclude<ExtArgs> | null
    /**
     * Filter, which GameRatings to fetch.
     */
    where?: GameRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRatings to fetch.
     */
    orderBy?: GameRatingOrderByWithRelationInput | GameRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameRatings.
     */
    cursor?: GameRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRatings.
     */
    skip?: number
    distinct?: GameRatingScalarFieldEnum | GameRatingScalarFieldEnum[]
  }

  /**
   * GameRating create
   */
  export type GameRatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRating
     */
    select?: GameRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRating
     */
    omit?: GameRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRatingInclude<ExtArgs> | null
    /**
     * The data needed to create a GameRating.
     */
    data: XOR<GameRatingCreateInput, GameRatingUncheckedCreateInput>
  }

  /**
   * GameRating createMany
   */
  export type GameRatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameRatings.
     */
    data: GameRatingCreateManyInput | GameRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameRating createManyAndReturn
   */
  export type GameRatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRating
     */
    select?: GameRatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameRating
     */
    omit?: GameRatingOmit<ExtArgs> | null
    /**
     * The data used to create many GameRatings.
     */
    data: GameRatingCreateManyInput | GameRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameRating update
   */
  export type GameRatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRating
     */
    select?: GameRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRating
     */
    omit?: GameRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRatingInclude<ExtArgs> | null
    /**
     * The data needed to update a GameRating.
     */
    data: XOR<GameRatingUpdateInput, GameRatingUncheckedUpdateInput>
    /**
     * Choose, which GameRating to update.
     */
    where: GameRatingWhereUniqueInput
  }

  /**
   * GameRating updateMany
   */
  export type GameRatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameRatings.
     */
    data: XOR<GameRatingUpdateManyMutationInput, GameRatingUncheckedUpdateManyInput>
    /**
     * Filter which GameRatings to update
     */
    where?: GameRatingWhereInput
    /**
     * Limit how many GameRatings to update.
     */
    limit?: number
  }

  /**
   * GameRating updateManyAndReturn
   */
  export type GameRatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRating
     */
    select?: GameRatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameRating
     */
    omit?: GameRatingOmit<ExtArgs> | null
    /**
     * The data used to update GameRatings.
     */
    data: XOR<GameRatingUpdateManyMutationInput, GameRatingUncheckedUpdateManyInput>
    /**
     * Filter which GameRatings to update
     */
    where?: GameRatingWhereInput
    /**
     * Limit how many GameRatings to update.
     */
    limit?: number
  }

  /**
   * GameRating upsert
   */
  export type GameRatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRating
     */
    select?: GameRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRating
     */
    omit?: GameRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRatingInclude<ExtArgs> | null
    /**
     * The filter to search for the GameRating to update in case it exists.
     */
    where: GameRatingWhereUniqueInput
    /**
     * In case the GameRating found by the `where` argument doesn't exist, create a new GameRating with this data.
     */
    create: XOR<GameRatingCreateInput, GameRatingUncheckedCreateInput>
    /**
     * In case the GameRating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameRatingUpdateInput, GameRatingUncheckedUpdateInput>
  }

  /**
   * GameRating delete
   */
  export type GameRatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRating
     */
    select?: GameRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRating
     */
    omit?: GameRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRatingInclude<ExtArgs> | null
    /**
     * Filter which GameRating to delete.
     */
    where: GameRatingWhereUniqueInput
  }

  /**
   * GameRating deleteMany
   */
  export type GameRatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameRatings to delete
     */
    where?: GameRatingWhereInput
    /**
     * Limit how many GameRatings to delete.
     */
    limit?: number
  }

  /**
   * GameRating.games
   */
  export type GameRating$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * GameRating without action
   */
  export type GameRatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRating
     */
    select?: GameRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRating
     */
    omit?: GameRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRatingInclude<ExtArgs> | null
  }


  /**
   * Model Platform
   */

  export type AggregatePlatform = {
    _count: PlatformCountAggregateOutputType | null
    _avg: PlatformAvgAggregateOutputType | null
    _sum: PlatformSumAggregateOutputType | null
    _min: PlatformMinAggregateOutputType | null
    _max: PlatformMaxAggregateOutputType | null
  }

  export type PlatformAvgAggregateOutputType = {
    id: number | null
    releaseOrder: number | null
    generation: number | null
    platformLogo: number | null
  }

  export type PlatformSumAggregateOutputType = {
    id: number | null
    releaseOrder: number | null
    generation: number | null
    platformLogo: number | null
  }

  export type PlatformMinAggregateOutputType = {
    id: number | null
    name: string | null
    releaseOrder: number | null
    abbreviation: string | null
    generation: number | null
    slug: string | null
    platformLogo: number | null
  }

  export type PlatformMaxAggregateOutputType = {
    id: number | null
    name: string | null
    releaseOrder: number | null
    abbreviation: string | null
    generation: number | null
    slug: string | null
    platformLogo: number | null
  }

  export type PlatformCountAggregateOutputType = {
    id: number
    name: number
    releaseOrder: number
    abbreviation: number
    generation: number
    slug: number
    platformLogo: number
    _all: number
  }


  export type PlatformAvgAggregateInputType = {
    id?: true
    releaseOrder?: true
    generation?: true
    platformLogo?: true
  }

  export type PlatformSumAggregateInputType = {
    id?: true
    releaseOrder?: true
    generation?: true
    platformLogo?: true
  }

  export type PlatformMinAggregateInputType = {
    id?: true
    name?: true
    releaseOrder?: true
    abbreviation?: true
    generation?: true
    slug?: true
    platformLogo?: true
  }

  export type PlatformMaxAggregateInputType = {
    id?: true
    name?: true
    releaseOrder?: true
    abbreviation?: true
    generation?: true
    slug?: true
    platformLogo?: true
  }

  export type PlatformCountAggregateInputType = {
    id?: true
    name?: true
    releaseOrder?: true
    abbreviation?: true
    generation?: true
    slug?: true
    platformLogo?: true
    _all?: true
  }

  export type PlatformAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platform to aggregate.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Platforms
    **/
    _count?: true | PlatformCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlatformAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlatformSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatformMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatformMaxAggregateInputType
  }

  export type GetPlatformAggregateType<T extends PlatformAggregateArgs> = {
        [P in keyof T & keyof AggregatePlatform]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatform[P]>
      : GetScalarType<T[P], AggregatePlatform[P]>
  }




  export type PlatformGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformWhereInput
    orderBy?: PlatformOrderByWithAggregationInput | PlatformOrderByWithAggregationInput[]
    by: PlatformScalarFieldEnum[] | PlatformScalarFieldEnum
    having?: PlatformScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatformCountAggregateInputType | true
    _avg?: PlatformAvgAggregateInputType
    _sum?: PlatformSumAggregateInputType
    _min?: PlatformMinAggregateInputType
    _max?: PlatformMaxAggregateInputType
  }

  export type PlatformGroupByOutputType = {
    id: number
    name: string
    releaseOrder: number | null
    abbreviation: string | null
    generation: number | null
    slug: string
    platformLogo: number | null
    _count: PlatformCountAggregateOutputType | null
    _avg: PlatformAvgAggregateOutputType | null
    _sum: PlatformSumAggregateOutputType | null
    _min: PlatformMinAggregateOutputType | null
    _max: PlatformMaxAggregateOutputType | null
  }

  type GetPlatformGroupByPayload<T extends PlatformGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatformGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatformGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatformGroupByOutputType[P]>
            : GetScalarType<T[P], PlatformGroupByOutputType[P]>
        }
      >
    >


  export type PlatformSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    releaseOrder?: boolean
    abbreviation?: boolean
    generation?: boolean
    slug?: boolean
    platformLogo?: boolean
    games?: boolean | Platform$gamesArgs<ExtArgs>
    _count?: boolean | PlatformCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["platform"]>

  export type PlatformSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    releaseOrder?: boolean
    abbreviation?: boolean
    generation?: boolean
    slug?: boolean
    platformLogo?: boolean
  }, ExtArgs["result"]["platform"]>

  export type PlatformSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    releaseOrder?: boolean
    abbreviation?: boolean
    generation?: boolean
    slug?: boolean
    platformLogo?: boolean
  }, ExtArgs["result"]["platform"]>

  export type PlatformSelectScalar = {
    id?: boolean
    name?: boolean
    releaseOrder?: boolean
    abbreviation?: boolean
    generation?: boolean
    slug?: boolean
    platformLogo?: boolean
  }

  export type PlatformOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "releaseOrder" | "abbreviation" | "generation" | "slug" | "platformLogo", ExtArgs["result"]["platform"]>
  export type PlatformInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | Platform$gamesArgs<ExtArgs>
    _count?: boolean | PlatformCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlatformIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlatformIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlatformPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Platform"
    objects: {
      games: Prisma.$GamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      releaseOrder: number | null
      abbreviation: string | null
      generation: number | null
      slug: string
      platformLogo: number | null
    }, ExtArgs["result"]["platform"]>
    composites: {}
  }

  type PlatformGetPayload<S extends boolean | null | undefined | PlatformDefaultArgs> = $Result.GetResult<Prisma.$PlatformPayload, S>

  type PlatformCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlatformFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlatformCountAggregateInputType | true
    }

  export interface PlatformDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Platform'], meta: { name: 'Platform' } }
    /**
     * Find zero or one Platform that matches the filter.
     * @param {PlatformFindUniqueArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatformFindUniqueArgs>(args: SelectSubset<T, PlatformFindUniqueArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Platform that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlatformFindUniqueOrThrowArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatformFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatformFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platform that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindFirstArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatformFindFirstArgs>(args?: SelectSubset<T, PlatformFindFirstArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platform that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindFirstOrThrowArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatformFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatformFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Platforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Platforms
     * const platforms = await prisma.platform.findMany()
     * 
     * // Get first 10 Platforms
     * const platforms = await prisma.platform.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const platformWithIdOnly = await prisma.platform.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlatformFindManyArgs>(args?: SelectSubset<T, PlatformFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Platform.
     * @param {PlatformCreateArgs} args - Arguments to create a Platform.
     * @example
     * // Create one Platform
     * const Platform = await prisma.platform.create({
     *   data: {
     *     // ... data to create a Platform
     *   }
     * })
     * 
     */
    create<T extends PlatformCreateArgs>(args: SelectSubset<T, PlatformCreateArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Platforms.
     * @param {PlatformCreateManyArgs} args - Arguments to create many Platforms.
     * @example
     * // Create many Platforms
     * const platform = await prisma.platform.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatformCreateManyArgs>(args?: SelectSubset<T, PlatformCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Platforms and returns the data saved in the database.
     * @param {PlatformCreateManyAndReturnArgs} args - Arguments to create many Platforms.
     * @example
     * // Create many Platforms
     * const platform = await prisma.platform.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Platforms and only return the `id`
     * const platformWithIdOnly = await prisma.platform.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlatformCreateManyAndReturnArgs>(args?: SelectSubset<T, PlatformCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Platform.
     * @param {PlatformDeleteArgs} args - Arguments to delete one Platform.
     * @example
     * // Delete one Platform
     * const Platform = await prisma.platform.delete({
     *   where: {
     *     // ... filter to delete one Platform
     *   }
     * })
     * 
     */
    delete<T extends PlatformDeleteArgs>(args: SelectSubset<T, PlatformDeleteArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Platform.
     * @param {PlatformUpdateArgs} args - Arguments to update one Platform.
     * @example
     * // Update one Platform
     * const platform = await prisma.platform.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatformUpdateArgs>(args: SelectSubset<T, PlatformUpdateArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Platforms.
     * @param {PlatformDeleteManyArgs} args - Arguments to filter Platforms to delete.
     * @example
     * // Delete a few Platforms
     * const { count } = await prisma.platform.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatformDeleteManyArgs>(args?: SelectSubset<T, PlatformDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Platforms
     * const platform = await prisma.platform.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatformUpdateManyArgs>(args: SelectSubset<T, PlatformUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platforms and returns the data updated in the database.
     * @param {PlatformUpdateManyAndReturnArgs} args - Arguments to update many Platforms.
     * @example
     * // Update many Platforms
     * const platform = await prisma.platform.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Platforms and only return the `id`
     * const platformWithIdOnly = await prisma.platform.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlatformUpdateManyAndReturnArgs>(args: SelectSubset<T, PlatformUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Platform.
     * @param {PlatformUpsertArgs} args - Arguments to update or create a Platform.
     * @example
     * // Update or create a Platform
     * const platform = await prisma.platform.upsert({
     *   create: {
     *     // ... data to create a Platform
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Platform we want to update
     *   }
     * })
     */
    upsert<T extends PlatformUpsertArgs>(args: SelectSubset<T, PlatformUpsertArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformCountArgs} args - Arguments to filter Platforms to count.
     * @example
     * // Count the number of Platforms
     * const count = await prisma.platform.count({
     *   where: {
     *     // ... the filter for the Platforms we want to count
     *   }
     * })
    **/
    count<T extends PlatformCountArgs>(
      args?: Subset<T, PlatformCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatformCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Platform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlatformAggregateArgs>(args: Subset<T, PlatformAggregateArgs>): Prisma.PrismaPromise<GetPlatformAggregateType<T>>

    /**
     * Group by Platform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformGroupByArgs} args - Group by arguments.
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
      T extends PlatformGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatformGroupByArgs['orderBy'] }
        : { orderBy?: PlatformGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlatformGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatformGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Platform model
   */
  readonly fields: PlatformFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Platform.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatformClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends Platform$gamesArgs<ExtArgs> = {}>(args?: Subset<T, Platform$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Platform model
   */
  interface PlatformFieldRefs {
    readonly id: FieldRef<"Platform", 'Int'>
    readonly name: FieldRef<"Platform", 'String'>
    readonly releaseOrder: FieldRef<"Platform", 'Int'>
    readonly abbreviation: FieldRef<"Platform", 'String'>
    readonly generation: FieldRef<"Platform", 'Int'>
    readonly slug: FieldRef<"Platform", 'String'>
    readonly platformLogo: FieldRef<"Platform", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Platform findUnique
   */
  export type PlatformFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform findUniqueOrThrow
   */
  export type PlatformFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform findFirst
   */
  export type PlatformFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platforms.
     */
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform findFirstOrThrow
   */
  export type PlatformFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platforms.
     */
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform findMany
   */
  export type PlatformFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platforms to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform create
   */
  export type PlatformCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The data needed to create a Platform.
     */
    data: XOR<PlatformCreateInput, PlatformUncheckedCreateInput>
  }

  /**
   * Platform createMany
   */
  export type PlatformCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Platforms.
     */
    data: PlatformCreateManyInput | PlatformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Platform createManyAndReturn
   */
  export type PlatformCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * The data used to create many Platforms.
     */
    data: PlatformCreateManyInput | PlatformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Platform update
   */
  export type PlatformUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The data needed to update a Platform.
     */
    data: XOR<PlatformUpdateInput, PlatformUncheckedUpdateInput>
    /**
     * Choose, which Platform to update.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform updateMany
   */
  export type PlatformUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Platforms.
     */
    data: XOR<PlatformUpdateManyMutationInput, PlatformUncheckedUpdateManyInput>
    /**
     * Filter which Platforms to update
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to update.
     */
    limit?: number
  }

  /**
   * Platform updateManyAndReturn
   */
  export type PlatformUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * The data used to update Platforms.
     */
    data: XOR<PlatformUpdateManyMutationInput, PlatformUncheckedUpdateManyInput>
    /**
     * Filter which Platforms to update
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to update.
     */
    limit?: number
  }

  /**
   * Platform upsert
   */
  export type PlatformUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The filter to search for the Platform to update in case it exists.
     */
    where: PlatformWhereUniqueInput
    /**
     * In case the Platform found by the `where` argument doesn't exist, create a new Platform with this data.
     */
    create: XOR<PlatformCreateInput, PlatformUncheckedCreateInput>
    /**
     * In case the Platform was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatformUpdateInput, PlatformUncheckedUpdateInput>
  }

  /**
   * Platform delete
   */
  export type PlatformDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter which Platform to delete.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform deleteMany
   */
  export type PlatformDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platforms to delete
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to delete.
     */
    limit?: number
  }

  /**
   * Platform.games
   */
  export type Platform$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Platform without action
   */
  export type PlatformDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
  }


  /**
   * Model Developers
   */

  export type AggregateDevelopers = {
    _count: DevelopersCountAggregateOutputType | null
    _avg: DevelopersAvgAggregateOutputType | null
    _sum: DevelopersSumAggregateOutputType | null
    _min: DevelopersMinAggregateOutputType | null
    _max: DevelopersMaxAggregateOutputType | null
  }

  export type DevelopersAvgAggregateOutputType = {
    id: number | null
  }

  export type DevelopersSumAggregateOutputType = {
    id: number | null
  }

  export type DevelopersMinAggregateOutputType = {
    id: number | null
    name: string | null
    logoUrl: string | null
    country: string | null
  }

  export type DevelopersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    logoUrl: string | null
    country: string | null
  }

  export type DevelopersCountAggregateOutputType = {
    id: number
    name: number
    logoUrl: number
    country: number
    _all: number
  }


  export type DevelopersAvgAggregateInputType = {
    id?: true
  }

  export type DevelopersSumAggregateInputType = {
    id?: true
  }

  export type DevelopersMinAggregateInputType = {
    id?: true
    name?: true
    logoUrl?: true
    country?: true
  }

  export type DevelopersMaxAggregateInputType = {
    id?: true
    name?: true
    logoUrl?: true
    country?: true
  }

  export type DevelopersCountAggregateInputType = {
    id?: true
    name?: true
    logoUrl?: true
    country?: true
    _all?: true
  }

  export type DevelopersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Developers to aggregate.
     */
    where?: DevelopersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DevelopersOrderByWithRelationInput | DevelopersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DevelopersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Developers
    **/
    _count?: true | DevelopersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DevelopersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DevelopersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DevelopersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DevelopersMaxAggregateInputType
  }

  export type GetDevelopersAggregateType<T extends DevelopersAggregateArgs> = {
        [P in keyof T & keyof AggregateDevelopers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevelopers[P]>
      : GetScalarType<T[P], AggregateDevelopers[P]>
  }




  export type DevelopersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DevelopersWhereInput
    orderBy?: DevelopersOrderByWithAggregationInput | DevelopersOrderByWithAggregationInput[]
    by: DevelopersScalarFieldEnum[] | DevelopersScalarFieldEnum
    having?: DevelopersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DevelopersCountAggregateInputType | true
    _avg?: DevelopersAvgAggregateInputType
    _sum?: DevelopersSumAggregateInputType
    _min?: DevelopersMinAggregateInputType
    _max?: DevelopersMaxAggregateInputType
  }

  export type DevelopersGroupByOutputType = {
    id: number
    name: string | null
    logoUrl: string | null
    country: string | null
    _count: DevelopersCountAggregateOutputType | null
    _avg: DevelopersAvgAggregateOutputType | null
    _sum: DevelopersSumAggregateOutputType | null
    _min: DevelopersMinAggregateOutputType | null
    _max: DevelopersMaxAggregateOutputType | null
  }

  type GetDevelopersGroupByPayload<T extends DevelopersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DevelopersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DevelopersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DevelopersGroupByOutputType[P]>
            : GetScalarType<T[P], DevelopersGroupByOutputType[P]>
        }
      >
    >


  export type DevelopersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logoUrl?: boolean
    country?: boolean
    games?: boolean | Developers$gamesArgs<ExtArgs>
    _count?: boolean | DevelopersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["developers"]>

  export type DevelopersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logoUrl?: boolean
    country?: boolean
  }, ExtArgs["result"]["developers"]>

  export type DevelopersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logoUrl?: boolean
    country?: boolean
  }, ExtArgs["result"]["developers"]>

  export type DevelopersSelectScalar = {
    id?: boolean
    name?: boolean
    logoUrl?: boolean
    country?: boolean
  }

  export type DevelopersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logoUrl" | "country", ExtArgs["result"]["developers"]>
  export type DevelopersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | Developers$gamesArgs<ExtArgs>
    _count?: boolean | DevelopersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DevelopersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DevelopersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DevelopersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Developers"
    objects: {
      games: Prisma.$GamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      logoUrl: string | null
      country: string | null
    }, ExtArgs["result"]["developers"]>
    composites: {}
  }

  type DevelopersGetPayload<S extends boolean | null | undefined | DevelopersDefaultArgs> = $Result.GetResult<Prisma.$DevelopersPayload, S>

  type DevelopersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DevelopersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DevelopersCountAggregateInputType | true
    }

  export interface DevelopersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Developers'], meta: { name: 'Developers' } }
    /**
     * Find zero or one Developers that matches the filter.
     * @param {DevelopersFindUniqueArgs} args - Arguments to find a Developers
     * @example
     * // Get one Developers
     * const developers = await prisma.developers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DevelopersFindUniqueArgs>(args: SelectSubset<T, DevelopersFindUniqueArgs<ExtArgs>>): Prisma__DevelopersClient<$Result.GetResult<Prisma.$DevelopersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Developers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DevelopersFindUniqueOrThrowArgs} args - Arguments to find a Developers
     * @example
     * // Get one Developers
     * const developers = await prisma.developers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DevelopersFindUniqueOrThrowArgs>(args: SelectSubset<T, DevelopersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DevelopersClient<$Result.GetResult<Prisma.$DevelopersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Developers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevelopersFindFirstArgs} args - Arguments to find a Developers
     * @example
     * // Get one Developers
     * const developers = await prisma.developers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DevelopersFindFirstArgs>(args?: SelectSubset<T, DevelopersFindFirstArgs<ExtArgs>>): Prisma__DevelopersClient<$Result.GetResult<Prisma.$DevelopersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Developers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevelopersFindFirstOrThrowArgs} args - Arguments to find a Developers
     * @example
     * // Get one Developers
     * const developers = await prisma.developers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DevelopersFindFirstOrThrowArgs>(args?: SelectSubset<T, DevelopersFindFirstOrThrowArgs<ExtArgs>>): Prisma__DevelopersClient<$Result.GetResult<Prisma.$DevelopersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Developers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevelopersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Developers
     * const developers = await prisma.developers.findMany()
     * 
     * // Get first 10 Developers
     * const developers = await prisma.developers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const developersWithIdOnly = await prisma.developers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DevelopersFindManyArgs>(args?: SelectSubset<T, DevelopersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevelopersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Developers.
     * @param {DevelopersCreateArgs} args - Arguments to create a Developers.
     * @example
     * // Create one Developers
     * const Developers = await prisma.developers.create({
     *   data: {
     *     // ... data to create a Developers
     *   }
     * })
     * 
     */
    create<T extends DevelopersCreateArgs>(args: SelectSubset<T, DevelopersCreateArgs<ExtArgs>>): Prisma__DevelopersClient<$Result.GetResult<Prisma.$DevelopersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Developers.
     * @param {DevelopersCreateManyArgs} args - Arguments to create many Developers.
     * @example
     * // Create many Developers
     * const developers = await prisma.developers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DevelopersCreateManyArgs>(args?: SelectSubset<T, DevelopersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Developers and returns the data saved in the database.
     * @param {DevelopersCreateManyAndReturnArgs} args - Arguments to create many Developers.
     * @example
     * // Create many Developers
     * const developers = await prisma.developers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Developers and only return the `id`
     * const developersWithIdOnly = await prisma.developers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DevelopersCreateManyAndReturnArgs>(args?: SelectSubset<T, DevelopersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevelopersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Developers.
     * @param {DevelopersDeleteArgs} args - Arguments to delete one Developers.
     * @example
     * // Delete one Developers
     * const Developers = await prisma.developers.delete({
     *   where: {
     *     // ... filter to delete one Developers
     *   }
     * })
     * 
     */
    delete<T extends DevelopersDeleteArgs>(args: SelectSubset<T, DevelopersDeleteArgs<ExtArgs>>): Prisma__DevelopersClient<$Result.GetResult<Prisma.$DevelopersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Developers.
     * @param {DevelopersUpdateArgs} args - Arguments to update one Developers.
     * @example
     * // Update one Developers
     * const developers = await prisma.developers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DevelopersUpdateArgs>(args: SelectSubset<T, DevelopersUpdateArgs<ExtArgs>>): Prisma__DevelopersClient<$Result.GetResult<Prisma.$DevelopersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Developers.
     * @param {DevelopersDeleteManyArgs} args - Arguments to filter Developers to delete.
     * @example
     * // Delete a few Developers
     * const { count } = await prisma.developers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DevelopersDeleteManyArgs>(args?: SelectSubset<T, DevelopersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Developers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevelopersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Developers
     * const developers = await prisma.developers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DevelopersUpdateManyArgs>(args: SelectSubset<T, DevelopersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Developers and returns the data updated in the database.
     * @param {DevelopersUpdateManyAndReturnArgs} args - Arguments to update many Developers.
     * @example
     * // Update many Developers
     * const developers = await prisma.developers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Developers and only return the `id`
     * const developersWithIdOnly = await prisma.developers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DevelopersUpdateManyAndReturnArgs>(args: SelectSubset<T, DevelopersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevelopersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Developers.
     * @param {DevelopersUpsertArgs} args - Arguments to update or create a Developers.
     * @example
     * // Update or create a Developers
     * const developers = await prisma.developers.upsert({
     *   create: {
     *     // ... data to create a Developers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Developers we want to update
     *   }
     * })
     */
    upsert<T extends DevelopersUpsertArgs>(args: SelectSubset<T, DevelopersUpsertArgs<ExtArgs>>): Prisma__DevelopersClient<$Result.GetResult<Prisma.$DevelopersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Developers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevelopersCountArgs} args - Arguments to filter Developers to count.
     * @example
     * // Count the number of Developers
     * const count = await prisma.developers.count({
     *   where: {
     *     // ... the filter for the Developers we want to count
     *   }
     * })
    **/
    count<T extends DevelopersCountArgs>(
      args?: Subset<T, DevelopersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DevelopersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Developers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevelopersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DevelopersAggregateArgs>(args: Subset<T, DevelopersAggregateArgs>): Prisma.PrismaPromise<GetDevelopersAggregateType<T>>

    /**
     * Group by Developers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevelopersGroupByArgs} args - Group by arguments.
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
      T extends DevelopersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DevelopersGroupByArgs['orderBy'] }
        : { orderBy?: DevelopersGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DevelopersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevelopersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Developers model
   */
  readonly fields: DevelopersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Developers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DevelopersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends Developers$gamesArgs<ExtArgs> = {}>(args?: Subset<T, Developers$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Developers model
   */
  interface DevelopersFieldRefs {
    readonly id: FieldRef<"Developers", 'Int'>
    readonly name: FieldRef<"Developers", 'String'>
    readonly logoUrl: FieldRef<"Developers", 'String'>
    readonly country: FieldRef<"Developers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Developers findUnique
   */
  export type DevelopersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developers
     */
    select?: DevelopersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developers
     */
    omit?: DevelopersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevelopersInclude<ExtArgs> | null
    /**
     * Filter, which Developers to fetch.
     */
    where: DevelopersWhereUniqueInput
  }

  /**
   * Developers findUniqueOrThrow
   */
  export type DevelopersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developers
     */
    select?: DevelopersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developers
     */
    omit?: DevelopersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevelopersInclude<ExtArgs> | null
    /**
     * Filter, which Developers to fetch.
     */
    where: DevelopersWhereUniqueInput
  }

  /**
   * Developers findFirst
   */
  export type DevelopersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developers
     */
    select?: DevelopersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developers
     */
    omit?: DevelopersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevelopersInclude<ExtArgs> | null
    /**
     * Filter, which Developers to fetch.
     */
    where?: DevelopersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DevelopersOrderByWithRelationInput | DevelopersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Developers.
     */
    cursor?: DevelopersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Developers.
     */
    distinct?: DevelopersScalarFieldEnum | DevelopersScalarFieldEnum[]
  }

  /**
   * Developers findFirstOrThrow
   */
  export type DevelopersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developers
     */
    select?: DevelopersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developers
     */
    omit?: DevelopersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevelopersInclude<ExtArgs> | null
    /**
     * Filter, which Developers to fetch.
     */
    where?: DevelopersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DevelopersOrderByWithRelationInput | DevelopersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Developers.
     */
    cursor?: DevelopersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Developers.
     */
    distinct?: DevelopersScalarFieldEnum | DevelopersScalarFieldEnum[]
  }

  /**
   * Developers findMany
   */
  export type DevelopersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developers
     */
    select?: DevelopersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developers
     */
    omit?: DevelopersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevelopersInclude<ExtArgs> | null
    /**
     * Filter, which Developers to fetch.
     */
    where?: DevelopersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DevelopersOrderByWithRelationInput | DevelopersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Developers.
     */
    cursor?: DevelopersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    distinct?: DevelopersScalarFieldEnum | DevelopersScalarFieldEnum[]
  }

  /**
   * Developers create
   */
  export type DevelopersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developers
     */
    select?: DevelopersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developers
     */
    omit?: DevelopersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevelopersInclude<ExtArgs> | null
    /**
     * The data needed to create a Developers.
     */
    data: XOR<DevelopersCreateInput, DevelopersUncheckedCreateInput>
  }

  /**
   * Developers createMany
   */
  export type DevelopersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Developers.
     */
    data: DevelopersCreateManyInput | DevelopersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Developers createManyAndReturn
   */
  export type DevelopersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developers
     */
    select?: DevelopersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Developers
     */
    omit?: DevelopersOmit<ExtArgs> | null
    /**
     * The data used to create many Developers.
     */
    data: DevelopersCreateManyInput | DevelopersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Developers update
   */
  export type DevelopersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developers
     */
    select?: DevelopersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developers
     */
    omit?: DevelopersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevelopersInclude<ExtArgs> | null
    /**
     * The data needed to update a Developers.
     */
    data: XOR<DevelopersUpdateInput, DevelopersUncheckedUpdateInput>
    /**
     * Choose, which Developers to update.
     */
    where: DevelopersWhereUniqueInput
  }

  /**
   * Developers updateMany
   */
  export type DevelopersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Developers.
     */
    data: XOR<DevelopersUpdateManyMutationInput, DevelopersUncheckedUpdateManyInput>
    /**
     * Filter which Developers to update
     */
    where?: DevelopersWhereInput
    /**
     * Limit how many Developers to update.
     */
    limit?: number
  }

  /**
   * Developers updateManyAndReturn
   */
  export type DevelopersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developers
     */
    select?: DevelopersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Developers
     */
    omit?: DevelopersOmit<ExtArgs> | null
    /**
     * The data used to update Developers.
     */
    data: XOR<DevelopersUpdateManyMutationInput, DevelopersUncheckedUpdateManyInput>
    /**
     * Filter which Developers to update
     */
    where?: DevelopersWhereInput
    /**
     * Limit how many Developers to update.
     */
    limit?: number
  }

  /**
   * Developers upsert
   */
  export type DevelopersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developers
     */
    select?: DevelopersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developers
     */
    omit?: DevelopersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevelopersInclude<ExtArgs> | null
    /**
     * The filter to search for the Developers to update in case it exists.
     */
    where: DevelopersWhereUniqueInput
    /**
     * In case the Developers found by the `where` argument doesn't exist, create a new Developers with this data.
     */
    create: XOR<DevelopersCreateInput, DevelopersUncheckedCreateInput>
    /**
     * In case the Developers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DevelopersUpdateInput, DevelopersUncheckedUpdateInput>
  }

  /**
   * Developers delete
   */
  export type DevelopersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developers
     */
    select?: DevelopersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developers
     */
    omit?: DevelopersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevelopersInclude<ExtArgs> | null
    /**
     * Filter which Developers to delete.
     */
    where: DevelopersWhereUniqueInput
  }

  /**
   * Developers deleteMany
   */
  export type DevelopersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Developers to delete
     */
    where?: DevelopersWhereInput
    /**
     * Limit how many Developers to delete.
     */
    limit?: number
  }

  /**
   * Developers.games
   */
  export type Developers$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Developers without action
   */
  export type DevelopersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developers
     */
    select?: DevelopersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Developers
     */
    omit?: DevelopersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevelopersInclude<ExtArgs> | null
  }


  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreAvgAggregateOutputType = {
    id: number | null
    igdbId: number | null
  }

  export type GenreSumAggregateOutputType = {
    id: number | null
    igdbId: number | null
  }

  export type GenreMinAggregateOutputType = {
    id: number | null
    igdbId: number | null
    name: string | null
    slug: string | null
  }

  export type GenreMaxAggregateOutputType = {
    id: number | null
    igdbId: number | null
    name: string | null
    slug: string | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    igdbId: number
    name: number
    slug: number
    _all: number
  }


  export type GenreAvgAggregateInputType = {
    id?: true
    igdbId?: true
  }

  export type GenreSumAggregateInputType = {
    id?: true
    igdbId?: true
  }

  export type GenreMinAggregateInputType = {
    id?: true
    igdbId?: true
    name?: true
    slug?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    igdbId?: true
    name?: true
    slug?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    igdbId?: true
    name?: true
    slug?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _avg?: GenreAvgAggregateInputType
    _sum?: GenreSumAggregateInputType
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: number
    igdbId: number
    name: string | null
    slug: string | null
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    igdbId?: boolean
    name?: boolean
    slug?: boolean
    games?: boolean | Genre$gamesArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    igdbId?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    igdbId?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    id?: boolean
    igdbId?: boolean
    name?: boolean
    slug?: boolean
  }

  export type GenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "igdbId" | "name" | "slug", ExtArgs["result"]["genre"]>
  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | Genre$gamesArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      games: Prisma.$GamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      igdbId: number
      name: string | null
      slug: string | null
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreFindUniqueArgs>(args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreFindFirstArgs>(args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenreFindManyArgs>(args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends GenreCreateArgs>(args: SelectSubset<T, GenreCreateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreCreateManyArgs>(args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {GenreCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenreCreateManyAndReturnArgs>(args?: SelectSubset<T, GenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends GenreDeleteArgs>(args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreUpdateArgs>(args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreDeleteManyArgs>(args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreUpdateManyArgs>(args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {GenreUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GenreUpdateManyAndReturnArgs>(args: SelectSubset<T, GenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends GenreUpsertArgs>(args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
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
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends Genre$gamesArgs<ExtArgs> = {}>(args?: Subset<T, Genre$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Genre model
   */
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'Int'>
    readonly igdbId: FieldRef<"Genre", 'Int'>
    readonly name: FieldRef<"Genre", 'String'>
    readonly slug: FieldRef<"Genre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }

  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre createManyAndReturn
   */
  export type GenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre updateManyAndReturn
   */
  export type GenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }

  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to delete.
     */
    limit?: number
  }

  /**
   * Genre.games
   */
  export type Genre$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
  }


  /**
   * Model Cover
   */

  export type AggregateCover = {
    _count: CoverCountAggregateOutputType | null
    _avg: CoverAvgAggregateOutputType | null
    _sum: CoverSumAggregateOutputType | null
    _min: CoverMinAggregateOutputType | null
    _max: CoverMaxAggregateOutputType | null
  }

  export type CoverAvgAggregateOutputType = {
    id: number | null
    igdbId: number | null
    height: number | null
    width: number | null
    gameId: number | null
  }

  export type CoverSumAggregateOutputType = {
    id: number | null
    igdbId: number | null
    height: number | null
    width: number | null
    gameId: number | null
  }

  export type CoverMinAggregateOutputType = {
    id: number | null
    igdbId: number | null
    imageId: string | null
    url: string | null
    height: number | null
    width: number | null
    gameId: number | null
  }

  export type CoverMaxAggregateOutputType = {
    id: number | null
    igdbId: number | null
    imageId: string | null
    url: string | null
    height: number | null
    width: number | null
    gameId: number | null
  }

  export type CoverCountAggregateOutputType = {
    id: number
    igdbId: number
    imageId: number
    url: number
    height: number
    width: number
    gameId: number
    _all: number
  }


  export type CoverAvgAggregateInputType = {
    id?: true
    igdbId?: true
    height?: true
    width?: true
    gameId?: true
  }

  export type CoverSumAggregateInputType = {
    id?: true
    igdbId?: true
    height?: true
    width?: true
    gameId?: true
  }

  export type CoverMinAggregateInputType = {
    id?: true
    igdbId?: true
    imageId?: true
    url?: true
    height?: true
    width?: true
    gameId?: true
  }

  export type CoverMaxAggregateInputType = {
    id?: true
    igdbId?: true
    imageId?: true
    url?: true
    height?: true
    width?: true
    gameId?: true
  }

  export type CoverCountAggregateInputType = {
    id?: true
    igdbId?: true
    imageId?: true
    url?: true
    height?: true
    width?: true
    gameId?: true
    _all?: true
  }

  export type CoverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cover to aggregate.
     */
    where?: CoverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Covers to fetch.
     */
    orderBy?: CoverOrderByWithRelationInput | CoverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Covers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Covers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Covers
    **/
    _count?: true | CoverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoverMaxAggregateInputType
  }

  export type GetCoverAggregateType<T extends CoverAggregateArgs> = {
        [P in keyof T & keyof AggregateCover]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCover[P]>
      : GetScalarType<T[P], AggregateCover[P]>
  }




  export type CoverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoverWhereInput
    orderBy?: CoverOrderByWithAggregationInput | CoverOrderByWithAggregationInput[]
    by: CoverScalarFieldEnum[] | CoverScalarFieldEnum
    having?: CoverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoverCountAggregateInputType | true
    _avg?: CoverAvgAggregateInputType
    _sum?: CoverSumAggregateInputType
    _min?: CoverMinAggregateInputType
    _max?: CoverMaxAggregateInputType
  }

  export type CoverGroupByOutputType = {
    id: number
    igdbId: number
    imageId: string | null
    url: string | null
    height: number | null
    width: number | null
    gameId: number
    _count: CoverCountAggregateOutputType | null
    _avg: CoverAvgAggregateOutputType | null
    _sum: CoverSumAggregateOutputType | null
    _min: CoverMinAggregateOutputType | null
    _max: CoverMaxAggregateOutputType | null
  }

  type GetCoverGroupByPayload<T extends CoverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoverGroupByOutputType[P]>
            : GetScalarType<T[P], CoverGroupByOutputType[P]>
        }
      >
    >


  export type CoverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    igdbId?: boolean
    imageId?: boolean
    url?: boolean
    height?: boolean
    width?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cover"]>

  export type CoverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    igdbId?: boolean
    imageId?: boolean
    url?: boolean
    height?: boolean
    width?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cover"]>

  export type CoverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    igdbId?: boolean
    imageId?: boolean
    url?: boolean
    height?: boolean
    width?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cover"]>

  export type CoverSelectScalar = {
    id?: boolean
    igdbId?: boolean
    imageId?: boolean
    url?: boolean
    height?: boolean
    width?: boolean
    gameId?: boolean
  }

  export type CoverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "igdbId" | "imageId" | "url" | "height" | "width" | "gameId", ExtArgs["result"]["cover"]>
  export type CoverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type CoverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type CoverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $CoverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cover"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      igdbId: number
      imageId: string | null
      url: string | null
      height: number | null
      width: number | null
      gameId: number
    }, ExtArgs["result"]["cover"]>
    composites: {}
  }

  type CoverGetPayload<S extends boolean | null | undefined | CoverDefaultArgs> = $Result.GetResult<Prisma.$CoverPayload, S>

  type CoverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoverCountAggregateInputType | true
    }

  export interface CoverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cover'], meta: { name: 'Cover' } }
    /**
     * Find zero or one Cover that matches the filter.
     * @param {CoverFindUniqueArgs} args - Arguments to find a Cover
     * @example
     * // Get one Cover
     * const cover = await prisma.cover.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoverFindUniqueArgs>(args: SelectSubset<T, CoverFindUniqueArgs<ExtArgs>>): Prisma__CoverClient<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cover that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoverFindUniqueOrThrowArgs} args - Arguments to find a Cover
     * @example
     * // Get one Cover
     * const cover = await prisma.cover.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoverFindUniqueOrThrowArgs>(args: SelectSubset<T, CoverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoverClient<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cover that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverFindFirstArgs} args - Arguments to find a Cover
     * @example
     * // Get one Cover
     * const cover = await prisma.cover.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoverFindFirstArgs>(args?: SelectSubset<T, CoverFindFirstArgs<ExtArgs>>): Prisma__CoverClient<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cover that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverFindFirstOrThrowArgs} args - Arguments to find a Cover
     * @example
     * // Get one Cover
     * const cover = await prisma.cover.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoverFindFirstOrThrowArgs>(args?: SelectSubset<T, CoverFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoverClient<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Covers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Covers
     * const covers = await prisma.cover.findMany()
     * 
     * // Get first 10 Covers
     * const covers = await prisma.cover.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coverWithIdOnly = await prisma.cover.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoverFindManyArgs>(args?: SelectSubset<T, CoverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cover.
     * @param {CoverCreateArgs} args - Arguments to create a Cover.
     * @example
     * // Create one Cover
     * const Cover = await prisma.cover.create({
     *   data: {
     *     // ... data to create a Cover
     *   }
     * })
     * 
     */
    create<T extends CoverCreateArgs>(args: SelectSubset<T, CoverCreateArgs<ExtArgs>>): Prisma__CoverClient<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Covers.
     * @param {CoverCreateManyArgs} args - Arguments to create many Covers.
     * @example
     * // Create many Covers
     * const cover = await prisma.cover.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoverCreateManyArgs>(args?: SelectSubset<T, CoverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Covers and returns the data saved in the database.
     * @param {CoverCreateManyAndReturnArgs} args - Arguments to create many Covers.
     * @example
     * // Create many Covers
     * const cover = await prisma.cover.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Covers and only return the `id`
     * const coverWithIdOnly = await prisma.cover.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoverCreateManyAndReturnArgs>(args?: SelectSubset<T, CoverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cover.
     * @param {CoverDeleteArgs} args - Arguments to delete one Cover.
     * @example
     * // Delete one Cover
     * const Cover = await prisma.cover.delete({
     *   where: {
     *     // ... filter to delete one Cover
     *   }
     * })
     * 
     */
    delete<T extends CoverDeleteArgs>(args: SelectSubset<T, CoverDeleteArgs<ExtArgs>>): Prisma__CoverClient<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cover.
     * @param {CoverUpdateArgs} args - Arguments to update one Cover.
     * @example
     * // Update one Cover
     * const cover = await prisma.cover.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoverUpdateArgs>(args: SelectSubset<T, CoverUpdateArgs<ExtArgs>>): Prisma__CoverClient<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Covers.
     * @param {CoverDeleteManyArgs} args - Arguments to filter Covers to delete.
     * @example
     * // Delete a few Covers
     * const { count } = await prisma.cover.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoverDeleteManyArgs>(args?: SelectSubset<T, CoverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Covers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Covers
     * const cover = await prisma.cover.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoverUpdateManyArgs>(args: SelectSubset<T, CoverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Covers and returns the data updated in the database.
     * @param {CoverUpdateManyAndReturnArgs} args - Arguments to update many Covers.
     * @example
     * // Update many Covers
     * const cover = await prisma.cover.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Covers and only return the `id`
     * const coverWithIdOnly = await prisma.cover.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoverUpdateManyAndReturnArgs>(args: SelectSubset<T, CoverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cover.
     * @param {CoverUpsertArgs} args - Arguments to update or create a Cover.
     * @example
     * // Update or create a Cover
     * const cover = await prisma.cover.upsert({
     *   create: {
     *     // ... data to create a Cover
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cover we want to update
     *   }
     * })
     */
    upsert<T extends CoverUpsertArgs>(args: SelectSubset<T, CoverUpsertArgs<ExtArgs>>): Prisma__CoverClient<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Covers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverCountArgs} args - Arguments to filter Covers to count.
     * @example
     * // Count the number of Covers
     * const count = await prisma.cover.count({
     *   where: {
     *     // ... the filter for the Covers we want to count
     *   }
     * })
    **/
    count<T extends CoverCountArgs>(
      args?: Subset<T, CoverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cover.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoverAggregateArgs>(args: Subset<T, CoverAggregateArgs>): Prisma.PrismaPromise<GetCoverAggregateType<T>>

    /**
     * Group by Cover.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverGroupByArgs} args - Group by arguments.
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
      T extends CoverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoverGroupByArgs['orderBy'] }
        : { orderBy?: CoverGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cover model
   */
  readonly fields: CoverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cover.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cover model
   */
  interface CoverFieldRefs {
    readonly id: FieldRef<"Cover", 'Int'>
    readonly igdbId: FieldRef<"Cover", 'Int'>
    readonly imageId: FieldRef<"Cover", 'String'>
    readonly url: FieldRef<"Cover", 'String'>
    readonly height: FieldRef<"Cover", 'Int'>
    readonly width: FieldRef<"Cover", 'Int'>
    readonly gameId: FieldRef<"Cover", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cover findUnique
   */
  export type CoverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverInclude<ExtArgs> | null
    /**
     * Filter, which Cover to fetch.
     */
    where: CoverWhereUniqueInput
  }

  /**
   * Cover findUniqueOrThrow
   */
  export type CoverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverInclude<ExtArgs> | null
    /**
     * Filter, which Cover to fetch.
     */
    where: CoverWhereUniqueInput
  }

  /**
   * Cover findFirst
   */
  export type CoverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverInclude<ExtArgs> | null
    /**
     * Filter, which Cover to fetch.
     */
    where?: CoverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Covers to fetch.
     */
    orderBy?: CoverOrderByWithRelationInput | CoverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Covers.
     */
    cursor?: CoverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Covers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Covers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Covers.
     */
    distinct?: CoverScalarFieldEnum | CoverScalarFieldEnum[]
  }

  /**
   * Cover findFirstOrThrow
   */
  export type CoverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverInclude<ExtArgs> | null
    /**
     * Filter, which Cover to fetch.
     */
    where?: CoverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Covers to fetch.
     */
    orderBy?: CoverOrderByWithRelationInput | CoverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Covers.
     */
    cursor?: CoverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Covers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Covers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Covers.
     */
    distinct?: CoverScalarFieldEnum | CoverScalarFieldEnum[]
  }

  /**
   * Cover findMany
   */
  export type CoverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverInclude<ExtArgs> | null
    /**
     * Filter, which Covers to fetch.
     */
    where?: CoverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Covers to fetch.
     */
    orderBy?: CoverOrderByWithRelationInput | CoverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Covers.
     */
    cursor?: CoverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Covers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Covers.
     */
    skip?: number
    distinct?: CoverScalarFieldEnum | CoverScalarFieldEnum[]
  }

  /**
   * Cover create
   */
  export type CoverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverInclude<ExtArgs> | null
    /**
     * The data needed to create a Cover.
     */
    data: XOR<CoverCreateInput, CoverUncheckedCreateInput>
  }

  /**
   * Cover createMany
   */
  export type CoverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Covers.
     */
    data: CoverCreateManyInput | CoverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cover createManyAndReturn
   */
  export type CoverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * The data used to create many Covers.
     */
    data: CoverCreateManyInput | CoverCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cover update
   */
  export type CoverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverInclude<ExtArgs> | null
    /**
     * The data needed to update a Cover.
     */
    data: XOR<CoverUpdateInput, CoverUncheckedUpdateInput>
    /**
     * Choose, which Cover to update.
     */
    where: CoverWhereUniqueInput
  }

  /**
   * Cover updateMany
   */
  export type CoverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Covers.
     */
    data: XOR<CoverUpdateManyMutationInput, CoverUncheckedUpdateManyInput>
    /**
     * Filter which Covers to update
     */
    where?: CoverWhereInput
    /**
     * Limit how many Covers to update.
     */
    limit?: number
  }

  /**
   * Cover updateManyAndReturn
   */
  export type CoverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * The data used to update Covers.
     */
    data: XOR<CoverUpdateManyMutationInput, CoverUncheckedUpdateManyInput>
    /**
     * Filter which Covers to update
     */
    where?: CoverWhereInput
    /**
     * Limit how many Covers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cover upsert
   */
  export type CoverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverInclude<ExtArgs> | null
    /**
     * The filter to search for the Cover to update in case it exists.
     */
    where: CoverWhereUniqueInput
    /**
     * In case the Cover found by the `where` argument doesn't exist, create a new Cover with this data.
     */
    create: XOR<CoverCreateInput, CoverUncheckedCreateInput>
    /**
     * In case the Cover was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoverUpdateInput, CoverUncheckedUpdateInput>
  }

  /**
   * Cover delete
   */
  export type CoverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverInclude<ExtArgs> | null
    /**
     * Filter which Cover to delete.
     */
    where: CoverWhereUniqueInput
  }

  /**
   * Cover deleteMany
   */
  export type CoverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Covers to delete
     */
    where?: CoverWhereInput
    /**
     * Limit how many Covers to delete.
     */
    limit?: number
  }

  /**
   * Cover without action
   */
  export type CoverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverInclude<ExtArgs> | null
  }


  /**
   * Model Screenshot
   */

  export type AggregateScreenshot = {
    _count: ScreenshotCountAggregateOutputType | null
    _avg: ScreenshotAvgAggregateOutputType | null
    _sum: ScreenshotSumAggregateOutputType | null
    _min: ScreenshotMinAggregateOutputType | null
    _max: ScreenshotMaxAggregateOutputType | null
  }

  export type ScreenshotAvgAggregateOutputType = {
    id: number | null
    igdbId: number | null
    height: number | null
    width: number | null
    gameId: number | null
  }

  export type ScreenshotSumAggregateOutputType = {
    id: number | null
    igdbId: number | null
    height: number | null
    width: number | null
    gameId: number | null
  }

  export type ScreenshotMinAggregateOutputType = {
    id: number | null
    igdbId: number | null
    imageId: string | null
    url: string | null
    height: number | null
    width: number | null
    gameId: number | null
  }

  export type ScreenshotMaxAggregateOutputType = {
    id: number | null
    igdbId: number | null
    imageId: string | null
    url: string | null
    height: number | null
    width: number | null
    gameId: number | null
  }

  export type ScreenshotCountAggregateOutputType = {
    id: number
    igdbId: number
    imageId: number
    url: number
    height: number
    width: number
    gameId: number
    _all: number
  }


  export type ScreenshotAvgAggregateInputType = {
    id?: true
    igdbId?: true
    height?: true
    width?: true
    gameId?: true
  }

  export type ScreenshotSumAggregateInputType = {
    id?: true
    igdbId?: true
    height?: true
    width?: true
    gameId?: true
  }

  export type ScreenshotMinAggregateInputType = {
    id?: true
    igdbId?: true
    imageId?: true
    url?: true
    height?: true
    width?: true
    gameId?: true
  }

  export type ScreenshotMaxAggregateInputType = {
    id?: true
    igdbId?: true
    imageId?: true
    url?: true
    height?: true
    width?: true
    gameId?: true
  }

  export type ScreenshotCountAggregateInputType = {
    id?: true
    igdbId?: true
    imageId?: true
    url?: true
    height?: true
    width?: true
    gameId?: true
    _all?: true
  }

  export type ScreenshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Screenshot to aggregate.
     */
    where?: ScreenshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screenshots to fetch.
     */
    orderBy?: ScreenshotOrderByWithRelationInput | ScreenshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScreenshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screenshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screenshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Screenshots
    **/
    _count?: true | ScreenshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScreenshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScreenshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScreenshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScreenshotMaxAggregateInputType
  }

  export type GetScreenshotAggregateType<T extends ScreenshotAggregateArgs> = {
        [P in keyof T & keyof AggregateScreenshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScreenshot[P]>
      : GetScalarType<T[P], AggregateScreenshot[P]>
  }




  export type ScreenshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreenshotWhereInput
    orderBy?: ScreenshotOrderByWithAggregationInput | ScreenshotOrderByWithAggregationInput[]
    by: ScreenshotScalarFieldEnum[] | ScreenshotScalarFieldEnum
    having?: ScreenshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScreenshotCountAggregateInputType | true
    _avg?: ScreenshotAvgAggregateInputType
    _sum?: ScreenshotSumAggregateInputType
    _min?: ScreenshotMinAggregateInputType
    _max?: ScreenshotMaxAggregateInputType
  }

  export type ScreenshotGroupByOutputType = {
    id: number
    igdbId: number
    imageId: string | null
    url: string | null
    height: number | null
    width: number | null
    gameId: number
    _count: ScreenshotCountAggregateOutputType | null
    _avg: ScreenshotAvgAggregateOutputType | null
    _sum: ScreenshotSumAggregateOutputType | null
    _min: ScreenshotMinAggregateOutputType | null
    _max: ScreenshotMaxAggregateOutputType | null
  }

  type GetScreenshotGroupByPayload<T extends ScreenshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScreenshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScreenshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScreenshotGroupByOutputType[P]>
            : GetScalarType<T[P], ScreenshotGroupByOutputType[P]>
        }
      >
    >


  export type ScreenshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    igdbId?: boolean
    imageId?: boolean
    url?: boolean
    height?: boolean
    width?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screenshot"]>

  export type ScreenshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    igdbId?: boolean
    imageId?: boolean
    url?: boolean
    height?: boolean
    width?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screenshot"]>

  export type ScreenshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    igdbId?: boolean
    imageId?: boolean
    url?: boolean
    height?: boolean
    width?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screenshot"]>

  export type ScreenshotSelectScalar = {
    id?: boolean
    igdbId?: boolean
    imageId?: boolean
    url?: boolean
    height?: boolean
    width?: boolean
    gameId?: boolean
  }

  export type ScreenshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "igdbId" | "imageId" | "url" | "height" | "width" | "gameId", ExtArgs["result"]["screenshot"]>
  export type ScreenshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type ScreenshotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type ScreenshotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $ScreenshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Screenshot"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      igdbId: number
      imageId: string | null
      url: string | null
      height: number | null
      width: number | null
      gameId: number
    }, ExtArgs["result"]["screenshot"]>
    composites: {}
  }

  type ScreenshotGetPayload<S extends boolean | null | undefined | ScreenshotDefaultArgs> = $Result.GetResult<Prisma.$ScreenshotPayload, S>

  type ScreenshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScreenshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScreenshotCountAggregateInputType | true
    }

  export interface ScreenshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Screenshot'], meta: { name: 'Screenshot' } }
    /**
     * Find zero or one Screenshot that matches the filter.
     * @param {ScreenshotFindUniqueArgs} args - Arguments to find a Screenshot
     * @example
     * // Get one Screenshot
     * const screenshot = await prisma.screenshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScreenshotFindUniqueArgs>(args: SelectSubset<T, ScreenshotFindUniqueArgs<ExtArgs>>): Prisma__ScreenshotClient<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Screenshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScreenshotFindUniqueOrThrowArgs} args - Arguments to find a Screenshot
     * @example
     * // Get one Screenshot
     * const screenshot = await prisma.screenshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScreenshotFindUniqueOrThrowArgs>(args: SelectSubset<T, ScreenshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScreenshotClient<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Screenshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenshotFindFirstArgs} args - Arguments to find a Screenshot
     * @example
     * // Get one Screenshot
     * const screenshot = await prisma.screenshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScreenshotFindFirstArgs>(args?: SelectSubset<T, ScreenshotFindFirstArgs<ExtArgs>>): Prisma__ScreenshotClient<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Screenshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenshotFindFirstOrThrowArgs} args - Arguments to find a Screenshot
     * @example
     * // Get one Screenshot
     * const screenshot = await prisma.screenshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScreenshotFindFirstOrThrowArgs>(args?: SelectSubset<T, ScreenshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScreenshotClient<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Screenshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Screenshots
     * const screenshots = await prisma.screenshot.findMany()
     * 
     * // Get first 10 Screenshots
     * const screenshots = await prisma.screenshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const screenshotWithIdOnly = await prisma.screenshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScreenshotFindManyArgs>(args?: SelectSubset<T, ScreenshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Screenshot.
     * @param {ScreenshotCreateArgs} args - Arguments to create a Screenshot.
     * @example
     * // Create one Screenshot
     * const Screenshot = await prisma.screenshot.create({
     *   data: {
     *     // ... data to create a Screenshot
     *   }
     * })
     * 
     */
    create<T extends ScreenshotCreateArgs>(args: SelectSubset<T, ScreenshotCreateArgs<ExtArgs>>): Prisma__ScreenshotClient<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Screenshots.
     * @param {ScreenshotCreateManyArgs} args - Arguments to create many Screenshots.
     * @example
     * // Create many Screenshots
     * const screenshot = await prisma.screenshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScreenshotCreateManyArgs>(args?: SelectSubset<T, ScreenshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Screenshots and returns the data saved in the database.
     * @param {ScreenshotCreateManyAndReturnArgs} args - Arguments to create many Screenshots.
     * @example
     * // Create many Screenshots
     * const screenshot = await prisma.screenshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Screenshots and only return the `id`
     * const screenshotWithIdOnly = await prisma.screenshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScreenshotCreateManyAndReturnArgs>(args?: SelectSubset<T, ScreenshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Screenshot.
     * @param {ScreenshotDeleteArgs} args - Arguments to delete one Screenshot.
     * @example
     * // Delete one Screenshot
     * const Screenshot = await prisma.screenshot.delete({
     *   where: {
     *     // ... filter to delete one Screenshot
     *   }
     * })
     * 
     */
    delete<T extends ScreenshotDeleteArgs>(args: SelectSubset<T, ScreenshotDeleteArgs<ExtArgs>>): Prisma__ScreenshotClient<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Screenshot.
     * @param {ScreenshotUpdateArgs} args - Arguments to update one Screenshot.
     * @example
     * // Update one Screenshot
     * const screenshot = await prisma.screenshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScreenshotUpdateArgs>(args: SelectSubset<T, ScreenshotUpdateArgs<ExtArgs>>): Prisma__ScreenshotClient<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Screenshots.
     * @param {ScreenshotDeleteManyArgs} args - Arguments to filter Screenshots to delete.
     * @example
     * // Delete a few Screenshots
     * const { count } = await prisma.screenshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScreenshotDeleteManyArgs>(args?: SelectSubset<T, ScreenshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Screenshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Screenshots
     * const screenshot = await prisma.screenshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScreenshotUpdateManyArgs>(args: SelectSubset<T, ScreenshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Screenshots and returns the data updated in the database.
     * @param {ScreenshotUpdateManyAndReturnArgs} args - Arguments to update many Screenshots.
     * @example
     * // Update many Screenshots
     * const screenshot = await prisma.screenshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Screenshots and only return the `id`
     * const screenshotWithIdOnly = await prisma.screenshot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScreenshotUpdateManyAndReturnArgs>(args: SelectSubset<T, ScreenshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Screenshot.
     * @param {ScreenshotUpsertArgs} args - Arguments to update or create a Screenshot.
     * @example
     * // Update or create a Screenshot
     * const screenshot = await prisma.screenshot.upsert({
     *   create: {
     *     // ... data to create a Screenshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Screenshot we want to update
     *   }
     * })
     */
    upsert<T extends ScreenshotUpsertArgs>(args: SelectSubset<T, ScreenshotUpsertArgs<ExtArgs>>): Prisma__ScreenshotClient<$Result.GetResult<Prisma.$ScreenshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Screenshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenshotCountArgs} args - Arguments to filter Screenshots to count.
     * @example
     * // Count the number of Screenshots
     * const count = await prisma.screenshot.count({
     *   where: {
     *     // ... the filter for the Screenshots we want to count
     *   }
     * })
    **/
    count<T extends ScreenshotCountArgs>(
      args?: Subset<T, ScreenshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScreenshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Screenshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScreenshotAggregateArgs>(args: Subset<T, ScreenshotAggregateArgs>): Prisma.PrismaPromise<GetScreenshotAggregateType<T>>

    /**
     * Group by Screenshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenshotGroupByArgs} args - Group by arguments.
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
      T extends ScreenshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScreenshotGroupByArgs['orderBy'] }
        : { orderBy?: ScreenshotGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScreenshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScreenshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Screenshot model
   */
  readonly fields: ScreenshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Screenshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScreenshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Screenshot model
   */
  interface ScreenshotFieldRefs {
    readonly id: FieldRef<"Screenshot", 'Int'>
    readonly igdbId: FieldRef<"Screenshot", 'Int'>
    readonly imageId: FieldRef<"Screenshot", 'String'>
    readonly url: FieldRef<"Screenshot", 'String'>
    readonly height: FieldRef<"Screenshot", 'Int'>
    readonly width: FieldRef<"Screenshot", 'Int'>
    readonly gameId: FieldRef<"Screenshot", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Screenshot findUnique
   */
  export type ScreenshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotInclude<ExtArgs> | null
    /**
     * Filter, which Screenshot to fetch.
     */
    where: ScreenshotWhereUniqueInput
  }

  /**
   * Screenshot findUniqueOrThrow
   */
  export type ScreenshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotInclude<ExtArgs> | null
    /**
     * Filter, which Screenshot to fetch.
     */
    where: ScreenshotWhereUniqueInput
  }

  /**
   * Screenshot findFirst
   */
  export type ScreenshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotInclude<ExtArgs> | null
    /**
     * Filter, which Screenshot to fetch.
     */
    where?: ScreenshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screenshots to fetch.
     */
    orderBy?: ScreenshotOrderByWithRelationInput | ScreenshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Screenshots.
     */
    cursor?: ScreenshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screenshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screenshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Screenshots.
     */
    distinct?: ScreenshotScalarFieldEnum | ScreenshotScalarFieldEnum[]
  }

  /**
   * Screenshot findFirstOrThrow
   */
  export type ScreenshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotInclude<ExtArgs> | null
    /**
     * Filter, which Screenshot to fetch.
     */
    where?: ScreenshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screenshots to fetch.
     */
    orderBy?: ScreenshotOrderByWithRelationInput | ScreenshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Screenshots.
     */
    cursor?: ScreenshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screenshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screenshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Screenshots.
     */
    distinct?: ScreenshotScalarFieldEnum | ScreenshotScalarFieldEnum[]
  }

  /**
   * Screenshot findMany
   */
  export type ScreenshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotInclude<ExtArgs> | null
    /**
     * Filter, which Screenshots to fetch.
     */
    where?: ScreenshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screenshots to fetch.
     */
    orderBy?: ScreenshotOrderByWithRelationInput | ScreenshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Screenshots.
     */
    cursor?: ScreenshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screenshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screenshots.
     */
    skip?: number
    distinct?: ScreenshotScalarFieldEnum | ScreenshotScalarFieldEnum[]
  }

  /**
   * Screenshot create
   */
  export type ScreenshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotInclude<ExtArgs> | null
    /**
     * The data needed to create a Screenshot.
     */
    data: XOR<ScreenshotCreateInput, ScreenshotUncheckedCreateInput>
  }

  /**
   * Screenshot createMany
   */
  export type ScreenshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Screenshots.
     */
    data: ScreenshotCreateManyInput | ScreenshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Screenshot createManyAndReturn
   */
  export type ScreenshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * The data used to create many Screenshots.
     */
    data: ScreenshotCreateManyInput | ScreenshotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Screenshot update
   */
  export type ScreenshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotInclude<ExtArgs> | null
    /**
     * The data needed to update a Screenshot.
     */
    data: XOR<ScreenshotUpdateInput, ScreenshotUncheckedUpdateInput>
    /**
     * Choose, which Screenshot to update.
     */
    where: ScreenshotWhereUniqueInput
  }

  /**
   * Screenshot updateMany
   */
  export type ScreenshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Screenshots.
     */
    data: XOR<ScreenshotUpdateManyMutationInput, ScreenshotUncheckedUpdateManyInput>
    /**
     * Filter which Screenshots to update
     */
    where?: ScreenshotWhereInput
    /**
     * Limit how many Screenshots to update.
     */
    limit?: number
  }

  /**
   * Screenshot updateManyAndReturn
   */
  export type ScreenshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * The data used to update Screenshots.
     */
    data: XOR<ScreenshotUpdateManyMutationInput, ScreenshotUncheckedUpdateManyInput>
    /**
     * Filter which Screenshots to update
     */
    where?: ScreenshotWhereInput
    /**
     * Limit how many Screenshots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Screenshot upsert
   */
  export type ScreenshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotInclude<ExtArgs> | null
    /**
     * The filter to search for the Screenshot to update in case it exists.
     */
    where: ScreenshotWhereUniqueInput
    /**
     * In case the Screenshot found by the `where` argument doesn't exist, create a new Screenshot with this data.
     */
    create: XOR<ScreenshotCreateInput, ScreenshotUncheckedCreateInput>
    /**
     * In case the Screenshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScreenshotUpdateInput, ScreenshotUncheckedUpdateInput>
  }

  /**
   * Screenshot delete
   */
  export type ScreenshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotInclude<ExtArgs> | null
    /**
     * Filter which Screenshot to delete.
     */
    where: ScreenshotWhereUniqueInput
  }

  /**
   * Screenshot deleteMany
   */
  export type ScreenshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Screenshots to delete
     */
    where?: ScreenshotWhereInput
    /**
     * Limit how many Screenshots to delete.
     */
    limit?: number
  }

  /**
   * Screenshot without action
   */
  export type ScreenshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screenshot
     */
    select?: ScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screenshot
     */
    omit?: ScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenshotInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sid: 'sid',
    data: 'data',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    is_admin: 'is_admin',
    fname: 'fname',
    lname: 'lname',
    alias: 'alias',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    igdbId: 'igdbId',
    name: 'name',
    slug: 'slug',
    summary: 'summary',
    storyline: 'storyline',
    firstReleaseDate: 'firstReleaseDate',
    originalPlatform: 'originalPlatform',
    coverUrl: 'coverUrl',
    rating: 'rating',
    aggregatedRating: 'aggregatedRating',
    totalRating: 'totalRating',
    totalRatingCount: 'totalRatingCount',
    ageRatingId: 'ageRatingId',
    developerId: 'developerId',
    url: 'url'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const GameRatingScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    description: 'description'
  };

  export type GameRatingScalarFieldEnum = (typeof GameRatingScalarFieldEnum)[keyof typeof GameRatingScalarFieldEnum]


  export const PlatformScalarFieldEnum: {
    id: 'id',
    name: 'name',
    releaseOrder: 'releaseOrder',
    abbreviation: 'abbreviation',
    generation: 'generation',
    slug: 'slug',
    platformLogo: 'platformLogo'
  };

  export type PlatformScalarFieldEnum = (typeof PlatformScalarFieldEnum)[keyof typeof PlatformScalarFieldEnum]


  export const DevelopersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logoUrl: 'logoUrl',
    country: 'country'
  };

  export type DevelopersScalarFieldEnum = (typeof DevelopersScalarFieldEnum)[keyof typeof DevelopersScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    igdbId: 'igdbId',
    name: 'name',
    slug: 'slug'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const CoverScalarFieldEnum: {
    id: 'id',
    igdbId: 'igdbId',
    imageId: 'imageId',
    url: 'url',
    height: 'height',
    width: 'width',
    gameId: 'gameId'
  };

  export type CoverScalarFieldEnum = (typeof CoverScalarFieldEnum)[keyof typeof CoverScalarFieldEnum]


  export const ScreenshotScalarFieldEnum: {
    id: 'id',
    igdbId: 'igdbId',
    imageId: 'imageId',
    url: 'url',
    height: 'height',
    width: 'width',
    gameId: 'gameId'
  };

  export type ScreenshotScalarFieldEnum = (typeof ScreenshotScalarFieldEnum)[keyof typeof ScreenshotScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sid?: StringFilter<"Session"> | string
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sid?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }, "id" | "sid">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sid?: StringWithAggregatesFilter<"Session"> | string
    data?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    is_admin?: BoolFilter<"User"> | boolean
    fname?: StringFilter<"User"> | string
    lname?: StringFilter<"User"> | string
    alias?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    UserProfile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    is_admin?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    alias?: SortOrder
    password?: SortOrder
    UserProfile?: UserProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    is_admin?: BoolFilter<"User"> | boolean
    fname?: StringFilter<"User"> | string
    lname?: StringFilter<"User"> | string
    alias?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    UserProfile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    is_admin?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    alias?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    is_admin?: BoolWithAggregatesFilter<"User"> | boolean
    fname?: StringWithAggregatesFilter<"User"> | string
    lname?: StringWithAggregatesFilter<"User"> | string
    alias?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: IntFilter<"UserProfile"> | number
    userId?: IntFilter<"UserProfile"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    savedGames?: GameListRelationFilter
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    savedGames?: GameOrderByRelationAggregateInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    savedGames?: GameListRelationFilter
  }, "id" | "userId">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserProfile"> | number
    userId?: IntWithAggregatesFilter<"UserProfile"> | number
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: IntFilter<"Game"> | number
    igdbId?: IntFilter<"Game"> | number
    name?: StringFilter<"Game"> | string
    slug?: StringFilter<"Game"> | string
    summary?: StringNullableFilter<"Game"> | string | null
    storyline?: StringNullableFilter<"Game"> | string | null
    firstReleaseDate?: DateTimeNullableFilter<"Game"> | Date | string | null
    originalPlatform?: StringNullableFilter<"Game"> | string | null
    coverUrl?: StringNullableFilter<"Game"> | string | null
    rating?: FloatNullableFilter<"Game"> | number | null
    aggregatedRating?: FloatNullableFilter<"Game"> | number | null
    totalRating?: FloatNullableFilter<"Game"> | number | null
    totalRatingCount?: IntNullableFilter<"Game"> | number | null
    ageRatingId?: IntNullableFilter<"Game"> | number | null
    developerId?: IntNullableFilter<"Game"> | number | null
    url?: StringNullableFilter<"Game"> | string | null
    genres?: GenreListRelationFilter
    platforms?: PlatformListRelationFilter
    covers?: CoverListRelationFilter
    screenshots?: ScreenshotListRelationFilter
    developer?: XOR<DevelopersNullableScalarRelationFilter, DevelopersWhereInput> | null
    ageRating?: XOR<GameRatingNullableScalarRelationFilter, GameRatingWhereInput> | null
    savedByUsers?: UserProfileListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    igdbId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    summary?: SortOrderInput | SortOrder
    storyline?: SortOrderInput | SortOrder
    firstReleaseDate?: SortOrderInput | SortOrder
    originalPlatform?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    aggregatedRating?: SortOrderInput | SortOrder
    totalRating?: SortOrderInput | SortOrder
    totalRatingCount?: SortOrderInput | SortOrder
    ageRatingId?: SortOrderInput | SortOrder
    developerId?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    genres?: GenreOrderByRelationAggregateInput
    platforms?: PlatformOrderByRelationAggregateInput
    covers?: CoverOrderByRelationAggregateInput
    screenshots?: ScreenshotOrderByRelationAggregateInput
    developer?: DevelopersOrderByWithRelationInput
    ageRating?: GameRatingOrderByWithRelationInput
    savedByUsers?: UserProfileOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    igdbId?: number
    slug?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    name?: StringFilter<"Game"> | string
    summary?: StringNullableFilter<"Game"> | string | null
    storyline?: StringNullableFilter<"Game"> | string | null
    firstReleaseDate?: DateTimeNullableFilter<"Game"> | Date | string | null
    originalPlatform?: StringNullableFilter<"Game"> | string | null
    coverUrl?: StringNullableFilter<"Game"> | string | null
    rating?: FloatNullableFilter<"Game"> | number | null
    aggregatedRating?: FloatNullableFilter<"Game"> | number | null
    totalRating?: FloatNullableFilter<"Game"> | number | null
    totalRatingCount?: IntNullableFilter<"Game"> | number | null
    ageRatingId?: IntNullableFilter<"Game"> | number | null
    developerId?: IntNullableFilter<"Game"> | number | null
    url?: StringNullableFilter<"Game"> | string | null
    genres?: GenreListRelationFilter
    platforms?: PlatformListRelationFilter
    covers?: CoverListRelationFilter
    screenshots?: ScreenshotListRelationFilter
    developer?: XOR<DevelopersNullableScalarRelationFilter, DevelopersWhereInput> | null
    ageRating?: XOR<GameRatingNullableScalarRelationFilter, GameRatingWhereInput> | null
    savedByUsers?: UserProfileListRelationFilter
  }, "id" | "igdbId" | "slug">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    igdbId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    summary?: SortOrderInput | SortOrder
    storyline?: SortOrderInput | SortOrder
    firstReleaseDate?: SortOrderInput | SortOrder
    originalPlatform?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    aggregatedRating?: SortOrderInput | SortOrder
    totalRating?: SortOrderInput | SortOrder
    totalRatingCount?: SortOrderInput | SortOrder
    ageRatingId?: SortOrderInput | SortOrder
    developerId?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Game"> | number
    igdbId?: IntWithAggregatesFilter<"Game"> | number
    name?: StringWithAggregatesFilter<"Game"> | string
    slug?: StringWithAggregatesFilter<"Game"> | string
    summary?: StringNullableWithAggregatesFilter<"Game"> | string | null
    storyline?: StringNullableWithAggregatesFilter<"Game"> | string | null
    firstReleaseDate?: DateTimeNullableWithAggregatesFilter<"Game"> | Date | string | null
    originalPlatform?: StringNullableWithAggregatesFilter<"Game"> | string | null
    coverUrl?: StringNullableWithAggregatesFilter<"Game"> | string | null
    rating?: FloatNullableWithAggregatesFilter<"Game"> | number | null
    aggregatedRating?: FloatNullableWithAggregatesFilter<"Game"> | number | null
    totalRating?: FloatNullableWithAggregatesFilter<"Game"> | number | null
    totalRatingCount?: IntNullableWithAggregatesFilter<"Game"> | number | null
    ageRatingId?: IntNullableWithAggregatesFilter<"Game"> | number | null
    developerId?: IntNullableWithAggregatesFilter<"Game"> | number | null
    url?: StringNullableWithAggregatesFilter<"Game"> | string | null
  }

  export type GameRatingWhereInput = {
    AND?: GameRatingWhereInput | GameRatingWhereInput[]
    OR?: GameRatingWhereInput[]
    NOT?: GameRatingWhereInput | GameRatingWhereInput[]
    id?: IntFilter<"GameRating"> | number
    rating?: StringFilter<"GameRating"> | string
    description?: StringNullableFilter<"GameRating"> | string | null
    games?: GameListRelationFilter
  }

  export type GameRatingOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    description?: SortOrderInput | SortOrder
    games?: GameOrderByRelationAggregateInput
  }

  export type GameRatingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GameRatingWhereInput | GameRatingWhereInput[]
    OR?: GameRatingWhereInput[]
    NOT?: GameRatingWhereInput | GameRatingWhereInput[]
    rating?: StringFilter<"GameRating"> | string
    description?: StringNullableFilter<"GameRating"> | string | null
    games?: GameListRelationFilter
  }, "id">

  export type GameRatingOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: GameRatingCountOrderByAggregateInput
    _avg?: GameRatingAvgOrderByAggregateInput
    _max?: GameRatingMaxOrderByAggregateInput
    _min?: GameRatingMinOrderByAggregateInput
    _sum?: GameRatingSumOrderByAggregateInput
  }

  export type GameRatingScalarWhereWithAggregatesInput = {
    AND?: GameRatingScalarWhereWithAggregatesInput | GameRatingScalarWhereWithAggregatesInput[]
    OR?: GameRatingScalarWhereWithAggregatesInput[]
    NOT?: GameRatingScalarWhereWithAggregatesInput | GameRatingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GameRating"> | number
    rating?: StringWithAggregatesFilter<"GameRating"> | string
    description?: StringNullableWithAggregatesFilter<"GameRating"> | string | null
  }

  export type PlatformWhereInput = {
    AND?: PlatformWhereInput | PlatformWhereInput[]
    OR?: PlatformWhereInput[]
    NOT?: PlatformWhereInput | PlatformWhereInput[]
    id?: IntFilter<"Platform"> | number
    name?: StringFilter<"Platform"> | string
    releaseOrder?: IntNullableFilter<"Platform"> | number | null
    abbreviation?: StringNullableFilter<"Platform"> | string | null
    generation?: IntNullableFilter<"Platform"> | number | null
    slug?: StringFilter<"Platform"> | string
    platformLogo?: IntNullableFilter<"Platform"> | number | null
    games?: GameListRelationFilter
  }

  export type PlatformOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    releaseOrder?: SortOrderInput | SortOrder
    abbreviation?: SortOrderInput | SortOrder
    generation?: SortOrderInput | SortOrder
    slug?: SortOrder
    platformLogo?: SortOrderInput | SortOrder
    games?: GameOrderByRelationAggregateInput
  }

  export type PlatformWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    releaseOrder?: number
    AND?: PlatformWhereInput | PlatformWhereInput[]
    OR?: PlatformWhereInput[]
    NOT?: PlatformWhereInput | PlatformWhereInput[]
    abbreviation?: StringNullableFilter<"Platform"> | string | null
    generation?: IntNullableFilter<"Platform"> | number | null
    slug?: StringFilter<"Platform"> | string
    platformLogo?: IntNullableFilter<"Platform"> | number | null
    games?: GameListRelationFilter
  }, "id" | "name" | "releaseOrder">

  export type PlatformOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    releaseOrder?: SortOrderInput | SortOrder
    abbreviation?: SortOrderInput | SortOrder
    generation?: SortOrderInput | SortOrder
    slug?: SortOrder
    platformLogo?: SortOrderInput | SortOrder
    _count?: PlatformCountOrderByAggregateInput
    _avg?: PlatformAvgOrderByAggregateInput
    _max?: PlatformMaxOrderByAggregateInput
    _min?: PlatformMinOrderByAggregateInput
    _sum?: PlatformSumOrderByAggregateInput
  }

  export type PlatformScalarWhereWithAggregatesInput = {
    AND?: PlatformScalarWhereWithAggregatesInput | PlatformScalarWhereWithAggregatesInput[]
    OR?: PlatformScalarWhereWithAggregatesInput[]
    NOT?: PlatformScalarWhereWithAggregatesInput | PlatformScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Platform"> | number
    name?: StringWithAggregatesFilter<"Platform"> | string
    releaseOrder?: IntNullableWithAggregatesFilter<"Platform"> | number | null
    abbreviation?: StringNullableWithAggregatesFilter<"Platform"> | string | null
    generation?: IntNullableWithAggregatesFilter<"Platform"> | number | null
    slug?: StringWithAggregatesFilter<"Platform"> | string
    platformLogo?: IntNullableWithAggregatesFilter<"Platform"> | number | null
  }

  export type DevelopersWhereInput = {
    AND?: DevelopersWhereInput | DevelopersWhereInput[]
    OR?: DevelopersWhereInput[]
    NOT?: DevelopersWhereInput | DevelopersWhereInput[]
    id?: IntFilter<"Developers"> | number
    name?: StringNullableFilter<"Developers"> | string | null
    logoUrl?: StringNullableFilter<"Developers"> | string | null
    country?: StringNullableFilter<"Developers"> | string | null
    games?: GameListRelationFilter
  }

  export type DevelopersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    games?: GameOrderByRelationAggregateInput
  }

  export type DevelopersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DevelopersWhereInput | DevelopersWhereInput[]
    OR?: DevelopersWhereInput[]
    NOT?: DevelopersWhereInput | DevelopersWhereInput[]
    name?: StringNullableFilter<"Developers"> | string | null
    logoUrl?: StringNullableFilter<"Developers"> | string | null
    country?: StringNullableFilter<"Developers"> | string | null
    games?: GameListRelationFilter
  }, "id">

  export type DevelopersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    _count?: DevelopersCountOrderByAggregateInput
    _avg?: DevelopersAvgOrderByAggregateInput
    _max?: DevelopersMaxOrderByAggregateInput
    _min?: DevelopersMinOrderByAggregateInput
    _sum?: DevelopersSumOrderByAggregateInput
  }

  export type DevelopersScalarWhereWithAggregatesInput = {
    AND?: DevelopersScalarWhereWithAggregatesInput | DevelopersScalarWhereWithAggregatesInput[]
    OR?: DevelopersScalarWhereWithAggregatesInput[]
    NOT?: DevelopersScalarWhereWithAggregatesInput | DevelopersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Developers"> | number
    name?: StringNullableWithAggregatesFilter<"Developers"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"Developers"> | string | null
    country?: StringNullableWithAggregatesFilter<"Developers"> | string | null
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: IntFilter<"Genre"> | number
    igdbId?: IntFilter<"Genre"> | number
    name?: StringNullableFilter<"Genre"> | string | null
    slug?: StringNullableFilter<"Genre"> | string | null
    games?: GameListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    igdbId?: SortOrder
    name?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    games?: GameOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    igdbId?: number
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    name?: StringNullableFilter<"Genre"> | string | null
    slug?: StringNullableFilter<"Genre"> | string | null
    games?: GameListRelationFilter
  }, "id" | "igdbId">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    igdbId?: SortOrder
    name?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    _count?: GenreCountOrderByAggregateInput
    _avg?: GenreAvgOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
    _sum?: GenreSumOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Genre"> | number
    igdbId?: IntWithAggregatesFilter<"Genre"> | number
    name?: StringNullableWithAggregatesFilter<"Genre"> | string | null
    slug?: StringNullableWithAggregatesFilter<"Genre"> | string | null
  }

  export type CoverWhereInput = {
    AND?: CoverWhereInput | CoverWhereInput[]
    OR?: CoverWhereInput[]
    NOT?: CoverWhereInput | CoverWhereInput[]
    id?: IntFilter<"Cover"> | number
    igdbId?: IntFilter<"Cover"> | number
    imageId?: StringNullableFilter<"Cover"> | string | null
    url?: StringNullableFilter<"Cover"> | string | null
    height?: IntNullableFilter<"Cover"> | number | null
    width?: IntNullableFilter<"Cover"> | number | null
    gameId?: IntFilter<"Cover"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type CoverOrderByWithRelationInput = {
    id?: SortOrder
    igdbId?: SortOrder
    imageId?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    gameId?: SortOrder
    game?: GameOrderByWithRelationInput
  }

  export type CoverWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    igdbId?: number
    AND?: CoverWhereInput | CoverWhereInput[]
    OR?: CoverWhereInput[]
    NOT?: CoverWhereInput | CoverWhereInput[]
    imageId?: StringNullableFilter<"Cover"> | string | null
    url?: StringNullableFilter<"Cover"> | string | null
    height?: IntNullableFilter<"Cover"> | number | null
    width?: IntNullableFilter<"Cover"> | number | null
    gameId?: IntFilter<"Cover"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id" | "igdbId">

  export type CoverOrderByWithAggregationInput = {
    id?: SortOrder
    igdbId?: SortOrder
    imageId?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    gameId?: SortOrder
    _count?: CoverCountOrderByAggregateInput
    _avg?: CoverAvgOrderByAggregateInput
    _max?: CoverMaxOrderByAggregateInput
    _min?: CoverMinOrderByAggregateInput
    _sum?: CoverSumOrderByAggregateInput
  }

  export type CoverScalarWhereWithAggregatesInput = {
    AND?: CoverScalarWhereWithAggregatesInput | CoverScalarWhereWithAggregatesInput[]
    OR?: CoverScalarWhereWithAggregatesInput[]
    NOT?: CoverScalarWhereWithAggregatesInput | CoverScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cover"> | number
    igdbId?: IntWithAggregatesFilter<"Cover"> | number
    imageId?: StringNullableWithAggregatesFilter<"Cover"> | string | null
    url?: StringNullableWithAggregatesFilter<"Cover"> | string | null
    height?: IntNullableWithAggregatesFilter<"Cover"> | number | null
    width?: IntNullableWithAggregatesFilter<"Cover"> | number | null
    gameId?: IntWithAggregatesFilter<"Cover"> | number
  }

  export type ScreenshotWhereInput = {
    AND?: ScreenshotWhereInput | ScreenshotWhereInput[]
    OR?: ScreenshotWhereInput[]
    NOT?: ScreenshotWhereInput | ScreenshotWhereInput[]
    id?: IntFilter<"Screenshot"> | number
    igdbId?: IntFilter<"Screenshot"> | number
    imageId?: StringNullableFilter<"Screenshot"> | string | null
    url?: StringNullableFilter<"Screenshot"> | string | null
    height?: IntNullableFilter<"Screenshot"> | number | null
    width?: IntNullableFilter<"Screenshot"> | number | null
    gameId?: IntFilter<"Screenshot"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type ScreenshotOrderByWithRelationInput = {
    id?: SortOrder
    igdbId?: SortOrder
    imageId?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    gameId?: SortOrder
    game?: GameOrderByWithRelationInput
  }

  export type ScreenshotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    igdbId?: number
    AND?: ScreenshotWhereInput | ScreenshotWhereInput[]
    OR?: ScreenshotWhereInput[]
    NOT?: ScreenshotWhereInput | ScreenshotWhereInput[]
    imageId?: StringNullableFilter<"Screenshot"> | string | null
    url?: StringNullableFilter<"Screenshot"> | string | null
    height?: IntNullableFilter<"Screenshot"> | number | null
    width?: IntNullableFilter<"Screenshot"> | number | null
    gameId?: IntFilter<"Screenshot"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id" | "igdbId">

  export type ScreenshotOrderByWithAggregationInput = {
    id?: SortOrder
    igdbId?: SortOrder
    imageId?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    gameId?: SortOrder
    _count?: ScreenshotCountOrderByAggregateInput
    _avg?: ScreenshotAvgOrderByAggregateInput
    _max?: ScreenshotMaxOrderByAggregateInput
    _min?: ScreenshotMinOrderByAggregateInput
    _sum?: ScreenshotSumOrderByAggregateInput
  }

  export type ScreenshotScalarWhereWithAggregatesInput = {
    AND?: ScreenshotScalarWhereWithAggregatesInput | ScreenshotScalarWhereWithAggregatesInput[]
    OR?: ScreenshotScalarWhereWithAggregatesInput[]
    NOT?: ScreenshotScalarWhereWithAggregatesInput | ScreenshotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Screenshot"> | number
    igdbId?: IntWithAggregatesFilter<"Screenshot"> | number
    imageId?: StringNullableWithAggregatesFilter<"Screenshot"> | string | null
    url?: StringNullableWithAggregatesFilter<"Screenshot"> | string | null
    height?: IntNullableWithAggregatesFilter<"Screenshot"> | number | null
    width?: IntNullableWithAggregatesFilter<"Screenshot"> | number | null
    gameId?: IntWithAggregatesFilter<"Screenshot"> | number
  }

  export type SessionCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    email: string
    is_admin?: boolean
    fname: string
    lname: string
    alias: string
    password: string
    UserProfile?: UserProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    is_admin?: boolean
    fname: string
    lname: string
    alias: string
    password: string
    UserProfile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    UserProfile?: UserProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    UserProfile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    is_admin?: boolean
    fname: string
    lname: string
    alias: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserProfileCreateInput = {
    user: UserCreateNestedOneWithoutUserProfileInput
    savedGames?: GameCreateNestedManyWithoutSavedByUsersInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: number
    userId: number
    savedGames?: GameUncheckedCreateNestedManyWithoutSavedByUsersInput
  }

  export type UserProfileUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUserProfileNestedInput
    savedGames?: GameUpdateManyWithoutSavedByUsersNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    savedGames?: GameUncheckedUpdateManyWithoutSavedByUsersNestedInput
  }

  export type UserProfileCreateManyInput = {
    id?: number
    userId: number
  }

  export type UserProfileUpdateManyMutationInput = {

  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type GameCreateInput = {
    igdbId: number
    name: string
    slug: string
    summary?: string | null
    storyline?: string | null
    firstReleaseDate?: Date | string | null
    originalPlatform?: string | null
    coverUrl?: string | null
    rating?: number | null
    aggregatedRating?: number | null
    totalRating?: number | null
    totalRatingCount?: number | null
    url?: string | null
    genres?: GenreCreateNestedManyWithoutGamesInput
    platforms?: PlatformCreateNestedManyWithoutGamesInput
    covers?: CoverCreateNestedManyWithoutGameInput
    screenshots?: ScreenshotCreateNestedManyWithoutGameInput
    developer?: DevelopersCreateNestedOneWithoutGamesInput
    ageRating?: GameRatingCreateNestedOneWithoutGamesInput
    savedByUsers?: UserProfileCreateNestedManyWithoutSavedGamesInput
  }

  export type GameUncheckedCreateInput = {
    id?: number
    igdbId: number
    name: string
    slug: string
    summary?: string | null
    storyline?: string | null
    firstReleaseDate?: Date | string | null
    originalPlatform?: string | null
    coverUrl?: string | null
    rating?: number | null
    aggregatedRating?: number | null
    totalRating?: number | null
    totalRatingCount?: number | null
    ageRatingId?: number | null
    developerId?: number | null
    url?: string | null
    genres?: GenreUncheckedCreateNestedManyWithoutGamesInput
    platforms?: PlatformUncheckedCreateNestedManyWithoutGamesInput
    covers?: CoverUncheckedCreateNestedManyWithoutGameInput
    screenshots?: ScreenshotUncheckedCreateNestedManyWithoutGameInput
    savedByUsers?: UserProfileUncheckedCreateNestedManyWithoutSavedGamesInput
  }

  export type GameUpdateInput = {
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregatedRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenreUpdateManyWithoutGamesNestedInput
    platforms?: PlatformUpdateManyWithoutGamesNestedInput
    covers?: CoverUpdateManyWithoutGameNestedInput
    screenshots?: ScreenshotUpdateManyWithoutGameNestedInput
    developer?: DevelopersUpdateOneWithoutGamesNestedInput
    ageRating?: GameRatingUpdateOneWithoutGamesNestedInput
    savedByUsers?: UserProfileUpdateManyWithoutSavedGamesNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregatedRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageRatingId?: NullableIntFieldUpdateOperationsInput | number | null
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenreUncheckedUpdateManyWithoutGamesNestedInput
    platforms?: PlatformUncheckedUpdateManyWithoutGamesNestedInput
    covers?: CoverUncheckedUpdateManyWithoutGameNestedInput
    screenshots?: ScreenshotUncheckedUpdateManyWithoutGameNestedInput
    savedByUsers?: UserProfileUncheckedUpdateManyWithoutSavedGamesNestedInput
  }

  export type GameCreateManyInput = {
    id?: number
    igdbId: number
    name: string
    slug: string
    summary?: string | null
    storyline?: string | null
    firstReleaseDate?: Date | string | null
    originalPlatform?: string | null
    coverUrl?: string | null
    rating?: number | null
    aggregatedRating?: number | null
    totalRating?: number | null
    totalRatingCount?: number | null
    ageRatingId?: number | null
    developerId?: number | null
    url?: string | null
  }

  export type GameUpdateManyMutationInput = {
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregatedRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregatedRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageRatingId?: NullableIntFieldUpdateOperationsInput | number | null
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameRatingCreateInput = {
    id: number
    rating: string
    description?: string | null
    games?: GameCreateNestedManyWithoutAgeRatingInput
  }

  export type GameRatingUncheckedCreateInput = {
    id: number
    rating: string
    description?: string | null
    games?: GameUncheckedCreateNestedManyWithoutAgeRatingInput
  }

  export type GameRatingUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    games?: GameUpdateManyWithoutAgeRatingNestedInput
  }

  export type GameRatingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    games?: GameUncheckedUpdateManyWithoutAgeRatingNestedInput
  }

  export type GameRatingCreateManyInput = {
    id: number
    rating: string
    description?: string | null
  }

  export type GameRatingUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameRatingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlatformCreateInput = {
    id: number
    name: string
    releaseOrder?: number | null
    abbreviation?: string | null
    generation?: number | null
    slug: string
    platformLogo?: number | null
    games?: GameCreateNestedManyWithoutPlatformsInput
  }

  export type PlatformUncheckedCreateInput = {
    id: number
    name: string
    releaseOrder?: number | null
    abbreviation?: string | null
    generation?: number | null
    slug: string
    platformLogo?: number | null
    games?: GameUncheckedCreateNestedManyWithoutPlatformsInput
  }

  export type PlatformUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseOrder?: NullableIntFieldUpdateOperationsInput | number | null
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    generation?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    platformLogo?: NullableIntFieldUpdateOperationsInput | number | null
    games?: GameUpdateManyWithoutPlatformsNestedInput
  }

  export type PlatformUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseOrder?: NullableIntFieldUpdateOperationsInput | number | null
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    generation?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    platformLogo?: NullableIntFieldUpdateOperationsInput | number | null
    games?: GameUncheckedUpdateManyWithoutPlatformsNestedInput
  }

  export type PlatformCreateManyInput = {
    id: number
    name: string
    releaseOrder?: number | null
    abbreviation?: string | null
    generation?: number | null
    slug: string
    platformLogo?: number | null
  }

  export type PlatformUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseOrder?: NullableIntFieldUpdateOperationsInput | number | null
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    generation?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    platformLogo?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlatformUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseOrder?: NullableIntFieldUpdateOperationsInput | number | null
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    generation?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    platformLogo?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DevelopersCreateInput = {
    id: number
    name?: string | null
    logoUrl?: string | null
    country?: string | null
    games?: GameCreateNestedManyWithoutDeveloperInput
  }

  export type DevelopersUncheckedCreateInput = {
    id: number
    name?: string | null
    logoUrl?: string | null
    country?: string | null
    games?: GameUncheckedCreateNestedManyWithoutDeveloperInput
  }

  export type DevelopersUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    games?: GameUpdateManyWithoutDeveloperNestedInput
  }

  export type DevelopersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    games?: GameUncheckedUpdateManyWithoutDeveloperNestedInput
  }

  export type DevelopersCreateManyInput = {
    id: number
    name?: string | null
    logoUrl?: string | null
    country?: string | null
  }

  export type DevelopersUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DevelopersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenreCreateInput = {
    igdbId: number
    name?: string | null
    slug?: string | null
    games?: GameCreateNestedManyWithoutGenresInput
  }

  export type GenreUncheckedCreateInput = {
    id?: number
    igdbId: number
    name?: string | null
    slug?: string | null
    games?: GameUncheckedCreateNestedManyWithoutGenresInput
  }

  export type GenreUpdateInput = {
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    games?: GameUpdateManyWithoutGenresNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    games?: GameUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type GenreCreateManyInput = {
    id?: number
    igdbId: number
    name?: string | null
    slug?: string | null
  }

  export type GenreUpdateManyMutationInput = {
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoverCreateInput = {
    igdbId: number
    imageId?: string | null
    url?: string | null
    height?: number | null
    width?: number | null
    game: GameCreateNestedOneWithoutCoversInput
  }

  export type CoverUncheckedCreateInput = {
    id?: number
    igdbId: number
    imageId?: string | null
    url?: string | null
    height?: number | null
    width?: number | null
    gameId: number
  }

  export type CoverUpdateInput = {
    igdbId?: IntFieldUpdateOperationsInput | number
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    game?: GameUpdateOneRequiredWithoutCoversNestedInput
  }

  export type CoverUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type CoverCreateManyInput = {
    id?: number
    igdbId: number
    imageId?: string | null
    url?: string | null
    height?: number | null
    width?: number | null
    gameId: number
  }

  export type CoverUpdateManyMutationInput = {
    igdbId?: IntFieldUpdateOperationsInput | number
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CoverUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type ScreenshotCreateInput = {
    igdbId: number
    imageId?: string | null
    url?: string | null
    height?: number | null
    width?: number | null
    game: GameCreateNestedOneWithoutScreenshotsInput
  }

  export type ScreenshotUncheckedCreateInput = {
    id?: number
    igdbId: number
    imageId?: string | null
    url?: string | null
    height?: number | null
    width?: number | null
    gameId: number
  }

  export type ScreenshotUpdateInput = {
    igdbId?: IntFieldUpdateOperationsInput | number
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    game?: GameUpdateOneRequiredWithoutScreenshotsNestedInput
  }

  export type ScreenshotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type ScreenshotCreateManyInput = {
    id?: number
    igdbId: number
    imageId?: string | null
    url?: string | null
    height?: number | null
    width?: number | null
    gameId: number
  }

  export type ScreenshotUpdateManyMutationInput = {
    igdbId?: IntFieldUpdateOperationsInput | number
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ScreenshotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    is_admin?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    alias?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    is_admin?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    alias?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    is_admin?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    alias?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type GenreListRelationFilter = {
    every?: GenreWhereInput
    some?: GenreWhereInput
    none?: GenreWhereInput
  }

  export type PlatformListRelationFilter = {
    every?: PlatformWhereInput
    some?: PlatformWhereInput
    none?: PlatformWhereInput
  }

  export type CoverListRelationFilter = {
    every?: CoverWhereInput
    some?: CoverWhereInput
    none?: CoverWhereInput
  }

  export type ScreenshotListRelationFilter = {
    every?: ScreenshotWhereInput
    some?: ScreenshotWhereInput
    none?: ScreenshotWhereInput
  }

  export type DevelopersNullableScalarRelationFilter = {
    is?: DevelopersWhereInput | null
    isNot?: DevelopersWhereInput | null
  }

  export type GameRatingNullableScalarRelationFilter = {
    is?: GameRatingWhereInput | null
    isNot?: GameRatingWhereInput | null
  }

  export type UserProfileListRelationFilter = {
    every?: UserProfileWhereInput
    some?: UserProfileWhereInput
    none?: UserProfileWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlatformOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScreenshotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    igdbId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    storyline?: SortOrder
    firstReleaseDate?: SortOrder
    originalPlatform?: SortOrder
    coverUrl?: SortOrder
    rating?: SortOrder
    aggregatedRating?: SortOrder
    totalRating?: SortOrder
    totalRatingCount?: SortOrder
    ageRatingId?: SortOrder
    developerId?: SortOrder
    url?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    id?: SortOrder
    igdbId?: SortOrder
    rating?: SortOrder
    aggregatedRating?: SortOrder
    totalRating?: SortOrder
    totalRatingCount?: SortOrder
    ageRatingId?: SortOrder
    developerId?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    igdbId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    storyline?: SortOrder
    firstReleaseDate?: SortOrder
    originalPlatform?: SortOrder
    coverUrl?: SortOrder
    rating?: SortOrder
    aggregatedRating?: SortOrder
    totalRating?: SortOrder
    totalRatingCount?: SortOrder
    ageRatingId?: SortOrder
    developerId?: SortOrder
    url?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    igdbId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    storyline?: SortOrder
    firstReleaseDate?: SortOrder
    originalPlatform?: SortOrder
    coverUrl?: SortOrder
    rating?: SortOrder
    aggregatedRating?: SortOrder
    totalRating?: SortOrder
    totalRatingCount?: SortOrder
    ageRatingId?: SortOrder
    developerId?: SortOrder
    url?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    id?: SortOrder
    igdbId?: SortOrder
    rating?: SortOrder
    aggregatedRating?: SortOrder
    totalRating?: SortOrder
    totalRatingCount?: SortOrder
    ageRatingId?: SortOrder
    developerId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type GameRatingCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    description?: SortOrder
  }

  export type GameRatingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GameRatingMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    description?: SortOrder
  }

  export type GameRatingMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    description?: SortOrder
  }

  export type GameRatingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlatformCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    releaseOrder?: SortOrder
    abbreviation?: SortOrder
    generation?: SortOrder
    slug?: SortOrder
    platformLogo?: SortOrder
  }

  export type PlatformAvgOrderByAggregateInput = {
    id?: SortOrder
    releaseOrder?: SortOrder
    generation?: SortOrder
    platformLogo?: SortOrder
  }

  export type PlatformMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    releaseOrder?: SortOrder
    abbreviation?: SortOrder
    generation?: SortOrder
    slug?: SortOrder
    platformLogo?: SortOrder
  }

  export type PlatformMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    releaseOrder?: SortOrder
    abbreviation?: SortOrder
    generation?: SortOrder
    slug?: SortOrder
    platformLogo?: SortOrder
  }

  export type PlatformSumOrderByAggregateInput = {
    id?: SortOrder
    releaseOrder?: SortOrder
    generation?: SortOrder
    platformLogo?: SortOrder
  }

  export type DevelopersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrder
    country?: SortOrder
  }

  export type DevelopersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DevelopersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrder
    country?: SortOrder
  }

  export type DevelopersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrder
    country?: SortOrder
  }

  export type DevelopersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    igdbId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type GenreAvgOrderByAggregateInput = {
    id?: SortOrder
    igdbId?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    igdbId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    igdbId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type GenreSumOrderByAggregateInput = {
    id?: SortOrder
    igdbId?: SortOrder
  }

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type CoverCountOrderByAggregateInput = {
    id?: SortOrder
    igdbId?: SortOrder
    imageId?: SortOrder
    url?: SortOrder
    height?: SortOrder
    width?: SortOrder
    gameId?: SortOrder
  }

  export type CoverAvgOrderByAggregateInput = {
    id?: SortOrder
    igdbId?: SortOrder
    height?: SortOrder
    width?: SortOrder
    gameId?: SortOrder
  }

  export type CoverMaxOrderByAggregateInput = {
    id?: SortOrder
    igdbId?: SortOrder
    imageId?: SortOrder
    url?: SortOrder
    height?: SortOrder
    width?: SortOrder
    gameId?: SortOrder
  }

  export type CoverMinOrderByAggregateInput = {
    id?: SortOrder
    igdbId?: SortOrder
    imageId?: SortOrder
    url?: SortOrder
    height?: SortOrder
    width?: SortOrder
    gameId?: SortOrder
  }

  export type CoverSumOrderByAggregateInput = {
    id?: SortOrder
    igdbId?: SortOrder
    height?: SortOrder
    width?: SortOrder
    gameId?: SortOrder
  }

  export type ScreenshotCountOrderByAggregateInput = {
    id?: SortOrder
    igdbId?: SortOrder
    imageId?: SortOrder
    url?: SortOrder
    height?: SortOrder
    width?: SortOrder
    gameId?: SortOrder
  }

  export type ScreenshotAvgOrderByAggregateInput = {
    id?: SortOrder
    igdbId?: SortOrder
    height?: SortOrder
    width?: SortOrder
    gameId?: SortOrder
  }

  export type ScreenshotMaxOrderByAggregateInput = {
    id?: SortOrder
    igdbId?: SortOrder
    imageId?: SortOrder
    url?: SortOrder
    height?: SortOrder
    width?: SortOrder
    gameId?: SortOrder
  }

  export type ScreenshotMinOrderByAggregateInput = {
    id?: SortOrder
    igdbId?: SortOrder
    imageId?: SortOrder
    url?: SortOrder
    height?: SortOrder
    width?: SortOrder
    gameId?: SortOrder
  }

  export type ScreenshotSumOrderByAggregateInput = {
    id?: SortOrder
    igdbId?: SortOrder
    height?: SortOrder
    width?: SortOrder
    gameId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutUserProfileInput = {
    create?: XOR<UserCreateWithoutUserProfileInput, UserUncheckedCreateWithoutUserProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProfileInput
    connect?: UserWhereUniqueInput
  }

  export type GameCreateNestedManyWithoutSavedByUsersInput = {
    create?: XOR<GameCreateWithoutSavedByUsersInput, GameUncheckedCreateWithoutSavedByUsersInput> | GameCreateWithoutSavedByUsersInput[] | GameUncheckedCreateWithoutSavedByUsersInput[]
    connectOrCreate?: GameCreateOrConnectWithoutSavedByUsersInput | GameCreateOrConnectWithoutSavedByUsersInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutSavedByUsersInput = {
    create?: XOR<GameCreateWithoutSavedByUsersInput, GameUncheckedCreateWithoutSavedByUsersInput> | GameCreateWithoutSavedByUsersInput[] | GameUncheckedCreateWithoutSavedByUsersInput[]
    connectOrCreate?: GameCreateOrConnectWithoutSavedByUsersInput | GameCreateOrConnectWithoutSavedByUsersInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutUserProfileNestedInput = {
    create?: XOR<UserCreateWithoutUserProfileInput, UserUncheckedCreateWithoutUserProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProfileInput
    upsert?: UserUpsertWithoutUserProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserProfileInput, UserUpdateWithoutUserProfileInput>, UserUncheckedUpdateWithoutUserProfileInput>
  }

  export type GameUpdateManyWithoutSavedByUsersNestedInput = {
    create?: XOR<GameCreateWithoutSavedByUsersInput, GameUncheckedCreateWithoutSavedByUsersInput> | GameCreateWithoutSavedByUsersInput[] | GameUncheckedCreateWithoutSavedByUsersInput[]
    connectOrCreate?: GameCreateOrConnectWithoutSavedByUsersInput | GameCreateOrConnectWithoutSavedByUsersInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutSavedByUsersInput | GameUpsertWithWhereUniqueWithoutSavedByUsersInput[]
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutSavedByUsersInput | GameUpdateWithWhereUniqueWithoutSavedByUsersInput[]
    updateMany?: GameUpdateManyWithWhereWithoutSavedByUsersInput | GameUpdateManyWithWhereWithoutSavedByUsersInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutSavedByUsersNestedInput = {
    create?: XOR<GameCreateWithoutSavedByUsersInput, GameUncheckedCreateWithoutSavedByUsersInput> | GameCreateWithoutSavedByUsersInput[] | GameUncheckedCreateWithoutSavedByUsersInput[]
    connectOrCreate?: GameCreateOrConnectWithoutSavedByUsersInput | GameCreateOrConnectWithoutSavedByUsersInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutSavedByUsersInput | GameUpsertWithWhereUniqueWithoutSavedByUsersInput[]
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutSavedByUsersInput | GameUpdateWithWhereUniqueWithoutSavedByUsersInput[]
    updateMany?: GameUpdateManyWithWhereWithoutSavedByUsersInput | GameUpdateManyWithWhereWithoutSavedByUsersInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GenreCreateNestedManyWithoutGamesInput = {
    create?: XOR<GenreCreateWithoutGamesInput, GenreUncheckedCreateWithoutGamesInput> | GenreCreateWithoutGamesInput[] | GenreUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutGamesInput | GenreCreateOrConnectWithoutGamesInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type PlatformCreateNestedManyWithoutGamesInput = {
    create?: XOR<PlatformCreateWithoutGamesInput, PlatformUncheckedCreateWithoutGamesInput> | PlatformCreateWithoutGamesInput[] | PlatformUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: PlatformCreateOrConnectWithoutGamesInput | PlatformCreateOrConnectWithoutGamesInput[]
    connect?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
  }

  export type CoverCreateNestedManyWithoutGameInput = {
    create?: XOR<CoverCreateWithoutGameInput, CoverUncheckedCreateWithoutGameInput> | CoverCreateWithoutGameInput[] | CoverUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CoverCreateOrConnectWithoutGameInput | CoverCreateOrConnectWithoutGameInput[]
    createMany?: CoverCreateManyGameInputEnvelope
    connect?: CoverWhereUniqueInput | CoverWhereUniqueInput[]
  }

  export type ScreenshotCreateNestedManyWithoutGameInput = {
    create?: XOR<ScreenshotCreateWithoutGameInput, ScreenshotUncheckedCreateWithoutGameInput> | ScreenshotCreateWithoutGameInput[] | ScreenshotUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ScreenshotCreateOrConnectWithoutGameInput | ScreenshotCreateOrConnectWithoutGameInput[]
    createMany?: ScreenshotCreateManyGameInputEnvelope
    connect?: ScreenshotWhereUniqueInput | ScreenshotWhereUniqueInput[]
  }

  export type DevelopersCreateNestedOneWithoutGamesInput = {
    create?: XOR<DevelopersCreateWithoutGamesInput, DevelopersUncheckedCreateWithoutGamesInput>
    connectOrCreate?: DevelopersCreateOrConnectWithoutGamesInput
    connect?: DevelopersWhereUniqueInput
  }

  export type GameRatingCreateNestedOneWithoutGamesInput = {
    create?: XOR<GameRatingCreateWithoutGamesInput, GameRatingUncheckedCreateWithoutGamesInput>
    connectOrCreate?: GameRatingCreateOrConnectWithoutGamesInput
    connect?: GameRatingWhereUniqueInput
  }

  export type UserProfileCreateNestedManyWithoutSavedGamesInput = {
    create?: XOR<UserProfileCreateWithoutSavedGamesInput, UserProfileUncheckedCreateWithoutSavedGamesInput> | UserProfileCreateWithoutSavedGamesInput[] | UserProfileUncheckedCreateWithoutSavedGamesInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutSavedGamesInput | UserProfileCreateOrConnectWithoutSavedGamesInput[]
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
  }

  export type GenreUncheckedCreateNestedManyWithoutGamesInput = {
    create?: XOR<GenreCreateWithoutGamesInput, GenreUncheckedCreateWithoutGamesInput> | GenreCreateWithoutGamesInput[] | GenreUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutGamesInput | GenreCreateOrConnectWithoutGamesInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type PlatformUncheckedCreateNestedManyWithoutGamesInput = {
    create?: XOR<PlatformCreateWithoutGamesInput, PlatformUncheckedCreateWithoutGamesInput> | PlatformCreateWithoutGamesInput[] | PlatformUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: PlatformCreateOrConnectWithoutGamesInput | PlatformCreateOrConnectWithoutGamesInput[]
    connect?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
  }

  export type CoverUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<CoverCreateWithoutGameInput, CoverUncheckedCreateWithoutGameInput> | CoverCreateWithoutGameInput[] | CoverUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CoverCreateOrConnectWithoutGameInput | CoverCreateOrConnectWithoutGameInput[]
    createMany?: CoverCreateManyGameInputEnvelope
    connect?: CoverWhereUniqueInput | CoverWhereUniqueInput[]
  }

  export type ScreenshotUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<ScreenshotCreateWithoutGameInput, ScreenshotUncheckedCreateWithoutGameInput> | ScreenshotCreateWithoutGameInput[] | ScreenshotUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ScreenshotCreateOrConnectWithoutGameInput | ScreenshotCreateOrConnectWithoutGameInput[]
    createMany?: ScreenshotCreateManyGameInputEnvelope
    connect?: ScreenshotWhereUniqueInput | ScreenshotWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedManyWithoutSavedGamesInput = {
    create?: XOR<UserProfileCreateWithoutSavedGamesInput, UserProfileUncheckedCreateWithoutSavedGamesInput> | UserProfileCreateWithoutSavedGamesInput[] | UserProfileUncheckedCreateWithoutSavedGamesInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutSavedGamesInput | UserProfileCreateOrConnectWithoutSavedGamesInput[]
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GenreUpdateManyWithoutGamesNestedInput = {
    create?: XOR<GenreCreateWithoutGamesInput, GenreUncheckedCreateWithoutGamesInput> | GenreCreateWithoutGamesInput[] | GenreUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutGamesInput | GenreCreateOrConnectWithoutGamesInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutGamesInput | GenreUpsertWithWhereUniqueWithoutGamesInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutGamesInput | GenreUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutGamesInput | GenreUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type PlatformUpdateManyWithoutGamesNestedInput = {
    create?: XOR<PlatformCreateWithoutGamesInput, PlatformUncheckedCreateWithoutGamesInput> | PlatformCreateWithoutGamesInput[] | PlatformUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: PlatformCreateOrConnectWithoutGamesInput | PlatformCreateOrConnectWithoutGamesInput[]
    upsert?: PlatformUpsertWithWhereUniqueWithoutGamesInput | PlatformUpsertWithWhereUniqueWithoutGamesInput[]
    set?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    disconnect?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    delete?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    connect?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    update?: PlatformUpdateWithWhereUniqueWithoutGamesInput | PlatformUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: PlatformUpdateManyWithWhereWithoutGamesInput | PlatformUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: PlatformScalarWhereInput | PlatformScalarWhereInput[]
  }

  export type CoverUpdateManyWithoutGameNestedInput = {
    create?: XOR<CoverCreateWithoutGameInput, CoverUncheckedCreateWithoutGameInput> | CoverCreateWithoutGameInput[] | CoverUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CoverCreateOrConnectWithoutGameInput | CoverCreateOrConnectWithoutGameInput[]
    upsert?: CoverUpsertWithWhereUniqueWithoutGameInput | CoverUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: CoverCreateManyGameInputEnvelope
    set?: CoverWhereUniqueInput | CoverWhereUniqueInput[]
    disconnect?: CoverWhereUniqueInput | CoverWhereUniqueInput[]
    delete?: CoverWhereUniqueInput | CoverWhereUniqueInput[]
    connect?: CoverWhereUniqueInput | CoverWhereUniqueInput[]
    update?: CoverUpdateWithWhereUniqueWithoutGameInput | CoverUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: CoverUpdateManyWithWhereWithoutGameInput | CoverUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: CoverScalarWhereInput | CoverScalarWhereInput[]
  }

  export type ScreenshotUpdateManyWithoutGameNestedInput = {
    create?: XOR<ScreenshotCreateWithoutGameInput, ScreenshotUncheckedCreateWithoutGameInput> | ScreenshotCreateWithoutGameInput[] | ScreenshotUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ScreenshotCreateOrConnectWithoutGameInput | ScreenshotCreateOrConnectWithoutGameInput[]
    upsert?: ScreenshotUpsertWithWhereUniqueWithoutGameInput | ScreenshotUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: ScreenshotCreateManyGameInputEnvelope
    set?: ScreenshotWhereUniqueInput | ScreenshotWhereUniqueInput[]
    disconnect?: ScreenshotWhereUniqueInput | ScreenshotWhereUniqueInput[]
    delete?: ScreenshotWhereUniqueInput | ScreenshotWhereUniqueInput[]
    connect?: ScreenshotWhereUniqueInput | ScreenshotWhereUniqueInput[]
    update?: ScreenshotUpdateWithWhereUniqueWithoutGameInput | ScreenshotUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: ScreenshotUpdateManyWithWhereWithoutGameInput | ScreenshotUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: ScreenshotScalarWhereInput | ScreenshotScalarWhereInput[]
  }

  export type DevelopersUpdateOneWithoutGamesNestedInput = {
    create?: XOR<DevelopersCreateWithoutGamesInput, DevelopersUncheckedCreateWithoutGamesInput>
    connectOrCreate?: DevelopersCreateOrConnectWithoutGamesInput
    upsert?: DevelopersUpsertWithoutGamesInput
    disconnect?: DevelopersWhereInput | boolean
    delete?: DevelopersWhereInput | boolean
    connect?: DevelopersWhereUniqueInput
    update?: XOR<XOR<DevelopersUpdateToOneWithWhereWithoutGamesInput, DevelopersUpdateWithoutGamesInput>, DevelopersUncheckedUpdateWithoutGamesInput>
  }

  export type GameRatingUpdateOneWithoutGamesNestedInput = {
    create?: XOR<GameRatingCreateWithoutGamesInput, GameRatingUncheckedCreateWithoutGamesInput>
    connectOrCreate?: GameRatingCreateOrConnectWithoutGamesInput
    upsert?: GameRatingUpsertWithoutGamesInput
    disconnect?: GameRatingWhereInput | boolean
    delete?: GameRatingWhereInput | boolean
    connect?: GameRatingWhereUniqueInput
    update?: XOR<XOR<GameRatingUpdateToOneWithWhereWithoutGamesInput, GameRatingUpdateWithoutGamesInput>, GameRatingUncheckedUpdateWithoutGamesInput>
  }

  export type UserProfileUpdateManyWithoutSavedGamesNestedInput = {
    create?: XOR<UserProfileCreateWithoutSavedGamesInput, UserProfileUncheckedCreateWithoutSavedGamesInput> | UserProfileCreateWithoutSavedGamesInput[] | UserProfileUncheckedCreateWithoutSavedGamesInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutSavedGamesInput | UserProfileCreateOrConnectWithoutSavedGamesInput[]
    upsert?: UserProfileUpsertWithWhereUniqueWithoutSavedGamesInput | UserProfileUpsertWithWhereUniqueWithoutSavedGamesInput[]
    set?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    disconnect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    delete?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    update?: UserProfileUpdateWithWhereUniqueWithoutSavedGamesInput | UserProfileUpdateWithWhereUniqueWithoutSavedGamesInput[]
    updateMany?: UserProfileUpdateManyWithWhereWithoutSavedGamesInput | UserProfileUpdateManyWithWhereWithoutSavedGamesInput[]
    deleteMany?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
  }

  export type GenreUncheckedUpdateManyWithoutGamesNestedInput = {
    create?: XOR<GenreCreateWithoutGamesInput, GenreUncheckedCreateWithoutGamesInput> | GenreCreateWithoutGamesInput[] | GenreUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutGamesInput | GenreCreateOrConnectWithoutGamesInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutGamesInput | GenreUpsertWithWhereUniqueWithoutGamesInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutGamesInput | GenreUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutGamesInput | GenreUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type PlatformUncheckedUpdateManyWithoutGamesNestedInput = {
    create?: XOR<PlatformCreateWithoutGamesInput, PlatformUncheckedCreateWithoutGamesInput> | PlatformCreateWithoutGamesInput[] | PlatformUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: PlatformCreateOrConnectWithoutGamesInput | PlatformCreateOrConnectWithoutGamesInput[]
    upsert?: PlatformUpsertWithWhereUniqueWithoutGamesInput | PlatformUpsertWithWhereUniqueWithoutGamesInput[]
    set?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    disconnect?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    delete?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    connect?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    update?: PlatformUpdateWithWhereUniqueWithoutGamesInput | PlatformUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: PlatformUpdateManyWithWhereWithoutGamesInput | PlatformUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: PlatformScalarWhereInput | PlatformScalarWhereInput[]
  }

  export type CoverUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<CoverCreateWithoutGameInput, CoverUncheckedCreateWithoutGameInput> | CoverCreateWithoutGameInput[] | CoverUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CoverCreateOrConnectWithoutGameInput | CoverCreateOrConnectWithoutGameInput[]
    upsert?: CoverUpsertWithWhereUniqueWithoutGameInput | CoverUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: CoverCreateManyGameInputEnvelope
    set?: CoverWhereUniqueInput | CoverWhereUniqueInput[]
    disconnect?: CoverWhereUniqueInput | CoverWhereUniqueInput[]
    delete?: CoverWhereUniqueInput | CoverWhereUniqueInput[]
    connect?: CoverWhereUniqueInput | CoverWhereUniqueInput[]
    update?: CoverUpdateWithWhereUniqueWithoutGameInput | CoverUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: CoverUpdateManyWithWhereWithoutGameInput | CoverUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: CoverScalarWhereInput | CoverScalarWhereInput[]
  }

  export type ScreenshotUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<ScreenshotCreateWithoutGameInput, ScreenshotUncheckedCreateWithoutGameInput> | ScreenshotCreateWithoutGameInput[] | ScreenshotUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ScreenshotCreateOrConnectWithoutGameInput | ScreenshotCreateOrConnectWithoutGameInput[]
    upsert?: ScreenshotUpsertWithWhereUniqueWithoutGameInput | ScreenshotUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: ScreenshotCreateManyGameInputEnvelope
    set?: ScreenshotWhereUniqueInput | ScreenshotWhereUniqueInput[]
    disconnect?: ScreenshotWhereUniqueInput | ScreenshotWhereUniqueInput[]
    delete?: ScreenshotWhereUniqueInput | ScreenshotWhereUniqueInput[]
    connect?: ScreenshotWhereUniqueInput | ScreenshotWhereUniqueInput[]
    update?: ScreenshotUpdateWithWhereUniqueWithoutGameInput | ScreenshotUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: ScreenshotUpdateManyWithWhereWithoutGameInput | ScreenshotUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: ScreenshotScalarWhereInput | ScreenshotScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateManyWithoutSavedGamesNestedInput = {
    create?: XOR<UserProfileCreateWithoutSavedGamesInput, UserProfileUncheckedCreateWithoutSavedGamesInput> | UserProfileCreateWithoutSavedGamesInput[] | UserProfileUncheckedCreateWithoutSavedGamesInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutSavedGamesInput | UserProfileCreateOrConnectWithoutSavedGamesInput[]
    upsert?: UserProfileUpsertWithWhereUniqueWithoutSavedGamesInput | UserProfileUpsertWithWhereUniqueWithoutSavedGamesInput[]
    set?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    disconnect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    delete?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    update?: UserProfileUpdateWithWhereUniqueWithoutSavedGamesInput | UserProfileUpdateWithWhereUniqueWithoutSavedGamesInput[]
    updateMany?: UserProfileUpdateManyWithWhereWithoutSavedGamesInput | UserProfileUpdateManyWithWhereWithoutSavedGamesInput[]
    deleteMany?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
  }

  export type GameCreateNestedManyWithoutAgeRatingInput = {
    create?: XOR<GameCreateWithoutAgeRatingInput, GameUncheckedCreateWithoutAgeRatingInput> | GameCreateWithoutAgeRatingInput[] | GameUncheckedCreateWithoutAgeRatingInput[]
    connectOrCreate?: GameCreateOrConnectWithoutAgeRatingInput | GameCreateOrConnectWithoutAgeRatingInput[]
    createMany?: GameCreateManyAgeRatingInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutAgeRatingInput = {
    create?: XOR<GameCreateWithoutAgeRatingInput, GameUncheckedCreateWithoutAgeRatingInput> | GameCreateWithoutAgeRatingInput[] | GameUncheckedCreateWithoutAgeRatingInput[]
    connectOrCreate?: GameCreateOrConnectWithoutAgeRatingInput | GameCreateOrConnectWithoutAgeRatingInput[]
    createMany?: GameCreateManyAgeRatingInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUpdateManyWithoutAgeRatingNestedInput = {
    create?: XOR<GameCreateWithoutAgeRatingInput, GameUncheckedCreateWithoutAgeRatingInput> | GameCreateWithoutAgeRatingInput[] | GameUncheckedCreateWithoutAgeRatingInput[]
    connectOrCreate?: GameCreateOrConnectWithoutAgeRatingInput | GameCreateOrConnectWithoutAgeRatingInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutAgeRatingInput | GameUpsertWithWhereUniqueWithoutAgeRatingInput[]
    createMany?: GameCreateManyAgeRatingInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutAgeRatingInput | GameUpdateWithWhereUniqueWithoutAgeRatingInput[]
    updateMany?: GameUpdateManyWithWhereWithoutAgeRatingInput | GameUpdateManyWithWhereWithoutAgeRatingInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutAgeRatingNestedInput = {
    create?: XOR<GameCreateWithoutAgeRatingInput, GameUncheckedCreateWithoutAgeRatingInput> | GameCreateWithoutAgeRatingInput[] | GameUncheckedCreateWithoutAgeRatingInput[]
    connectOrCreate?: GameCreateOrConnectWithoutAgeRatingInput | GameCreateOrConnectWithoutAgeRatingInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutAgeRatingInput | GameUpsertWithWhereUniqueWithoutAgeRatingInput[]
    createMany?: GameCreateManyAgeRatingInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutAgeRatingInput | GameUpdateWithWhereUniqueWithoutAgeRatingInput[]
    updateMany?: GameUpdateManyWithWhereWithoutAgeRatingInput | GameUpdateManyWithWhereWithoutAgeRatingInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameCreateNestedManyWithoutPlatformsInput = {
    create?: XOR<GameCreateWithoutPlatformsInput, GameUncheckedCreateWithoutPlatformsInput> | GameCreateWithoutPlatformsInput[] | GameUncheckedCreateWithoutPlatformsInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPlatformsInput | GameCreateOrConnectWithoutPlatformsInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutPlatformsInput = {
    create?: XOR<GameCreateWithoutPlatformsInput, GameUncheckedCreateWithoutPlatformsInput> | GameCreateWithoutPlatformsInput[] | GameUncheckedCreateWithoutPlatformsInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPlatformsInput | GameCreateOrConnectWithoutPlatformsInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUpdateManyWithoutPlatformsNestedInput = {
    create?: XOR<GameCreateWithoutPlatformsInput, GameUncheckedCreateWithoutPlatformsInput> | GameCreateWithoutPlatformsInput[] | GameUncheckedCreateWithoutPlatformsInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPlatformsInput | GameCreateOrConnectWithoutPlatformsInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutPlatformsInput | GameUpsertWithWhereUniqueWithoutPlatformsInput[]
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPlatformsInput | GameUpdateWithWhereUniqueWithoutPlatformsInput[]
    updateMany?: GameUpdateManyWithWhereWithoutPlatformsInput | GameUpdateManyWithWhereWithoutPlatformsInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutPlatformsNestedInput = {
    create?: XOR<GameCreateWithoutPlatformsInput, GameUncheckedCreateWithoutPlatformsInput> | GameCreateWithoutPlatformsInput[] | GameUncheckedCreateWithoutPlatformsInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPlatformsInput | GameCreateOrConnectWithoutPlatformsInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutPlatformsInput | GameUpsertWithWhereUniqueWithoutPlatformsInput[]
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPlatformsInput | GameUpdateWithWhereUniqueWithoutPlatformsInput[]
    updateMany?: GameUpdateManyWithWhereWithoutPlatformsInput | GameUpdateManyWithWhereWithoutPlatformsInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameCreateNestedManyWithoutDeveloperInput = {
    create?: XOR<GameCreateWithoutDeveloperInput, GameUncheckedCreateWithoutDeveloperInput> | GameCreateWithoutDeveloperInput[] | GameUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: GameCreateOrConnectWithoutDeveloperInput | GameCreateOrConnectWithoutDeveloperInput[]
    createMany?: GameCreateManyDeveloperInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutDeveloperInput = {
    create?: XOR<GameCreateWithoutDeveloperInput, GameUncheckedCreateWithoutDeveloperInput> | GameCreateWithoutDeveloperInput[] | GameUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: GameCreateOrConnectWithoutDeveloperInput | GameCreateOrConnectWithoutDeveloperInput[]
    createMany?: GameCreateManyDeveloperInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUpdateManyWithoutDeveloperNestedInput = {
    create?: XOR<GameCreateWithoutDeveloperInput, GameUncheckedCreateWithoutDeveloperInput> | GameCreateWithoutDeveloperInput[] | GameUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: GameCreateOrConnectWithoutDeveloperInput | GameCreateOrConnectWithoutDeveloperInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutDeveloperInput | GameUpsertWithWhereUniqueWithoutDeveloperInput[]
    createMany?: GameCreateManyDeveloperInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutDeveloperInput | GameUpdateWithWhereUniqueWithoutDeveloperInput[]
    updateMany?: GameUpdateManyWithWhereWithoutDeveloperInput | GameUpdateManyWithWhereWithoutDeveloperInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutDeveloperNestedInput = {
    create?: XOR<GameCreateWithoutDeveloperInput, GameUncheckedCreateWithoutDeveloperInput> | GameCreateWithoutDeveloperInput[] | GameUncheckedCreateWithoutDeveloperInput[]
    connectOrCreate?: GameCreateOrConnectWithoutDeveloperInput | GameCreateOrConnectWithoutDeveloperInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutDeveloperInput | GameUpsertWithWhereUniqueWithoutDeveloperInput[]
    createMany?: GameCreateManyDeveloperInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutDeveloperInput | GameUpdateWithWhereUniqueWithoutDeveloperInput[]
    updateMany?: GameUpdateManyWithWhereWithoutDeveloperInput | GameUpdateManyWithWhereWithoutDeveloperInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameCreateNestedManyWithoutGenresInput = {
    create?: XOR<GameCreateWithoutGenresInput, GameUncheckedCreateWithoutGenresInput> | GameCreateWithoutGenresInput[] | GameUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: GameCreateOrConnectWithoutGenresInput | GameCreateOrConnectWithoutGenresInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<GameCreateWithoutGenresInput, GameUncheckedCreateWithoutGenresInput> | GameCreateWithoutGenresInput[] | GameUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: GameCreateOrConnectWithoutGenresInput | GameCreateOrConnectWithoutGenresInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUpdateManyWithoutGenresNestedInput = {
    create?: XOR<GameCreateWithoutGenresInput, GameUncheckedCreateWithoutGenresInput> | GameCreateWithoutGenresInput[] | GameUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: GameCreateOrConnectWithoutGenresInput | GameCreateOrConnectWithoutGenresInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutGenresInput | GameUpsertWithWhereUniqueWithoutGenresInput[]
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutGenresInput | GameUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: GameUpdateManyWithWhereWithoutGenresInput | GameUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<GameCreateWithoutGenresInput, GameUncheckedCreateWithoutGenresInput> | GameCreateWithoutGenresInput[] | GameUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: GameCreateOrConnectWithoutGenresInput | GameCreateOrConnectWithoutGenresInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutGenresInput | GameUpsertWithWhereUniqueWithoutGenresInput[]
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutGenresInput | GameUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: GameUpdateManyWithWhereWithoutGenresInput | GameUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameCreateNestedOneWithoutCoversInput = {
    create?: XOR<GameCreateWithoutCoversInput, GameUncheckedCreateWithoutCoversInput>
    connectOrCreate?: GameCreateOrConnectWithoutCoversInput
    connect?: GameWhereUniqueInput
  }

  export type GameUpdateOneRequiredWithoutCoversNestedInput = {
    create?: XOR<GameCreateWithoutCoversInput, GameUncheckedCreateWithoutCoversInput>
    connectOrCreate?: GameCreateOrConnectWithoutCoversInput
    upsert?: GameUpsertWithoutCoversInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutCoversInput, GameUpdateWithoutCoversInput>, GameUncheckedUpdateWithoutCoversInput>
  }

  export type GameCreateNestedOneWithoutScreenshotsInput = {
    create?: XOR<GameCreateWithoutScreenshotsInput, GameUncheckedCreateWithoutScreenshotsInput>
    connectOrCreate?: GameCreateOrConnectWithoutScreenshotsInput
    connect?: GameWhereUniqueInput
  }

  export type GameUpdateOneRequiredWithoutScreenshotsNestedInput = {
    create?: XOR<GameCreateWithoutScreenshotsInput, GameUncheckedCreateWithoutScreenshotsInput>
    connectOrCreate?: GameCreateOrConnectWithoutScreenshotsInput
    upsert?: GameUpsertWithoutScreenshotsInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutScreenshotsInput, GameUpdateWithoutScreenshotsInput>, GameUncheckedUpdateWithoutScreenshotsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserProfileCreateWithoutUserInput = {
    savedGames?: GameCreateNestedManyWithoutSavedByUsersInput
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: number
    savedGames?: GameUncheckedCreateNestedManyWithoutSavedByUsersInput
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    savedGames?: GameUpdateManyWithoutSavedByUsersNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    savedGames?: GameUncheckedUpdateManyWithoutSavedByUsersNestedInput
  }

  export type UserCreateWithoutUserProfileInput = {
    email: string
    is_admin?: boolean
    fname: string
    lname: string
    alias: string
    password: string
  }

  export type UserUncheckedCreateWithoutUserProfileInput = {
    id?: number
    email: string
    is_admin?: boolean
    fname: string
    lname: string
    alias: string
    password: string
  }

  export type UserCreateOrConnectWithoutUserProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserProfileInput, UserUncheckedCreateWithoutUserProfileInput>
  }

  export type GameCreateWithoutSavedByUsersInput = {
    igdbId: number
    name: string
    slug: string
    summary?: string | null
    storyline?: string | null
    firstReleaseDate?: Date | string | null
    originalPlatform?: string | null
    coverUrl?: string | null
    rating?: number | null
    aggregatedRating?: number | null
    totalRating?: number | null
    totalRatingCount?: number | null
    url?: string | null
    genres?: GenreCreateNestedManyWithoutGamesInput
    platforms?: PlatformCreateNestedManyWithoutGamesInput
    covers?: CoverCreateNestedManyWithoutGameInput
    screenshots?: ScreenshotCreateNestedManyWithoutGameInput
    developer?: DevelopersCreateNestedOneWithoutGamesInput
    ageRating?: GameRatingCreateNestedOneWithoutGamesInput
  }

  export type GameUncheckedCreateWithoutSavedByUsersInput = {
    id?: number
    igdbId: number
    name: string
    slug: string
    summary?: string | null
    storyline?: string | null
    firstReleaseDate?: Date | string | null
    originalPlatform?: string | null
    coverUrl?: string | null
    rating?: number | null
    aggregatedRating?: number | null
    totalRating?: number | null
    totalRatingCount?: number | null
    ageRatingId?: number | null
    developerId?: number | null
    url?: string | null
    genres?: GenreUncheckedCreateNestedManyWithoutGamesInput
    platforms?: PlatformUncheckedCreateNestedManyWithoutGamesInput
    covers?: CoverUncheckedCreateNestedManyWithoutGameInput
    screenshots?: ScreenshotUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutSavedByUsersInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutSavedByUsersInput, GameUncheckedCreateWithoutSavedByUsersInput>
  }

  export type UserUpsertWithoutUserProfileInput = {
    update: XOR<UserUpdateWithoutUserProfileInput, UserUncheckedUpdateWithoutUserProfileInput>
    create: XOR<UserCreateWithoutUserProfileInput, UserUncheckedCreateWithoutUserProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserProfileInput, UserUncheckedUpdateWithoutUserProfileInput>
  }

  export type UserUpdateWithoutUserProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutUserProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    fname?: StringFieldUpdateOperationsInput | string
    lname?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type GameUpsertWithWhereUniqueWithoutSavedByUsersInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutSavedByUsersInput, GameUncheckedUpdateWithoutSavedByUsersInput>
    create: XOR<GameCreateWithoutSavedByUsersInput, GameUncheckedCreateWithoutSavedByUsersInput>
  }

  export type GameUpdateWithWhereUniqueWithoutSavedByUsersInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutSavedByUsersInput, GameUncheckedUpdateWithoutSavedByUsersInput>
  }

  export type GameUpdateManyWithWhereWithoutSavedByUsersInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutSavedByUsersInput>
  }

  export type GameScalarWhereInput = {
    AND?: GameScalarWhereInput | GameScalarWhereInput[]
    OR?: GameScalarWhereInput[]
    NOT?: GameScalarWhereInput | GameScalarWhereInput[]
    id?: IntFilter<"Game"> | number
    igdbId?: IntFilter<"Game"> | number
    name?: StringFilter<"Game"> | string
    slug?: StringFilter<"Game"> | string
    summary?: StringNullableFilter<"Game"> | string | null
    storyline?: StringNullableFilter<"Game"> | string | null
    firstReleaseDate?: DateTimeNullableFilter<"Game"> | Date | string | null
    originalPlatform?: StringNullableFilter<"Game"> | string | null
    coverUrl?: StringNullableFilter<"Game"> | string | null
    rating?: FloatNullableFilter<"Game"> | number | null
    aggregatedRating?: FloatNullableFilter<"Game"> | number | null
    totalRating?: FloatNullableFilter<"Game"> | number | null
    totalRatingCount?: IntNullableFilter<"Game"> | number | null
    ageRatingId?: IntNullableFilter<"Game"> | number | null
    developerId?: IntNullableFilter<"Game"> | number | null
    url?: StringNullableFilter<"Game"> | string | null
  }

  export type GenreCreateWithoutGamesInput = {
    igdbId: number
    name?: string | null
    slug?: string | null
  }

  export type GenreUncheckedCreateWithoutGamesInput = {
    id?: number
    igdbId: number
    name?: string | null
    slug?: string | null
  }

  export type GenreCreateOrConnectWithoutGamesInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutGamesInput, GenreUncheckedCreateWithoutGamesInput>
  }

  export type PlatformCreateWithoutGamesInput = {
    id: number
    name: string
    releaseOrder?: number | null
    abbreviation?: string | null
    generation?: number | null
    slug: string
    platformLogo?: number | null
  }

  export type PlatformUncheckedCreateWithoutGamesInput = {
    id: number
    name: string
    releaseOrder?: number | null
    abbreviation?: string | null
    generation?: number | null
    slug: string
    platformLogo?: number | null
  }

  export type PlatformCreateOrConnectWithoutGamesInput = {
    where: PlatformWhereUniqueInput
    create: XOR<PlatformCreateWithoutGamesInput, PlatformUncheckedCreateWithoutGamesInput>
  }

  export type CoverCreateWithoutGameInput = {
    igdbId: number
    imageId?: string | null
    url?: string | null
    height?: number | null
    width?: number | null
  }

  export type CoverUncheckedCreateWithoutGameInput = {
    id?: number
    igdbId: number
    imageId?: string | null
    url?: string | null
    height?: number | null
    width?: number | null
  }

  export type CoverCreateOrConnectWithoutGameInput = {
    where: CoverWhereUniqueInput
    create: XOR<CoverCreateWithoutGameInput, CoverUncheckedCreateWithoutGameInput>
  }

  export type CoverCreateManyGameInputEnvelope = {
    data: CoverCreateManyGameInput | CoverCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type ScreenshotCreateWithoutGameInput = {
    igdbId: number
    imageId?: string | null
    url?: string | null
    height?: number | null
    width?: number | null
  }

  export type ScreenshotUncheckedCreateWithoutGameInput = {
    id?: number
    igdbId: number
    imageId?: string | null
    url?: string | null
    height?: number | null
    width?: number | null
  }

  export type ScreenshotCreateOrConnectWithoutGameInput = {
    where: ScreenshotWhereUniqueInput
    create: XOR<ScreenshotCreateWithoutGameInput, ScreenshotUncheckedCreateWithoutGameInput>
  }

  export type ScreenshotCreateManyGameInputEnvelope = {
    data: ScreenshotCreateManyGameInput | ScreenshotCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type DevelopersCreateWithoutGamesInput = {
    id: number
    name?: string | null
    logoUrl?: string | null
    country?: string | null
  }

  export type DevelopersUncheckedCreateWithoutGamesInput = {
    id: number
    name?: string | null
    logoUrl?: string | null
    country?: string | null
  }

  export type DevelopersCreateOrConnectWithoutGamesInput = {
    where: DevelopersWhereUniqueInput
    create: XOR<DevelopersCreateWithoutGamesInput, DevelopersUncheckedCreateWithoutGamesInput>
  }

  export type GameRatingCreateWithoutGamesInput = {
    id: number
    rating: string
    description?: string | null
  }

  export type GameRatingUncheckedCreateWithoutGamesInput = {
    id: number
    rating: string
    description?: string | null
  }

  export type GameRatingCreateOrConnectWithoutGamesInput = {
    where: GameRatingWhereUniqueInput
    create: XOR<GameRatingCreateWithoutGamesInput, GameRatingUncheckedCreateWithoutGamesInput>
  }

  export type UserProfileCreateWithoutSavedGamesInput = {
    user: UserCreateNestedOneWithoutUserProfileInput
  }

  export type UserProfileUncheckedCreateWithoutSavedGamesInput = {
    id?: number
    userId: number
  }

  export type UserProfileCreateOrConnectWithoutSavedGamesInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutSavedGamesInput, UserProfileUncheckedCreateWithoutSavedGamesInput>
  }

  export type GenreUpsertWithWhereUniqueWithoutGamesInput = {
    where: GenreWhereUniqueInput
    update: XOR<GenreUpdateWithoutGamesInput, GenreUncheckedUpdateWithoutGamesInput>
    create: XOR<GenreCreateWithoutGamesInput, GenreUncheckedCreateWithoutGamesInput>
  }

  export type GenreUpdateWithWhereUniqueWithoutGamesInput = {
    where: GenreWhereUniqueInput
    data: XOR<GenreUpdateWithoutGamesInput, GenreUncheckedUpdateWithoutGamesInput>
  }

  export type GenreUpdateManyWithWhereWithoutGamesInput = {
    where: GenreScalarWhereInput
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyWithoutGamesInput>
  }

  export type GenreScalarWhereInput = {
    AND?: GenreScalarWhereInput | GenreScalarWhereInput[]
    OR?: GenreScalarWhereInput[]
    NOT?: GenreScalarWhereInput | GenreScalarWhereInput[]
    id?: IntFilter<"Genre"> | number
    igdbId?: IntFilter<"Genre"> | number
    name?: StringNullableFilter<"Genre"> | string | null
    slug?: StringNullableFilter<"Genre"> | string | null
  }

  export type PlatformUpsertWithWhereUniqueWithoutGamesInput = {
    where: PlatformWhereUniqueInput
    update: XOR<PlatformUpdateWithoutGamesInput, PlatformUncheckedUpdateWithoutGamesInput>
    create: XOR<PlatformCreateWithoutGamesInput, PlatformUncheckedCreateWithoutGamesInput>
  }

  export type PlatformUpdateWithWhereUniqueWithoutGamesInput = {
    where: PlatformWhereUniqueInput
    data: XOR<PlatformUpdateWithoutGamesInput, PlatformUncheckedUpdateWithoutGamesInput>
  }

  export type PlatformUpdateManyWithWhereWithoutGamesInput = {
    where: PlatformScalarWhereInput
    data: XOR<PlatformUpdateManyMutationInput, PlatformUncheckedUpdateManyWithoutGamesInput>
  }

  export type PlatformScalarWhereInput = {
    AND?: PlatformScalarWhereInput | PlatformScalarWhereInput[]
    OR?: PlatformScalarWhereInput[]
    NOT?: PlatformScalarWhereInput | PlatformScalarWhereInput[]
    id?: IntFilter<"Platform"> | number
    name?: StringFilter<"Platform"> | string
    releaseOrder?: IntNullableFilter<"Platform"> | number | null
    abbreviation?: StringNullableFilter<"Platform"> | string | null
    generation?: IntNullableFilter<"Platform"> | number | null
    slug?: StringFilter<"Platform"> | string
    platformLogo?: IntNullableFilter<"Platform"> | number | null
  }

  export type CoverUpsertWithWhereUniqueWithoutGameInput = {
    where: CoverWhereUniqueInput
    update: XOR<CoverUpdateWithoutGameInput, CoverUncheckedUpdateWithoutGameInput>
    create: XOR<CoverCreateWithoutGameInput, CoverUncheckedCreateWithoutGameInput>
  }

  export type CoverUpdateWithWhereUniqueWithoutGameInput = {
    where: CoverWhereUniqueInput
    data: XOR<CoverUpdateWithoutGameInput, CoverUncheckedUpdateWithoutGameInput>
  }

  export type CoverUpdateManyWithWhereWithoutGameInput = {
    where: CoverScalarWhereInput
    data: XOR<CoverUpdateManyMutationInput, CoverUncheckedUpdateManyWithoutGameInput>
  }

  export type CoverScalarWhereInput = {
    AND?: CoverScalarWhereInput | CoverScalarWhereInput[]
    OR?: CoverScalarWhereInput[]
    NOT?: CoverScalarWhereInput | CoverScalarWhereInput[]
    id?: IntFilter<"Cover"> | number
    igdbId?: IntFilter<"Cover"> | number
    imageId?: StringNullableFilter<"Cover"> | string | null
    url?: StringNullableFilter<"Cover"> | string | null
    height?: IntNullableFilter<"Cover"> | number | null
    width?: IntNullableFilter<"Cover"> | number | null
    gameId?: IntFilter<"Cover"> | number
  }

  export type ScreenshotUpsertWithWhereUniqueWithoutGameInput = {
    where: ScreenshotWhereUniqueInput
    update: XOR<ScreenshotUpdateWithoutGameInput, ScreenshotUncheckedUpdateWithoutGameInput>
    create: XOR<ScreenshotCreateWithoutGameInput, ScreenshotUncheckedCreateWithoutGameInput>
  }

  export type ScreenshotUpdateWithWhereUniqueWithoutGameInput = {
    where: ScreenshotWhereUniqueInput
    data: XOR<ScreenshotUpdateWithoutGameInput, ScreenshotUncheckedUpdateWithoutGameInput>
  }

  export type ScreenshotUpdateManyWithWhereWithoutGameInput = {
    where: ScreenshotScalarWhereInput
    data: XOR<ScreenshotUpdateManyMutationInput, ScreenshotUncheckedUpdateManyWithoutGameInput>
  }

  export type ScreenshotScalarWhereInput = {
    AND?: ScreenshotScalarWhereInput | ScreenshotScalarWhereInput[]
    OR?: ScreenshotScalarWhereInput[]
    NOT?: ScreenshotScalarWhereInput | ScreenshotScalarWhereInput[]
    id?: IntFilter<"Screenshot"> | number
    igdbId?: IntFilter<"Screenshot"> | number
    imageId?: StringNullableFilter<"Screenshot"> | string | null
    url?: StringNullableFilter<"Screenshot"> | string | null
    height?: IntNullableFilter<"Screenshot"> | number | null
    width?: IntNullableFilter<"Screenshot"> | number | null
    gameId?: IntFilter<"Screenshot"> | number
  }

  export type DevelopersUpsertWithoutGamesInput = {
    update: XOR<DevelopersUpdateWithoutGamesInput, DevelopersUncheckedUpdateWithoutGamesInput>
    create: XOR<DevelopersCreateWithoutGamesInput, DevelopersUncheckedCreateWithoutGamesInput>
    where?: DevelopersWhereInput
  }

  export type DevelopersUpdateToOneWithWhereWithoutGamesInput = {
    where?: DevelopersWhereInput
    data: XOR<DevelopersUpdateWithoutGamesInput, DevelopersUncheckedUpdateWithoutGamesInput>
  }

  export type DevelopersUpdateWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DevelopersUncheckedUpdateWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameRatingUpsertWithoutGamesInput = {
    update: XOR<GameRatingUpdateWithoutGamesInput, GameRatingUncheckedUpdateWithoutGamesInput>
    create: XOR<GameRatingCreateWithoutGamesInput, GameRatingUncheckedCreateWithoutGamesInput>
    where?: GameRatingWhereInput
  }

  export type GameRatingUpdateToOneWithWhereWithoutGamesInput = {
    where?: GameRatingWhereInput
    data: XOR<GameRatingUpdateWithoutGamesInput, GameRatingUncheckedUpdateWithoutGamesInput>
  }

  export type GameRatingUpdateWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameRatingUncheckedUpdateWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserProfileUpsertWithWhereUniqueWithoutSavedGamesInput = {
    where: UserProfileWhereUniqueInput
    update: XOR<UserProfileUpdateWithoutSavedGamesInput, UserProfileUncheckedUpdateWithoutSavedGamesInput>
    create: XOR<UserProfileCreateWithoutSavedGamesInput, UserProfileUncheckedCreateWithoutSavedGamesInput>
  }

  export type UserProfileUpdateWithWhereUniqueWithoutSavedGamesInput = {
    where: UserProfileWhereUniqueInput
    data: XOR<UserProfileUpdateWithoutSavedGamesInput, UserProfileUncheckedUpdateWithoutSavedGamesInput>
  }

  export type UserProfileUpdateManyWithWhereWithoutSavedGamesInput = {
    where: UserProfileScalarWhereInput
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyWithoutSavedGamesInput>
  }

  export type UserProfileScalarWhereInput = {
    AND?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
    OR?: UserProfileScalarWhereInput[]
    NOT?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
    id?: IntFilter<"UserProfile"> | number
    userId?: IntFilter<"UserProfile"> | number
  }

  export type GameCreateWithoutAgeRatingInput = {
    igdbId: number
    name: string
    slug: string
    summary?: string | null
    storyline?: string | null
    firstReleaseDate?: Date | string | null
    originalPlatform?: string | null
    coverUrl?: string | null
    rating?: number | null
    aggregatedRating?: number | null
    totalRating?: number | null
    totalRatingCount?: number | null
    url?: string | null
    genres?: GenreCreateNestedManyWithoutGamesInput
    platforms?: PlatformCreateNestedManyWithoutGamesInput
    covers?: CoverCreateNestedManyWithoutGameInput
    screenshots?: ScreenshotCreateNestedManyWithoutGameInput
    developer?: DevelopersCreateNestedOneWithoutGamesInput
    savedByUsers?: UserProfileCreateNestedManyWithoutSavedGamesInput
  }

  export type GameUncheckedCreateWithoutAgeRatingInput = {
    id?: number
    igdbId: number
    name: string
    slug: string
    summary?: string | null
    storyline?: string | null
    firstReleaseDate?: Date | string | null
    originalPlatform?: string | null
    coverUrl?: string | null
    rating?: number | null
    aggregatedRating?: number | null
    totalRating?: number | null
    totalRatingCount?: number | null
    developerId?: number | null
    url?: string | null
    genres?: GenreUncheckedCreateNestedManyWithoutGamesInput
    platforms?: PlatformUncheckedCreateNestedManyWithoutGamesInput
    covers?: CoverUncheckedCreateNestedManyWithoutGameInput
    screenshots?: ScreenshotUncheckedCreateNestedManyWithoutGameInput
    savedByUsers?: UserProfileUncheckedCreateNestedManyWithoutSavedGamesInput
  }

  export type GameCreateOrConnectWithoutAgeRatingInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutAgeRatingInput, GameUncheckedCreateWithoutAgeRatingInput>
  }

  export type GameCreateManyAgeRatingInputEnvelope = {
    data: GameCreateManyAgeRatingInput | GameCreateManyAgeRatingInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithWhereUniqueWithoutAgeRatingInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutAgeRatingInput, GameUncheckedUpdateWithoutAgeRatingInput>
    create: XOR<GameCreateWithoutAgeRatingInput, GameUncheckedCreateWithoutAgeRatingInput>
  }

  export type GameUpdateWithWhereUniqueWithoutAgeRatingInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutAgeRatingInput, GameUncheckedUpdateWithoutAgeRatingInput>
  }

  export type GameUpdateManyWithWhereWithoutAgeRatingInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutAgeRatingInput>
  }

  export type GameCreateWithoutPlatformsInput = {
    igdbId: number
    name: string
    slug: string
    summary?: string | null
    storyline?: string | null
    firstReleaseDate?: Date | string | null
    originalPlatform?: string | null
    coverUrl?: string | null
    rating?: number | null
    aggregatedRating?: number | null
    totalRating?: number | null
    totalRatingCount?: number | null
    url?: string | null
    genres?: GenreCreateNestedManyWithoutGamesInput
    covers?: CoverCreateNestedManyWithoutGameInput
    screenshots?: ScreenshotCreateNestedManyWithoutGameInput
    developer?: DevelopersCreateNestedOneWithoutGamesInput
    ageRating?: GameRatingCreateNestedOneWithoutGamesInput
    savedByUsers?: UserProfileCreateNestedManyWithoutSavedGamesInput
  }

  export type GameUncheckedCreateWithoutPlatformsInput = {
    id?: number
    igdbId: number
    name: string
    slug: string
    summary?: string | null
    storyline?: string | null
    firstReleaseDate?: Date | string | null
    originalPlatform?: string | null
    coverUrl?: string | null
    rating?: number | null
    aggregatedRating?: number | null
    totalRating?: number | null
    totalRatingCount?: number | null
    ageRatingId?: number | null
    developerId?: number | null
    url?: string | null
    genres?: GenreUncheckedCreateNestedManyWithoutGamesInput
    covers?: CoverUncheckedCreateNestedManyWithoutGameInput
    screenshots?: ScreenshotUncheckedCreateNestedManyWithoutGameInput
    savedByUsers?: UserProfileUncheckedCreateNestedManyWithoutSavedGamesInput
  }

  export type GameCreateOrConnectWithoutPlatformsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPlatformsInput, GameUncheckedCreateWithoutPlatformsInput>
  }

  export type GameUpsertWithWhereUniqueWithoutPlatformsInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutPlatformsInput, GameUncheckedUpdateWithoutPlatformsInput>
    create: XOR<GameCreateWithoutPlatformsInput, GameUncheckedCreateWithoutPlatformsInput>
  }

  export type GameUpdateWithWhereUniqueWithoutPlatformsInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutPlatformsInput, GameUncheckedUpdateWithoutPlatformsInput>
  }

  export type GameUpdateManyWithWhereWithoutPlatformsInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutPlatformsInput>
  }

  export type GameCreateWithoutDeveloperInput = {
    igdbId: number
    name: string
    slug: string
    summary?: string | null
    storyline?: string | null
    firstReleaseDate?: Date | string | null
    originalPlatform?: string | null
    coverUrl?: string | null
    rating?: number | null
    aggregatedRating?: number | null
    totalRating?: number | null
    totalRatingCount?: number | null
    url?: string | null
    genres?: GenreCreateNestedManyWithoutGamesInput
    platforms?: PlatformCreateNestedManyWithoutGamesInput
    covers?: CoverCreateNestedManyWithoutGameInput
    screenshots?: ScreenshotCreateNestedManyWithoutGameInput
    ageRating?: GameRatingCreateNestedOneWithoutGamesInput
    savedByUsers?: UserProfileCreateNestedManyWithoutSavedGamesInput
  }

  export type GameUncheckedCreateWithoutDeveloperInput = {
    id?: number
    igdbId: number
    name: string
    slug: string
    summary?: string | null
    storyline?: string | null
    firstReleaseDate?: Date | string | null
    originalPlatform?: string | null
    coverUrl?: string | null
    rating?: number | null
    aggregatedRating?: number | null
    totalRating?: number | null
    totalRatingCount?: number | null
    ageRatingId?: number | null
    url?: string | null
    genres?: GenreUncheckedCreateNestedManyWithoutGamesInput
    platforms?: PlatformUncheckedCreateNestedManyWithoutGamesInput
    covers?: CoverUncheckedCreateNestedManyWithoutGameInput
    screenshots?: ScreenshotUncheckedCreateNestedManyWithoutGameInput
    savedByUsers?: UserProfileUncheckedCreateNestedManyWithoutSavedGamesInput
  }

  export type GameCreateOrConnectWithoutDeveloperInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutDeveloperInput, GameUncheckedCreateWithoutDeveloperInput>
  }

  export type GameCreateManyDeveloperInputEnvelope = {
    data: GameCreateManyDeveloperInput | GameCreateManyDeveloperInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithWhereUniqueWithoutDeveloperInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutDeveloperInput, GameUncheckedUpdateWithoutDeveloperInput>
    create: XOR<GameCreateWithoutDeveloperInput, GameUncheckedCreateWithoutDeveloperInput>
  }

  export type GameUpdateWithWhereUniqueWithoutDeveloperInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutDeveloperInput, GameUncheckedUpdateWithoutDeveloperInput>
  }

  export type GameUpdateManyWithWhereWithoutDeveloperInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutDeveloperInput>
  }

  export type GameCreateWithoutGenresInput = {
    igdbId: number
    name: string
    slug: string
    summary?: string | null
    storyline?: string | null
    firstReleaseDate?: Date | string | null
    originalPlatform?: string | null
    coverUrl?: string | null
    rating?: number | null
    aggregatedRating?: number | null
    totalRating?: number | null
    totalRatingCount?: number | null
    url?: string | null
    platforms?: PlatformCreateNestedManyWithoutGamesInput
    covers?: CoverCreateNestedManyWithoutGameInput
    screenshots?: ScreenshotCreateNestedManyWithoutGameInput
    developer?: DevelopersCreateNestedOneWithoutGamesInput
    ageRating?: GameRatingCreateNestedOneWithoutGamesInput
    savedByUsers?: UserProfileCreateNestedManyWithoutSavedGamesInput
  }

  export type GameUncheckedCreateWithoutGenresInput = {
    id?: number
    igdbId: number
    name: string
    slug: string
    summary?: string | null
    storyline?: string | null
    firstReleaseDate?: Date | string | null
    originalPlatform?: string | null
    coverUrl?: string | null
    rating?: number | null
    aggregatedRating?: number | null
    totalRating?: number | null
    totalRatingCount?: number | null
    ageRatingId?: number | null
    developerId?: number | null
    url?: string | null
    platforms?: PlatformUncheckedCreateNestedManyWithoutGamesInput
    covers?: CoverUncheckedCreateNestedManyWithoutGameInput
    screenshots?: ScreenshotUncheckedCreateNestedManyWithoutGameInput
    savedByUsers?: UserProfileUncheckedCreateNestedManyWithoutSavedGamesInput
  }

  export type GameCreateOrConnectWithoutGenresInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutGenresInput, GameUncheckedCreateWithoutGenresInput>
  }

  export type GameUpsertWithWhereUniqueWithoutGenresInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutGenresInput, GameUncheckedUpdateWithoutGenresInput>
    create: XOR<GameCreateWithoutGenresInput, GameUncheckedCreateWithoutGenresInput>
  }

  export type GameUpdateWithWhereUniqueWithoutGenresInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutGenresInput, GameUncheckedUpdateWithoutGenresInput>
  }

  export type GameUpdateManyWithWhereWithoutGenresInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutGenresInput>
  }

  export type GameCreateWithoutCoversInput = {
    igdbId: number
    name: string
    slug: string
    summary?: string | null
    storyline?: string | null
    firstReleaseDate?: Date | string | null
    originalPlatform?: string | null
    coverUrl?: string | null
    rating?: number | null
    aggregatedRating?: number | null
    totalRating?: number | null
    totalRatingCount?: number | null
    url?: string | null
    genres?: GenreCreateNestedManyWithoutGamesInput
    platforms?: PlatformCreateNestedManyWithoutGamesInput
    screenshots?: ScreenshotCreateNestedManyWithoutGameInput
    developer?: DevelopersCreateNestedOneWithoutGamesInput
    ageRating?: GameRatingCreateNestedOneWithoutGamesInput
    savedByUsers?: UserProfileCreateNestedManyWithoutSavedGamesInput
  }

  export type GameUncheckedCreateWithoutCoversInput = {
    id?: number
    igdbId: number
    name: string
    slug: string
    summary?: string | null
    storyline?: string | null
    firstReleaseDate?: Date | string | null
    originalPlatform?: string | null
    coverUrl?: string | null
    rating?: number | null
    aggregatedRating?: number | null
    totalRating?: number | null
    totalRatingCount?: number | null
    ageRatingId?: number | null
    developerId?: number | null
    url?: string | null
    genres?: GenreUncheckedCreateNestedManyWithoutGamesInput
    platforms?: PlatformUncheckedCreateNestedManyWithoutGamesInput
    screenshots?: ScreenshotUncheckedCreateNestedManyWithoutGameInput
    savedByUsers?: UserProfileUncheckedCreateNestedManyWithoutSavedGamesInput
  }

  export type GameCreateOrConnectWithoutCoversInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutCoversInput, GameUncheckedCreateWithoutCoversInput>
  }

  export type GameUpsertWithoutCoversInput = {
    update: XOR<GameUpdateWithoutCoversInput, GameUncheckedUpdateWithoutCoversInput>
    create: XOR<GameCreateWithoutCoversInput, GameUncheckedCreateWithoutCoversInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutCoversInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutCoversInput, GameUncheckedUpdateWithoutCoversInput>
  }

  export type GameUpdateWithoutCoversInput = {
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregatedRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenreUpdateManyWithoutGamesNestedInput
    platforms?: PlatformUpdateManyWithoutGamesNestedInput
    screenshots?: ScreenshotUpdateManyWithoutGameNestedInput
    developer?: DevelopersUpdateOneWithoutGamesNestedInput
    ageRating?: GameRatingUpdateOneWithoutGamesNestedInput
    savedByUsers?: UserProfileUpdateManyWithoutSavedGamesNestedInput
  }

  export type GameUncheckedUpdateWithoutCoversInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregatedRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageRatingId?: NullableIntFieldUpdateOperationsInput | number | null
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenreUncheckedUpdateManyWithoutGamesNestedInput
    platforms?: PlatformUncheckedUpdateManyWithoutGamesNestedInput
    screenshots?: ScreenshotUncheckedUpdateManyWithoutGameNestedInput
    savedByUsers?: UserProfileUncheckedUpdateManyWithoutSavedGamesNestedInput
  }

  export type GameCreateWithoutScreenshotsInput = {
    igdbId: number
    name: string
    slug: string
    summary?: string | null
    storyline?: string | null
    firstReleaseDate?: Date | string | null
    originalPlatform?: string | null
    coverUrl?: string | null
    rating?: number | null
    aggregatedRating?: number | null
    totalRating?: number | null
    totalRatingCount?: number | null
    url?: string | null
    genres?: GenreCreateNestedManyWithoutGamesInput
    platforms?: PlatformCreateNestedManyWithoutGamesInput
    covers?: CoverCreateNestedManyWithoutGameInput
    developer?: DevelopersCreateNestedOneWithoutGamesInput
    ageRating?: GameRatingCreateNestedOneWithoutGamesInput
    savedByUsers?: UserProfileCreateNestedManyWithoutSavedGamesInput
  }

  export type GameUncheckedCreateWithoutScreenshotsInput = {
    id?: number
    igdbId: number
    name: string
    slug: string
    summary?: string | null
    storyline?: string | null
    firstReleaseDate?: Date | string | null
    originalPlatform?: string | null
    coverUrl?: string | null
    rating?: number | null
    aggregatedRating?: number | null
    totalRating?: number | null
    totalRatingCount?: number | null
    ageRatingId?: number | null
    developerId?: number | null
    url?: string | null
    genres?: GenreUncheckedCreateNestedManyWithoutGamesInput
    platforms?: PlatformUncheckedCreateNestedManyWithoutGamesInput
    covers?: CoverUncheckedCreateNestedManyWithoutGameInput
    savedByUsers?: UserProfileUncheckedCreateNestedManyWithoutSavedGamesInput
  }

  export type GameCreateOrConnectWithoutScreenshotsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutScreenshotsInput, GameUncheckedCreateWithoutScreenshotsInput>
  }

  export type GameUpsertWithoutScreenshotsInput = {
    update: XOR<GameUpdateWithoutScreenshotsInput, GameUncheckedUpdateWithoutScreenshotsInput>
    create: XOR<GameCreateWithoutScreenshotsInput, GameUncheckedCreateWithoutScreenshotsInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutScreenshotsInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutScreenshotsInput, GameUncheckedUpdateWithoutScreenshotsInput>
  }

  export type GameUpdateWithoutScreenshotsInput = {
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregatedRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenreUpdateManyWithoutGamesNestedInput
    platforms?: PlatformUpdateManyWithoutGamesNestedInput
    covers?: CoverUpdateManyWithoutGameNestedInput
    developer?: DevelopersUpdateOneWithoutGamesNestedInput
    ageRating?: GameRatingUpdateOneWithoutGamesNestedInput
    savedByUsers?: UserProfileUpdateManyWithoutSavedGamesNestedInput
  }

  export type GameUncheckedUpdateWithoutScreenshotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregatedRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageRatingId?: NullableIntFieldUpdateOperationsInput | number | null
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenreUncheckedUpdateManyWithoutGamesNestedInput
    platforms?: PlatformUncheckedUpdateManyWithoutGamesNestedInput
    covers?: CoverUncheckedUpdateManyWithoutGameNestedInput
    savedByUsers?: UserProfileUncheckedUpdateManyWithoutSavedGamesNestedInput
  }

  export type GameUpdateWithoutSavedByUsersInput = {
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregatedRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenreUpdateManyWithoutGamesNestedInput
    platforms?: PlatformUpdateManyWithoutGamesNestedInput
    covers?: CoverUpdateManyWithoutGameNestedInput
    screenshots?: ScreenshotUpdateManyWithoutGameNestedInput
    developer?: DevelopersUpdateOneWithoutGamesNestedInput
    ageRating?: GameRatingUpdateOneWithoutGamesNestedInput
  }

  export type GameUncheckedUpdateWithoutSavedByUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregatedRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageRatingId?: NullableIntFieldUpdateOperationsInput | number | null
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenreUncheckedUpdateManyWithoutGamesNestedInput
    platforms?: PlatformUncheckedUpdateManyWithoutGamesNestedInput
    covers?: CoverUncheckedUpdateManyWithoutGameNestedInput
    screenshots?: ScreenshotUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutSavedByUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregatedRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageRatingId?: NullableIntFieldUpdateOperationsInput | number | null
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoverCreateManyGameInput = {
    id?: number
    igdbId: number
    imageId?: string | null
    url?: string | null
    height?: number | null
    width?: number | null
  }

  export type ScreenshotCreateManyGameInput = {
    id?: number
    igdbId: number
    imageId?: string | null
    url?: string | null
    height?: number | null
    width?: number | null
  }

  export type GenreUpdateWithoutGamesInput = {
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenreUncheckedUpdateWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenreUncheckedUpdateManyWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlatformUpdateWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseOrder?: NullableIntFieldUpdateOperationsInput | number | null
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    generation?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    platformLogo?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlatformUncheckedUpdateWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseOrder?: NullableIntFieldUpdateOperationsInput | number | null
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    generation?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    platformLogo?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlatformUncheckedUpdateManyWithoutGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseOrder?: NullableIntFieldUpdateOperationsInput | number | null
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    generation?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    platformLogo?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CoverUpdateWithoutGameInput = {
    igdbId?: IntFieldUpdateOperationsInput | number
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CoverUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CoverUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ScreenshotUpdateWithoutGameInput = {
    igdbId?: IntFieldUpdateOperationsInput | number
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ScreenshotUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ScreenshotUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserProfileUpdateWithoutSavedGamesInput = {
    user?: UserUpdateOneRequiredWithoutUserProfileNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutSavedGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserProfileUncheckedUpdateManyWithoutSavedGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type GameCreateManyAgeRatingInput = {
    id?: number
    igdbId: number
    name: string
    slug: string
    summary?: string | null
    storyline?: string | null
    firstReleaseDate?: Date | string | null
    originalPlatform?: string | null
    coverUrl?: string | null
    rating?: number | null
    aggregatedRating?: number | null
    totalRating?: number | null
    totalRatingCount?: number | null
    developerId?: number | null
    url?: string | null
  }

  export type GameUpdateWithoutAgeRatingInput = {
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregatedRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenreUpdateManyWithoutGamesNestedInput
    platforms?: PlatformUpdateManyWithoutGamesNestedInput
    covers?: CoverUpdateManyWithoutGameNestedInput
    screenshots?: ScreenshotUpdateManyWithoutGameNestedInput
    developer?: DevelopersUpdateOneWithoutGamesNestedInput
    savedByUsers?: UserProfileUpdateManyWithoutSavedGamesNestedInput
  }

  export type GameUncheckedUpdateWithoutAgeRatingInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregatedRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenreUncheckedUpdateManyWithoutGamesNestedInput
    platforms?: PlatformUncheckedUpdateManyWithoutGamesNestedInput
    covers?: CoverUncheckedUpdateManyWithoutGameNestedInput
    screenshots?: ScreenshotUncheckedUpdateManyWithoutGameNestedInput
    savedByUsers?: UserProfileUncheckedUpdateManyWithoutSavedGamesNestedInput
  }

  export type GameUncheckedUpdateManyWithoutAgeRatingInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregatedRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameUpdateWithoutPlatformsInput = {
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregatedRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenreUpdateManyWithoutGamesNestedInput
    covers?: CoverUpdateManyWithoutGameNestedInput
    screenshots?: ScreenshotUpdateManyWithoutGameNestedInput
    developer?: DevelopersUpdateOneWithoutGamesNestedInput
    ageRating?: GameRatingUpdateOneWithoutGamesNestedInput
    savedByUsers?: UserProfileUpdateManyWithoutSavedGamesNestedInput
  }

  export type GameUncheckedUpdateWithoutPlatformsInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregatedRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageRatingId?: NullableIntFieldUpdateOperationsInput | number | null
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenreUncheckedUpdateManyWithoutGamesNestedInput
    covers?: CoverUncheckedUpdateManyWithoutGameNestedInput
    screenshots?: ScreenshotUncheckedUpdateManyWithoutGameNestedInput
    savedByUsers?: UserProfileUncheckedUpdateManyWithoutSavedGamesNestedInput
  }

  export type GameUncheckedUpdateManyWithoutPlatformsInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregatedRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageRatingId?: NullableIntFieldUpdateOperationsInput | number | null
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameCreateManyDeveloperInput = {
    id?: number
    igdbId: number
    name: string
    slug: string
    summary?: string | null
    storyline?: string | null
    firstReleaseDate?: Date | string | null
    originalPlatform?: string | null
    coverUrl?: string | null
    rating?: number | null
    aggregatedRating?: number | null
    totalRating?: number | null
    totalRatingCount?: number | null
    ageRatingId?: number | null
    url?: string | null
  }

  export type GameUpdateWithoutDeveloperInput = {
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregatedRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenreUpdateManyWithoutGamesNestedInput
    platforms?: PlatformUpdateManyWithoutGamesNestedInput
    covers?: CoverUpdateManyWithoutGameNestedInput
    screenshots?: ScreenshotUpdateManyWithoutGameNestedInput
    ageRating?: GameRatingUpdateOneWithoutGamesNestedInput
    savedByUsers?: UserProfileUpdateManyWithoutSavedGamesNestedInput
  }

  export type GameUncheckedUpdateWithoutDeveloperInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregatedRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageRatingId?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenreUncheckedUpdateManyWithoutGamesNestedInput
    platforms?: PlatformUncheckedUpdateManyWithoutGamesNestedInput
    covers?: CoverUncheckedUpdateManyWithoutGameNestedInput
    screenshots?: ScreenshotUncheckedUpdateManyWithoutGameNestedInput
    savedByUsers?: UserProfileUncheckedUpdateManyWithoutSavedGamesNestedInput
  }

  export type GameUncheckedUpdateManyWithoutDeveloperInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregatedRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageRatingId?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameUpdateWithoutGenresInput = {
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregatedRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    platforms?: PlatformUpdateManyWithoutGamesNestedInput
    covers?: CoverUpdateManyWithoutGameNestedInput
    screenshots?: ScreenshotUpdateManyWithoutGameNestedInput
    developer?: DevelopersUpdateOneWithoutGamesNestedInput
    ageRating?: GameRatingUpdateOneWithoutGamesNestedInput
    savedByUsers?: UserProfileUpdateManyWithoutSavedGamesNestedInput
  }

  export type GameUncheckedUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregatedRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageRatingId?: NullableIntFieldUpdateOperationsInput | number | null
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    platforms?: PlatformUncheckedUpdateManyWithoutGamesNestedInput
    covers?: CoverUncheckedUpdateManyWithoutGameNestedInput
    screenshots?: ScreenshotUncheckedUpdateManyWithoutGameNestedInput
    savedByUsers?: UserProfileUncheckedUpdateManyWithoutSavedGamesNestedInput
  }

  export type GameUncheckedUpdateManyWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    igdbId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    firstReleaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregatedRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRating?: NullableFloatFieldUpdateOperationsInput | number | null
    totalRatingCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageRatingId?: NullableIntFieldUpdateOperationsInput | number | null
    developerId?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}