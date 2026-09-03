export function getErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  if (typeof error === 'string' && error) {
    return error;
  }

  if (typeof error === 'object' && error !== null && 'data' in error) {
    const data = error.data;

    if (typeof data === 'string' && data && !/<[a-z][\s\S]*>/i.test(data)) {
      return data;
    }

    if (typeof data === 'object' && data !== null && 'message' in data && typeof data.message === 'string') {
      return data.message;
    }
  }

  return fallback;
}
