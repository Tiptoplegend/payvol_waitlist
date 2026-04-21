/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
  /** Firestore database ID from Firebase Console (not the collection name). */
  readonly VITE_FIRESTORE_DATABASE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
