export {};

declare global {
  type RootState = ReturnType<typeof import('@app/providers/store').store.getState>;
  type AppDispatch = typeof import('@app/providers/store').store.dispatch;
}
