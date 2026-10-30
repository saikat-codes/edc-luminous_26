export function reportRuntimeError(error: unknown, context: Record<string, unknown> = {}) {
  console.error("Runtime error", { error, ...context });
}
