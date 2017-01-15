interface RequireContext {
    keys(): string[];
    <T>(id: string): T;
    resolve(id: string): string;
}

interface NodeRequire {
    context: (path: string, deep?: boolean, filter?: RegExp) => RequireContext;
}
