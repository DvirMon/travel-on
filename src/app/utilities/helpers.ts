import { QuerySnapshot } from "@angular/fire/firestore";
import { OperatorFunction, catchError, map, throwError } from "rxjs";

function setRecordItem(record: Record<string, boolean>, item: string): Record<string, boolean> {
  return { ...record, [item]: true };
}

export function arrayToRecord(array: string[]): Record<string, boolean> {
  return array.reduce((record, item) => setRecordItem(record, item), {} as Record<string, boolean>);
}

interface StorageOptions {
  useSessionStorage: boolean;
}

export function saveToStorage(key: string, value: any, options: StorageOptions = { useSessionStorage: false }): void {
  const storage = options.useSessionStorage ? sessionStorage : localStorage;
  storage.setItem(key, JSON.stringify(value));
}

export function getFromStorage<T>(key: string, options: StorageOptions = { useSessionStorage: false }, remove: boolean = false): T | null {
  const storage = options.useSessionStorage ? sessionStorage : localStorage;
  const item = storage.getItem(key);

  if (remove) {
    storage.removeItem(key);
  }

  return item ? JSON.parse(item) as T : null;
}
// Define the custom RxJS operator
export function mapQuerySnapshotDoc<T>(): OperatorFunction<QuerySnapshot<T>, T> {
  return source$ => source$.pipe(
    map(querySnapshot => {
      if (querySnapshot.docs.length > 0) {
        const doc = querySnapshot.docs[0];
        return {
          ...doc.data(),
          id: doc.id
        } as T;
      }
      throw new Error('Document not found'); // Throw an error when no document is found
    }),
    catchError(error => throwError(() => new Error(error)))
  );
}
