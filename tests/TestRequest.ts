import { Request, Response } from "express";

class DeriveRequest implements Request{
    //@ts-ignore
    get(name: "set-cookie"): string[];    get(name: string): string;
    get(name: any) {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    header(name: "set-cookie"): string[];
    header(name: string): string;
    header(name: any) {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    accepts(): string[];
    accepts(type: string): string | false;
    accepts(type: string[]): string | false;
    accepts(...type: string[]): string | false;
    //@ts-ignore
    accepts(type?: any, ...rest?: any[]) {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    acceptsCharsets(): string[];
    acceptsCharsets(charset: string): string | false;
    acceptsCharsets(charset: string[]): string | false;
    acceptsCharsets(...charset: string[]): string | false;
    //@ts-ignore
    acceptsCharsets(charset?: any, ...rest?: any[]) {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    acceptsEncodings(): string[];
    acceptsEncodings(encoding: string): string | false;
    acceptsEncodings(encoding: string[]): string | false;
    acceptsEncodings(...encoding: string[]): string | false;
    //@ts-ignore
    acceptsEncodings(encoding?: any, ...rest?: any[]) {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    acceptsLanguages(): string[];
    acceptsLanguages(lang: string): string | false;
    acceptsLanguages(lang: string[]): string | false;
    acceptsLanguages(...lang: string[]): string | false;
    //@ts-ignore
    acceptsLanguages(lang?: any, ...rest?: any[]) {
        throw new Error("Method not implemented.");
    }
    range(size: number, options?: import("range-parser").Options): import("range-parser").Ranges | -1 | -2 {
        throw new Error("Method not implemented.");
    }
    accepted: import("express-serve-static-core").MediaType[];
    param(name: string, defaultValue?: any): string {
        throw new Error("Method not implemented.");
    }
    is(type: string): string | false {
        throw new Error("Method not implemented.");
    }
    protocol: string;
    secure: boolean;
    ip: string;
    ips: string[];
    subdomains: string[];
    path: string;
    hostname: string;
    host: string;
    fresh: boolean;
    stale: boolean;
    xhr: boolean;
    body: any;
    cookies: any;
    method: string;
    params: any;
    clearCookie(name: string, options?: any): import("express-serve-static-core").Response {
        throw new Error("Method not implemented.");
    }
    query: any;
    route: any;
    signedCookies: any;
    originalUrl: string;
    url: string;
    baseUrl: string;
    app: import("express-serve-static-core").Application;
    res?: import("express-serve-static-core").Response;
    next?: import("express-serve-static-core").NextFunction;
    httpVersion: string;
    httpVersionMajor: number;
    httpVersionMinor: number;
    complete: boolean;
    connection: import("net").Socket;
    headers: import("http").IncomingHttpHeaders;
    rawHeaders: string[];
    trailers: { [key: string]: string; };
    rawTrailers: string[];
    setTimeout(msecs: number, callback: () => void): this {
        throw new Error("Method not implemented.");
    }
    statusCode?: number;
    statusMessage?: string;
    socket: import("net").Socket;
    destroy(error?: Error): void {
        throw new Error("Method not implemented.");
    }
    readable: boolean;
    readableHighWaterMark: number;
    readableLength: number;
    _read(size: number): void {
        throw new Error("Method not implemented.");
    }
    read(size?: number) {
        throw new Error("Method not implemented.");
    }
    setEncoding(encoding: string): this {
        throw new Error("Method not implemented.");
    }
    pause(): this {
        throw new Error("Method not implemented.");
    }
    resume(): this {
        throw new Error("Method not implemented.");
    }
    isPaused(): boolean {
        throw new Error("Method not implemented.");
    }
    unpipe(destination?: NodeJS.WritableStream): this {
        throw new Error("Method not implemented.");
    }
    unshift(chunk: any, encoding?: BufferEncoding): void {
        throw new Error("Method not implemented.");
    }
    wrap(oldStream: NodeJS.ReadableStream): this {
        throw new Error("Method not implemented.");
    }
    push(chunk: any, encoding?: string): boolean {
        throw new Error("Method not implemented.");
    }
    _destroy(error: Error, callback: (error?: Error) => void): void {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    addListener(event: "close", listener: () => void): this;
    addListener(event: "data", listener: (chunk: any) => void): this;
    addListener(event: "end", listener: () => void): this;
    addListener(event: "readable", listener: () => void): this;
    addListener(event: "error", listener: (err: Error) => void): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;
    addListener(event: any, listener: any) {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    emit(event: "close"): boolean;
    emit(event: "data", chunk: any): boolean;
    emit(event: "end"): boolean;
    emit(event: "readable"): boolean;
    emit(event: "error", err: Error): boolean;
    emit(event: string | symbol, ...args: any[]): boolean;
    //@ts-ignore
    emit(event: any, err?: any, ...rest?: any[]) {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    on(event: "close", listener: () => void): this;
    on(event: "data", listener: (chunk: any) => void): this;
    on(event: "end", listener: () => void): this;
    on(event: "readable", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
    on(event: any, listener: any) {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    once(event: "close", listener: () => void): this;
    once(event: "data", listener: (chunk: any) => void): this;
    once(event: "end", listener: () => void): this;
    once(event: "readable", listener: () => void): this;
    once(event: "error", listener: (err: Error) => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;
    once(event: any, listener: any) {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    prependListener(event: "close", listener: () => void): this;
    prependListener(event: "data", listener: (chunk: any) => void): this;
    prependListener(event: "end", listener: () => void): this;
    prependListener(event: "readable", listener: () => void): this;
    prependListener(event: "error", listener: (err: Error) => void): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
    prependListener(event: any, listener: any) {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    prependOnceListener(event: "close", listener: () => void): this;
    prependOnceListener(event: "data", listener: (chunk: any) => void): this;
    prependOnceListener(event: "end", listener: () => void): this;
    prependOnceListener(event: "readable", listener: () => void): this;
    prependOnceListener(event: "error", listener: (err: Error) => void): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    prependOnceListener(event: any, listener: any) {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    removeListener(event: "close", listener: () => void): this;
    removeListener(event: "data", listener: (chunk: any) => void): this;
    removeListener(event: "end", listener: () => void): this;
    removeListener(event: "readable", listener: () => void): this;
    removeListener(event: "error", listener: (err: Error) => void): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
    removeListener(event: any, listener: any) {
        throw new Error("Method not implemented.");
    }
    [Symbol.asyncIterator](): AsyncIterableIterator<any> {
        throw new Error("Method not implemented.");
    }
    pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T {
        throw new Error("Method not implemented.");
    }
    off(event: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error("Method not implemented.");
    }
    removeAllListeners(event?: string | symbol): this {
        throw new Error("Method not implemented.");
    }
    setMaxListeners(n: number): this {
        throw new Error("Method not implemented.");
    }
    getMaxListeners(): number {
        throw new Error("Method not implemented.");
    }
    listeners(event: string | symbol): Function[] {
        throw new Error("Method not implemented.");
    }
    rawListeners(event: string | symbol): Function[] {
        throw new Error("Method not implemented.");
    }
    eventNames(): (string | symbol)[] {
        throw new Error("Method not implemented.");
    }
    listenerCount(type: string | symbol): number {
        throw new Error("Method not implemented.");
    }


}

class DeriveResponse implements Response{
    status(code: number): import("express-serve-static-core").Response {
        throw new Error("Method not implemented.");
    }    sendStatus(code: number): import("express-serve-static-core").Response {
        throw new Error("Method not implemented.");
    }
    links(links: any): import("express-serve-static-core").Response {
        throw new Error("Method not implemented.");
    }
    send: import("express-serve-static-core").Send;
    json: import("express-serve-static-core").Send;
    jsonp: import("express-serve-static-core").Send;
    sendFile(path: string, fn?: import("express-serve-static-core").Errback): void;
    sendFile(path: string, options: any, fn?: import("express-serve-static-core").Errback): void;
    sendFile(path: any, options?: any, fn?: any) {
        throw new Error("Method not implemented.");
    }
    sendfile(path: string): void;
    sendfile(path: string, options: any): void;
    sendfile(path: string, fn: import("express-serve-static-core").Errback): void;
    sendfile(path: string, options: any, fn: import("express-serve-static-core").Errback): void;
    sendfile(path: any, options?: any, fn?: any) {
        throw new Error("Method not implemented.");
    }
    download(path: string, fn?: import("express-serve-static-core").Errback): void;
    download(path: string, filename: string, fn?: import("express-serve-static-core").Errback): void;
    download(path: string, filename: string, options: any, fn?: import("express-serve-static-core").Errback): void;
    download(path: any, filename?: any, options?: any, fn?: any) {
        throw new Error("Method not implemented.");
    }
    contentType(type: string): import("express-serve-static-core").Response {
        throw new Error("Method not implemented.");
    }
    type(type: string): import("express-serve-static-core").Response {
        throw new Error("Method not implemented.");
    }
    format(obj: any): import("express-serve-static-core").Response {
        throw new Error("Method not implemented.");
    }
    attachment(filename?: string): import("express-serve-static-core").Response {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    set(field: any): import("express-serve-static-core").Response;
    set(field: string, value?: string): import("express-serve-static-core").Response;
    set(field: string, value?: string[]): import("express-serve-static-core").Response;
    set(field: any, value?: any) {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    header(field: any): import("express-serve-static-core").Response;
    header(field: string, value?: string): import("express-serve-static-core").Response;
    header(field: any, value?: any) {
        throw new Error("Method not implemented.");
    }
    headersSent: boolean;
    get(field: string): string {
        throw new Error("Method not implemented.");
    }
    clearCookie(name: string, options?: any): import("express-serve-static-core").Response {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    cookie(name: string, val: string, options: import("express-serve-static-core").CookieOptions): import("express-serve-static-core").Response;
    cookie(name: string, val: any, options: import("express-serve-static-core").CookieOptions): import("express-serve-static-core").Response;
    cookie(name: string, val: any): import("express-serve-static-core").Response;
    cookie(name: any, val: any, options?: any) {
        throw new Error("Method not implemented.");
    }
    location(url: string): import("express-serve-static-core").Response {
        throw new Error("Method not implemented.");
    }
    redirect(url: string): void;
    redirect(status: number, url: string): void;
    redirect(url: string, status: number): void;
    redirect(url: any, status?: any) {
        throw new Error("Method not implemented.");
    }
    render(view: string, options?: object, callback?: (err: Error, html: string) => void): void;
    render(view: string, callback?: (err: Error, html: string) => void): void;
    render(view: any, options?: any, callback?: any) {
        throw new Error("Method not implemented.");
    }
    locals: any;
    charset: string;
    vary(field: string): import("express-serve-static-core").Response {
        throw new Error("Method not implemented.");
    }
    app: import("express-serve-static-core").Application;
    append(field: string, value?: string | string[]): import("express-serve-static-core").Response {
        throw new Error("Method not implemented.");
    }
    req?: import("express-serve-static-core").Request;
    statusCode: number;
    statusMessage: string;
    assignSocket(socket: import("net").Socket): void {
        throw new Error("Method not implemented.");
    }
    detachSocket(socket: import("net").Socket): void {
        throw new Error("Method not implemented.");
    }
    writeContinue(callback?: () => void): void {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    writeHead(statusCode: number, reasonPhrase?: string, headers?: import("http").OutgoingHttpHeaders): this;
    writeHead(statusCode: number, headers?: import("http").OutgoingHttpHeaders): this;
    writeHead(statusCode: any, reasonPhrase?: any, headers?: any) {
        throw new Error("Method not implemented.");
    }
    upgrading: boolean;
    chunkedEncoding: boolean;
    shouldKeepAlive: boolean;
    useChunkedEncodingByDefault: boolean;
    sendDate: boolean;
    finished: boolean;
    connection: import("net").Socket;
    setTimeout(msecs: number, callback?: () => void): this {
        throw new Error("Method not implemented.");
    }
    setHeader(name: string, value: string | number | string[]): void {
        throw new Error("Method not implemented.");
    }
    getHeader(name: string): string | number | string[] {
        throw new Error("Method not implemented.");
    }
    getHeaders(): import("http").OutgoingHttpHeaders {
        throw new Error("Method not implemented.");
    }
    getHeaderNames(): string[] {
        throw new Error("Method not implemented.");
    }
    hasHeader(name: string): boolean {
        throw new Error("Method not implemented.");
    }
    removeHeader(name: string): void {
        throw new Error("Method not implemented.");
    }
    addTrailers(headers: import("http").OutgoingHttpHeaders | [string, string][]): void {
        throw new Error("Method not implemented.");
    }
    flushHeaders(): void {
        throw new Error("Method not implemented.");
    }
    writable: boolean;
    writableFinished: boolean;
    writableHighWaterMark: number;
    writableLength: number;
    _write(chunk: any, encoding: string, callback: (error?: Error) => void): void {
        throw new Error("Method not implemented.");
    }
    _writev?(chunks: { chunk: any; encoding: string; }[], callback: (error?: Error) => void): void {
        throw new Error("Method not implemented.");
    }
    _destroy(error: Error, callback: (error?: Error) => void): void {
        throw new Error("Method not implemented.");
    }
    _final(callback: (error?: Error) => void): void {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    write(chunk: any, cb?: (error: Error) => void): boolean;
    write(chunk: any, encoding: string, cb?: (error: Error) => void): boolean;
    write(chunk: any, encoding?: any, cb?: any) {
        throw new Error("Method not implemented.");
    }
    setDefaultEncoding(encoding: string): this {
        throw new Error("Method not implemented.");
    }
    end(cb?: () => void): void;
    end(chunk: any, cb?: () => void): void;
    end(chunk: any, encoding: string, cb?: () => void): void;
    end(chunk?: any, encoding?: any, cb?: any) {
        throw new Error("Method not implemented.");
    }
    cork(): void {
        throw new Error("Method not implemented.");
    }
    uncork(): void {
        throw new Error("Method not implemented.");
    }
    destroy(error?: Error): void {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    addListener(event: "close", listener: () => void): this;
    addListener(event: "drain", listener: () => void): this;
    addListener(event: "error", listener: (err: Error) => void): this;
    addListener(event: "finish", listener: () => void): this;
    addListener(event: "pipe", listener: (src: import("stream").Readable) => void): this;
    addListener(event: "unpipe", listener: (src: import("stream").Readable) => void): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;
    addListener(event: any, listener: any) {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    emit(event: "close"): boolean;
    emit(event: "drain"): boolean;
    emit(event: "error", err: Error): boolean;
    emit(event: "finish"): boolean;
    emit(event: "pipe", src: import("stream").Readable): boolean;
    emit(event: "unpipe", src: import("stream").Readable): boolean;
    emit(event: string | symbol, ...args: any[]): boolean;
    //@ts-ignore
    emit(event: any, src?: any, ...rest?: any[]) {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    on(event: "close", listener: () => void): this;
    on(event: "drain", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: "finish", listener: () => void): this;
    on(event: "pipe", listener: (src: import("stream").Readable) => void): this;
    on(event: "unpipe", listener: (src: import("stream").Readable) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
    on(event: any, listener: any) {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    once(event: "close", listener: () => void): this;
    once(event: "drain", listener: () => void): this;
    once(event: "error", listener: (err: Error) => void): this;
    once(event: "finish", listener: () => void): this;
    once(event: "pipe", listener: (src: import("stream").Readable) => void): this;
    once(event: "unpipe", listener: (src: import("stream").Readable) => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;
    once(event: any, listener: any) {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    prependListener(event: "close", listener: () => void): this;
    prependListener(event: "drain", listener: () => void): this;
    prependListener(event: "error", listener: (err: Error) => void): this;
    prependListener(event: "finish", listener: () => void): this;
    prependListener(event: "pipe", listener: (src: import("stream").Readable) => void): this;
    prependListener(event: "unpipe", listener: (src: import("stream").Readable) => void): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
    prependListener(event: any, listener: any) {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    prependOnceListener(event: "close", listener: () => void): this;
    prependOnceListener(event: "drain", listener: () => void): this;
    prependOnceListener(event: "error", listener: (err: Error) => void): this;
    prependOnceListener(event: "finish", listener: () => void): this;
    prependOnceListener(event: "pipe", listener: (src: import("stream").Readable) => void): this;
    prependOnceListener(event: "unpipe", listener: (src: import("stream").Readable) => void): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    prependOnceListener(event: any, listener: any) {
        throw new Error("Method not implemented.");
    }
    //@ts-ignore
    removeListener(event: "close", listener: () => void): this;
    removeListener(event: "drain", listener: () => void): this;
    removeListener(event: "error", listener: (err: Error) => void): this;
    removeListener(event: "finish", listener: () => void): this;
    removeListener(event: "pipe", listener: (src: import("stream").Readable) => void): this;
    removeListener(event: "unpipe", listener: (src: import("stream").Readable) => void): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
    removeListener(event: any, listener: any) {
        throw new Error("Method not implemented.");
    }
    pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T {
        throw new Error("Method not implemented.");
    }
    off(event: string | symbol, listener: (...args: any[]) => void): this {
        throw new Error("Method not implemented.");
    }
    removeAllListeners(event?: string | symbol): this {
        throw new Error("Method not implemented.");
    }
    setMaxListeners(n: number): this {
        throw new Error("Method not implemented.");
    }
    getMaxListeners(): number {
        throw new Error("Method not implemented.");
    }
    listeners(event: string | symbol): Function[] {
        throw new Error("Method not implemented.");
    }
    rawListeners(event: string | symbol): Function[] {
        throw new Error("Method not implemented.");
    }
    eventNames(): (string | symbol)[] {
        throw new Error("Method not implemented.");
    }
    listenerCount(type: string | symbol): number {
        throw new Error("Method not implemented.");
    }


}
export class TestRequest extends DeriveRequest{}
export class TestResponse extends DeriveResponse{}